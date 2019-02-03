import React from 'react';
import './House.css';

export default function House(props) {
  console.log('props.house in House.js', props.house);
  console.log('props in House.js', props);
  // console.log('state in House.js', this.state)
  return (
    <div className='House'>
      <div className='house_detail_box'>
        <div className='house_img'>
          {/* <img src={props.house.img} alt={props.house.name} /> */}
        </div>
      </div>
      <div className='house_detail_box'>
        <p>
          Property Name: {props.house.name}
          {/* <br /> */}
        </p>
        <p>Address: {props.house.address}</p>
        {/* <br /> */}
        <p>
          City: {props.house.city}
          {/* <br /> */}
        </p>
        <p>
          State: {props.house.state}
          {/* <br /> */}
        </p>
        <p>Zip: {props.house.zip}</p>
      </div>
      <div className='house_detail_box'>
        <p>Mongthly Mortgage: {props.house.mortgage}</p>
        {/* <br /> */}
        <p>Desired Rent: {props.house.rent}</p>
      </div>
      <img
        className='house_delete_button'
        onClick={e => props.deleteHouse(props.house.id)}
        src={require('./xdelete.png')}
      />
    </div>
  );
}
