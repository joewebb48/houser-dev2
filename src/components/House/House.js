import React from 'react';
import './House.css';

export default function House(props) {
  console.log('props in House.js', props.house);
  // console.log('state in House.js', this.state)
  return (
    <div className='House'>
      <div
        className='delete-house-button'
        onClick={e => props.deleteHouse(props.house.id)}
      >
        X
      </div>
      <div className='house-image'>
        {/* <img src={props.house.img} alt={props.house.name} /> */}
      </div>
      <p>
        Property Name: {props.house.name}
        <br />
        Address: {props.house.address}
        <br />
        City: {props.house.city}
        <br />
        State: {props.house.state}
        <br />
        Zip: {props.house.zip}
      </p>
      <p>
        Mongthly Mortgage: ${props.house.mortgage}
        <br />
        Desired Rent: ${props.house.rent}
      </p>
    </div>
  );
}
