import Logo from "../../svg/blog-logo2.svg";
import FacebookLogo from "../../svg/icon-facebook.svg";
import InstagramLogo from "../../svg/icon-instagram.svg";
import YoutubeLogo from "../../svg/icon-youtube.svg";
import TwitterLogo from "../../svg/icon-twitter.svg";
function Footer() {
  return (
    <>
      <footer className="bg-section bt-black">
        <section className="container pb-0">
          <div className="row flex-center">
            <img src={Logo} style={{maxWidth:'96px'}} alt="" />
          </div>

          <div className="row pb-3 bb-black">
            <div className="grid-3">
              <h4>Posts</h4>
              <div className="flex-start-column mt-2">
                <a href="/" className="color-gray link-footer">
                  Mais vistos
                </a>
                <a href="/" className="color-gray link-footer">
                  Mais comentados
                </a>
                <a href="/" className="color-gray link-footer">
                  Mais populares
                </a>
                <a href="/" className="color-gray link-footer">
                  Mais recentes
                </a>
              </div>
            </div>

            <div className="grid-3">
              <h4>Categorias</h4>
              <div className="flex-start-column mt-2">
                <a href="/" className="color-gray link-footer">
                  Tecnologia
                </a>
                <a href="/" className="color-gray link-footer">
                  Games
                </a>
                <a href="/" className="color-gray link-footer">
                  Fotografia
                </a>
                <a href="/" className="color-gray link-footer">
                  Cinema
                </a>
              </div>
            </div>

            <div className="grid-6">
              <h4 className="mb-2">
                Quer ser avisado dos novos posts do blog?
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                urna pharetra ut ac, pellentesque.
              </p>
              <div className="flex-start-row mt-2">
                <input
                  type="text"
                  name="search"
                  id=""
                  placeholder="Digite seu e-mail aqui"
                />
                <button className="btn ml-2">Cadastrar</button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="grid-9">
              <p>
                2021 | Todos os direitos reservados. Projeto de React.js do
                curso
                <a href="https://www.frontpush.com.br/" target="_blank"  rel="noreferrer">
                  FrontPUSH.
                </a>
              </p>
            </div>

            <div className="grid-3">
              <img src={FacebookLogo} className="icon-s" alt="" />
              <img src={InstagramLogo} className="icon-s ml-2" alt="" />
              <img src={YoutubeLogo} className="icon-s ml-2" alt="" />
              <img src={TwitterLogo} className="icon-s ml-2" alt="" />
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
