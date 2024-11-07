import React from "react";
import MyForm from "@/app/components/MyForm";
import type { Metadata } from "next";
import ContactsHead from "@/app/components/ContactsHead";

export const metadata: Metadata = {
  title: "Контактная форма для сотрудничества",
  description: "Страница для связи с веб-разработчиком Жанда из Казахстана. Заполните форму, чтобы обсудить ваш проект, задать вопросы или начать сотрудничество.",
};

const contacts = () => {
  return (
    <div className="container">
      <div className="row mb-4 mt-3">
        <ContactsHead />
      </div>
      <MyForm />
    </div>
  );
};

export default contacts;
