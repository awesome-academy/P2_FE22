import React from 'react';
const ProductItem = ({src, name, price, amount}) => {
    return(
        <div className="flex">
            <img src={process.env.PUBLIC_URL + src}
                 className="image-product"/>
            <p className="flex-1 align-left">{name}</p>
            <p className="table-price align-left flex-1">{price}
                <span> Đ</span>
            </p>
            <p className="">
                <span>SL: </span>{amount}
            </p>
        </div>
    )
}
export default ProductItem;