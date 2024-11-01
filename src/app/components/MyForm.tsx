"use client";

import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import InputMask from "react-input-mask";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";

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
    recaptcha: yup
      .string()
      .nullable()
      .required("Recaptcha verification is required"),
  })
  .required();

interface IFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
  recaptcha: string;
}

const MyForm: React.FC = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const initialValues: IFormValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
    recaptcha: "",
  };

  const onSubmit = async (values: IFormValues, { resetForm }: any) => {
    try {
      const response = await fetch("/api/submit/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setStatus("success");
        setIsSubmitted(true);
        resetForm();
      } else {
        const errorData = await response.json();
        setStatus(`error: ${errorData.message}`);
      }

      recaptchaRef.current?.reset();
    } catch (error) {
      setStatus("error: Failed to submit form");
      console.error("Failed to submit form:", error);
    }
  };

  return (
    <div>
      {!isSubmitted ? (
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          {({ setFieldValue, isSubmitting }) => (
            <Form>
              <div className="mb-3">
                <Field
                  placeholder="Ваше имя"
                  className="form-control form-control-xl"
                  type="text"
                  id="name"
                  name="name"
                />
                <ErrorMessage name="name" component="p" />
              </div>

              <div className="mb-3">
                <Field
                  placeholder="E-mail"
                  className="form-control form-control-xl"
                  type="email"
                  id="email"
                  name="email"
                />
                <ErrorMessage name="email" component="p" />
              </div>

              <div className="mb-3">
                <Field name="phone">
                  {({ field }: any) => (
                    <InputMask
                      {...field}
                      className="form-control form-control-xl"
                      mask="+7-\799-999-99-99"
                      placeholder="Контактный номер +7-7xx-xxx-xx-xx"
                    />
                  )}
                </Field>
                <ErrorMessage name="phone" component="p" />
              </div>

              <div className="mb-3">
                <Field
                  className="form-control form-control-xl"
                  as="textarea"
                  rows={5}
                  placeholder="Более подробное описание Вашей задачи или вопроса"
                  id="message"
                  name="message"
                />
                <ErrorMessage name="message" component="p" />
              </div>
              <div className="mb-3">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={`${process.env.NEXT_PUBLIC_GOOGLE_SITE_KEY}`}
                  onChange={(value) => setFieldValue("recaptcha", value)}
                  onExpired={() => setFieldValue("recaptcha", "")}
                />
                <ErrorMessage name="recaptcha" component="p" />
              </div>
              <input
                className="mb-4 btn btn-primary"
                value="Отправить"
                type="submit"
                disabled={isSubmitting}
              />
            </Form>
          )}
        </Formik>
      ) : (
        <div className="alert alert-success mt-3">
          Ваше сообщение успешно отправлено!
        </div>
      )}
      {status && status.startsWith("error") && (
        <div className="alert alert-danger mt-3">
          Ошибка: {status.replace("error: ", "")} <br />
          Кажется форма не работает, попробуйте связаться со мной по другим
          каналам связи, список контактов можете просмотреть в подвале сайта.
          Спасибо за понимание!
        </div>
      )}
    </div>
  );
};
export default MyForm;
