import React from 'react'
import './button.css'

export default function Button({name, link}) {
  return (
      <button className='btn' href={link}>{name}</button>
   )
}
