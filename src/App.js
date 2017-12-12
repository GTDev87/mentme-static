import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const surveyMonkeyScript = '(function(t,e,s,o){var n,c,l;t.SMCX=t.SMCX||[],e.getElementById(o)||(n=e.getElementsByTagName(s),c=n[n.length-1],l=e.createElement(s),l.type="text/javascript",l.async=!0,l.id=o,l.src=["https:"===location.protocol?"https://":"http://","widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgdzkkVYO_2BCXQEYGXfMQEai55HQEK4lQe8CkzjknXTMIb2.js"].join(""),c.parentNode.insertBefore(l,c))})(window,document,"script","smcx-sdk");';

class SurveyScript extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const s = document.createElement('script');
    // s.type = 'text/javascript';
    // s.async = true;
    s.innerHTML = surveyMonkeyScript;
    this.instance.appendChild(s);
  }
  render() {
    return <div ref={el => (this.instance = el)} />;
  }
}

class SurveyButton extends Component {
  constructor() {
    super();
    this.state = { showSurvey: false };
  }
  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={() => this.setState({showSurvey: true})}>Join us</button>
        {this.state.showSurvey && <SurveyScript />}
      </div>
    );
  }
}

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
              <i className="fa xfa-graduation-cap" aria-hidden="true"></i>
            </div>
          </div>
          <div className="row App-section">
            <div className="col-4">
              <i className="App-icon fa fa-universal-access" aria-hidden="true"></i>
            </div>
            <div className="col-4">
              <i className="App-icon fa fa-graduation-cap" aria-hidden="true"></i>
            </div>
            <div className="col-4">
              <i className="App-icon fa fa-hand-rock-o" aria-hidden="true"></i>
            </div>
          </div>
          <div className="row App-section">
            <div className="col-12">
              <p className="App-missionText">
                Ever feel lost, adrift not really sure where life is taking you.  
                This is a unifying feeling that a lot of people experience.  
                Most places around the world, have lost the intimate connection of the master/apprentice system in leiu of traditional school environments.  
                We value close connections that will encourage people to joining tight communities.  
                Our mission is to support people by finding like-minded individuals and mentors and empowering them to mentor as well.
              </p>
            </div>
            <div className="col-12">
              <div className="App-surveyButton">
                <SurveyButton/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
