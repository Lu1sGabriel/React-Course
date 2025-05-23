import React from "react";

const getActualDate = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4 z-50">
      <div className="container mx-auto px-4">
        <p className="mt-4 text-sm text-gray-400">
          &copy; {getActualDate} Luis Goés. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
