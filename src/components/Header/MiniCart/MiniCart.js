import React from 'react';
import CheckoutBtn from '../../Utilities/CheckoutBtn/CheckoutBtn';
import logo from '../../../assets/img/cart/1.jpg';

export default function MiniCart(){
    return(
        
        <div className="mini-cart-brief dropdown-menu text-left">
             {/* Cart Products */}
            <div className="all-cart-product clearfix">
                <div className="single-cart clearfix">
                    <div className="cart-image">
                         <a href="product-details.html"><img src={logo}/></a> 
                    </div>
                    <div className="cart-info">
                        <h5><a href="product-details.html">Holiday Candle</a></h5>
                        <p>1 x £9.00</p>
                        <a href="#" className="cart-delete" title="Remove this item"><i className="fa fa-trash-o"></i></a>
                    </div>
                </div>
            </div>
             {/* Cart Total  */}
            <div className="cart-totals">
                <h5>Total <span>£12.00</span></h5>
            </div>
             {/* Cart Button */}
            <CheckoutBtn/>
        </div>
    )
}