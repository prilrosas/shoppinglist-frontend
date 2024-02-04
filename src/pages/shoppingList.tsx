import { Link } from "react-router-dom";

function ShoppingList() {
  return (
    <div>
      <h1>Lista de compras</h1>
      <Link to="./listItens">Itens</Link> {"  "}
    </div>
  );
}

export default ShoppingList;
