import React, {Component} from "react";

import { Container } from 'semantic-ui-react';
import './App.css'
import axios from 'axios'
import Comments from './components/Comments'
import ContainerExample from './components/ContainerExample'

const baseURL = 'http://localhost:3000/tickets'

class App extends Component {
  state = { isShown: false, request: {}}

  componentDidMount() {

  }

  render () {
    return (
      <div className="container">
        <h1>Getting Started</h1>
      </div>
    )
  }
}




export default App;
