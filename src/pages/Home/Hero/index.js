import { Link } from "react-router-dom";
import Blog from "../../../svg/blog-logo.svg";
function Hero() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="grid-6">
            <h1 className="h0">
              blog <span>.</span>
            </h1>
            <p className="mt-1">
              Um blog para todes. Escrever. Ler. Comentar. Contribuir.
              Aprender.Conectar
            </p>
            <Link to="/login" className="btn mt-4">
              Começar a escrever
            </Link>
          </div>
          <div className="grid-6">
            <img src={Blog} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
