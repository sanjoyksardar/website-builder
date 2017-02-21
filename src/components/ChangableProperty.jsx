import React, { Component } from 'react';
export default class ChangeableProperty extends Component{

	render(){
		return(
			<div className="changable-property-container">
				<Item />
			</div>
		)
	}
}

class  Item extends Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div>
				its item content
			</div>
		)
	}
}
