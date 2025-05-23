import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Menu></Menu>

      <main className="flex-grow container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contato</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Tem alguma dúvida ou quer falar com a gente? Preencha o formulário
          abaixo ou entre em contato pelos nossos canais oficiais.
        </p>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Contact;
