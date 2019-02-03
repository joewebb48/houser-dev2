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
      .then(() => {
        console.log('anything.. POST');
        console.log('bruh');
      });
  }

  render() {
    console.log('ww3 props render:', this.props);
    console.log('ww3 state render:', this.state);
    return (
      <div>
        <p>wiz 3</p>
        <div className='back_forth_button'>
          {/* <div>
            <Link>
            <button>back</button>
            </Link>
        </div> */}
          <div>
            <h3>Monthly Amount</h3>
            <div>
              <input
                value={this.props.mortgage}
                placeholder='desired Mortgage'
                onChange={e => this.props.updateMortgage(e.target.value)}
              />
            </div>
          </div>
          <div>
            <h3>desired rent</h3>
            <div>
              <input
                value={this.props.rent}
                placeholder='desired rent'
                onChange={e => this.props.updateRent(e.target.value)}
              />
            </div>
          </div>
          <div>
            <Link to='/wizard/WizTwo' component={WizTwo}>
              <button>Back</button>
            </Link>
          </div>
          <div className='save_house_button'>
            <button onClick={() => this.handleAddHouse()}>Complete</button>
          </div>
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
