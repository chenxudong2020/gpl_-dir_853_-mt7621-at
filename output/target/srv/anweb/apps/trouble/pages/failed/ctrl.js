"use strict";angular.module("trouble").controller("failedCtrl",["$scope","troubleCheck","troubleConstants",function($scope,troubleCheck,consts){$scope.data=troubleCheck.getData(),$scope.status=troubleCheck.getLastStatus(),consts.BR2_PACKAGE_ANWEB_ETYPE_APP||($scope.showPhoneAndMail=!0),$scope.mfilter=function(mail){return mail?mail.replace(/<|>/g,""):""},$scope.params=function(data){var conn=data.ipv4gw?data.ipv4gw:data.ipv6gw,username=conn?conn.username:null,password=conn?conn.password:null,connType=conn?conn.contype:null,servicename=conn&&_.contains(["l2tp","pptp"],connType)?conn.servicename:null,mac=conn?conn.mac:null,translatedNameKey=_.contains(["l2tp","pptp"],connType)?"username":"dcc_pppoe_username",translatedPasswordKey=_.contains(["l2tp","pptp"],connType)?"password":"dcc_pppoe_password";return[{name:"summary_model",value:data.modelName},{name:"dcc_smr_software_version",value:data.version},{name:"summary_hwrev",value:data.hwRevision},{name:"dcc_smr_mac",value:mac},{name:translatedNameKey,value:username},{name:translatedPasswordKey,value:password},{name:"wan_vpn_service_name",value:servicename}]}($scope.data,$scope.status)}]);