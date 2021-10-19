import React from 'react';
import MiniCart from '../MiniCart/MiniCart';

export default function AccountMenu({cartNum}) {
    return (
        <div className="account-menu col-md-4 col-12">
            <ul>
                <li><a href="#">My Account</a></li>
                <li><a href="wishlist.html">Wishlist</a></li>
                <li><a href="#" data-toggle="dropdown"><i className="fa fa-shopping-cart"></i><span className="num">{cartNum}</span></a>
               
                <MiniCart/>
               
                </li>
            </ul>
        </div>
    )
}