import React, { Component } from 'react';
import ContainerHeader from './../Container/ContainerHeader'
import Container1 from './../Container/Container1'
import Container2 from './../Container/Container2'
import Container3 from './../Container/Container3'
import Container4 from './../Container/Container4'
// import PastMeetUp from './PastMeetup'

class App extends Component {
  render() {
    return (
      <div>
        <ContainerHeader/>
        <Container1/>
        <Container2/>
        <Container3/>
        <Container4/>
        {/* <PastMeetUp/> */}
      </div>
    );
  }
}

export default App;
