import React from 'react'
import { useState } from 'react';
import "./Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg,setSelectedImg] = useState(0)
  const [quantity,setQuantity] = useState(0)



  const images =[
//    "http://images.pexels.com/photos/10026491/pexels-photos-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
//    "http://images.pexels.com/photos/12179283/pexels-photos-12179283.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return(
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
        </div>

        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>

      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          this is the description of the product.
        </p>
        <div className="quantity">
          <button onClick={()=>setQuantity(prev=>prev ===0 ? 0 : prev-1)}>-</button>
          {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>

        <button className="add">
          <AddShoppingCartIcon/> ADD TO CART
        </button>

        <div className="links">
          <div className="item">
            <FavoriteBorderIcon/> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>


        <div className="info">
          <span>Vendor: POLO</span>
          <span>Product Type: T-shirt</span>
          <span>Tag: T-shirt, women</span>
        </div>

        <hr/>

        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFO</span>
          <hr />
          <span>FAQ</span>
        </div>


      </div>
    </div>
  )
}

export default Product
