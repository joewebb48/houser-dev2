import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import WizOne from './WizOne';
import WizThree from './WizThree';
import WizTwo from './WizTwo';

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
        <div>
          <button>Cancel</button>
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
