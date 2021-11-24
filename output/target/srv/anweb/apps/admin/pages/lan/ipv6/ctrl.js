"use strict";!function(){angular.module("app").controller("lanIPv6Ctrl",["$scope","$state","ngDialog","translate","lanHelper","funcs",function($scope,$state,ngDialog,translate,helper){function update(){iface=lan["interface"].getCurrent(),iface&&$scope.ipv6.update(iface.ipv6)}var iface,lan=$scope.device.lan,devMode=lan.deviceMode(),supported=helper.supported.ipv6(),constraints=helper.constraints.ipv6();$scope.ipv6={isActive:!1,supported:supported,addressingModes:function(){return _.filter(constraints.addressingModes,function(obj){return _.contains(supported.AddressingModeAvailable,obj.value)})}(),util:null,data:null,update:function(util){_.isEmpty(util)||(this.util=util,this.data=this.util.data(),this.staticIP.update(util.staticIP),this.dhcp.update(util.dhcp))},getDNSRelay:function(){var iface=lan["interface"].getCurrent();return iface.data.IPv4.DHCP.Server.DNSRelay||!1}},$scope.ipv6.staticIP={list:[],util:null,basic:{instance:null,data:null},update:function(util,instance){this.util=util,this.util.setOptions({minPrefix:constraints.MinPrefix,maxPrefix:constraints.MaxPrefix}),this.list=this.util.list(),this.basic.instance=instance||"1",this.basic.data=this.util.get(this.basic.instance)},isDisabled:function(){return $scope.ipv6.data&&_.has($scope.ipv6.data,"AddressingMode")?"Static"!=$scope.ipv6.data.AddressingMode:!1},getFullIP:function(ip,prefix){return ip+"/"+prefix},addInstance:function(){this.editInstance({},null,"add")},editInstance:function(item,instance,action){if("DHCP"==item.AddressingType)return void alert(translate("lan_ipv6_dyn_cant_edit"));var self=this,util=this.util,options={util:util,instance:instance,action:action?action:"edit",devMode:devMode};(function(options){return ngDialog.open({template:"dialogs/lan_ipv6_address/dialog.tpl.html",controller:"DeviceLanIPv6AddressDialogCtrl",data:options})})(options).closePromise.then(function(output){var obj;output&&output.value&&(_.has(output.value,"write")?(obj=output.value.write,util.set(obj,instance)):_.has(output.value,"remove")&&util.remove([output.value.remove]),self.list=util.list())})},removeInstance:function(items,instances){var self=this,util=this.util,hasDynamic=_.some(items,function(item){return"DHCP"==item.AddressingType});return hasDynamic?void alert(translate("lan_ipv6_dyn_cant_edit")):(util.remove(instances),void(self.list=util.list()))},showAddressingMode:function(){var errors=this.util.validation(this.basic.data);return errors.Address.length||errors.GatewayAddress.length||errors.Prefix.length?!1:"Static"!=$scope.ipv6.data.AddressingMode||$scope.ipv6.data.StaticIP[1].Address&&$scope.ipv6.data.StaticIP[1].Prefix?!0:!1},validation:function(value,param){var data=this.basic.data;if(!data)return null;var errors=this.util.validation(data);return errors[param].length?errors[param][0]:null},isEmpty:function(){return!this.list||!_.size(this.list)}},$scope.ipv6.dhcp={util:null,data:null,modes:constraints.dhcp.modes,autoconfigurationModes:constraints.dhcp.autoconfigurationModes,update:function(util){this.util=util,this.data=this.util.data()},validation:function(value,param){if(!this.data)return null;var errors=this.util.validation(this.data);return errors[param].length?errors[param][0]:null},validationOnSubmit:function(value,param){return $scope.form.submitted?this.validation(value,param):!1}},$scope.ipv6.dhcp.server={supported:supported.DHCP.Server,isShow:function(param){var data=$scope.ipv6.dhcp.data.Server;if(1!=this.supported[param])return!1;switch(param){case"MinAddress":case"MaxAddress":if("Stateless"==data.AutoconfigurationMode)return!1}return!0},isDisabled:function(param){if(!$scope.ipv6.data)return!1;switch(param){case"LeaseTime":if("PD"==$scope.ipv6.data.AddressingMode)return!0}return!1}},update(),$scope.$on("lan.update",update),$scope.$on("lan.interface.update",update),$scope.$on("lan.ipversion",function($event,version){$scope.ipv6.isActive="IPv6"==version})}])}();