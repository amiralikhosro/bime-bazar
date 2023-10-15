"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/completeInfo");
    }, 2000);
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className=" relative place-items-center grid h-screen w-screen gap-4">
        <div className="bg-white w-40 h-40 absolute animate-pulse rounded-full shadow-xl"></div>
        <h1 className="text-2xl">بیمه بازار</h1>
      </section>
    </main>
  );
}
