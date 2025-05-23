"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import User from "@/components/User";
import RandomNameReturn from "@/shared/utils/RandomNameReturn";

const Home = () => {
  const [userName, setUserName] = useState("Luis Gabriel Goés");

  useEffect(() => {
    let isMounted = true;
    async function updateName() {
      const name = RandomNameReturn.returnRandomName();
      if (isMounted) setUserName(name);
    }
    updateName();

    const intervalId = setInterval(updateName, 3500);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Menu />

      <main className="flex-grow container mx-auto px-6 py-16 max-w-4xl">
        <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
          <h1 className="text-4xl font-bold text-gray-800 flex-1 min-w-[250px]">
            Seja muito bem-vindo <User name={userName} />
          </h1>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed">
          Este é o nosso site. Aqui você pode conhecer mais sobre nossos
          serviços, missão e entrar em contato.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
