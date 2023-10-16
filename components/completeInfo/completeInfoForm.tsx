"use client";

import {
  useCompeleteInfo,
  useGetUserAddresses,
} from "@/services/completeInfoServices";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dispatch, SetStateAction } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import FromInput from "../base/formInput";
import AddressSelection from "./addressSelection";
import { FormFileds, schema } from "./model";

type IProps = {
  setFormState: Dispatch<SetStateAction<"form" | "success">>;
};

export default function CompleteInfoForm({ setFormState }: IProps) {
  const { data } = useGetUserAddresses();
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const { handleSubmit } = methods;
  const { mutate } = useCompeleteInfo();

  const onSubmit: SubmitHandler<FormFileds> = (data) => {
    setFormState("success");
    mutate(data, {
      onSuccess: () => setFormState("success"),
    });
  };

  return (
    <section className="flex flex-col gap-2 h-full">
      <h1>لطفا اطلاعات شخصی خود را وارد کنید</h1>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-t border-gray-light pt-4 relative h-full"
        >
          <FromInput name="nationalId" placeholder="کد ملی" />
          <FromInput name="phoneNumber" placeholder="شماره تلفن همراه" />
          <AddressSelection addresses={data} />
          <button
            className="bg-black py-3 font-semibold text-white absolute bottom-0 left-0 px-8 "
            type="submit"
          >
            تایید و ادامه
          </button>
        </form>
      </FormProvider>
    </section>
  );
}
