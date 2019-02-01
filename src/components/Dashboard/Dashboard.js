import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    let showHouses = this.state.houses.map((val, i) => {
      return <House key={i} houseInfo={val} />;
    });
    return (
      <div>
        <p>Dashboard</p>
        {/* <House /> */}
        {/* //remove later??? */}
        {/* {this.state.houses} */}
        {showHouses}
        <Link to='/wizard'>
          <div>
            <button>Add New Property</button>
          </div>
        </Link>
      </div>
    );
  }
}
