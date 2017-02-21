import React, { Component } from 'react';
import { observer } from 'mobx-react';
import _ from "lodash";
import Configurations from "../configs/configurations";
import Contents from "./Contents";
import MenuCategories from "../elementspecifications/MenuCategory";

@observer
export default class SideBarContentsProperty extends Component {
  render() {
	let subCategories = MenuCategories[store.selectedConfigurationType.toUpperCase()].SubMenuOptions;
    return (
      	<div className="side-bar-contents-property">
        	{/* <h4>Side bar contents property</h4> */}
			{subCategories.map((eachConfig, index, arr)=><Contents configName={_.findKey(Configurations, eachConfig)} id={_.findKey(Configurations, eachConfig)}  key={_.findKey(Configurations, eachConfig)} element={eachConfig}/>)}
	 	</div>
    );
  }


};
