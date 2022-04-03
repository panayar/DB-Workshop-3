import React from 'react';
import ItemInfo from '../components/item/ItemInfo'
import Product from '../assets/producto.png';

export default function __detail() {
return (
<div>

  <ItemInfo picture={Product} price={'6000'} title={'Gafitas bonitas y facheras'} retailer={'Falabella'}
    available_units={'20'} description={'s simply ds simply dummy text of the printing and typesetting industry. LoremIpsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took'} />

</div>
)
}