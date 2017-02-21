import { observable } from 'mobx';

import Pages from '../Pages/Pages';

import UP_CONFIG from "./UpConfigStore";
import upUtilily from "../utility/UPUtility.js";
import LOCAL_STORAGE from "../utility/localstorageConstant";
class AppState {
  @observable timer = 0;
  @observable content = Pages.ConfigurationsContent;
  @observable selectedConfigurationType = "api_configuration";

  UP_CONFIGS;
  constructor() {
	upUtilily.setObject(LOCAL_STORAGE.UP_CONFIG_ORIGINAL, UP_CONFIG );
	this.UP_CONFIGS =observable(UP_CONFIG);
    setInterval(() => {
      //this.timer += 1;
    }, 1000);


  }

  resetTimer() {
    this.timer = 0;
  }
}

export default AppState;
