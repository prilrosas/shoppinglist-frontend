import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShoppingEdit from "../pages/shoppingEdit";
import ShoppingList from "../pages/shoppingList";

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShoppingList />}>
          {" "}
        </Route>
        <Route path="/listItens" element={<ShoppingEdit />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;
