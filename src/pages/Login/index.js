import Footer from "pages/Footer";
import Header from "pages/Header";
import React from "react";
import Logo from '../../svg/blog-logo2.svg'
export default function Login() {
  return (
    <>
      <Header />
      <section class="container">
        <div class="row flex-center">
          <img src={Logo} class="icon-l" alt="" />
        </div>

        <div class="row">
          <div class="grid-4 disappear"></div>
          <div class="grid-4">
            <h6 class="text-center">Olá, faça o login para continuar.</h6>

            <input
              type="text"
              class="mt-2"
              name="user"
              id=""
              placeholder="Digite seu usuário"
            />
            <input
              type="password"
              class="mt-1"
              name="password"
              id=""
              placeholder="Digite sua senha"
            />

            <div class="card-danger p-2 my-1">
              <h6 class="h7 color-red">Olá, isso é uma mensagem de erro</h6>
            </div>

            <div class="card-success p-2 my-1">
              <h6 class="h7 color-green">Olá, isso é uma mensagem de erro</h6>
            </div>

            <div class="card-warning p-2 my-1">
              <h6 class="h7 color-yellow">Olá, isso é uma mensagem de erro</h6>
            </div>

            <div class="card-info p-2 my-1">
              <h6 class="h7 color-primary">Olá, isso é uma mensagem de erro</h6>
            </div>

            <button class="btn w-100 mt-2">Entrar</button>
          </div>
          <div class="grid-4 disappear"></div>
        </div>
      </section>
      <Footer />
    </>
  );
}
