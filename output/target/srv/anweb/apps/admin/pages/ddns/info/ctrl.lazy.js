"use strict";angular.module("app").controllerProvider.register("DdnsCtrl",["$scope","$state","funcs","snackbars","translate","ddnsUtil",function($scope,$state,funcs,snackbars,translate,util){function init(){function initCallback(){helper=util.makeHelper(),$scope.ddns=helper.getDdns(),$scope.config=helper.getConfiguration(),$scope.config.NeedChooseIface&&($scope.ifaceData=helper.getIfaces()),$scope.$emit("pageload"),$scope.isActivate=!0}$scope.isActivate=!1,util.pull().then(initCallback)}var helper,currentState=$state.current.name.split(".");currentState.pop(),currentState=currentState.join("."),init(),$scope.add=function(){$state.go(currentState+".add")},$scope.edit=function(item,key){$state.go(currentState+".edit",{inx:key})},$scope.remove=function(items,keys){var overlay=$scope.overlay.circular,overlayId=overlay.start();util.remove(items,keys).then(function(){init(),snackbars.add("msg_rpc_remove_success")})["catch"](function(){init(),snackbars.add("msg_rpc_remove_error")})["finally"](overlay.stop.bind(overlay,overlayId))},$scope.isAddDisabled=function(){return $scope.ddns?$scope.config.MultiDdns?!1:$scope.config.NeedChooseIface?!$scope.getAvailIfaces().length:!!$scope.ddns.length:!0},$scope.isMultiDdnes=function(){return $scope.config.MultiDdns?!0:!1},$scope.getAvailIfaces=function(currentIface){return helper.getAvailIfaces(currentIface)},$scope.isEmptyRules=function(){return $scope.ddns&&void 0==$scope.ddns.length},$scope.getServiceName=function(item){return"ddns_custom_prov"!=item.Service?item.Service:item.Name},$scope.getHostname=function(item){if(_.isEmpty(item.Hostname))return"-";if(!_.isArray(item.Hostname))return item.Hostname;var result=[];return _.each(item.Hostname,function(host){result.push(host.Name)}),result},$scope.getIfaceName=function(item){var iface=_.findWhere($scope.config.ExtIfaces.Connection,{Value:item.ExternalInterface.Iface});return translate(iface&&iface.Name?iface.Name:"default_gateway")},$scope.getStatusText=function(status){return translate("Aborted"==status||"Disabling"==status?"ipsec_status_"+status.toLowerCase():"st_"+status.toLowerCase())},$scope.getStatus=function(status){return"Aborted"==status||"Disabled"==status?"off":"Enabled"==status?"on":"pending"}}]);