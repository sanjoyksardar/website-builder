import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {Router, Link} from 'director';
import mobx  from 'mobx';
import jQuery from 'jquery';

import LandingPage from "./menus/menu/LandingPage";
import MenuCategories from "../elementspecifications/MenuCategory";

@observer
export default class SideBarContents extends Component {
	updateConfigFile(){
		let clone = mobx.toJS(store);
		//console.log()
		jQuery.ajax({
			url : "http://web-config.urbanpiper.com:3001/uploadfile",
			data : clone,
			type : "post",
			beforeSend : function(){
				document.getElementById("update-config-file").disabled = true;
			},
			complete : function(){
				document.getElementById("update-config-file").disabled = false;
				// alert("check changes");
			}

		})
		jQuery.ajax({
			url : "http://localhost:3001/uploadfile",
			data : clone,
			type : "post",
			beforeSend : function(){
				document.getElementById("update-config-file").disabled = true;
			},
			complete : function(){
				document.getElementById("update-config-file").disabled = false;
				// alert("check changes");
			}

		})

	}
  render() {

    return (
      <div id="side-bar-contents" className="side-bar-contents">
        {/* <h4>Side bar contents</h4> */}
		<nav>
			<ul className="main-menu">
				<h4>Configurations :::</h4>
			{Object.keys(MenuCategories).map(function(key, index,arr) {
				return <MainMenuCategories key={key} ref={key} menuName={key}/>
			})}
			</ul>
		</nav>
		<button id="update-config-file" className="update-config-file" onClick={this.updateConfigFile.bind(this)}>Update Config File</button>
      </div>
    );
  }

};
@observer
class MainMenuCategories extends Component{
	changeMenuContent(){
		router.setRoute("/configurations/" + this.props.menuName.toLowerCase());
	}
	calculate_(menuName){
		let ss= "";
		// if(menuName=="API_CONFIGURATION"){
		// 	ss = <ul className="sub-menu">
		// 		<li key="jkfankf" onClick={(e)=>e.stopPropagation()}><a href="#IS_PRODUCTION">jkfankf</a></li>
		// 		<li key="kfnsa" onClick={(e)=>e.stopPropagation()}><a href="#COUNTRY_CODE">kfnsa</a></li>
		// 	</ul>;
		// }
		return ss
	}

	render(){
		let menuName= this.props.menuName;
		console.log("menuName" + menuName)
		console.log("selectedConfigurationType" + store.selectedConfigurationType)
		let activeSideBarClass = store.selectedConfigurationType == menuName.toLowerCase() ? "active-side-bar" : "";
		console.log(activeSideBarClass)
		let menuDetails = MenuCategories[menuName];
		let s= this.calculate_(menuName);
		//let submenu = menuDetails.SubMenuOptions;
		return(
			<li className={activeSideBarClass} onClick={this.changeMenuContent.bind(this)}>
				<a className={activeSideBarClass} title={menuName}>{menuDetails.Description}</a>
				{s}
			</li>
		)
	}
}
