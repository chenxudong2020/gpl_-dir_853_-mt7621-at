"use strict";!function(){angular.module("app").controllerProvider.register("SysAutoProvCtrl",["$scope","$state","autoProvUtil","funcs","devinfo",function($scope,$state,util,funcs){function activate(){util.pull().then(function(){autoprov.data=util.getConfig(),autoprov.dataStatus={},autoprov.dataStatus.ProvisionStatus=util.getConfig().ProvisionStatus,__backupData=funcs.deepClone(autoprov.data),autoprov.isActivate=!0,$scope.$emit("pageload")})["catch"](function(){$state.go("error",{code:"msg_pull_error",message:"msg_error_desc"})})["finally"](stopOverlay)}function stopOverlay(){overlayId&&($scope.overlay.circular.stop(overlayId),overlayId=null)}function updateStatus(){util.updateStatus().then(function(){var statusData=util.getStatus();autoprov.data.ProvisionStatus=statusData.ProvisionStatus,stopOverlay()})}function wasModified(){return __backupData&&!_.isEqual(_.omit(__backupData,"ProvisionStatus"),_.omit(autoprov.data,"ProvisionStatus"))}$scope.autoprov={isActivate:!1,data:null,apply:function(){$scope.form.$invalid||(overlayId=$scope.overlay.circular.start(),util.apply(autoprov.data).then(activate)["catch"](function(){stopOverlay(),$state.go("error",{code:"msg_push_error",message:"msg_error_desc"})}))},getProtocolTypeList:function(){return[{name:"TFTP",value:"tftp"},{name:"HTTP",value:"http"}]},checkStatus:function(){overlayId=$scope.overlay.circular.start(),util.checkStatus().then(updateStatus)},getProvStatus:function(status){return"autoprov_"+status.toLowerCase()},wasModified:wasModified,checkServer:function(server){var arr;return funcs.is.ipv4(server)?(arr=server.split("."),arr[3]&&"0"==arr[3]?"msg_invalid_ip":null):null}};var autoprov=$scope.autoprov,__backupData=null,overlayId=null;activate()}])}();