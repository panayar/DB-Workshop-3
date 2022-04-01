import React from 'react'
import CartItem from '../components/item/CartItem';
import ImgProducto from '../assets/producto.png';
import formatPrice from "../utils/format";

export default function cart() {
  return (
    <div className='container'>
        <h3 className='cart-title'>Detalle de orden </h3>
        <CartItem picture={ImgProducto}  price='30000'  title='Monturas Gafas CK 5940 318 Originales Bogotá'units='5' retailer='Pepe Ganga' total='30000'/>
        <div className="cart-total">
        <h3>Total :  {formatPrice('90000')} </h3>
    </div>
    <div className="cart-btn-continuar">
        <button id='continuar-carrrito' className='btn-continuar'>Continuar</button>
    </div>
    </div>
  )
}
