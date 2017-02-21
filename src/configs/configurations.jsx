import {UP_CONFIG} from "../../../demo/up_config.js";
import InputTypes from "../elementspecifications/inputtypes";
var Configurations={
	//API Configurations
	"IS_PRODUCTION" :{
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Set true for production and false for stagging",
		"Key" : ["IS_PRODUCTION"]
	},
	"API_KEY" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Api Key",
		"Key" : ["API_KEY"]
	},
	"USERNAME" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set User Name",
		"Key" : ["USERNAME"]
	},
    "RAZOR_KEY" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Rozor Pay Key",
		"Key" : ["RAZOR_KEY"]
	},
	"API_BASE_VANILLA" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Api Bse Vanilla",
		"Key" : ["API_BASE_VANILLA"]
	},
	"GMAP_KEY" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Google Map Api",
		"Key" : ["GMAP_KEY"]
	},

	//Bussiness Configurations
	"BUSSINESS_ID" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Bussiness ID",
		"Key" : ["BIZ_ID"]
	},
	"BUSSINESS_NAME" :{
		"Type" : InputTypes.STRING,
		"Description" : "Set Item Cart Image ratio",
		"Key" : ["BIZ_NAME"]
	},
	"BUSSINESS_DESCRIPTION" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Bussiness Description",
		"Key" : ["BIZ_DESC"]
	},
	"BUSSINESS_LOGO" : {
		//try to set input with url type
		"Type" : InputTypes.STRING,
		"Description" : "Set Bussiness Logo",
		"Key" : ["BIZ_LOGO"]
	},
	"BUSSINESS_COLOR" : {
		"Type" : InputTypes.COLOR,
		"Description" : "Set Bussiness Color",
		"Key" : ["BIZ_COLOR"]
	},
	"COUNTRY_CODE" : {
	   "Type" : InputTypes.STRING,
	   "Description" : "Set Country Code",
	   "Key" : ["COUNTRY_CODE"]
   },
   "CURRENCY_NAME" : {
	   "Type" : InputTypes.STRING,
	   "Description" : "Set Currency Name",
	   "Key" : ["CURR", "name"]
   },
   "CURRENCY_CODE" : {
	   //set all currencies list
	   //try to do autopopulate from name
	   "Type" : InputTypes.STRING,
	   "Description" : "Set Currency Code",
	   "Key" : ["CURR", "code"]
   },
   "BRANCH_KEY" : {
	   "Type" : InputTypes.STRING,
	   "Description" : "Set Branch Key",
	   "Key" : ["BRANCH_KEY"]
   },
	//End Bussiness Configurations

	//Functionality Configurations
	"REFERRAL_ENABLE" : {
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Referral Required",
		"Key" : ["REFERRAL", "enable"]
	},
	"SHOW_FOOD_TYPE" : {
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Show Food Type with item",
		"Key" : ["SHOW_FOOD_TYPE"]
	},
	"DISABLE_ORDER" : {
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Disable Ordering",
		"Key" : ["DISABLE_ORDER"]
	},
	"ORDER_MODE" : {
		//when its used
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Ordering mode(delivery and pickup)",
		"Key" : ["ORDER_MODE"]
	},
	"LOCATE_ME" : {
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Allow Locate Me",
		"Key" : ["LOCATEME"]
	},
	"CASH_ON_DELIVERY" : {
		"CONFIG" :"",
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Enable Cash On Delivery",
		"Key" : ["COD"]
	},
	"GUEST_CHECKOUT" : {
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Enable Guest Checkout",
		"Key" : ["GUEST_CHECKOUT"]
	},
	"WALLET" : {
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Enable Wallet",
		"Key" : ["WALLET"]
	},

	"WALLET_VERSION_2" : {
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Set Wallet Version 2",
		"Key" : ["WALLET_V2", "enable"]
	},
	"WALLET_VERSION_2_MAX_AMOUNT" : {
		"Type" : InputTypes.INTEGER,
		"Description" : "Set Wallet Version 2 Max Amount",
		"Key" : ["WALLET_V2", "maxAmount"]
	},
	"ORDER_DATETIME" : {
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Set Oeder Date Time",
		"Key" : ["ORDER_DATETIME"]
	},
	"ORDER_DATE" : {
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Set Oeder Date",
		"Key" : ["ORDER_DATE", "enabled"]
	},
	"ORDER_DATE_MAXIMUM_SELECTABLE" : {
		"Type" : InputTypes.INTEGER,
		"Description" : "Set Oeder Date Maximum Selectable",
		"Key" : ["ORDER_DATE", "max_selectable"]
	},
	"REORDER" : {
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Enable Reorder",
		"Key" : ["REORDER"]
	},
	"NPS_WAIT" : {
		"Type" : InputTypes.INTEGER,
		"Description" : "NPS Wait in minutes",
		"Key" : ["NPS_WAIT"]
	},
	"CACHED_TIME" : {
		"Type" : InputTypes.INTEGER,
		"Description" : "Set Cached Time in minute",
		"Key" : ["CACHED_TIME"]
	},
	"OTP_WAIT_TIME" : {
		"Type" : InputTypes.INTEGER,
		"Description" : "Set Cached Time in Milliseconds",
		"Key" : ["OTP_WAIT_TIME"]
	},
	"ROZOR_PAY_DESCRIPTION" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Rozer Pay Description",
		"Key" : ["RAZOR_CONFIG", "description"]
	},
	//End Functionality Configurations

	//UI Configurations
	"STICKY_HEADER" : {
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Enable Sticky Header",
		"Key" : ["STICKY_HEADER"]
	},

	"ITEM_PAGE" : {
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Enable Item Page",
		"Key" : ["ITEMPAGE"]
	},
	"MENU_LAYOUT_COLUMN_NUMBER" : {
		"Type" : InputTypes.SELECT,
		"Options" : [{id: 1, text : "one"},{id:2, text : "Two"},{id:3, text : "Three"}],
		"Description" : "Set Menu Layout Column Number",
		"Key" : ["MENU_LAYOUT", "col"]
	},
	"MENU_LAYOUT_IMAGE_ENABLE" : {
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Allow image with item",
		"Key" : ["MENU_LAYOUT", "image"]
	},
	"MENU_LAYOUT_IMAGE_TYPE" : {
		"Type" : InputTypes.SELECT,
		"Options" : [{id: 1, text : "Landscape"},{id:2, text : "square"}],
		"Description" : "Allow image with item",
		"Key" : ["MENU_LAYOUT", "image_type"]
	},
	"ORDER_PAGE" : {
		//order page two times
		"Type" : InputTypes.STRING,
		"Description" : "Set Order page",
		"Key" : ["ORDER_PAGE"]
	},
	"BANNER" : {
		//add landing page options
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Enable Banner",
		"Key" : ["PAGE_CONFIG", "BANNER", "enable"]
	},
	"LANDING_PAGE" : {
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Enable Landing Page",
		"Key" : ["PAGE_CONFIG", "LANDING_PAGE", "enable"]
	},
	"POP_UP" : {
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Enable POPUP",
		"Key" : ["PAGE_CONFIG", "POPUP", "enable"]
	},
	"POP_UP_TIME" : {
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Is POPUP Show For Once",
		"Key" : ["PAGE_CONFIG", "POPUP", "showOnce"]
	},
	"POP_UP_CUSTOM_CLASS" : {
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Set POPUP Custom Class",
		"Key" : ["PAGE_CONFIG", "POPUP", "custom_class"]
	},

	//End UI Configurations


	//Social Configurations
	"SOCIAL_LOGIN_ENABLE" : {
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Enable Social Login",
		"Key" : ["SOCIAL", "enable"]
	},
	"SOCIAL_LOGIN_FACEBOOK_APP_ID" : {
		"Type" : InputTypes.STRING,
		"Description" : "Enter Social Facebook App ID",
		"Key" : ["SOCIAL", "FB_APP_ID"]
	},
	"SOCIAL_LOGIN_GOOGLE_APP_ID" : {
		"Type" : InputTypes.STRING,
		"Description" : "Enter Social Google App ID",
		"Key" : ["SOCIAL", "GOOGLE_CLIENT_ID"]
	},
	"SOCIAL_LINKS_IN_FOOTER" : {
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Display Social Links in Footer",
		"Key" : ["UP_FOOTER", "social", "enable"]
	},
	"SOCIAL_LINKS_FACEBOOK" : {
		//change in arwen if social link is smpty, dont show
		"Type" : InputTypes.STRING,
		"Description" : "Set Facebook Link",
		"Key" : ["UP_FOOTER", "social", "links", "social_fb"]
	},
	"SOCIAL_LINKS_TWITTER" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Twitter Link",
		"Key" : ["UP_FOOTER", "social", "links", "social_tw"]
	},
	"SOCIAL_LINKS_INSTAGRAM" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Instagram Link",
		"Key" : ["UP_FOOTER", "social", "links", "social_ins"]
	},
	//End Social Configurations

	//Payment Configurations
	"PAYMENT_TYPE_CASH" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Payment Type Cash Text",
		"Key" : ["PAYMENTS", "cash"]
	},
	"PAYMENT_TYPE_PAYMENT_GATEWAY" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Payment Type Payment Gateway Text",
		"Key" : ["PAYMENTS", "payment_gateway"]
	},
	"PAYMENT_TYPE_PREPAID" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Payment Type Prepaid Text",
		"Key" : ["PAYMENTS", "prepaid"]
	},
	"PAYMENT_TYPE_PAYTM" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Payment Type Paytm Text",
		"Key" : ["PAYMENTS","paytm"]
	},
	//End Payment Configurations

	//Miscellaneous Configurations
	"STATIC_PAGES" : {
		//add slick configs
		//move static pages into up_config
		"CONFIG" :"STATIC_PAGES",
		"Type" : InputTypes.SELECT,
		"Multiple" : true,
		"options" : [{"Key" : "tos","value" : "tos"},{"Key" : "faq","value" : "faq"},{"Key" : "privacy","value" : "privacy"}],
		"Description" : "Enable Banner",
		"Key" : ["STATIC_PAGES"]
	},
	"CART_STRING" : {
		"CONFIG" :"",
		"Type" : InputTypes.STRING,
		"Description" : "Set Default Cart String",
		"Key" : ["CART_STRING"]
	},
	"ITEM_ADD_STRING" : {
		"CONFIG" :"",
		"Type" : InputTypes.STRING,
		"Description" : "Set Item Add String",
		"Key" : ["ITEM_ADD_STRING"]
	},
	"COMBO_ITEM_ADD_STRING" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Item Add String",
		"Key" : ["COMBO_ITEM_ADD_STRING"]
	},
	"ITEM_CUSTOM_CLASS" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Item Custom Class",
		"Key" : ["ITEM_CUSTOM_CLASS"]
	},
	"COMBO_ITEM_CUSTOM_CLASS" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Combo Item Custom Class",
		"Key" : ["COMBO_ITEM_CUSTOM_CLASS"]
	},
	"OUT_OF_STOCK_TEXT" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Out Of Stock Text",
		"Key" : ["OUT_OF_STOCK_TEXT"]
	},
	//End Miscellaneous Configurations


	//SASS Variables Configurations
	"THEME_COLOR_1" : {
		"Type" : InputTypes.COLOR,
		"Description" : "Choose Theme Color 1",
		"Key" : ["SASS_VARS", "theme-color-1"]
	},
	"THEME_COLOR_2" : {
		"Type" : InputTypes.COLOR,
		"Description" : "Choose Theme Color 2",
		"Key" : ["SASS_VARS", "theme-color-2"]
	},
	"THEME_COLOR_3" : {
		"Type" : InputTypes.COLOR,
		"Description" : "Choose Theme Color 3",
		"Key" : ["SASS_VARS", "theme-color-3"]
	},
	"THEME_COLOR_4" : {
		"Description" : "Choose Theme Color 4",
		"Type" : InputTypes.COLOR,
		"Key" : ["SASS_VARS", "theme-color-4"]
	 },
	 "ITEM_IMAGE_CART_RATIO" : {
		"Type" : InputTypes.DECIMAL,
		"Description" : "Set item cart Image ratio",
		"Key" : ["SASS_VARS", "item-image-card-ratio"]
	},
	"LANDING_PAGE_HEADER" : {
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Set Landing Page Header",
		"Key" : ["SASS_VARS", "landing-page-header"]
	},
	"LANDING_PAGE_FOOTER" : {
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Set Landing Page Footer",
		"Key" : ["SASS_VARS", "landing-page-footer"]
	},
	"ITEM_DESCRIPTION_TEXT_COLOR" : {
		"Type" : InputTypes.COLOR,
		"Description" : "Set item Description Text Color",
		"Key" : ["SASS_VARS", "item-desc-text-color"]
	},
	"ERROR_COLOR": {
		"Type" : InputTypes.COLOR,
		"Description" : "Set Error Color",
		"Key" : ["SASS_VARS", "error-color"]
	},
	"SUCCESS_COLOR" : {
		"Description" : "Set Success Color",
		"Type" : InputTypes.COLOR,
		"Key" : ["SASS_VARS", "success-color"]
	},
	"DEFAULT_TEXT_COLOR" : {
		"Type" : InputTypes.COLOR,
		"Description" : "Set Default Text Color",
		"Key" : ["SASS_VARS", "default-text-color"]
	},
	"SECONDARY_TEXT_COLOR" : {
		"Type" : InputTypes.COLOR,
		"Description" : "Set Secondary Text Color",
		"Key" : ["SASS_VARS", "secondary-text-color"]
	},
	"BORDER_COLOR" :{
		"Type" : InputTypes.COLOR,
		"Description" : "Set Border Color",
		"Key" : ["SASS_VARS", "border-color"]
	},
	"SECONDARY_BACKGROUND_COLOR" : {
		"Type" : InputTypes.COLOR,
		"Description" : "Set Secondary Background Color",
		"Key" : ["SASS_VARS", "secondary-background-color"]
	},
	"DEFAULT_FONT_SIZE" : {
		"Description" : "Set Default Font Size",
		"Type" : InputTypes.STRING,
		"Key" : ["SASS_VARS", "default-font-size"]
	},
	"SMALL_FONT_SIZE" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Small Font Size",
		"Key" : ["SASS_VARS", "small-font-size"]
	},
	"MEDIUM_FONT_SIZE" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Medium Font Size",
		"Key" : ["SASS_VARS", "med-font-size"]
	},
	"LARGE_FONT_SIZE" : {
		"Description" : "Set Large Font Size",
		"Type" : InputTypes.STRING,
		"Key" : ["SASS_VARS", "large-font-size"]
	},
	"X_LARGE_FONT_SIZE" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Extra Large Font Size",
		"Key" : ["SASS_VARS", "x-large-font-size"]
	},
	"HEADER_HEIGHT" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Header Height",
		"Key" : ["SASS_VARS", "header-height"]
	},
	"FOOTER_HEIGHT" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Footer Height",
		"Key" : ["SASS_VARS", "footer-height"]
	},
	"FOOTER_COLOR" : {
		"Type" : InputTypes.COLOR,
		"Description" : "Set Footer Color",
		"Key" : ["SASS_VARS", "footer-color"]
	},
	"MAX_GRID_WIDTH" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Max Grid Width",
		"Key" : ["SASS_VARS", "max-grid-width"]
	},
	"MAX_SMALL_GRID_WIDTH" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Max Small Grid Width",
		"Key" : ["SASS_VARS", "max-s-grid-width"]
	},
	"LARGE_MODAL_MAX_WIDTH" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Large Modal Maxium Width",
		"Key" : ["SASS_VARS", "large-modal-max-width"]
	},
	"DEFAULT_MODAL_MAX_WIDTH" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Default Maximum Grid Width",
		"Key" : ["SASS_VARS", "default-modal-max-width"]
	},
	"DEFAULT_BORDER_RADIUS" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Default Border Radius",
		"Key" : ["SASS_VARS", "default-border-radius"]
	},
	"OVERLAY_OPACITY" : {
		"Type" : InputTypes.DECIMAL,
		"Description" : "Set Overlay Opacity",
		"Key" : ["SASS_VARS", "overlay-opacity"]
	},
	"ITEM_GRID_SHADOW" : {
		"Type" : InputTypes.BOOLEAN,
		"Description" : "Set item Grid shadow",
		"Key" : ["SASS_VARS", "item-grid-shadow"]
	},
	"SMALL_BUTTOM_FIXED_WIDTH" : {
		"Type" : InputTypes.STRING,
		"Description" : "Set Fixed Size For Small Button",
		"Key" : ["SASS_VARS", "small-button-fixed-width"]
	},
	"CATEGORY_BG_COLOR" : {
		"Type" : InputTypes.COLOR,
		"Description" : "Set Category Background Color",
		"Key" : ["SASS_VARS", "category-bg-color"]
	},
	"CATEGORY_BODER_COLOR" : {
		"Type" : InputTypes.COLOR,
		"Description" : "Set Category Border Color",
		"Key" : ["SASS_VARS", "category-border-color"]
	},
	"CATEGORY_COLOR" : {
		"Type" : InputTypes.COLOR,
		"Description" : "Set Category Color",
		"Key" : ["SASS_VARS", "category-color"]
	},
	"CATEGORY_SELECTED_COLOR" : {
		"Type" : InputTypes.COLOR,
		"Description" : "Set Selected Category Color",
		"Key" : ["SASS_VARS", "category-selected-color"]
	},
};
export default Configurations
