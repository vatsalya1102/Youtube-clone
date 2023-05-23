import React from 'react'
import './Player.css'

export default function Player (props) {
  return (props.trigger)
    ? (
      <div className='popup'>
        <div className='popup-inner'>
          <button className='close-btn' onClick={() => props.setTrigger(false)}><i className='fa-solid fa-xmark fa-xl' /></button>
          {props.children}
        </div>
      </div>
      )
    : ''
}