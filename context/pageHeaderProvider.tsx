"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const PageHeaderContext = createContext<{
  titlePageHeader: string;
  setTitlePageHeader: Dispatch<SetStateAction<string>>;
}>({
  titlePageHeader: "خانه",
  setTitlePageHeader: () => null,
});

const PageHeaderProvider = ({ children }: { children: ReactNode }) => {
  const [titlePageHeader, setTitlePageHeader] = useState("خانه");

  return (
    <PageHeaderContext.Provider value={{ titlePageHeader, setTitlePageHeader }}>
      {children}
    </PageHeaderContext.Provider>
  );
};

export default PageHeaderProvider;
