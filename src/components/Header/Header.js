import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <img src={require('./Houserlogo.png')} />
      <h1>Houser</h1>
    </div>
  );
}
