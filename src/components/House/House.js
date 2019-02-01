import React from 'react';

export default function House(props) {
  console.log('props', props.houseInfo);
  return (
    <div className='main_house_container'>
      {/* fix the divs to do the X in the box */}
      <h1>home listings</h1>
      <div className='box_row'>
        <div className='text_col'>
          <div>
            <h6>PropertyName:</h6>
            <p>{props.houseInfo.name}</p>
          </div>
          <div>
            <h6>Address:</h6>
            <p>{props.houseInfo.address}</p>
          </div>
          <div>
            <h6>City:</h6>
            <p>{props.houseInfo.city}</p>
          </div>
          <div>
            <h6>State:</h6>
            <p>{props.houseInfo.state}</p>
          </div>
          <div>
            <h6>Zip:</h6>
            <p>{props.houseInfo.zipcode}</p>
          </div>
        </div>
      </div>
      <div>
        <h1>X</h1>
      </div>
    </div>
  );
}
