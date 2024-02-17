import Filter from "../components/Filter/Filter";
import Product from "../components/Product/Product";
import Sort from "../components/Sort/Sort";
import { useState } from "react";
import Search from "../components/Search/Search";

import { products } from "../data";
export default function CatalogPage() {
  const [query, setQuery] = useState("");
  const [sorting, setSorting] = useState("default");

  const onSortingChange = (event) => {
    setSorting(event.target.value);
  };

  const onChangeQuery = (event) => {
    setQuery(event.target.value);
  };

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(query.toLocaleLowerCase())
  );

  const sortProducts = (sorting, products) => {
    switch (sorting) {
      case "priceAscending":
        return [...products].sort((a, b) => a.price - b.price);
      case "priceDescending":
        return [...products].sort((a, b) => b.price - a.price);
      case "nameA":
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case "nameZ":
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      default:
        return products;
    }
  };

  const fullSorting = sortProducts(sorting, filteredProducts);

  return (
    <>
      <div className="catalog">
        <Filter />
        <Sort sorting={sorting} onSortingChange={onSortingChange} />
        <Search query={query} onChangeQuery={onChangeQuery} />
        <div className="container-catalog">
          <div className="catalog-items">
            {fullSorting.length ? (
              fullSorting.map((product, index) => (
                <Product key={index} {...product} />
              ))
            ) : (
              <h2>По вашему запросу `{query}` ничего не найдено!</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
