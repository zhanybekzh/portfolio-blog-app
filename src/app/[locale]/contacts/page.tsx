import React from "react";
import MyForm from "@/app/components/MyForm";
import ContactsHead from "@/app/components/ContactsHead";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

export const dynamic = "force-static";


export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "ContactsSectionMetadata",
  });
  return {
    title: t("title"),
    description: t("description"),
  };
}

const Contacts = ({ params: { locale } }: { params: { locale: string } }) => {
  setRequestLocale(locale);
  return (
    <div className="container">
      <div className="row mb-4 mt-3">
        <ContactsHead />
      </div>
      <MyForm />
    </div>
  );
};

export default Contacts;
