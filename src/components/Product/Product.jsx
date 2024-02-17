import "./Product.css";
import { NavLink } from "react-router-dom";

export default function Product({id, name, price, photo }) {
  return (
    <>
      <NavLink to={`${id}`}>
        <div className="product">
          <img src={photo} alt="" />
          <div className="product-title">
            <h4>{name}</h4>
            <p>{price}</p>
          </div>
        </div>
      </NavLink>
    </>
  );
}
