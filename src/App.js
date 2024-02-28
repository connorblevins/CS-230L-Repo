import logo from './logo.svg';
import './App.css';
import React from 'react'
import Card from './Card.js'
import Navbar from './Navbar.js'

function App() {
  return (
    <div className="App">
      <div classname Navbar="Navbar">
        <Navbar />
      </div>
      <h1>CS 230L</h1>
      <h2>Section - 002</h2>
      <p>WVU ID: 800329527</p>
      <p>Hi, I am Connor Blevins</p>

      <div classname Card="Card">
        <Card />
        </div>
    </div>
  );
}

export default App;
