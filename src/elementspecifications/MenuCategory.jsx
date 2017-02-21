import Configurations from "../configs/configurations";
var Config = Configurations;

const MenuCategories = {
	"API_CONFIGURATION" : {
		"Description" : "API Configs",
		"SubMenuOptions" : [Config.IS_PRODUCTION, Config.API_KEY,
							Config.USERNAME,Config.RAZOR_KEY,
							Config.API_BASE_VANILLA, Config.GMAP_KEY]
	},
	"BUSSINES_CONFIGURATION" :{
		"Description": "Bussiness Configs",
		"SubMenuOptions" : [Config.BUSSINESS_ID, Config.BUSSINESS_NAME,
							Config.BUSSINESS_DESCRIPTION,Config.BUSSINESS_LOGO,
							Config.BUSSINESS_COLOR, Config.COUNTRY_CODE,
							Config.CURRENCY_NAME, Config.CURRENCY_CODE,
							Config.BRANCH_KEY]
	},
	"FUNCTIONALITY_CONFIGURATION" :{
		"Description": "Functionality Configs",
		"SubMenuOptions" : [ Config.BANNER, Config.SHOW_FOOD_TYPE,
							Config.DISABLE_ORDER,Config.ORDER_MODE,
							Config.LOCATE_ME, Config.CASH_ON_DELIVERY,
							Config.GUEST_CHECKOUT,
							Config.WALLET_VERSION_2,Config.WALLET_VERSION_2_MAX_AMOUNT,
							Config.ORDER_DATETIME, Config.ORDER_DATE,
							Config.ORDER_DATE_MAXIMUM_SELECTABLE, Config.REORDER,
							Config.NPS_WAIT, Config.OTP_WAIT_TIME,
							Config.CACHED_TIME,Config.REFERRAL_ENABLE]
	},
	"UI_CONFIGURATION" :{
		"Description": "UI Configs",
		"SubMenuOptions" : [Config.LANDING_PAGE, Config.STICKY_HEADER,
							Config.MENU_LAYOUT_COLUMN_NUMBER,Config.MENU_LAYOUT_IMAGE_ENABLE,
							Config.MENU_LAYOUT_IMAGE_TYPE,  Config.ITEM_PAGE,
							Config.POP_UP, Config.POP_UP_TIME,
							Config.POP_UP_CUSTOM_CLASS]
	},
	"SOCIAL_CONFIGURATION" :{
		"Description": "Social Configs",
		"SubMenuOptions" : [Config.SOCIAL_LOGIN_ENABLE, Config.SOCIAL_LOGIN_FACEBOOK_APP_ID,
							Config.SOCIAL_LOGIN_GOOGLE_APP_ID,Config.SOCIAL_LINKS_IN_FOOTER,
							Config.SOCIAL_LINKS_FACEBOOK, Config.SOCIAL_LINKS_TWITTER,
							Config.SOCIAL_LINKS_INSTAGRAM]
	},
	"PAYMENT_CONFIGURATION" :{
		"Description": "Payment Configs",
		"SubMenuOptions" : [Config.PAYMENT_TYPE_CASH, Config.PAYMENT_TYPE_PAYMENT_GATEWAY,
							Config.PAYMENT_TYPE_PREPAID,Config.PAYMENT_TYPE_PAYTM]
	},

	"SASS_CONFIGURATION" :{
		"Description": "SASS Configs",
		"SubMenuOptions" : [Config.THEME_COLOR_1, Config.THEME_COLOR_2,
							Config.THEME_COLOR_3,Config.THEME_COLOR_4,
							Config.ITEM_IMAGE_CART_RATIO, Config.ITEM_DESCRIPTION_TEXT_COLOR,
							Config.ERROR_COLOR, Config.SUCCESS_COLOR,
							Config.DEFAULT_TEXT_COLOR,Config.SECONDARY_TEXT_COLOR,
							Config.BORDER_COLOR, Config.SECONDARY_BACKGROUND_COLOR,
							Config.DEFAULT_FONT_SIZE, Config.SMALL_FONT_SIZE,
							Config.MEDIUM_FONT_SIZE,Config.LARGE_FONT_SIZE,
							Config.X_LARGE_FONT_SIZE, Config.HEADER_HEIGHT,
							Config.FOOTER_HEIGHT, Config.FOOTER_COLOR,
							Config.MAX_GRID_WIDTH,Config.MAX_SMALL_GRID_WIDTH,
							Config.LARGE_MODAL_MAX_WIDTH, Config.DEFAULT_MODAL_MAX_WIDTH,
							Config.DEFAULT_BORDER_RADIUS, Config.OVERLAY_OPACITY,
							Config.ITEM_GRID_SHADOW,Config.SMALL_BUTTOM_FIXED_WIDTH,
							Config.CATEGORY_BG_COLOR, Config.CATEGORY_BODER_COLOR,
							Config.CATEGORY_COLOR, Config.LANDING_PAGE_HEADER,
							Config.CATEGORY_SELECTED_COLOR, Config.LANDING_PAGE_FOOTER]
	},
	"MISCELLANEOUS_CONFIGURATION" :{
		"Description": "Misc Configs",
		"SubMenuOptions" : [Config.CART_STRING,
							Config.ITEM_ADD_STRING,Config.COMBO_ITEM_ADD_STRING,
							Config.ITEM_CUSTOM_CLASS, Config.COMBO_ITEM_CUSTOM_CLASS,
							Config.OUT_OF_STOCK_TEXT]
	},
	// "MiSCELLANEOUS_CONFIGURATION" :{
	// 	"Description": "Miscellaneous Configs",
	// 	"SubMenuOptions" : [Config.STATIC_PAGES, Config.CART_STRING,
	// 						Config.ITEM_ADD_STRING,Config.COMBO_ITEM_ADD_STRING,
	// 						Config.ITEM_CUSTOM_CLASS, Config.COMBO_ITEM_CUSTOM_CLASS,
	// 						Config.OUT_OF_STOCK_TEXT]
	// },
};

export default MenuCategories;
