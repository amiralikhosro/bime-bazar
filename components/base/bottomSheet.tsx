import { ReactNode } from "react";

export default function BottomSheet({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="h-screen fixed top-0 left-0 w-full z-10">
      <div
        className="absolute w-full h-full top-0 bg-gray-600 opacity-50"
        onClick={onClose}
      ></div>
      {children}
    </div>
  );
}
