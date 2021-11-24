"use strict";!function(){angular.module("app").controllerProvider.register("wifiMacCtrl",["$scope","translate","snackbars","ngDialog","devinfo","navigationFilter",function($scope,translate,snackbars,ngDialog,devinfo,navigationFilter){function getFilterPrototype(){var band=Object.keys($scope.networks)[0],network=Object.keys($scope.networks[band].List)[0],bandInx=$scope.networks[band].BandInx;return{Enable:!0,MAC:"",Hostname:"",Band:band,BandInx:bandInx,Network:network}}function pull(cb){wifiMacFilter.pull(function(){var data=wifiMacFilter.data();$scope.networks=data.Networks,$scope.rules=data.Rules,$scope.sortRules=angular.copy($scope.rules),$scope.maxRulesCount=data.MaxRulesCount,$scope.needHostname=data.NeedHostname,$scope.customRules.WiFiShowOnlyFirstSSID&&_.each($scope.networks,function(bandNetworks){bandNetworks.List=bandNetworks.List&&[bandNetworks.List[1]]}),$scope.customRules.HideWiFiAccessPointBySSID&&_.each($scope.networks,function(bandNetworks){bandNetworks.List=_.filter(bandNetworks.List,function(ap){return!_.contains($scope.customRules.HideWiFiAccessPointBySSID,ap.SSID)})}),cb&&cb(),$scope.isReady=!0})}function push(cb){var overlay=$scope.overlay.circular,overlayId=overlay.start();wifiMacFilter.push(cb)["finally"](overlay.stop.bind(overlay,overlayId))}function openDialog(item,inx,isNew){ngDialog.open({template:"/admin/dialogs/wifi_mac_edit/dialog.tpl.html",className:"wifi_mac_edit_dialog",controller:WifiMacEditDialogCtrl,data:{rule:item||getFilterPrototype(),inx:inx,isNew:isNew,client:$scope.client},scope:$scope})}function openNetworkDialog(inx,band){ngDialog.open({template:"/admin/dialogs/wifi_mac_edit_network/dialog.tpl.html",className:"wifi_mac_edit_network_dialog",controller:WifiMacEditNetworkDialogCtrl,data:{inx:inx,band:band,client:$scope.client},scope:$scope})}var device=$scope.device,wifiMacFilter=device.wifiMacFilter;$scope.customRules=navigationFilter.rules()||{},devinfo.once("client").then(function(data){$scope.client=data.client}),pull($scope.$emit.bind($scope,"pageload")),$scope.isReady=!1,$scope.macModes=["allow","deny"],$scope.update=function(cb){push(function(err){return err?void snackbars.add("msg_rpc_write_error"):(snackbars.add("msg_rpc_write_success"),void pull(cb))})},$scope.isEmptyRules=function(){return!$scope.rules||0===_.size($scope.rules)},$scope.isEmptyNetwork=function(){return!$scope.networks||0===_.size($scope.networks)},$scope.isMoreThanOneBand=function(){return _.size($scope.networks)>1},$scope.getNetworkShort=function(network){return translate(network.AccessPolicy)},$scope.isRuleOfDisabledNetwork=function(rule){return!$scope.networks[rule.Band].List[rule.Network].Enable},$scope.add=function(){var msgMaxRules;!$scope.maxRulesCount||_.size($scope.rules)<$scope.maxRulesCount?openDialog(null,-1,!0):(msgMaxRules=translate("wifi_mac_max_rules_message").replace(/<MAX_RULES>/,$scope.maxRulesCount),alert(msgMaxRules))},$scope.edit=function(item){var inx=_.findKey($scope.rules,_.findWhere($scope.rules,{MAC:item.MAC,Band:item.Band,Network:item.Network}));openDialog(item,inx,!1)},$scope.remove=function(items){var network,keys=[];if(_.each(items,function(item){var inx=_.findKey($scope.rules,_.findWhere($scope.rules,{MAC:item.MAC,Band:item.Band,Network:item.Network}));inx&&keys.push(inx)}),_.isUndefined($scope.client)||_.isUndefined($scope.client.mac))keys.forEach(wifiMacFilter.cut),$scope.update();else if(_.each(items,function(elem){elem.MAC.toUpperCase()==$scope.client.mac.toUpperCase()&&(network=$scope.networks[elem.Band].List[elem.Network])}),network&&network.Enable&&"allow"==network.AccessPolicy){if(!confirm(translate("macflt_warn_access")))return;keys.forEach(wifiMacFilter.cut),$scope.update()}else keys.forEach(wifiMacFilter.cut),$scope.update()},$scope.editNetwork=function(item,inx,band){openNetworkDialog(inx,band)},$scope.sortTableBy=function(param,direction){"SSID"==param&&_.each($scope.sortRules,function(rule){rule.SSID=$scope.networks[rule.Band].List[rule.Network].SSID}),$scope.sortRules=_.sortBy($scope.sortRules,function(elem){return elem[param]}),"asc"==direction&&$scope.sortRules.reverse()},$scope.needShowRow=function(data){return"hostname"==data?$scope.needHostname:"band"==data?$scope.isMoreThanOneBand():void 0},$scope.getMiniShort=function(inx){return $scope.needHostname?$scope.sortRules[inx].Hostname:$scope.networks[$scope.sortRules[inx].Band].List[$scope.sortRules[inx].Network].SSID}}])}();