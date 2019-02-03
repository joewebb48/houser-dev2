import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './../../ducks/reducer';
import WizTwo from './WizTwo';
import {
  updateName,
  updateAddress,
  updateCity,
  updateSt,
  updateZip
} from '../../ducks/reducer';
// export default class WizOne extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: '',
//       address: '',
//       city: '',
//       state: '',
//       zip: ''
//     };
//   }
//   handleName(val) {
//     this.setState({
//       name: val
//     });
//   }
//   handleAddress(val) {
//     this.setState({
//       address: val
//     });
//   }
//   handleCity(val) {
//     this.setState({
//       city: val
//     });
//   }
//   handleState(val) {
//     this.setState({
//       state: val
//     });
//   }
//   handleZip(val) {
//     this.setState({
//       zip: val
//     });
//   }

const WizOne = props => {
  console.log('ww1:prop', props);
  // let { name, address, city, st, zip } = props.match;
  // console.log('words??', props.match, name, address, city);
  return (
    <div>
      <div className='wiz_input_container'>
        <div className='wiz_box'>
          <p>Property Name</p>
          <input
            value={props.name}
            onChange={e => props.updateName(e.target.value)}
            // placeholder='name'
          />
        </div>
        <div className='wiz_box'>
          <p>Address</p>
          <input
            value={props.address}
            // placeholder='address'
            onChange={e => props.updateAddress(e.target.value)}
          />
        </div>
        <div className='wiz_box'>
          <p>City</p>
          <input
            value={props.city}
            // placeholder='city'
            onChange={e => props.updateCity(e.target.value)}
          />
        </div>
        <div className='wiz_box'>
          <p>State</p>
          <input
            value={props.st}
            // placeholder='state'
            onChange={e => props.updateSt(e.target.value)}
          />
        </div>
        <div className='wiz_box'>
          <p>Zip</p>
          <input
            value={props.zip}
            // placeholder='zipcode'
            onChange={e => props.updateZip(e.target.value)}
          />
        </div>
      </div>
      <div className='wiz_button wiz_step_button'>
        <Link
          style={{ textDecoration: 'none' }}
          to='/wizard/WizTwo'
          component={WizTwo}
        >
          <h3 style={{ color: 'white', fontWeight: '800' }}>Next Step</h3>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  // const { name, address, city, st, zip } = state;
  console.log('state W1:', state);
  return {
    name: state.name,
    address: state.address,
    city: state.city,
    st: state.st,
    zip: state.zip
  };
};

export default connect(
  mapStateToProps,
  { updateName, updateAddress, updateCity, updateSt, updateZip }
)(WizOne);
