import React, { Component } from 'react';
import {observer} from 'mobx-react';
import Select2 from 'react-select2-wrapper';
import Switch from 'react-switchery';
import $ from 'jquery';
import InputTypes from "../elementspecifications/inputtypes";


@observer
class ElementTypeElement extends Component{
	updateValue(evt, calculatedDefaultValue){
		let options = this.props.element;
		let defaultValue = "";
		if(options && options.Key && options.Key.length>0){
			defaultValue = store.UP_CONFIGS;
			let i = 0;
			for(; i<options.Key.length-1;i++){
				defaultValue =defaultValue[options.Key[i]];
			}
			// if(InputTypes.SELECT == options.Type ){
			// 	defaultValue[options.Key[i]] = calculatedDefaultValue;
			// }
			defaultValue[options.Key[i]] =this._calculateUpdateValue(this.InputElement, options);
		}

	}
	_calculateUpdateValue(targetElement, options){
		let updatedValue = "";
		switch(options.Type ){
			case InputTypes.BOOLEAN:
				if(targetElement.checked){
					updatedValue = true;
				}else{
					updatedValue = false;
				}
				break;
			case InputTypes.STRING :
			case InputTypes.COLOR :
			case InputTypes.DECIMAL :
			case InputTypes.INTEGER :
			case InputTypes.SELECT:
				updatedValue = targetElement.value;
				break;


			console.log(targetElement.value);

				break;
		}
		return updatedValue;
	}
	calculateDefaultValue(element){
		let defaultValue = "";
		if(element && element.Key && element.Key.length>0){
			defaultValue = store.UP_CONFIGS;

			for(let i=0; i<element.Key.length;i++){
				defaultValue =defaultValue[element.Key[i]];
			}
		}
		return defaultValue;
	}
}

//mainly for checkbox
@observer
class BooleanTypeElement extends ElementTypeElement{
	constructor(props){
		super(props);
	}
	render(){
		let element = this.props.element;
		let defaultValue = this.calculateDefaultValue(element);
		let isChecked = defaultValue == true ? "checked" : "";
		return (
			<input ref={(input)=> this.InputElement=input} checked={defaultValue} type="checkbox"  data-element={element}    onChange={this.updateValue.bind(this)} />
		)
	}
}
//mainly for text
@observer
class StringTypeElement extends ElementTypeElement{
	constructor(props){
		super(props);
	}
	render(){
		let element = this.props.element;
		let defaultValue = this.calculateDefaultValue(element);
		return (
			<input ref={(input)=> this.InputElement=input} type="text" value={defaultValue} data-element={element} onChange={this.updateValue.bind(this)} ></input>
		)
	}
}

//for color
@observer
class ColorTypeElement extends ElementTypeElement{
	constructor(props){
		super(props);
	}
	render(){
		let element = this.props.element;
		let defaultValue = this.calculateDefaultValue(element);
		return (
			<input ref={(input)=> this.InputElement=input} type="color" value={defaultValue} data-element={element} onChange={this.updateValue.bind(this)} ></input>
		)
	}
}
//for floating number
@observer
class DecimalTypeElement extends ElementTypeElement{
	constructor(props){
		super(props);
	}
	render(){
		let element = this.props.element;
		let defaultValue = this.calculateDefaultValue(element);
		return (
			<input ref={(input)=> this.InputElement=input} type="number" step=".01" value={defaultValue} data-element={element} onChange={this.updateValue.bind(this)} ></input>
		)
	}
}

//for integer number
@observer
class IntegerTypeElement extends ElementTypeElement{
	constructor(props){
		super(props);
	}
	render(){
		let element = this.props.element;
		let defaultValue = this.calculateDefaultValue(element);
		return (
			<input ref={(input)=> this.InputElement=input} type="number" value={defaultValue} data-element={element} onChange={this.updateValue.bind(this)} ></input>
		)
	}
}


//for selection number
@observer
class SelectTypeElement extends ElementTypeElement{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		//  $(".js-example-basic-single").select2({
		// 	 placeholder: "Select option",
  //  			allowClear: true,
		// 	minimumResultsForSearch: -1
		//
		//  });
		//  $(".js-example-basic-single").on('select2:select', function (evt) {
		// 	console.log($(".js-example-basic-single").val());
		// 	// this.updateValue(evt, $(".js-example-basic-single").val())
		// 	 	debugger
		// console.log(evt);
	//});
	}
	// upVaalue(){
	// 	console.log(this.InputElement.el);
	// }
	render(){
		let element = this.props.element;
		let defaultValue = this.calculateDefaultValue(element);
		let options = element.Options;

		console.log(options)
		return (
			<div>
				<select ref={(input)=> this.InputElement=input} value={this.calculateDefaultValue(element)}  onChange={this.updateValue.bind(this)}>
					{options.map(function(option){
						return <option key={option.id} value={option.id}>{option.text}</option>
					} )}
			   </select>

			</div>
		)
	}
}



// class ComponentWithSwitch extends React.Component {
//
//   onChange(value) {
//     console.log(value);
//   }
//
//   render() {
//     return(
//       <Switch
//         className="switch-class"
//         onChange={this.onChange}
//         options={
//           {
//             color: '#474F79',
//             size: 'small'
//           }
//         }
//         checked
//       />
//     );
//   }
// }

export {BooleanTypeElement, StringTypeElement, ColorTypeElement, DecimalTypeElement, IntegerTypeElement, SelectTypeElement}
