import React from "react";
import MyForm from "@/app/components/MyForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контактная форма для сотрудничества",
  description: "Страница для связи с веб-разработчиком Жанда из Казахстана. Заполните форму, чтобы обсудить ваш проект, задать вопросы или начать сотрудничество.",
};

const contacts = () => {
  return (
    <div className="container">
      <div className="row mb-4 mt-3">
        <h1 className="col-12 mb-4">Напишите мне</h1>
        <p>
          Напишите мне на{" "}
          <a className="link" href="mailto:zh.zhanybek@gmail.com">
            эл.почту
          </a>{" "}
          либо заполните форму ниже и расскажите о своей задаче.
        </p>
        <p>
          Я свяжусь с вами в ближайшее время, отвечу на Ваши вопросы и предложу
          решение.
        </p>
      </div>
      <MyForm />
    </div>
  );
};

export default contacts;
