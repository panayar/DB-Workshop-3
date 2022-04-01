import React from 'react';
import Carrousel from '../components/carrousel/Carrousel';
import FullDivider from '../components/divider/Fulldivider';
import Itemlist from '../components/item/Itemlist';

export default function __main() {
  return (
    <div>
      <Carrousel/>
      <div className="container">
      <FullDivider/>
      <Itemlist/>
      <br></br>
      </div>
    </div>
  )
}
