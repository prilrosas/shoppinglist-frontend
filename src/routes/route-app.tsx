import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShoppingList from "../pages/shoppingList";
import ListItens from "../pages/listItens";



function RouterApp(){
    return (
        <BrowserRouter> 
        <Routes>
            <Route path="/" element={<ShoppingList/>}> </Route>
            <Route path="/listItens" element={<ListItens/>}> </Route>
         
        </Routes>
        </BrowserRouter>


    )
}

export default RouterApp;