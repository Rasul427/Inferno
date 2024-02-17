import Category1 from "../../../public/category1.png";
import Category2 from "../../../public/category2.png";

import Category3 from "../../../public/category3.png";

import "./Banner.css";
export default function Banner() {
  return (
    <>
      <div className="banner">
        <div className="banner-text">
          <p>Inferno</p>
        </div>
        <div className="category">
          <div className="category-item">
            <img src={Category1} alt="" />
            <a href="">Мужчины</a>
          </div>
          <div className="category-item">
            <img src={Category2} alt="" />
            <a href="">Женщины</a>
          </div>
          <div className="category-item">
            <img src={Category3} alt="" />
            <a href="">Аксессуары</a>
          </div>
        </div>
      </div>
    </>
  );
}
