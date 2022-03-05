import BannerImage from "../../../img/02.png";

function Banner() {
  return (
    <>
      <section className="container">
        <div className="img-banner flex-center hidden">
          <img src={BannerImage} alt="" />
        </div>
        <div className="row mt-3">
          <h6 className="color-gray text-center">01 NOV 2022</h6>
          <h6 className="uppercase color-primary text-center">tecnologia</h6>
          <h4 className="text-center">O que esperar do cinema em 2022?</h4>

          <p className="mt-1 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            accusantium sunt veritatis voluptate repellendus iste dolorem
          </p>

          <div className="my-3 flex-center">
            <a href="/" className="link color-primary">
              Ler mais
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
