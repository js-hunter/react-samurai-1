import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <div><Header /></div>
      <div className="App">
        <ul>
          <li>css</li>
          <li>html</li>
          <li>js</li>
          <li>react</li>
        </ul>
      </div>

    </div>
  );
}

const Header = () => {
  return (<div>
    <a>Home</a>
    <a>News Feed</a>
    <a>Messages</a>
  </div>);
}

export default App;
