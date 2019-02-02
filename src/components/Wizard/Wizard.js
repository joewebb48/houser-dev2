import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './Wiz.css';
import WizOne from './WizOne';
import WizThree from './WizThree';
import WizTwo from './WizTwo';
import Dashboard from '../Dashboard/Dashboard';

export default class Wizard extends Component {
  handleChange(field, value) {
    this.setState({ [`${field}`]: value });
  }
  render() {
    // console.log('wizard state:', this.state);
    return (
      <div className='main_wizard_container'>
        {/* <p>Wizard</p> */}
        {/* <Link to='/'> */}
        <Link to='/' component={Dashboard}>
          <div className='cancel_button_container'>
            <div className='cancel_button_text_wrapper'>
              <h1>Cancel</h1>
            </div>
          </div>
        </Link>
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
