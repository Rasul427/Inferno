import "./Sort.css";

export default function Sort({ sorting, onSortingChange }) {
  return (
    <>
      <div className="sort">
        <p>Сортировать:</p>
        <label htmlFor="filter"></label>
        <select id="filter" value={sorting} onChange={onSortingChange}>
          <option value="default">Популярное</option>
          <option value="priceAscending">По возрастанию цены</option>
          <option value="priceDescending">По убыванию цены</option>
          <option value="nameA">По наименованию (A-Z)</option>
          <option value="nameZ">По наименованию (Z-A)</option>
        </select>
      </div>
      {/* <label htmlFor="filter"></label>
      <select id="filter" value={sorting} onChange={onSortingChange}>
        <option value="default">Популярное</option>
        <option value="priceAscending">По возрастанию цены</option>
        <option value="priceDescending">По убыванию цены</option>
        <option value="nameA">По наименованию (A-Z)</option>
        <option value="nameZ">По наименованию (Z-A)</option>
      </select> */}
    </>
  );
}
