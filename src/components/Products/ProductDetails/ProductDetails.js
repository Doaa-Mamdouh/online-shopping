import React from 'react';
import useFetchAll from '../../../hooks/services/useFetchAll';
import { useParams } from "react-router-dom";

export default function ProductDetails(props) {

    const { id } = useParams();
    const {
        data: product,
        loading,
        error
      } = useFetchAll([`products/${id}`]);

    if (!product || !product[0]) return 'no data';
    return (
        <div className="product-section section pt-110 pb-90">
            <div className="container">
                {/* <!--  Product Wrapper Start--> */}
                <div className="row">
                    {/* <!--  Product Image & Thumbnail Start --> */}
                    <div className="col-lg-7 col-12 mb-30">
                        {/* {/* <!--  Product Image --> */}
                        <div className="single-product-image product-image-slider fix">
                            <div className="single-image"><img src={product[0].image} /></div>
                        </div>
                    </div>

                    {/* {/* <!--  Product Content Start --> */}
                    <div className="single-product-content col-lg-5 col-12 mb-30">
                        {/* <!--  Title --> */}
                        <h1 className="title">Holiday Candle</h1>
                        {/* <!--  Product Rating --> */}
                        <span className="product-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </span>

                        {/* <!--  Price --> */}
                        <span className="product-price">$ {product[0].price}</span>

                        {/* <!--  Description --> */}
                        <div className="description">
                            <p>{product[0].description}</p>
                        </div>
                        {/* <!--  Quantity & Cart Button --> */}
                        <div className="product-quantity-cart fix">
                            <div className="product-quantity">
                                <input type="text" value="0" name="qtybox" />
                            </div>
                            <button className="add-to-cart" onClick={()=>{props.addToCart(parseInt(id))}}>add to cart</button>
                        </div>
                        {/* <!--  Action Button --> */}
                        <div className="product-action-button fix">
                            <button><i className="ion-ios-email-outline"></i>Email to a friend</button>
                            <button><i className="ion-ios-heart-outline"></i>Wishlist</button>
                            <button><i className="ion-ios-printer-outline"></i>Print</button>
                        </div>
                        {/* <!--  Social Share --> */}
                        <div className="product-share fix">
                            <h6>Share :</h6>
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-pinterest-p"></i></a>
                        </div>

                    </div>{/* <!--  Product Content End --> */}
                </div>{/* <!--  Product Wrapper End--> */}
                {/* <!--  Product Additional Info Start--> */}

            </div>
        </div>
    )
}