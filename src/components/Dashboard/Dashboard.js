import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WizOne from '../Wizard/WizOne';
import './Dashboard.css';
import axios from 'axios';
import House from '../House/House';

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      houses: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/houses`).then(
      //i am getting data... cant get it to state.
      res =>
        // console.log(11, res),
        this.setState({
          houses: res.data
        })
    );
  }
  render() {
    console.log('dashstate:', this.state);
    let showHouses = this.state.houses.map((house, i) => {
      return <House key={i} houseInfo={house} />;
    });
    return (
      <div className='mainDashContainer_col'>
        <div className='topRowDash_row'>
          <div className='DashLogoText'>
            <h1>Dashboard</h1>
          </div>
          <div className='addPropButton'>
            <Link to='/wizard/WizOne' component={WizOne}>
              <h4>add new property</h4>
            </Link>
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div>
          <h3>HOME listing:</h3>
        </div>
        <div className='homeComp'>{showHouses}</div>
      </div>
    );
  }
}
