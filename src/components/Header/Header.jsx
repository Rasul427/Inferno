import "./Header.css";
import { NavLink } from "react-router-dom";
import SearchImg from "../../../public/search.png";
import HeartImg from "../../../public/heart.png";
import BasketImg from "../../../public/basket.png";
import Basket from "../Basket/Basket";

export default function Header() {
  function modal() {
    let modalka = document.getElementById("modal");
    modalka.classList.toggle("hidden");
  }
  return (
    <>
      <header>
        <NavLink to="/">
          <div className="logo">
            <p>INFERNO</p>
          </div>
        </NavLink>

        <nav>
          <a href="">Главная</a>
          <NavLink to="/catalog">
            <a href="">Каталог</a>
          </NavLink>
          <a href="">Акции</a>
          <a href="">Контакты</a>
        </nav>
        <div className="icons">
          <img src={SearchImg} alt="" />
          <img src={HeartImg} alt="" />
          <img src={BasketImg} onClick={modal} alt="" />
        </div>
      </header>{" "}
      <Basket />
    </>
  );
}
