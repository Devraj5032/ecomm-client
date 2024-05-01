import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"

const Home = () => {


  const addToCartHandler = () => { }

  return (
    <div className="home">
      <section></section>
      <h1>Latest Products
        <Link to="/search" className="findmore">More</Link>
      </h1>
      <main>
        <ProductCard productId="346" name="iPhone 15 Pro Max" price={72999} stock={45} handler={addToCartHandler} photo="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/h/c/-original-imagtc3h9h6kpbkc.jpeg?q=70&crop=false"/>
      </main>
    </div>
  )
}

export default Home
