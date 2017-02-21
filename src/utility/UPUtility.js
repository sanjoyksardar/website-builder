class UPUtils{
	setObject(key, value){
		localStorage.setItem(key, JSON.stringify(value));
	}
	getObject(key){
		let value = localStorage.getItem(key);
		return value && JSON.parse(value);
	}
}
var upUtilily = new UPUtils();
export default upUtilily;
