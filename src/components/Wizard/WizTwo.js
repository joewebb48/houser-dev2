import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateIMG } from '../../ducks/reducer';
import WizOne from './WizOne';
import WizThree from './WizThree';

const WizTwo = props => {
  console.log('WW2: Props:', props);
  return (
    <div>
      <div className='wiz_input_container'>
        <div className='wiz_box'>
          <p>Image URL</p>
          <input
            placeholder='URL...'
            style={{ width: '35vw' }}
            onChange={e => props.updateIMG(e.target.value)}
          />
        </div>
      </div>
      <div className='back_forth_button'>
        <div className='wiz_button wiz_prev_button'>
          <Link
            style={{ textDecoration: 'none' }}
            to='/wizard/WizOne'
            component={WizOne}
          >
            <h3 style={{ color: 'white', fontWeight: '800' }}>Previous Step</h3>
          </Link>
        </div>
        <div className='wiz_button wiz_step_button'>
          <Link
            style={{ textDecoration: 'none' }}
            to='/wizard/WizThree'
            component={WizThree}
          >
            <h3 style={{ color: 'white', fontWeight: '800' }}>Next Step</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  console.log('mstp: WW2:', state);
  return {
    img: state.img
  };
};
export default connect(
  mapStateToProps,
  { updateIMG }
)(WizTwo);
