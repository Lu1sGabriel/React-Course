import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Menu></Menu>

      <main className="flex-grow container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Sobre Nós</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Bem-vindo à nossa empresa! Somos apaixonados por tecnologia e
          inovação, dedicados a entregar soluções de software de alta qualidade
          que facilitam a vida das pessoas e empresas. Nosso time é formado por
          especialistas que buscam constantemente melhorar e inovar.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Aqui você encontra tudo o que precisa saber sobre nossa missão, visão
          e valores, assim como nossas conquistas e o que nos move todos os dias
          para sermos cada vez melhores.
        </p>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default About;
