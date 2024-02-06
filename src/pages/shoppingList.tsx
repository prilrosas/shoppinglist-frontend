import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  CssBaseline,
  Input,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
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
        <Card sx={{ minWidth: "100px", margin: 2 }}>
          <CardContent onClick={handleClick}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {e.title}
            </Typography>
          </CardContent>
          <Box>
            {e.itens.map((e) => (
              <ListItem>
                <ListItemIcon>
                  <Checkbox />
                </ListItemIcon>
                <ListItemText sx={{ alignItems: "right" }}>
                  {e.product.name}
                </ListItemText>
                <ListItemText sx={{ alignItems: "right" }}>
                  {e.quantity}
                </ListItemText>
                <ListItemText sx={{ alignItems: "right" }}>
                  {" "}
                  {e.price_unit}
                </ListItemText>
              </ListItem>
            ))}
          </Box>
        </Card>
      ))}

      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#d0d6d6", top: "auto", bottom: 0, p: "30px" }}
      >
        <div>
          <Button
            variant="contained"
            sx={{
              m: "10px",
              p: 4,
              backgroundColor: "#74c0d6",
              justifyContent: "center",
            }}
            component={Link}
            to="./listItens"
          >
            Nova Lista
          </Button>
        </div>
      </AppBar>
    </Box>
  );
}

export default ShoppingList;
