"use client";
import { useContext, useLayoutEffect, useState } from "react";
import { PageHeaderContext } from "@/context/pageHeaderProvider";

export default function CompleteProfile() {
  const { setTitlePageHeader } = useContext(PageHeaderContext);

  const [formState, setFormState] = useState<"form" | "success">("form");

  useLayoutEffect(() => {
    setTitlePageHeader("تکمیل اطلاعات");
  }, [setTitlePageHeader]);

  return <div className="">completeInfo</div>;
}