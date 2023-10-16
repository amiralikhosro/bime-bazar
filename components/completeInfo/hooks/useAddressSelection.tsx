import { Dispatch, SetStateAction, useState } from "react";
import { useFormContext } from "react-hook-form";

export interface AddressInteface {
  id: string;
  details: string;
  name: string;
}
export default function useAddressSelection() {
  const [isOpenBottomSheet, setIsOpenBottomSheet] = useState(false);
  const [selectedAddress, setSelectedAddress] =
    useState<AddressInteface | null>(null);
  const {
    setValue,
    formState: { errors },
  } = useFormContext();

  function handleCloseBottomSheet() {
    setIsOpenBottomSheet(false);
    setSelectedAddress(null);
  }

  function handleSelectAddress(address: AddressInteface) {
    setSelectedAddress(address);
  }

  function handleSetAddress() {
    setValue("addressId", selectedAddress?.id as string);
    setIsOpenBottomSheet(false);
  }

  function handleDeleteSelectedAddress() {
    setSelectedAddress(null);
    setValue("addressId", "");
  }

  return {
    errors,
    selectedAddress,
    handleDeleteSelectedAddress,
    setIsOpenBottomSheet,
    isOpenBottomSheet,
    handleCloseBottomSheet,
    handleSelectAddress,
    handleSetAddress,
  };
}
