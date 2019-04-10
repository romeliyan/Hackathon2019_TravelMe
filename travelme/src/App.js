import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import About from './Components/About';
import Contact from './Components/Contact';
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {


  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <Nav/>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
