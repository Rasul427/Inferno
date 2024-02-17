import { useParams } from "react-router-dom";
import { products } from "../data";
export default function Single() {
  const { id } = useParams();

  const product = products.find((product) => product.id === parseInt(id));
  return (
    <>

    </>
  );
}
