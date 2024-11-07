import React from "react";
import { useTranslations } from "next-intl";

const ContactsHead = () => {
  const t = useTranslations("Contacts");
  return (
    <>
      <h1 className="contacts__heading col-12 mb-4">{t("write-me")}</h1>
      <p>
        {t.rich("paragraph1", {
          emailTag: (children) => (
            <a className="link" href="mailto:zh.zhanybek@gmail.com">
              {children}
            </a>
          ),
        })}
      </p>
      <p>{t("paragraph2")}</p>
    </>
  );
};

export default ContactsHead;
