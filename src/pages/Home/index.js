import Hero from "./Hero";
import Main from "./Main";
import Start from "../../svg/icon-star.svg";
import Card from "./Card";
import Banner from "./Banner";
import { useFetch } from "hooks/useFetch";

function Home() {
  const { data: main } = useFetch("/posts?star=5&_limit=2&_order=desc");
  console.log(main)
  // const { data: banner } = useFetch("/posts?_sort=date&_order=desc&_limit=1");
  // const { data: mostSeen } = useFetch("/posts?_limit=3");
  return (
    <>
      <Hero />

      <div className="container">
        <div className="row">
          <div className="grid-5 pt-5 pb-3">
            <img src={Start} alt="" className="icon-l" />

            <h3 className="mt-2">
              Os melhores e mais em votados posts do mês.
            </h3>

            <p className="mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              accusamus tenetur perspiciatis incidunt eum. Illum nesciunt ullam
              nostrum omnis necessitatibus doloremque! Doloribus architecto qui
              hic pariatur eum eius placeat omnis.
            </p>
          </div>
          <div className="grid-7">
            {main?.map((item) => {
              return <Main key={item.id} content={item} />;
            })}
          </div>
        </div>
      </div>
      <div className="bg-section">
        <section className="container">
          <h3 className="ml-2 mb-3">Mais Vistos</h3>

          <div className="row">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </div>

      <Banner />
    </>
  );
}

export default Home;
