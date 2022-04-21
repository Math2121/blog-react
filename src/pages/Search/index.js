import { useFetch } from "hooks/useFetch";
import Footer from "pages/Footer";
import Header from "pages/Header";
import Card from "pages/Home/Card";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "services/api";

export default function Search() {
  const { word_search } = useParams();

  const [word, setWord] = useState(word_search);
  const [form, setForm] = useState({});
  const [searchs, setSearchs] = useState([]);

  useEffect(() => {
    if (word) {
      api
        .get(`/posts/?q=${word}`)
        .then((response) => setSearchs(response.data));
    }
  }, [word]);

  // redirecionamento de rota
  const navigate = useNavigate();

  const searchOnBlog = (event) => {
    const { value, name } = event.target;

    setForm({ ...form, [name]: value });
    console.log(form);
  };

  const sendSearch = (event) => {
    event.preventDefault();
    setWord(form.search);
  };

  return (
    <>
      <Header />

      <section className="container">
        <h6 className="uppercase color-primaey text-center">
          {searchs.length} resultados
        </h6>
        <h4 className="text-center">"{word}"</h4>

        <form onSubmit={sendSearch}>
          <div className="row">
            <div className="grid-2 disappear"></div>
            <div className="grid-8 flex-center">
              <input
                type="text"
                name="search"
                placeholder="Buscar..."
                onChange={searchOnBlog}
              />

              <button className="btn ml-2">Buscar</button>
            </div>
            <div className="grid-2 disappear"></div>
          </div>
        </form>
        <h3 className="ml-2 mb-3">Pesquisa</h3>

        <div className="row">
          {searchs?.map((item) => {
            return <Card key={item.id} content={item} />;
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
