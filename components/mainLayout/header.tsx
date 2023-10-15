"use client";
import { PageHeaderContext } from "@/context/pageHeaderProvider";
import { useContext } from "react";

export default function MainLayoutHeader() {
  const { titlePageHeader } = useContext(PageHeaderContext);

  return (
    <header className="flex justify-start shadow-custom px-5 py-[14px]">
      <h1 className="font-semibold">{titlePageHeader}</h1>
    </header>
  );
}
