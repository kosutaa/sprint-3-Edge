import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-plum-purple text-white mt-12">
      <div className="container mx-auto px-6 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Passa a Bola. Todos os direitos reservados.</p>
        <p className="text-sm text-delicate-lilac mt-2">Um projeto para o FIAP challenge de 2025.</p>
      </div>
    </footer>
  );
};

export default Footer;