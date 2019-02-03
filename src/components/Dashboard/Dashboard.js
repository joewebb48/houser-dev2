import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WizOne from '../Wizard/WizOne';
import './Dashboard.css';
import axios from 'axios';
import House from '../House/House';

export default class Dashboard extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     houses: []
  //   };
  //   this.componentDidMount = this.componentDidMount.bind(this);
  //   // this.deleteHouse = this.deleteHouse.bind(this);
  // }

  componentDidMount() {
    this.props.getHouses();
  }

  // deleteHouse(id) {
  //   axios.delete(`/api/house/${id}`).then(() => {
  //     // this.componentDidMount();
  //     console.log('well wut is going on?');
  //   });
  // }
  render() {
    // console.log('dashstate:', this.state);
    // console.log('dashprops:', this.props);
    // let showHouses = this.state.houses.map((house, i) => {
    //   return <House key={i} houseInfo={house} delete={this.deleteHouse} />;
    // });
    return (
      <div className='Dashboard'>
        <div className='dashboard-elements'>
          <div className='dashboard-header'>
            <h2>Dashboard</h2>
            <Link to='/wizard/WizOne' className='add-new-button'>
              Add New Property
            </Link>
          </div>
          <hr />
          <div className='Houses'>
            <h3>Home Listings</h3>
            {this.props.houses.map((house, i) => {
              return (
                <House
                  house={house}
                  key={i}
                  deleteHouse={this.props.deleteHouse}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
