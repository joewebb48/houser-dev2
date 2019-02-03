import React, { Component } from 'react';
import './reset.css';
import logo from './logo.svg';
import './App.css';
import routes from './routes';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
// import {HashRouter} from "react-router-dom"
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';
import Header from './components/Header/Header';

class App extends Component {
  constructor() {
    super();

    this.state = {
      houses: []
    };
    this.getHouses = this.getHouses.bind(this);
    this.deleteHouse = this.deleteHouse.bind(this);
  }

  getHouses() {
    axios.get(`/api/houses`).then(
      //i am getting data... cant get it to state.
      res =>
        // console.log(11, res),
        this.setState({
          houses: res.data
        })
    );
  }

  deleteHouse(id) {
    axios
      .delete(`/api/house/` + id)
      .then(res => {
        this.setState({ houses: res.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route
            path='/wizard'
            render={props => <Wizard {...props} getHouses={this.getHouses} />}
          />
          <Route
            path='/'
            render={props => (
              <Dashboard
                {...props}
                houses={this.state.houses}
                getHouses={this.getHouses}
                deleteHouse={this.deleteHouse}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
