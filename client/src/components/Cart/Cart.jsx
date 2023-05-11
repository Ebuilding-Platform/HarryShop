import React from 'react'
import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart =()=>{
  const data = [
    {
      id:1,
      img:"https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "A very expensive but looking stupid Hat",
      desc: "Hat",
      isNew:true,
      oldPrice:19,
      price:12,
    },
    {
      id:2,
      img:"https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      desc: "Coat",
      isNew:true,
      oldPrice:19,
      price:12,
    },
  ]

  return(
    <div className='cart'>
      <h1>Products in your cart</h1>
      {data?.map((item)=>(
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0.100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete"/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>

  )
}

export default Cart
