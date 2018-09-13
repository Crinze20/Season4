import React, { Component } from 'react';
import Header from './Container/Header'
import NewEvent from './Container/NewEvent'
import NextEvent from './Container/NextEvent'
import About from './Container/About'
import Member from './Container/Member'
// import PastMeetUp from './PastMeetup'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <NewEvent/>
        <NextEvent/>
        <About/>
        <Member/>        
      </div>
    );
  }
}

export default App;
