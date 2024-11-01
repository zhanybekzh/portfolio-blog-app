import { NextResponse } from "next/server";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(
        /^\+7-7\d{2}-\d{3}-\d{2}-\d{2}$/,
        "Invalid phone format. Expected format: +7-7xx-xxx-xx-xx"
      ),
    message: yup
      .string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  })
  .required();

export async function POST(request: Request) {
  try {
    const { recaptcha, ...formData } = await request.json();

    // Проверка reCAPTCHA (если в production)
    if (process.env.NODE_ENV === "production") {
      const secretKey = process.env.GOOGLE_RECAPTCHA_SECRET_KEY;
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptcha}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      const data = await response.json();

      if (!data.success) {
        return NextResponse.json(
          { message: "Recaptcha verification failed" },
          { status: 400 }
        );
      }
    }

    // Валидация данных формы
    const validatedData = await schema.validate(formData);

    // Формирование сообщения для Telegram
    const telegramMessage = `✉️ Новая заявка с сайта zhanda.dev:
  • Имя: ${validatedData.name}
  • Email: ${validatedData.email}
  • Телефон: ${validatedData.phone}
  • Сообщение: ${validatedData.message}`;

    // Отправка сообщения в Telegram
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${telegramToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: telegramMessage,
        }),
      }
    );

    const telegramData = await telegramResponse.json();
    if (!telegramData.ok) {
      return NextResponse.json(
        { message: "Failed to send message to Telegram" },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Form submitted successfully" });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    console.error("Failed to process form submission:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
