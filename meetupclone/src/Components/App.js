import React, { Component } from 'react';
import TopBar from './Topbar'
import Profile from './Profile'
import NextEvent from './NextEvent'
import AboutEvent from './AboutEvent'
import Members from './Members'
// import PastMeetUp from './PastMeetup'

class App extends Component {
  render() {
    return (
      <div>
        <TopBar/>
        <Profile/>
        <NextEvent/>
        <AboutEvent/>
        <Members/>
        {/* <PastMeetUp/> */}
      </div>
    );
  }
}

export default App;
