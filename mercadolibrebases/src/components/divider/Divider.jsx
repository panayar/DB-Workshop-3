import React from 'react';
import './Divider.css';

export default function Divider({title, picture}) {
  return (
    <div className='div-part'>
        <div className="div-img">
        <img src={picture} alt=''></img>

        </div>

        <div className="div-info">
        <p className='div-title'>{title}</p>
        </div>
    </div>
  )
}
