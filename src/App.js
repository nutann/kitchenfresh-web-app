import logo from './logo.svg';
import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { API, graphqlOperation } from "aws-amplify";
import './App.css';
import { 
 NavBar
} from './ui-components';
import Chefs from './components/Chefs/Chef'
import Orders from './components/Orders/Orders'
import { listChefs } from './graphql/queries'
import React, { Component } from "react";
import { Amplify, Storage } from 'aws-amplify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);
//TODO //

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <NavBar/>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chefs />} />
          <Route path="/Chefs" element={<Chefs />} />
          <Route path="/Orders" element={<Orders />}/>
        </Routes>
      </BrowserRouter>
        </header>
      </div>
      
    );
  }
}

export default withAuthenticator(App);
