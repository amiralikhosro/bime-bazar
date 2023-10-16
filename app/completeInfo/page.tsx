"use client";
import { useContext, useLayoutEffect, useState } from "react";
import { PageHeaderContext } from "@/context/pageHeaderProvider";
import CompleteInfoForm from "@/components/completeInfo/completeInfoForm";

export default function CompleteProfile() {
  const { setTitlePageHeader } = useContext(PageHeaderContext);

  const [formState, setFormState] = useState<"form" | "success">("form");

  useLayoutEffect(() => {
    setTitlePageHeader("تکمیل اطلاعات");
  }, [setTitlePageHeader]);

  return (
    <div className="py-8 px-5" style={{ height: "calc(100vh - 52px)" }}>
      {formState === "form" ? (
        <CompleteInfoForm setFormState={setFormState} />
      ) : (
        <div className="relative h-full">
          <p className="text-success-light text-xl">
            اطلاعات شما با موفقیت ثبت شد.
          </p>
          <button
            className="bg-black py-3 font-semibold text-white absolute bottom-0 left-0 px-8 "
            onClick={() => setFormState("form")}
          >
            بازگشت
          </button>
        </div>
      )}
    </div>
  );
}
