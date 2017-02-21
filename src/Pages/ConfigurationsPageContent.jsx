import React, { Component } from 'react';
import { observer } from 'mobx-react';
import MainContents from "../components/MainContents";

@observer
class ConfigurationsPageContent extends Component{
	render(){
		return (
		<div>
			<MainContents/>
		</div>)
	}
}
export default ConfigurationsPageContent;
