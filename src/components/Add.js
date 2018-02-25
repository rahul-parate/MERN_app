import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: {}
    };
  }

  componentWillMount() {
    axios.get('/api/product/'+this.props.match.params.id)
      .then(res => {
        this.setState({ orders: res.data });
        console.log(this.state.orders);
      });
  }

  render() {
    return (
      <div class="container">
        <div>{this.state.orders.price}</div>
      </div>
    );
  }
}

export default App;