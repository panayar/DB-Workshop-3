import React from 'react';
import formatPrice from "../../utils/format";
import './cart.css';
import Trash from '../../assets/trash.png';


export default function CartItem({picture, title, price , retailer, units, total}) {
return (
<div>
    <div className="cart-container">
        <div className="cart-img" id="contenedor">
            <img src={picture} alt={title} />
        </div>
        <div className="cart-detail" id="detalle">
            <p className="cart-title">{title}</p>
        </div>
        <div className="cart-unidades">
            <p>Unidades</p>
            <select className="form-select" aria-label="Default select example">
                <option selected>1</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
            </select>
        </div>
        <div className="cart-delete">
            <img alt='icon-trash' src={Trash}></img>
        </div>
        <div className="cart-price">
            <h5>Precio</h5>
            <p>
                {formatPrice(price)}
            </p>
        </div>

    </div>
</div>
)
}