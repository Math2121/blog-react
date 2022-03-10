function Banner({ content }) {
  return (
    <>
      <section className="container">
        <div className="img-banner flex-center hidden">
          <img src={content.imageUrl} alt="" />
        </div>
        <div className="row mt-3">
          <h6 className="color-gray text-center">{content.date}</h6>
          <h6 className="uppercase color-primary text-center">
            {content.category}
          </h6>
          <h4 className="text-center">{content.title}</h4>

          <p className="mt-1 text-center">{content.resume}</p>

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
