"use client";
import { PageHeaderContext } from "@/context/pageHeaderProvider";
import { useContext } from "react";

export default function MainLayoutHeader() {
  const { titlePageHeader } = useContext(PageHeaderContext);

  return (
    <header className="flex justify-end shadow-xl px-5 py-[14px]">
      <h1>{titlePageHeader}</h1>
    </header>
  );
}
