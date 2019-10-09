import React from 'react'

import './cart-item.styles.scss'

const CartItem = ({ item: { imageUrl , price, name, quantity} }) => (
    <div className="cart-item">
    <img src={imageUrl} alt='item'/>
    <div className='item-details'></div>
    <span className='name'>{name}</span>
    <span className='price'>{quantity} x R${price}</span>
    </div>
)

export default CartItem;