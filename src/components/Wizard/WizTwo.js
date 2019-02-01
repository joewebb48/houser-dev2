import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateIMG } from '../../ducks/reducer';
import { connect } from 'react-redux';
import WizOne from './WizOne';
import WizThree from './WizThree';

const WizTwo = props => {
  console.log('WW2: Props:', props);
  return (
    <div>
      <div>
        <h3>IMAGE URL</h3>
      </div>
      <div>
        <input
          // value={props.img}
          placeholder='url...'
          onChange={e => props.updateIMG(e.target.value)}
        />
      </div>
      <div className='back_forth_button'>
        <div>
          <Link to='/wizard/WizOne' component={WizOne}>
            <h4>Back</h4>
          </Link>
        </div>
        <div>
          <Link to='/wizard/WizThree' component={WizThree}>
            <h4>Next</h4>
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
