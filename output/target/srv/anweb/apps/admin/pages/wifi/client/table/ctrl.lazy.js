"use strict";!function(){angular.module("app").controllerProvider.register("WifiClientTableCtrl",["$scope","$state","$q","translate","ngDialog","devinfo","$timeout",function($scope,$state,$q,translate){function getShortSecurity(item){var mode=item.ModeEnabled;return""!=getCliConnStatus(item)?"":translate("None"==mode?"wifi_client_open_net":"wifi_client_protected_net")+", "}function getCliConnStatus(item){var status="";return $scope.ep.data?_.isUndefined($scope.ep.data.BSSID)?status:($scope.ep.data.BSSID.toUpperCase()==item.BSSID.toUpperCase()&&$scope.ep.data.Band==item.Band&&(status=translate($scope.ep.data.Connect?"wifi_client_connect":"wifi_client_not_connected"),status+=", "),status):status}$scope.getTableClass=function(){return"table"},$scope.getImgSignal=function(item){var signal=item.SignalStrength,security=item.ModeEnabled,value=parseInt(signal/20);return value||(value="0"),5==value&&(value=4),"None"!=security?value?"wifi_lock_"+value:"":value?"wifi_"+value:""},$scope.getSecurity=function(elem){var result="",mode=elem.ModeEnabled,encr=elem.EncryptionType;switch(mode){case"None":case"WEP":result+="[Open]";break;case"WPA-Enterprise":result+="[WPA]";break;case"WPA2-Enterprise":result+="[WPA2]";break;case"WPA-WPA2-Enterprise":result+="[WPA/WPA2 mixed]";break;case"WPA-Personal":result+="[WPA-PSK]";break;case"WPA2-Personal":result+="[WPA2-PSK]";break;case"WPA-WPA2-Personal":result+="[WPA-PSK/WPA2-PSK mixed]";break;case"WPA3":result+="[WPA3-SAE]";break;case"WPA2-WPA3":result+="[WPA2-PSK/WPA3-SAE mixed]";break;default:result+="[UNKNOWN]"}return encr&&"NONE"!=encr&&(result+=" ["+encr+"]"),result},$scope.showClientBand=function(){return!$scope.isSeparateClient},$scope.getFreq=function(band){return"2.4GHz"==band?translate("24ghz"):"5GHz"==band?translate("5ghz"):""},$scope.getShort=function(item){return getShortSecurity(item)+getCliConnStatus(item)+$scope.getFreq(item.Band)},$scope.hideArrow=function(){return!1},$scope.isWizard=function(){return!1},$scope.isLoadingList=function(){return $scope.wifiClient.scanLoading}}])}();