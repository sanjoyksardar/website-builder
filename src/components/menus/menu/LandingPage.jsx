import React, { Component } from 'react';
//@observer
export default class LandingPage extends Component {
	redirectLandingPage(){
		router.setRoute("/landingPage");
	}
  	render() {
		return (
		  <div>
		    <div onClick={this.redirectLandingPage}>Landing Page</div>
		  </div>
		);
  	}


};
