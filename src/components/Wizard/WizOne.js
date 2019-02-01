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
      <div className='wizard_inputs'>
        <div className='wizard_name'>
          <input
            value={props.name}
            onChange={e => props.updateName(e.target.value)}
            placeholder='name'
          />
        </div>
        <div className='wizard_address'>
          <input
            value={props.address}
            placeholder='address'
            onChange={e => props.updateAddress(e.target.value)}
          />
        </div>
        <div className='wizard_city'>
          <input
            value={props.city}
            placeholder='city'
            onChange={e => props.updateCity(e.target.value)}
          />
        </div>
        <div className='wizard_state'>
          <input
            value={props.st}
            placeholder='state'
            onChange={e => props.updateSt(e.target.value)}
          />
        </div>
        <div className='wizard_zipcode'>
          <input
            value={props.zip}
            placeholder='zipcode'
            onChange={e => props.updateZip(e.target.value)}
          />
        </div>
      </div>
      <div className='back_forth_button'>
        {/* <div>
            <Link>
              <button>back</button>
            </Link>
          </div> */}
        <div>
          <Link to='/wizard/WizTwo' component={WizTwo}>
            <button>next</button>
          </Link>
        </div>
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
