import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import User from "@/components/User";

const userName: string = "Luis Gabriel";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Menu></Menu>

      <main className="flex-grow container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Seja muito bem vindo <User name={userName}></User>
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Este é o nosso site. Aqui você pode conhecer mais sobre nossos
          serviços, missão e entrar em contato.
        </p>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Home;
