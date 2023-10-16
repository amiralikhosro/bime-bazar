import { ChangeEvent, Fragment, useState } from "react";
import { useFormContext } from "react-hook-form";
import BottomSheet from "../base/bottomSheet";
import { CloseIcon } from "../icon";
import useAddressSelection, {
  AddressInteface,
} from "./hooks/useAddressSelection";

type IProps = {
  addresses: AddressInteface[];
};

export default function AddressSelection({ addresses }: IProps) {
  const {
    errors,
    selectedAddress,
    handleDeleteSelectedAddress,
    setIsOpenBottomSheet,
    isOpenBottomSheet,
    handleCloseBottomSheet,
    handleSelectAddress,
    handleSetAddress,
  } = useAddressSelection();

  return (
    <div className="flex flex-col gap-4 pt-6">
      <p className="border-b border-gray-light pb-2 font-semibold">
        آدرس جهت درج روی بیمه نامه
      </p>
      {selectedAddress ? (
        <div className="flex justify-between">
          <p>{selectedAddress.name}</p>
          <button onClick={handleDeleteSelectedAddress}>
            <CloseIcon />
          </button>
        </div>
      ) : (
        <Fragment>
          <p className="text-sm">
            لطفا آدرسی را که می خواهید روی بیمه نامه درج شود، را وارد کنید
          </p>
          <button
            className="bg-warning py-3 font-semibold mt-4"
            onClick={() => setIsOpenBottomSheet(true)}
          >
            انتخاب از آدرس های من
          </button>
        </Fragment>
      )}
      {!selectedAddress && (
        <p className="text-error text-xs py-1 h-[22px]">
          {errors?.addressId?.message?.toString()}
        </p>
      )}
      <p></p>
      {isOpenBottomSheet && (
        <BottomSheet onClose={handleCloseBottomSheet}>
          <div className="absolute w-full h-3/4 bottom-0 bg-white flex flex-col">
            <section
              className=" p-8 rounded-tr-lg rounded-tl-lg"
              style={{ height: "calc(100% - 88px)" }}
            >
              <div className="flex justify-between border-b border-gray-light pb-3">
                <p>انتخاب آدرس</p>
                <button onClick={handleCloseBottomSheet}>
                  <CloseIcon />
                </button>
              </div>
              <div className="h-full overflow-auto">
                {addresses.map((address) => (
                  <label
                    key={address.id}
                    className="relative flex cursor-pointer rounded-full py-3 gap-3 items-start"
                  >
                    <input
                      onChange={(e) => handleSelectAddress(address)}
                      id={address.id}
                      name="type"
                      type="radio"
                      className=" peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-success checked:before:bg-success"
                    />
                    <div className="flex flex-col gap-[10px]">
                      <p className="text-sm font-semibold">{address.name}</p>
                      <p className="text-xs text-gray-lightest">
                        {address.details}
                      </p>
                    </div>
                  </label>
                ))}
                <div className="h-5" />
              </div>
            </section>
            <footer className="bg-white shadow-custom p-5 relative z-10">
              <button
                className="bg-black py-3 font-semibold text-white  px-8 "
                type="submit"
                onClick={handleSetAddress}
              >
                انتخاب
              </button>
            </footer>
          </div>
        </BottomSheet>
      )}
    </div>
  );
}
