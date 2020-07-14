import React from 'react';
import { Provider } from 'react-redux';
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
