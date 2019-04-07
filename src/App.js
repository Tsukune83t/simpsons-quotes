import React, { Component } from "react";
import { Button } from 'reactstrap';
import "./App.css";
import Quotes from "./Quotes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        working: false
    };
}
  render() {
    const imgClass = this.state.working ? 'working' : 'breaking' ;
    return (
      <div className="App">
        <div className="container">
          <img src="https://www.logolynx.com/images/logolynx/b3/b37db0039b7487697d2aadbd3b49925c.gif" className={imgClass} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </div><br />
        <div>
        <Button onClick={() => 
          {this.setState({ working: !this.state.working});}} outline color="danger">WORK/BREAK</Button>{' '}        
        </div>
        
        <Quotes  />
      </div>
    );
  }
}

export default App;
