import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import WizTwo from './WizTwo';
import WizOne from './WizOne';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { updateMortgage } from '../../ducks/reducer';
import {
  updateRent,
  updateName,
  updateCity,
  updateAddress,
  updateIMG,
  updateSt,
  updateZip
} from '../../ducks/reducer';

class WizThree extends Component {
  handleAddHouse() {
    let { name, address, city, st, zip, img, mortgage, rent } = this.props;
    axios
      .post(`/api/house`, { name, address, city, st, zip, img, mortgage, rent })
      .then(<Redirect to='/' />);
  }

  render() {
    console.log('ww3 props render:', this.props);
    console.log('ww3 state render:', this.state);
    return (
      <div>
        <div className='wiz_input_container'>
          <div
            style={{ textAlign: 'center', fontWeight: '700', margin: '20px' }}
          >
            Recomended Rent: $(return)
          </div>
          <div className='wiz_box'>
            <p>Monthly Mortgage Amount</p>
            <input
              className='ww3i'
              value={this.props.mortgage}
              // style={{ width: '35vw;' }}
              placeholder='0'
              onChange={e => this.props.updateMortgage(e.target.value)}
            />
          </div>
          <div className='wiz_box'>
            <p>Desired Monthly Rent</p>
            <input
              placeholder='0'
              value={this.props.rent}
              className='ww3i'
              onChange={e => this.props.updateRent(e.target.value)}
            />
          </div>
        </div>
        <div className='wiz_button wiz_prev_button'>
          <Link
            style={{ textDecoration: 'none' }}
            to='/wizard/WizTwo'
            component={WizTwo}
          >
            <h3 style={{ color: 'white', fontWeight: '800' }}>Previous Step</h3>
          </Link>
        </div>
        <div className='wiz_button wiz_complete_button'>
          <h3
            style={{ color: 'black', fontWeight: '500' }}
            onClick={() => this.handleAddHouse()}
          >
            Complete
          </h3>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log('state,mstp: WW3:', state);
  // this.props breaks my code???
  // console.log('props,mstp: WW3:', this.props);
  return {
    name: state.name,
    address: state.address,
    city: state.city,
    st: state.st,
    zip: state.zip,
    img: state.img,
    mortgage: state.mortgage,
    rent: state.rent
  };
};
export default connect(
  mapStateToProps,
  {
    updateName,
    updateAddress,
    updateCity,
    updateSt,
    updateZip,
    updateIMG,
    updateMortgage,
    updateRent
  }
)(WizThree);
