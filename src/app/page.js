import Header from "@/components/Layout/Header";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <Header />
      <Hero />
    </main>
  );
}
