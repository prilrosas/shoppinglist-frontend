import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function ShoppingEdit() {
  return (
    <div>
      <h1>Itens </h1>

      <Button variant="contained" component={Link} to="/">
        Voltar
      </Button>
    </div>
  );
}

export default ShoppingEdit;
