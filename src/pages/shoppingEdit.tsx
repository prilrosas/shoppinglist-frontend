import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import EditableLabel from "../components/editable-label/editable-label";
import { useState } from "react";

function ShoppingEdit() {
  const [text, setText] = useState("Título");
  return (
    <div>
      <EditableLabel
        variant="h4"
        initialValue={text}
        onFocus={(value) => console.log("on focus: ", value)}
        onBlur={(value) => {
          console.log("on blur: ", value);
          setText(value || "default value");
        }}
      />
      <Button
        sx={{ backgroundColor: "#74c0d6" }}
        variant="contained"
        component={Link}
        to="/"
      >
        Voltar
      </Button>
    </div>
  );
}

export default ShoppingEdit;
