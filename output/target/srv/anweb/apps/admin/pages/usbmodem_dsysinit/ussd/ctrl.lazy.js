"use strict";!function(){angular.module("app").controllerProvider.register("USBModemUSSDCtrl",["$scope","$state","USBModemUtil","snackbars","ngDialog",function($scope,$state,util,snackbars,ngDialog){function activate(){function init(){return $scope.ussd.data=util.getModem(modem),$scope.ussd.activeSim=_.find($scope.ussd.data.SIM,{__inx:$scope.ussd.data.ActiveSIM}),$scope.ussd.activeSim?(checkSIM(),$scope.ussd.isActivate=!0,void $scope.$emit("pageload")):($scope.ussd.needSIM=!0,$scope.ussd.isActivate=!0,void $scope.$emit("pageload"))}util.pull(modem).then(init)["catch"](function(){$state.go("error",{code:"msg_pull_error",message:"msg_error_desc"}),$scope.$emit("pageload")})}function checkSIM(){_.has($scope.ussd.activeSim,"PIN")&&($scope.ussd.needPIN="PIN"==$scope.ussd.activeSim.PIN.Status||"PUK"==$scope.ussd.activeSim.PIN.Status?$scope.ussd.activeSim.PIN.Status:null),$scope.ussd.notInserted=!$scope.ussd.activeSim.Inserted}function sendUssd(){$scope.ussd.Response="";var overlay=$scope.overlay.circular,overlayId=overlay.start(),input={modem:modem,code:$scope.ussd.Request};util.sendUssd(input).then(function(response){var isResponse=_.find(response.result.ParameterList,{Name:"Response"});isResponse?($scope.ussd.Response=isResponse.Value,snackbars.add("usb_modem_ussd_success_send")):snackbars.add("usb_modem_ussd_no_answer"),$scope.ussd.Request=""},function(){snackbars.add("msg_rpc_write_error")})["finally"](overlay.stop.bind(overlay,overlayId))}function entryPin(){ngDialog.open({template:"/admin/dialogs/usbmodem_dsysinit/entry_pin/dialog.tpl.html",controller:"EntryPinCtrl",data:{data:{pin:$scope.ussd.activeSim.PIN,modem:modem,sim:$scope.ussd.activeSim.__inx}},scope:$scope}).closePromise.then(function(data){data.value&&data.value.success&&activate()})}function changePowerMode(){ngDialog.open({template:"/admin/dialogs/usbmodem_dsysinit/change_power_mode/dialog.tpl.html",controller:"USBModemChangePowerCtrl",data:{path:"Device.USB.Modem."+$scope.ussd.data.__inx+".State",power:!0},scope:$scope}).closePromise.then(activate)}var modem=$state.params.modem;$scope.ussd={data:null,activeSim:null,activeModem:null,isActivate:!1,needPIN:null,needSIM:!1,notInserted:!1,Request:"",Response:"",validateNumber:function(value){if(!value)return null;var regexp=/^(\*[0-9]([*]{0,1}[0-9])+\#)$/g;return regexp.test(value)?null:"usb_modem_ussd_invalid_ussd"},getModemsList:function(){return util.getModemsList()},changeModem:function(key){modem=key,activate()},isButtonDisabled:function(){return $scope.form&&$scope.form.$invalid||""==$scope.ussd.Request},sendUssd:sendUssd,entryPin:entryPin,enablePower:function(){util.powerChange("on",$scope.ussd.data.__inx).then(changePowerMode)["catch"](function(){$state.go("error",{code:"msg_push_error",message:"msg_error_desc"})})}},activate()}])}();