import React from 'react';
import './Items.css';
import Item from './Item';
import ImgProducto from '../../assets/producto.png';


export default function Itemlist() {
return (
<div>
    <p className='itemlist-title'>Selecciona una categoria</p>
    <select className="form-select" aria-label="Default select example">
        <option selected>Todas</option>
        <option value="1">Animales y Mascotas </option>
        <option value="2">Técnologia</option>
        <option value="3">Deporte</option>
    </select>

    <br></br>
    <div className="">
        <Item picture={ImgProducto}  price='30000'  title='Monturas Gafas CK 5940 318 Originales Bogotá' retailer='Pepe Ganga' />
        <Item picture={ImgProducto}  price='30000'  title='Monturas Gafas CK 5940 318 Originales Bogotá' retailer='Pepe Ganga' />
        <Item picture={ImgProducto}  price='30000'  title='Monturas Gafas CK 5940 318 Originales Bogotá' retailer='Pepe Ganga' />
    </div>
</div>
)
}