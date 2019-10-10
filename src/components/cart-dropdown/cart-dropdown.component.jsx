import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.style.scss'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/carts.selectors'
import { connect } from 'react-redux'
import { createStructureSelector } from 'reselect'

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.length ?
            cartItems.map(cartItem =>( 
                <CartItem key={cartItem.id} item={cartItem}/>
            ))
            :
            <span className="empty-message">Your cart is empty :(</span>
        }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructureSelector({
   cartItems: selectCartItems
});

export default connect(null, mapStateToProps)(CartDropdown);