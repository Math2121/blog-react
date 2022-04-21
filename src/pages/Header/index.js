import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Logo from "../../svg/blog-logo.svg";
function Header() {
  const initialValueForm = {
    search: "",
  };
  const [form, setForm] = useState({});

  // redirecionamento de rota
  const navigate = useNavigate()

  const searchOnBlog = (event) => {
    const {value,name} = event.target;
    setForm({...form,[name]: value})
    console.log(form)
  };

  const sendSearch = (event) => {
    event.preventDefault();
    navigate(`/search/${form.search}`)
  }
  return (
    <>
      <header className="px-2 py-1">
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <ul className="menu">
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </nav>

        <div className="bx"></div>

        <div className="flex-start-row">
          <div className="search">
            <form className="flex" onSubmit={sendSearch}>
              <input
                type="text"
                name="search"
                placeholder="Buscar..."
                onChange={searchOnBlog}
              />
              <button type="submit" className="btn-search"></button>
            </form>
          </div>

          <div className="cta-desktop ml-3">
            <Link to="/login" className="btn">
              Login
            </Link>
          </div>

          <div className="cta-mobile">
            <Link to="/login" className="link color-primary">
              Login
            </Link>
          </div>
        </div>
      </header>

      <div className="relative">
        <div className="menu-mobile">
          <ul className="nav-mobile">
            <li>
              <Link to="/about" className="link-menu-mobile">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link-menu-mobile">
                Contato
              </Link>
            </li>
            <li className="py-2 px-2">
              <form action="" className="flex">
                <input type="text" name="search" id="search" />
                <button className="btn-search"></button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
