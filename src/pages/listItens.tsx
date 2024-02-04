import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function ListItens() {
  return (
    <div>
      <h1>Itens </h1>
      <Link to="/">Voltar</Link> {"  "}
      <Button variant="contained">Contained</Button>
    </div>
  );
}

export default ListItens;
