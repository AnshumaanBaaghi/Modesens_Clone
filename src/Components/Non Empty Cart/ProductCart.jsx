import React from 'react'
import "./nonCart.css"

//demo data
const data = [
  {image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/221553F052016_1/jacquemus-pink-la-robe-limao-mini-dress.jpg",
   brand:"JACQUE",
   desc:"Pink LA Robe",
   size:"M",
   price:413.00,
   actualPrice:655.00
  },
  {image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/221553F052016_1/jacquemus-pink-la-robe-limao-mini-dress.jpg",
  brand:"JACQUE",
  desc:"Pink LA Robe",
  size:"M",
  price:413.00,
  actualPrice:655.00
 }

]

const ProductCart = () => {
  return (
    <div className='nonEmpty-Container'>
     <div className='nonEmpty-Container-left'>
        <div>
          <h1 className='bagHeadingLabel'>
            SHOPPING BAG
          </h1>
        </div>
        <div className='cart-item-table'>
          <div className='cart-table-header'>
            <div className='cart-table-header-items'>
              <span>ITEMS</span>
            </div>
            <div className='cart-table-header-price'>
              <span>PRICE</span>
            </div>
          </div>
          {/* Item start */}
          <ul className='cart-list-item-container'>
           {data.map((el)=>(
            <li className='cart-itemslist'>
              <div className='cart-itemslist-container'> 
                <div className='cart-itemslist-container-left'>
                  <div className='cart-left-image'>
                    <img src={el.image} alt="brand_image" />
                  </div>
                  <div className='cart-left-description'>
                    <div>
                      <div>{el.brand}</div>
                      <div>{el.desc}</div>
                      <div>Size: {el.size}</div>
                    </div>
                  </div>
                </div>
                <div className='cart-itemlist-container-right'>
                  <div className='cart-item-price-and-remove'>
                    <div className='cart-item-price'>
                      <div className='discount-price'>$ {el.price} USD</div>
                      <div className='actual-price'>$ {el.actualPrice} USD</div>
                    </div>
                    <div className='cart-item-remove'>
                     <a href rel='nofollow'>
                     <span className='cart-remove-button'>Remove</span>
                     </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
           ))}
          </ul>
        </div>
     </div>
     <div className='nonEmpty-Container-right'>
         <div>
            <div className='right-portion-design'>
              <h1>CHECKOUT</h1>
            </div>
            <div className='right-portion-design'>
              <p>Enter your email to login or continue to checkout as a guest.</p>
            </div>
            <div className='right-portion-design'>
              <label htmlFor="email">Email address</label><br />
              <input type="email" className='email-confirmation' />
            </div>
            <div className='right-portion-design'>
              <button className='checkout-button'>Proceed to Checkout</button>
            </div>
         </div>
     </div>
    </div>
  )
}

export default ProductCart