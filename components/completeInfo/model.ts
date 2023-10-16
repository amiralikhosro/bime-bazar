import * as yup from "yup";

export type FormFileds = {
  nationalId: string;
  phoneNumber: string;
  addressId: string;
};

export const schema = yup
  .object()
  .shape({
    nationalId: yup
      .string()
      .required("این قسمت نمی‌تواند خالی باشد")
      .matches(/^[0-9]{10}$/g, "کد ملی وارد شده معتبر نیست"),
    phoneNumber: yup
      .string()
      .required("این قسمت نمی‌تواند خالی باشد")
      .matches(/^0?9\d{9}$/, "شماره وارد شده صحیح نیست"),
    addressId: yup.string().required("آدرس باید انتخاب شده باشد."),
  })
  .required();
