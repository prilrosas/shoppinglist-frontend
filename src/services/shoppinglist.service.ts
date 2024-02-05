import { api } from "../api/api";

export class ShoppingListService {
    //http://localhost:3005/api/shoppinglist
    listAll() {
        return api.get('shoppinglist');
    }
}