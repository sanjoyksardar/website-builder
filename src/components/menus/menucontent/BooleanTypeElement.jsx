import React, { Component } from 'react';
//import jQuery from "jquery";

import Element from "./Element"
class BooleanTypeElement extends Component{
	// constructor(props){
	// 	//super(props);
	// }
	updateValue(){
		console.log(this);
	}
	render(){
		let element = this.props.element;
		let description = element.Description;
		let defaultValue = true;
		return (
			`<input type="checkbox" data-element={element}    onChange={this.updateValue} ></input>`
		)
	}
}
