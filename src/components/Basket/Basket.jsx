import "./Basket.css";
import img from "../../../public/img1.jpg";

export default function Basket() {
  function mod() {
    let modal = document.getElementById("modal");
    modal.classList.toggle("hidden");
  }
  return (
    <>
      <div className="basket-back hidden" id="modal">
        <div className="basket">
          <div className="zagolovok">
            <h2>
              Корзина
             
            </h2> <p onClick={mod} id="close">
                ⨉
              </p>
          </div>
          <div className="basket-items">
            <div className="basket-item">
              <img src={img} alt="" />
              <div className="basket-item-text">
                <div className="basket_name">
                  <p>Хлопковый свитер</p>
                </div>
                <div className="basket-size">
                  <p>Размер: L</p>
                </div>
                <div className="basket_color">Цвет: Белая</div>
                <div className="basket_price">
                  <p>5400.00 ₽</p>
                </div>
                <div className="basketBtns">
                  <a href="">Удалить</a>
                </div>
              </div>
            </div>
            <div className="basket_item_price">
              <h6>Сумма заказа</h6>
              <div className="basket_all_price">
                <p>Цена товара</p>
                <p>5400.00 ₽</p>
              </div>
              <div className="basket_dost">
                <p>Доставка</p>
                <p>0 ₽</p>
              </div>
              <div className="basket_line"></div>
              <div className="basket_itog">
                <p>Итого </p>
                <p>5400.00 ₽</p>
              </div>
              <form action="" className="promo">
                <input type="text" placeholder="Промокод" />
                <a href="" className="promoBtn">
                  Ввод
                </a>
              </form>
              <button className="basketBtn">Перейти к покупке</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
