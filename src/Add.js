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

  componentDidMount() {
    axios.get('/api/product/'+this.props.match.params.id)
      .then(res => {
        this.setState({ orders: res.data });
        console.log(this.state.orders);
      });
  }

  render() {
    return (
      <div class="container">
        <button id="bt" onClick={this.onClick}>{this.state.orders[0].price}</button>
      </div>
    );
  }
}

export default App;