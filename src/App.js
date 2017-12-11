import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <header className="App-header">
                <h1 className="App-title">Mentme</h1>
              </header>
            </div>
          </div>
          <div className="row App-section">
            <div className="col-12">
              <p className="App-intro">
                <img className="App-mainImage" src="iStock-622321024.jpg" />
              </p>
            </div>
          </div>
          <div className="row App-section">
            <div className="col-12">
              <p className="App-textStatement">
                Mentorship, Connection and Community.  The other education.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              Accessability
            </div>
            <div className="col-4">
              Mentorship
            </div>
            <div className="col-4">
              Empowerment
              <i class="fa xfa-graduation-cap" aria-hidden="true"></i>
            </div>
          </div>
          <div className="row App-section">
            <div className="col-4">
              <i class="App-icon fa fa-universal-access" aria-hidden="true"></i>
            </div>
            <div className="col-4">
              <i class="App-icon fa fa-graduation-cap" aria-hidden="true"></i>
            </div>
            <div className="col-4">
              <i class="App-icon fa fa-hand-rock-o" aria-hidden="true"></i>
            </div>
          </div>
          <div className="row App-section">
            <div className="col-4">
              <p className="App-missionText">
                Ever feel lost, adrift not really sure where life is taking you.  
                This is a unifying feeling that a lot of people experience.  
                Most places around the world, have lost the intimate connection of the master/apprentice system in lou of more traditional school environments.  
                We value close connections that will take encorage people to joining tight communities.  
                Our mission is to support people by finding like-minded individuals and mentors and empowering them to mentor as well.
              </p>
            </div>
            <div className="col-8">
              <div className="App-nameEmail">
                <div>
                  Name
                  <textarea className="App-textarea App-shortTextarea"></textarea>
                </div>
                <div>
                  Email
                  <textarea className="App-textarea App-shortTextarea"></textarea>
                </div>
              </div>
              <div>
                Subject
                <textarea className="App-textarea"></textarea>
              </div>
              <div>
                Message
                <textarea className="App-textarea App-messageTextarea"></textarea>
              </div>
              <div className="App-submitMessageButtonArea">
                <button type="button" class="btn btn-primary">Submit Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
