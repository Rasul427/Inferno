import "./Action.css";
import Product from "../Product/Product";
import { products } from "../../data";
export default function Action() {
  return (
    <>
      <div className="container">
        <div className="action">
          {products.map((product, id) => (
            <Product key={id} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}
