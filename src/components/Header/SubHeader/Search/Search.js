import React from 'react';

export default function Search() {
    return (
        // <!-- Header Search -->
        <div className="header-search">

            {/* <!-- Search Toggle --> */}
            <button className="search-toggle"><i className="ion-ios-search-strong"></i></button>

            {/* <!-- Search Form --> */}
            <div className="header-search-form">
                <form action="#">
                    <input type="text" placeholder="Search..."/>
                    <button><i className ="ion-ios-search-strong"></i></button>
                </form>
            </div>

        </div>
    )
}