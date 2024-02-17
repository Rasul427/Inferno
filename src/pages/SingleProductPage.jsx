import { useParams } from "react-router-dom";
import { products } from "../data";
export default function SingleProductPage() {
  const { id } = useParams();

  const product = products.find((product) => product.id === parseInt(id));

  // if(!product) {
  //     return <h2>Данные товар не был найден!</h2>
  // }

  return (
    <>
      <div className="container">
        <div className="single">
          <div className="img-slider">
            <img src={product.photo} alt="" />
            <img src={product.photo} alt="" />
            <img src={product.photo} alt="" />
          </div>
          <div className="importantImg">
            <img src={product.photo} alt="" />
          </div>
          <div className="about">
            <div className="single_title">
              <p>{product.name}</p>
            </div>
            <div className="single_price">
              <p>{product.price} ₽</p>
            </div>
            <div className="single_about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </div>
            <div className="single-line"></div>
            <div className="single_color">
              <div className="color-item"></div>
              <div className="color-item brauni"></div>
              <div className="color-item gray"></div>
            </div>{" "}
            <div className="single-line"></div>
            <div className="single-size">
              <div className="filter-size-item">XS</div>
              <div className="filter-size-item">S</div>
              <div className="filter-size-item">M</div>
              <div className="filter-size-item">L</div>
              <div className="filter-size-item">XL</div>
            </div>{" "}
            <div className="single-line"></div>
            <div className="btns">
              <button className="izbBtn">В избранное</button>
              <button className="basketBtn">В корзину</button>
            </div>
          </div>

          <h2></h2>
        </div>
      </div>
    </>
  );
}
