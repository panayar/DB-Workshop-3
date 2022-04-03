import React from "react";
import "./itemInfo.css";
import formatPrice from "../../utils/format";
import Button from "../Button/Button";
import { Link , BrowserRouter } from "react-router-dom";

//Parametros del componente
const ItemInfo = ({ picture , title , available_units, price, description , retailer, id }) => {
return (


  <div className="detail-container">
    <div className="detail-img">
      <img src={picture} alt={title} />
    </div>

    <div className="detail-description">
      <div className="product-condition">
         <p> {available_units} - Unidades disponibles</p>
      </div>
      <div className="title">{title} </div>
      <div className="retailer">
        <p>Retailer : {retailer}</p>
      </div>
      <div className="Price">{formatPrice(price)}</div>
      <Link to={`/product/:${id}/add/:${id}`}> <Button name={'Añadir a carrito'}></Button></Link>

    </div>
 
    <div className="product-description">
      <div className="title-description">Descripción del producto</div>
      <div className="description">

        <p>{description}</p>
      </div>
    </div>
  </div>


);
};

export default ItemInfo;