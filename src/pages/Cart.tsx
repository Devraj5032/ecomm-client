import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "wrtjh",
    photo: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/h/c/-original-imagtc3h9h6kpbkc.jpeg?q=70&crop=false",
    name: "iPhone 15 Pro Max",
    price: 156000,
    quantity: 5,
    stock: 1000
  },
];
const subTotal = 4000;
const tax = Math.round(subTotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subTotal + tax + shippingCharges;

const Cart = () => {

  const [couponCode, setCouponCode] = useState<string>("")
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false)

  useEffect (() => {
    const timeOutId = setTimeout(() => {
      if(Math.random() > 0.5) setIsValidCouponCode(true)
        else setIsValidCouponCode(false)
    }, 1000)
    return () => {
      clearTimeout(timeOutId)
      setIsValidCouponCode(false)
    }
  } , [couponCode])

  return (
    <div className="cart">
      <main>
        {
          cartItems.length > 0 ? cartItems.map((el , idx) => (<CartItem key={idx} cartItem={el}/>)) : <h1>No Items Added</h1>
        }
      </main>
      <aside>
        <p>Subtotal: ₹{subTotal}</p>
        <p>Shipping charges {shippingCharges}</p>
        <p>Tax {tax}</p>
        <p>
          Discount - ₹ <em className="red">{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>

        <input placeholder="Coupon Code" type="text" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
        {
          couponCode && (
            isValidCouponCode ? <span className="green">₹{discount} off using the <code>{couponCode}</code></span> : (<span className="red">Invalid Coupon <VscError /></span>)
          )
        }

        {
          cartItems.length > 0 && <Link to="/shipping">Checkout</Link>
        }
      </aside>
    </div>
  )
}

export default Cart
