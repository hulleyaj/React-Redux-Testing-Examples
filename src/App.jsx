/* eslint-disable import/no-named-as-default */
import React from 'react';
import ReactCounter from './components/ReactCounter';
import ReduxCounter from './components/ReduxCounter';
import './App.css';

const App = () => (
  <div className="App">
    <ReactCounter />
    <ReduxCounter />
  </div>
);

export default App;
