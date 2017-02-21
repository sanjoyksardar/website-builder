import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {Router} from 'director';

import DevTools from 'mobx-react-devtools';


import Pages from './Pages/Pages';
import PageComponents from './Pages/PageComponents';
import ConfigurationsPageContent from './Pages/ConfigurationsPageContent';

import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import MainContents from './components/MainContents';

import store from "./stores/store";

window.router = null;


@observer
class App extends Component {


	setupRoutes(){
		let routes = {
			"/" : () =>{
				store.content = ""
			},

			"/configurations/:configType" : (configType) =>{
				store.selectedConfigurationType =configType;
				store.content = Pages.ConfigurationsContent;

			}
		}
		router = Router(routes);
		router.configure({html5history : true});
		router.init();

	}
	componentDidMount(){
		this.setupRoutes();
	}

  	render() {
		let ParticularPageContent = PageComponents[store.content];
	    return (
	      <div>
	        {/* <button onClick={this.onReset}>
	          Seconds passed: {this.props.appState.timer}
	        </button> */}

			{/* <SiteHeader/> */}
			{/* <MainContents/> */}
			{ParticularPageContent ? React.createElement(ParticularPageContent): ""}

			{/* <SiteFooter/> */}
			<SiteHeader/>
	        <DevTools />
	      </div>
	    );
  	}

  onReset = () => {
    this.props.appState.resetTimer();
  }
};

export default App;
