import Header from "@components/header";
import Footer from "@/components/footer";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-700 to-purple-700 font-sans dark:bg-black">
      <Header />
      <main className="flex flex-1 flex-col md:flex-row w-full max-w-3xl mx-auto px-4 pt-24 gap-8 items-center md:items-start">
        <div className="flex-1 -ml-50">
          <h1 className="text-9xl md:text-8xl font-bold leading-tight text-white dark:text-zinc-50">
            Heavenly <br/>
            Cha_os
          </h1>
          <p className="mt-4 text-xl text-white">
            Hell_o W_orld
          </p>
        </div>
        <div className="flex-1 ml-70">
          <Banner/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}