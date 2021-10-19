import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Pagination from '../../Utilities/Pagination/Pagination';

export default function ProductList(props) {

    if (!props.products) return 'no data';
    return (
        <div className="product-section section pt-70 pb-60">
            <div className="container">
                <div className="row">
                    <div className="section-title text-center col mb-60">
                        <h1>Featured Products</h1>
                    </div>
                </div>
                
                <Pagination
                    data={props.products}
                    RenderComponent={ProductCard}
                    componentProps = {props.addToCart}
                    title="Products"
                    pageLimit={3}
                    dataLimit={10}
                    // addToCart={addToCart}
                />
            </div>
        </div>
    )
}