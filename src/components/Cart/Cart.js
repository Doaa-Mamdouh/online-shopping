import React from 'react';
export default function Cart({ cart, updateQuanity, deleteItem, emptyCart }) {
    if (!cart) return "no data"
    return (
        <div className="cart-section section pt-200 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <div className="table-responsive mb-30">
                            <table className="table cart-table text-center">

                                {/* <!--  Table Head --> */}
                                <thead>
                                    <tr>
                                        <th className="number">#</th>
                                        <th className="image">image</th>
                                        <th className="name">product name</th>
                                        <th className="qty">quantity</th>
                                        <th className="price">price</th>
                                        <th className="total">totle</th>
                                        <th className="remove">remove</th>
                                    </tr>
                                </thead>

                                {/* <!--  Table Body --> */}
                                <tbody>                                    
                                    {cart.map(i => {
                                        return (
                                            <tr>
                                                <td><span className="cart-number">1</span></td>
                                                <td><a href="#" className="cart-pro-image"><img src={i.image} alt="" /></a></td>
                                                <td><a href="#" className="cart-pro-title">{i.title}</a></td>
                                                <td><div className="product-quantity">
                                                    <input type="text" defaultValue={i.quantity} onChange={(e) => updateQuanity(i.id, parseInt(e.target.value))} name="qtybox" />
                                                </div>
                                                    {i.noUnits ? <p>No available stock</p> : ""}
                                                </td>
                                                <td><p className="cart-pro-price">${i.price}</p></td>
                                                <td><p className="cart-price-total">${i.price * i.quantity}</p></td>
                                                <td><button className="cart-pro-remove"><i className="fa fa-trash-o" onClick={()=>deleteItem(i.id)}></i></button></td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>

                        <div className="row">

                            {/* <!--  Cart Action --> */}
                            <div className="cart-action col-lg-6 col-md-6 col-12 mb-30">
                                <a href="#" className="button">Continiue Shopping</a>
                                <button className="btn btn-danger" onClick={emptyCart}>Delete cart</button>
                            </div>

                            {/* <!--  Cart Checkout Progress --> */}
                            <div className="cart-checkout-process col-lg-6 col-md-6 col-12 mb-30">
                                <h4 className="title">Process Checkout</h4>
                                <p><span>Subtotal</span><span>${cart.reduce((total, item) => total + item.price, 0)}</span></p>
                                <h5><span>Grand total</span><span>${cart.reduce((total, item) => total + item.price, 0)}</span></h5>
                                <button className="button">process to checkout</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}