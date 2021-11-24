"use strict";function InternetStepController($scope,$rootScope,$injector,manualProfile,manualStepApiDispatcher,dongle,devinfo,funcs,translate){function getConnTypes(){function contypeFilter(types,allow){return _.filter(types,function(obj){return _.contains(allow,obj.type)})}var connTypes=[];return connTypes.push({type:"dynip",name:"dynip"}),connTypes.push({type:"statip",name:"statip"}),connTypes.push({type:"dynipv6",name:"dynipv6",v6:!0}),connTypes.push({type:"statipv6",name:"statipv6",v6:!0}),connTypes.push({type:"pppoe",name:"pppoe"}),connTypes.push({type:"pppoev6",name:"pppoev6_2",v6:!0}),connTypes.push({type:"pppoedual",name:"pppoedual",v6:!0}),function(){return!0}()&&(connTypes.push({type:"dynpppoe",name:"dynpppoe_dual"}),connTypes.push({type:"statpppoe",name:"statpppoe_dual"})),$scope.isATM()||$scope.isPTM()||(connTypes.push({type:"dynl2tp",name:"dynl2tp"}),connTypes.push({type:"statl2tp",name:"statl2tp"})),$scope.isATM()||$scope.isPTM()||(connTypes.push({type:"dynpptp",name:"dynpptp"}),connTypes.push({type:"statpptp",name:"statpptp"})),connTypes.push({type:"3g",name:"3G"}),connTypes.push({type:"lte",name:"LTE"}),getAllowWANTypes()?contypeFilter(connTypes,getAllowWANTypes()):connTypes}function wanTypeIs(){return!!_.find(arguments,function(conn){return conn==profile.$InternetStep.WANType})}function availableTypes(){var iface=$scope.interfaceInfo[profile.$InterfaceStep.IfaceType];if(!iface)return[];var interfaceWanTypes=_.result(iface,"wanTypes"),res=_.filter(getConnTypes(),function(type){return interfaceWanTypes.indexOf(type.type)>=0});return res}function isUSBModem(){return"usb_modem"==profile.$InterfaceStep.IfaceType}function isDSL(){return"undefined"!=typeof InterfaceDSLStepController}function getAllowWANTypes(){return null}var profile=manualProfile.profile(),tempIGMP=!0,utilNetscan=$injector.has("netscan")?$injector.get("netscan"):null;$scope.excludedSymbolsUserPass='"',$scope.$watch("internetStep.profile.$InternetStep.WANType",function(){profile.$InternetStep.IGMP=_.contains(["dynip","statip","ipoeDual","dynpppoedual","dynpppoe","statpppoe","dynl2tp","statl2tp","dynpptp","statpptp"],profile.$InternetStep.WANType)?tempIGMP:!1});var originList=function(){return[{name:"wan_ipv6_auto_configured_by_slaac",type:"AutoConfiguredBySlaac"},{name:"wan_ipv6_auto_configured_by_dhcp_v6",type:"AutoConfiguredByDHCPv6"},{name:"wan_ipv6_auto_configured",type:"AutoConfigured"}]}();manualStepApiDispatcher.get().registerStepApi({name:"InternetStep",onActivate:function(){$scope.internetStep.cancelWatch=$scope.$watch("gDongleData",function(data){var dongleData=_.isArray(data)?data.length?data[0]:{}:data;!dongleData.status&&isUSBModem()&&(dongle.cleanInfo(),dongle.state("wait_dongle"),$scope.prevStep())});var availableType=availableTypes();1==availableType.length&&($scope.internetStep.profile.$InternetStep.WANType=availableType[0].type),isUSBModem()&&($scope.internetStep.profile.$InternetStep.WANType=availableType[0].type)},onLeave:function(){$scope.internetStep.cancelWatch()}}),$scope.internetStep={availableTypes:availableTypes,connTypeDesc:{pppoe:"dcc_pppoe_desc",statip:"dcc_statip_desc",dynip:"dcc_dynip_desc",statipv6:"dcc_statip_desc",dynipv6:"dcc_dynip_desc",pppoev6:"dcc_pppoe_desc","3g":"dcc_3g_desc",dynpppoe:"dcc_pppoe_desc",pppoedual:"dcc_pppoe_desc",dynpppoedual:"dcc_pppoe_desc",statpppoe:"dcc_statpppoe_desc",dynpptp:"dcc_l2tp_pptp_desc",statpptp:"dcc_l2tp_pptp_desc",dynl2tp:"dcc_l2tp_pptp_desc",statl2tp:"dcc_l2tp_pptp_desc",ipoa:"dcc_ipoa_desc",pppoa:"dcc_pppoa_desc"},originList:originList,wanTypeIs:wanTypeIs,isUSBModem:isUSBModem,profile:profile,dongle:dongle,modemFields:!0,isDSL:isDSL,isATM:function(){return isDSL()&&"ATM"==$scope.internetStep.profile.$InternetStep.Iface},isPTM:function(){return isDSL()&&"PTM"==$scope.internetStep.profile.$InternetStep.Iface},useVLANChange:function(){},validDns_2KOM:function(value){var validDns=funcs.customValidation.validDNS_2KOM_21748(value);return value&&!validDns?"msg_not_allowed_addr":$scope.internetStep.profile.$InternetStep.DNSServer1&&$scope.internetStep.profile.$InternetStep.DNSServer2&&validDns&&!funcs.customValidation.validAllDNS_2KOM_21748($scope.internetStep.profile.$InternetStep.DNSServer1,$scope.internetStep.profile.$InternetStep.DNSServer2)?"msg_not_allowed_addr":null},checkStaticDNS:function(){return null},checkStaticIPv6:function(value,type){var compactAddr;return _.isEmpty(value)||funcs.is.ipv6(value)?"Gateway"==type&&(compactAddr=$scope.internetStep.profile.$InternetStep.Address,!_.isEmpty(compactAddr)&&funcs.is.ipv6(compactAddr)&&funcs.ipv6.address.full(value).toUpperCase()==funcs.ipv6.address.full(compactAddr).toUpperCase())?"msg_ip_address_is_used":null:"msg_invalid_ipv6"},isHide:function(field){switch(field){case"WithoutAuth":return autoconf.BR2_PACKAGE_ANWEB_CUSTOM_GCRP_28893||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_ROSTELECOM_35980||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_ROSTELECOM_36855||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_TATTELEKOM_36956||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_ROSTELECOM_41660;case"CloneMac":return _.contains(["wifi_client","usb_modem"],profile.$InterfaceStep.IfaceType)&&autoconf.BR2_PACKAGE_ANWEB_DSYSINIT||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_ROSTELECOM_28363||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_ROSTELECOM_21261||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_ROSTELECOM_35932||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_AKADO_31140||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_GCRP_28893&&"pppoe"!=profile.$InternetStep.WANType||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_ROSTELECOM_35980||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_ROSTELECOM_36855||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_TATTELEKOM_36956||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_ROSTELECOM_41660;case"EnableVLAN":return profile.$InternetStep.HideEnableVLAN||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_ROSTELECOM_36855||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_TATTELEKOM_36956;case"VID":return _.contains(["wifi_client","usb_modem"],profile.$InterfaceStep.IfaceType)&&autoconf.BR2_PACKAGE_ANWEB_DSYSINIT||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_KOREA_21883||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_AKADO_31140||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_GCRP_28893||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_TATTELEKOM_36956;case"ServiceName":return autoconf.BR2_PACKAGE_ANWEB_CUSTOM_ROSTELECOM_35980||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_ROSTELECOM_36855||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_TATTELEKOM_36956||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_ROSTELECOM_41660;case"VCI":case"VPI":return autoconf.BR2_PACKAGE_ANWEB_CUSTOM_TATTELEKOM_36956||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_ROSTELECOM_41660||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_ROSTELECOM_41660}return!1},isDisable:function(field){switch(field){case"WANType":return autoconf.BR2_PACKAGE_ANWEB_CUSTOM_ROSTELECOM_41660||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_ROSTELECOM_35980||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_ROSTELECOM_36855}},onTypeChange:function(){$scope.internetStep.isAutoWan=!1,_.extend(profile.$InternetStep,{})},isShowModems:function(){return profile.$InternetStep.ModemList.length>0},getUSBModemTitle:function(){return"3g"==profile.$InternetStep.WANType?"wan_usb_3g_modem":"wan_usb_lte_modem"},isRequired:function(){return wanTypeIs("3g","lte")?!1:!profile.$InternetStep.WithoutAuth&&!wanTypeIs("lte")},getModemNote:function(){var key;return wanTypeIs("3g")&&(key="3G"),wanTypeIs("lte")&&(key="LTE"),translate("wan_select_modem_sim",{name:key})},changeModemType:function(type){profile.$InternetStep.WANType=type?"3g":"lte"},needType:function(){var availableType=availableTypes();return availableType.length>1},onChangeIGMP:function(){tempIGMP=profile.$InternetStep.IGMP},netscanStart:function(){if(!$scope.netScaning){$scope.netScaning=!0;var availableType=availableTypes();profile.$InternetStep.WANType=null,utilNetscan.start(profile.$InterfaceStep.IfaceType,$scope.ipv4IfaceName).then(function(params){var findType,connName,mess;params.WANType?(findType=_.findWhere(availableType,{type:params.WANType}),connName=translate(findType.name),mess=translate("dcc_internet_netscan_scaning_success",{conn:connName,abr:"conn"}),confirm(mess)&&(_.extend(profile.$InternetStep,params),$scope.internetStep.isAutoWan=!0)):alert(translate("dcc_internet_netscan_scaning_fail")),$scope.netScaning=!1})}},netscanStop:function(){utilNetscan.stop(),$scope.netScaning=!1},showNetscan:function(){return utilNetscan&&"ethernet"==profile.$InterfaceStep.IfaceType},checkLength:function(value,type){switch(type){case"APN":case"Username":case"Password":if(value.length>64)return"msg_input_lenght_more_max";break;case"DialNumber":if(value.length>16)return"msg_input_lenght_more_max"}return null}}}angular.module("wizard").controller("InternetStepController",InternetStepController),InternetStepController.$inject=["$scope","$rootScope","$injector","manualProfile","manualStepApiDispatcher","dongle","devinfo","funcs","translate"];