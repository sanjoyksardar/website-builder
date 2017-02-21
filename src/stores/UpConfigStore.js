import {UP_CONFIG} from "../../../arwen-deshboard-server/web-clients/js/up_config.js";
import upUtilily from "../utility/UPUtility.js";
import LOCAL_STORAGE from "../utility/localstorageConstant";
import {observable} from "mobx";

// class UPConfigStore{
// 	//@observable upconfig ;
// 	constructor(){
// 		window.UP_CONFIG_ORIGINAL = UP_CONFIG;
// 		upUtilily.setObject(LOCAL_STORAGE.UP_CONFIG_ORIGINAL, UP_CONFIG_ORIGINAL );
// 		//this.upconfig = observable(UP_CONFIG);
// 	}
// }

// store = window.store = new AppState();
// export default store;
//var UP_CONFIG =eval('(' + UP_CONFIG+ ')');

export default UP_CONFIG;
