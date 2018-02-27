import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';
import App from './App';
import Add from './components/Add';
//import registerServiceWorker from './registerServiceWorker';
//import Edit from './components/Edit';
//import Create from './components/Create';
//import Show from './components/Show';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
      </div>
  </Router>,
  document.getElementById('root')
);
