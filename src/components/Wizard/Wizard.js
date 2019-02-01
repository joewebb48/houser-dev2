import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      input: ''
    };
  }

  handleChange(field, value) {
    this.setState({ [`${field}`]: value });
  }
  render() {
    console.log('wizard state:', this.state);
    return (
      <div className='main_wizard_container'>
        <p>Wizard</p>
        <Link to='/'>
          <div>
            <button>Cancel</button>
          </div>
          <div className='wizard_inputs'>
            <div className='wizard_name'>
              <input
                value={this.state.name}
                onChange={e => {
                  this.handleChange('name', e.target.value);
                }}
                placeholder='name'
              />
            </div>
            <div className='wizard_address'>
              <input
                value={this.state.address}
                placeholder='address'
                onChange={e => {
                  this.handleChange('address', e.target.value);
                }}
              />
            </div>
            <div className='wizard_city'>
              <input
                value={this.state.city}
                placeholder='city'
                onChange={e => {
                  this.handleChange('city', e.target.value);
                }}
              />
            </div>
            <div className='wizard_state'>
              <input
                value={this.state.state}
                placeholder='state'
                onChange={e => {
                  this.handleChange('state', e.target.value);
                }}
              />
            </div>
            <div className='wizard_zipcode'>
              <input
                value={this.state.zipcode}
                placeholder='zipcode'
                onChange={e => {
                  this.handleChange('zipcode', e.target.value);
                }}
              />
            </div>
          </div>
          <div>{/* <button onclick={(e = { e })}>Complete</button> */}</div>
        </Link>
      </div>
    );
  }
}
