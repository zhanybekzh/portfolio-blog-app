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
    const recaptchaSecret = `${process.env.GOOGLE_RECAPTCHA_SECRET_KEY}`;
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${recaptchaSecret}&response=${recaptcha}`,
      }
    );
    const recaptchaResult = await recaptchaResponse.json();
    if (!recaptchaResult.success) {
      return NextResponse.json(
        { message: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }
    const validatedData = await schema.validate(formData);
    return NextResponse.json({
      message: "Form submitted successfully!",
      data: validatedData,
    });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
