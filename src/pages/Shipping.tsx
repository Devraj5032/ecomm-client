import { ChangeEvent, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navigate = useNavigate();

  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });

  const chageHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="shipping">
      <button className="back-btn" onClick={() => navigate("/cart")}>
        <BiArrowBack />
      </button>
      <form action="">
        <h1>Shipping Address</h1>
        <input
          type="text"
          required
          name="address"
          placeholder="Address"
          value={shippingInfo.address}
          onChange={chageHandler}
        />
        <input
          type="text"
          required
          name="city"
          placeholder="City"
          value={shippingInfo.city}
          onChange={chageHandler}
        />
        <select
          name="country"
          required
          value={shippingInfo.country}
          onChange={chageHandler}
        >
          <option value="">Choose Country</option>
          <option value="India">India</option>
        </select>
        <input
          type="number"
          required
          name="pinCode"
          placeholder="Pin Code"
          value={shippingInfo.pinCode}
          onChange={chageHandler}
        />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Shipping;
