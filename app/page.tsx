"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/akis");
  }, [router]);

  return (
    <main className="min-h-screen bg-[#0b0a14] text-slate-100 flex items-center justify-center">
      <p className="text-sm text-sky-300 animate-pulse">SİNAPS Yükleniyor...</p>
    </main>
  );
}