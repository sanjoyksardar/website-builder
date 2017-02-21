import React, { Component } from 'react';
import Configurations from "../configs/configurations";
import InputTypes from "../elementspecifications/inputtypes";
import {BooleanTypeElement, StringTypeElement, ColorTypeElement, DecimalTypeElement,IntegerTypeElement, SelectTypeElement} from "./InputElements";

class Contents extends Component {
	constructor(props) {
		super(props);
	}


	render(){
		let element = this.props.element;
		let configName = this.props.configName;

		let inputElementContent ="";
		switch(element.Type){
			case InputTypes.BOOLEAN :
				inputElementContent = <BooleanTypeElement  key={element.CONFIG} ref={element.CONFIG}    element={element}/>
				break;
			case InputTypes.STRING :
				inputElementContent = <StringTypeElement  key={element.CONFIG} ref={element.CONFIG}   element={element}/>
				break;
			case InputTypes.COLOR :
				inputElementContent = <ColorTypeElement  key={element.CONFIG} ref={element.CONFIG}   element={element}/>
				break;
			case InputTypes.DECIMAL :
				inputElementContent = <DecimalTypeElement key={element.CONFIG} ref={element.CONFIG}  element={element}/>
				break;
			case InputTypes.INTEGER :
				inputElementContent = <IntegerTypeElement key={element.CONFIG} ref={element.CONFIG} element={element}/>
				break;
			case InputTypes.SELECT :
				inputElementContent = <SelectTypeElement key={element.CONFIG} ref={element.CONFIG}  element={element}/>
				break;
		}
		return(
			<div className="config-block" id={configName} key={configName}>
				<h4>{configName}</h4>
				{element.Description}
				{inputElementContent}
			</div>
		)
	}
}
export default Contents;
