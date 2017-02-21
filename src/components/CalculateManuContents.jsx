import React, { Component } from 'react';
import Configurations from "../configs/configurations";
import InputTypes from "../elementspecifications/inputtypes";
//import BooleanTypeElement from "./BooleanTypeElement";


class  Contents extends Component{
	
	function updateValueOfCONFIG(){
		debugger
		console.log(this);
		console.log(this);
	}

	render(){
		let elementName = this.props.elementName;

		let calculatedContent =`<div><h4>${elementName}</h4>`;
		let defaultValue = calculateDefaultValue(element);


		switch(element.Type){
			case InputTypes.BOOLEAN  :
				calculatedContent +=
					`<input type="checkbox" data-element=${element} onChange=${this.updateValueOfCONFIG()} ${ defaultValue==true ? "checked" : ""}> ${element.Description}</input>`;
				break;
			// case InputTypes.BOOLEAN :
			// 	calculatedContent += <BooleanTypeElement element={element} />
			// 	break;
			case InputTypes.COLOR :
				calculatedContent +=
					`<input type="color" data-element=${element} value="${defaultValue}">${element.Description}</input>`;
				break;
			case InputTypes.DECIMAL :
				calculatedContent +=
					`<input type="number" data-element=${element} step=".01" value="${defaultValue}">${element.Description}</input>`;
				break;
			case InputTypes.INTEGER :
				calculatedContent +=
					`<input type="number" data-element=${element} value="${defaultValue}">${element.Description}</input>`;
				break;
			case InputTypes.STRING :
				calculatedContent +=
					`<input type="text" data-element=${element}  value="${defaultValue}">${element.Description}</input>`;
				break;

		}
		 calculatedContent +=`</div>`;
		 return (calculatedContent);
	}

}
export {Contents};
