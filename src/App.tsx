import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home';
import RouterManager from './Router';

function App() {
  return (
    <RouterManager />

  );
}

export default App;
