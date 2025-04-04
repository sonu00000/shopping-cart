import "./index.css"
import ShoppingCartApp from "./components/ShoppingCartApp"

const PRODUCTS = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Smartphone", price: 300 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "Smartwatch", price: 150 },
  { id: 5, name: "Playstation", price: 600 },
  { id: 6, name: "Xbox", price: 400 },
]

const THRESHOLD = 1000
const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0 }

export default function App() {
  return (
    <div className="App">
      <ShoppingCartApp
        productsData={PRODUCTS}
        threshold={THRESHOLD}
        freeGift={FREE_GIFT}
      />
    </div>
  )
}
