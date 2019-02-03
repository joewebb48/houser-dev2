import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { cancelAddNew } from '../../ducks/reducer';
import './Wiz.css';
import WizOne from './WizOne';
import WizThree from './WizThree';
import WizTwo from './WizTwo';
import Dashboard from '../Dashboard/Dashboard';

class Wizard extends Component {
  constructor() {
    super();
    this.cancel = this.cancel.bind(this);
  }
  handleChange(field, value) {
    this.setState({ [`${field}`]: value });
  }

  cancel() {
    this.props.cancelAddNew();
  }
  render() {
    // console.log('wizard state:', this.state);
    return (
      <div className='Wiz'>
        {/* <p>Wizard</p> */}
        {/* <Link to='/'> */}
        <div className='wiz_subheader'>
          <h2 className='wiz_heading'> Add New Listing</h2>
          <div onClick={this.cancel} className='wiz_subheader_button'>
            <Link
              style={{ textDecoration: 'none' }}
              to='/'
              component={Dashboard}
            >
              <h3
                style={{
                  color: 'black',
                  fontWeight: '650'
                }}
              >
                Cancel
              </h3>
            </Link>
          </div>
        </div>
        <div>
          <Switch>
            <Route path='/wizard/WizOne' exact component={WizOne} />
            <Route path='/wizard/WizTwo' exact component={WizTwo} />
            <Route path='/wizard/WizThree' exact component={WizThree} />
          </Switch>
        </div>
        {/* <p>...</p> */}
        {/* </Link> */}
      </div>
    );
  }
}

export default connect(
  null,
  { cancelAddNew }
)(Wizard);
