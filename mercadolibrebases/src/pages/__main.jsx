import React from 'react';
import Item from '../components/item/Item';
import Product from '../assets/producto.png';
import '../styles/styles.css';

export default function search() {

return (
<div className="container">
  <br></br>
  <div className="products-container">
    <Item link={'/'} picture={Product} price={'6000'} title={'Gafitas bonitas y facheras'} retailer={'falabella'} />
    <Item link={'/'} picture={Product} price={'6000'} title={'Gafitas bonitas y facheras'} retailer={'falabella'} />
    <Item link={'/'} picture={Product} price={'6000'} title={'Gafitas bonitas y facheras'} retailer={'falabella'} />
  </div>
</div>
)
}