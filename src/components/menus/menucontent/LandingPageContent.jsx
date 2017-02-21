import React, { Component } from 'react';
import calculateMenuContent from "./calculateMenuContent";
//@observer
export default class LandingPageContent extends Component {


  	render() {
		let calculatedContent = calculateMenuContent("LANDING_PAGE");
		return (
		  <div>
		    <div>Landing Page</div>
			{calculatedContent}
		  </div>
		);
  	}


};
