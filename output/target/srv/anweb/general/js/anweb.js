"use strict";function getVars(autoconf){var obj={};return obj.BR2_PACKAGE_ANWEB_CHECK_BROWSER=!0,obj.AUTH_HEADER_NAME="anweb-authenticate",obj.H_AUTH_HEADER_NAME=obj.AUTH_HEADER_NAME,obj.AUTH_AUTOLOGIN_HEADER_NAME="anweb-auth-autologin-available",obj.H_AUTH_AUTOLOGIN_HEADER_NAME=obj.AUTH_AUTOLOGIN_HEADER_NAME,obj.AUTH_REASON_NOT_AUTHORIZED="anweb-not-authorized",obj.H_AUTH_REASON_NOT_AUTHORIZED=obj.AUTH_REASON_NOT_AUTHORIZED,obj.REPEAT_REQUEST_HEADER_NAME="anweb-repeat-request",obj.H_REPEAT_REQUEST_HEADER_NAME=obj.REPEAT_REQUEST_HEADER_NAME,obj.DEVICE_SESSION_ID="device-session-id",obj.H_DEVICE_SESSION_ID=obj.DEVICE_SESSION_ID,obj.ANWEB_VLAN_ID_MIN=3,obj.H_ANWEB_VLAN_ID_MIN=obj.ANWEB_VLAN_ID_MIN,obj.ANWEB_QUICK_SETUP=!autoconf.BR2_PACKAGE_ANWEB_HOME&&(autoconf.BR2_PACKAGE_ANWEB_PALLOC||autoconf.BR2_PACKAGE_ANWEB_DCC),obj.H_ANWEB_QUICK_SETUP=obj.ANWEB_QUICK_SETUP,obj.ANWEB_CUSTOM_APP=autoconf.BR2_PACKAGE_ANWEB_ETYPE_APP||autoconf.BR2_PACKAGE_ANWEB_LAYZER_APP||autoconf.BR2_PACKAGE_ANWEB_TIS_APP||autoconf.BR2_PACKAGE_ANWEB_SINT_APP||autoconf.BR2_PACKAGE_ANWEB_ERTELECOM_APP||autoconf.BR2_PACKAGE_ANWEB_TELECOMA_APP||autoconf.BR2_PACKAGE_ANWEB_ANTENNA_APP||autoconf.BR2_PACKAGE_ANWEB_INTER_APP||autoconf.BR2_PACKAGE_ANWEB_ORGTECHSERVICE_APP||autoconf.BR2_PACKAGE_ANWEB_AXIOMA_APP||autoconf.BR2_PACKAGE_ANWEB_DSMART_APP||autoconf.BR2_PACKAGE_ANWEB_TURK_APP||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_KOREA_21883||autoconf.BR2_PACKAGE_ANWEB_CENTRA_APP||autoconf.BR2_PACKAGE_ANWEB_TELEKLUB_APP||autoconf.BR2_PACKAGE_ANWEB_TELEK_APP||autoconf.BR2_PACKAGE_ANWEB_TM_APP||autoconf.BR2_PACKAGE_ANWEB_BEELINE_APP||autoconf.BR2_PACKAGE_ANWEB_UGMK_APP||autoconf.BR2_PACKAGE_ANWEB_CONVEX_APP,obj.ANWEB_DCC_OR_CUSTOM_APP=autoconf.BR2_PACKAGE_ANWEB_DCC||obj.ANWEB_CUSTOM_APP,obj.ANWEB_ADMIN_APP_NO_ADAPTATION=!autoconf.BR2_PACKAGE_ANWEB_HQ_ADMIN_APP&&!autoconf.BR2_PACKAGE_ANWEB_EU_ADMIN_APP&&!autoconf.BR2_PACKAGE_ANWEB_MEGAFON_APP,obj.ANWEB_HOME=autoconf.BR2_PACKAGE_ANWEB_HOME&&!autoconf.BR2_PACKAGE_ANWEB_HQ_ADMIN_APP&&!autoconf.BR2_PACKAGE_ANWEB_MEGAFON_APP,obj.ANWEB_RENAME_USB_TO_LTE=autoconf.BR2_PACKAGE_ANWEB_RENAME_USB_TO_LTE||autoconf.BR2_PACKAGE_ANWEB_EMBEDDED_MODEM_LTE&&!autoconf.BR2_PACKAGE_ANWEB_STORAGE,obj.ANWEB_DAP_MODE_SUPPORT=autoconf.BR2_PACKAGE_ANWEB_MODE_AP||autoconf.BR2_PACKAGE_ANWEB_MODE_REPEATER||autoconf.BR2_PACKAGE_ANWEB_MODE_CLIENT,obj.ANWEB_SUPPORT_DSL=autoconf.BR2_PACKAGE_ANWEB_SUPPORT_ADSL||autoconf.BR2_PACKAGE_ANWEB_SUPPORT_VDSL||autoconf.BR2_PACKAGE_ANWEB_REALTEK_MODEM,obj.ANWEB_WAN_PPP=autoconf.BR2_PACKAGE_ANWEB_WAN_PPPOE||autoconf.BR2_PACKAGE_ANWEB_WAN_PPPOA||autoconf.BR2_PACKAGE_ANWEB_WAN_3G||autoconf.BR2_PACKAGE_ANWEB_WAN_PPTP||autoconf.BR2_PACKAGE_ANWEB_WAN_L2TP||autoconf.BR2_PACKAGE_ANWEB_WAN_PPPOE_IPV6||autoconf.BR2_PACKAGE_ANWEB_WAN_PPPOE_DUAL,obj.ANWEB_WAN_USB_MODEM=autoconf.BR2_PACKAGE_ANWEB_WAN_3G||autoconf.BR2_PACKAGE_ANWEB_WAN_LTE,obj.ANWEB_EXOVOIP=autoconf.BR2_PACKAGE_ANWEB_DSYSINIT&&!autoconf.BR2_PACKAGE_ANWEB_VOIP_RTK_9607,obj.CONFIG_ID_WAN_TEMP=1,obj.CONFIG_ID_WAN_IFACES_LIST=120,obj.CONFIG_ID_3G_NEW=134,obj.CONFIG_ID_3G_PIN_NEW=135,obj}if("undefined"!=typeof module&&module.exports)module.exports=getVars;else{var vars=getVars(autoconf);_.extend(autoconf,vars),_.extend(window,vars)}