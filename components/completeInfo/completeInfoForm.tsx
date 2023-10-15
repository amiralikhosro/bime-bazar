"use client";

import { useGetUserAddresses } from "@/services/completeInfoServices";
import { useState } from "react";

export default function CompleteInfoForm() {
  const { data } = useGetUserAddresses();

  return <div>tezr</div>;
}
