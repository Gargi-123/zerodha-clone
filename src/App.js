import React, { Component } from 'react';
import './App.css';
import "../node_modules/font-awesome/css/font-awesome.min.css"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routing from './components/Routing';


export default class App extends Component {


  render() {
    return (
      <div>
        <Navbar/>
        <Routing/>
        <Footer />
      </div>
    )
  }
}