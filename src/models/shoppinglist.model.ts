export interface ShoppingListModel {
    id: number
    title: string
    itens: Iten[]
  }
  
  export interface Iten {
    id: number
    product: Product
    quantity: number
    price_unit: number
    checked: boolean
  }
  
  export interface Product {
    id: number
    name: string
  }
  