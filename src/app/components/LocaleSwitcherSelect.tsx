"use client";

import { ChangeEvent, ReactNode, useTransition } from "react";
import { useRouter } from "@/i18n/routing";

type Props = {
  children: ReactNode;
  defaultValue: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname: "/", params: {} },
        { locale: nextLocale }
      );
    });
  }

  return (
    <label>
      <select
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
        className="form-select"
      >
        {children}
      </select>
    </label>
  );
}
