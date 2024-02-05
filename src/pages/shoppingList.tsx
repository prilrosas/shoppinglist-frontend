import {
  Box,
  Button,
  Card,
  CardContent,
  CssBaseline,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingListService } from "../services/shoppinglist.service";
import { ShoppingListModel } from "../models/shoppinglist.model";

function ShoppingList() {
  const navigate = useNavigate();
  const [listShopping, setListShopping] = useState<ShoppingListModel[]>([]);

  useEffect(() => {
    listShoppingAll();
  }, []);
  function handleClick(event: any) {
    console.log("CLIQUEI AQUIIIIIIII");
    navigate("./listItens");
  }

  function listShoppingAll() {
    new ShoppingListService()
      .listAll()
      .then((e) => {
        setListShopping(e.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      {listShopping.map((e) => (
        <Card sx={{ minWidth: "100px", margin: 2 }} onClick={handleClick}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {e.title}
            </Typography>
          </CardContent>
        </Card>
      ))}

      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <Button variant="contained" component={Link} to="./listItens">
          Nova Lista
        </Button>
      </Paper>
    </Box>
  );
}

export default ShoppingList;
