import React from 'react';
import formatPrice from "../../utils/format";
import './Items.css';



const Item = ({ picture, title, price , retailer }) => {

return (
<div className="item-container">
    <div className="item-img" id="contenedor">
        <img src={picture} alt={title} />
    </div>
    <div className="item-detail" id="detalle">
        <div className="item-price">
            <p>
                {formatPrice(price)}
            </p>
            <p className="item-title">{title}</p>
        </div>
    </div>
    <div className="item-city">
        <p>{retailer}</p>
    </div>
</div>
);
};

export default Item;