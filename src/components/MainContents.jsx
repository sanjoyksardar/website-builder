import React, { Component } from 'react';
import { observer } from 'mobx-react';
import SideBarContents from './SideBarContents';
import SideBarContentsProperty from './SideBarContentsProperty';
import ChangableProperty from './ChangableProperty';

@observer
export default class MainContents extends Component {
  render() {
    return (
      <div className="site-main-contents">
		<SideBarContents/>
		 <SideBarContentsProperty key={store.selectedConfigurationType}/>
		{/* <ChangableProperty /> */}
      </div>
    );
  }


};
