import Footer from "pages/Footer";
import Header from "pages/Header";
import React from "react";
import Logo from "../../svg/blog.svg";
export default function About() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row ">
          <div className="grid-6">
            <h1 className="h0">
              blog <span>.</span>
            </h1>
            <p className="mt-1">
              Um blog para todes. Escrever. Ler. Comentar. Contribuir.
              Aprender.Conectar
            </p>
            <a href="/" className="btn mt-4">
              Começar a escrever
            </a>
          </div>
          <div className="grid-6">
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
