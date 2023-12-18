import Cards from "@/components/Projects/Cards/Cards";
import Header from "@/components/Layout/Header";
import SideBar from "@/components/Layout/SideBar";
import Hero from "@/components/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl m-auto bg-white">
      <Header />
      <div className="flex flex-col md:flex-row ">
        <SideBar />
        <Hero />
      </div>
    </main>
  );
}
