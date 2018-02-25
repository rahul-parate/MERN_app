import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal, {closeStyle} from 'simple-react-modal'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    
  }
  addtext(id){
    axios.get('/api/product/type/'+id)
      .then(res => {
        this.setState({ types: res.data });
        this.setState({show: true})
        console.log(this.state.types);
      });
      console.log(id);
        axios.get('/api/product/'+id)
          .then(res => {
            this.setState({ cartvalue: res.data });
            console.log(this.state.cartvalue[0].price);
            var divelement = document.getElementById('cartvalue').textContent;
            console.log(divelement);
            if (divelement == 'Empty'){
              var counter = 1;
              document.getElementById('noofitems').innerHTML = counter;
              document.getElementById('cartvalue').innerHTML = this.state.cartvalue[0].price;
            }
            else{
              var counter = parseInt(document.getElementById('noofitems').textContent) + 1;
              document.getElementById('noofitems').innerHTML = counter;
              var total = parseInt(divelement) + parseInt(this.state.cartvalue[0].price);
              document.getElementById('cartvalue').innerHTML = total
            }
          });
      }

  close(){
    this.setState({show: false});
  }
  componentDidMount() {
    axios.get('/api/product')
      .then(res => {
        this.setState({ products: res.data });
        
        console.log(this.state.products);
      });
  }

  

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              PRODUCT CATALOG
            </h3>
          </div>
          <div class="panel-body">
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Product Id</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {this.state.products.map(products =>
                  <tr>
                    <td>{products.id}</td>
                    <td>{products.name}</td>
                    <td>{products.desc}</td>
                    <td>{products.price}</td>
                    <td><button onClick={() => {this.addtext(products.id)}}>Add</button></td>
                  </tr>
                )}
              </tbody>
            </table>
            <div>
            <button id='noofitems' onClick="#">0</button>
            <button id='cartvalue' onClick="#">Empty</button>
            </div>  
            <Modal show={this.state.show} onClose={this.close}>
              {this.state.types[0].map(types =>
                <div>this.state.types[0]
                </div>
                )}
            </Modal>          
          </div>
        </div>
      </div>
    );
  }
}

export default App;