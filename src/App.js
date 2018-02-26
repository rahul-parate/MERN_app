import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart:[],
      cartvalue : [],
      select : ''
    };
    this.handleChangeoption = this.handleChangeoption.bind(this);
    this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.emptyCart = this.emptyCart.bind(this);
    // this.setState({cart : []});
  }
  handleChange(event) {
    if(event.target.name == 'name')
        this.setState({name: event.target.value});
    else
        this.setState({email: event.target.value});
}
 handleSubmit(event) {
  event.preventDefault();
      // alert(this.state.name);
    axios.post('/api/product/order',{name:this.state.name,email:this.state.email,order : this.state.cart})
    .then(function(response){
      console.log(response);
    }).catch(function (error) {
                  console.log(error);
              });
  }
  addtext(id){
        axios.get('/api/product/'+id)
          .then(res => {
            this.setState({ cartvalue: res.data });
            res.data[0].type = this.state.select;
            this.state.cart.push(res.data[0]);
            console.log(this.state.cart);
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


  emptyCart(){
    document.getElementById('noofitems').innerHTML = 0;
    document.getElementById('cartvalue').innerHTML = 'Empty';
    this.setState({cart:[]});
    this.setState({cartvalue : []});
  }
  componentDidMount() {
    axios.get('/api/product')
      .then(res => {
        this.setState({ products: res.data });
        
        console.log(this.state.products);
      });
  }
  handleChangeoption(event) {
    this.setState({ select: event.target.value });
    alert(this.state.select);
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
                  <th>Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.products.map(products =>
                  <tr>
                    <td>{products.id} </td>
                    <td>{products.name}</td>
                    <td>{products.desc}</td>
                    <td>{products.price}</td>
                    <td><select onChange={ this.handleChangeoption } value={this.state.select}>
                      <option value='1' disabled>Select</option>
                      {
                        products.type.map((i)=>{
                          return <option key={i} value={i}>{i}</option>
                          })
                      }
                    </select></td>
                    <td><button class="btn btn-info" onClick={() => {this.addtext(products.id)}}>Add</button></td>
                  </tr>
                )}
              </tbody>
            </table>
            <div>
            
            <form onSubmit={this.handleSubmit}>
            <div class='row text-center'>
            <div class='col-md-6'>
            Customer name : <input type="text" value={this.state.name} onChange={this.handleChange} name="name" id="cname"/>
            </div>
            <div class='col-md-6'>
            Email id : <input type="text" name="email" value={this.state.email} onChange={this.handleChange} id="email"/>
            </div>
            </div>
            <div class='row'>
              <div class='col-md-6'>
              Cart : 
              <button type='submit' id='noofitems' class='btn btn-success'>0</button>
              <button type='submit' id='cartvalue' class='btn btn-success'>Empty</button>
              </div>
              <div class='col-md-6 text-right'>
              <button  id='cartvalue' class='btn btn-warning pull-right' onClick={this.emptyCart}>Empty Cart</button>
              </div>
            </div>
            </form>
                     
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;