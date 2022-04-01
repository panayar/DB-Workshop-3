import React from 'react';
import Icon_1 from '../../assets/icon-divider-1.svg';
import Icon_2 from '../../assets/icon-divider-2.svg';
import Icon_3 from '../../assets/icon-divider-3.svg';
import Divider from './Divider';
import './Divider.css';

export default function FullDivider() {
  return (
<div className="contain">

    <div className="row div-cont">
        <div className="col-4"><Divider title="Hasta 48 cuotas" picture={Icon_3}/></div>
        <div className="col-4"><Divider title="Transferencia desde banco" picture={Icon_2}/></div>
        <div className="col-4"><Divider title="Paga en efectivo" picture={Icon_1}/></div>
    </div>
</div>
  )
}
