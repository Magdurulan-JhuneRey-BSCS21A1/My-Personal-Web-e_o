import Image from "next/image";
import Header from "@components/header";
import Footer from "@/components/footer";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-100 font-sans dark:bg-black">
      <Header />
      <main className="flex flex-1 flex-col md:flex-row w-full max-w-3xl mx-auto px-4 pt-28 gap-8 items-center md:items-start">
        <div className="flex-1">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight text-black dark:text-zinc-50">
            Heavenly <br/>
            Cha_os
          </h1>
          <p className="mt-4 text-xl text-zinc-700 dark:text-zinc-400">
            Hell_o W_orld
          </p>
        </div>
        <div className="flex-shrink-0">
          <Banner/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}