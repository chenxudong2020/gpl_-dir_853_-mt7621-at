"use strict";function DeviceClientsListDialogCtrl($scope,$q,devinfo,funcs,nwClientListUtil,device,translate){function make(list,iface){function addItem(item){var hasFilter=_.some(filterList,function(elem){var subtitle=elem.subtitle.split(" / "),mac=subtitle.length>1?subtitle[1]:subtitle[0];return elem.value==item.ip&&mac==item.mac});hasFilter&&$scope.clients.list.push(item)}var list=nwClientListUtil.prepareClientsList(list,options.ipversion);list=_.filter(list,function(item){return!_.findWhere(usedRules,{IPAddress:item.ip})&&!_.findWhere(usedRules,{MACAddress:item.mac?item.mac.toUpperCase():""})});var filterList=nwClientListUtil.formClientsInfo(list,"ip",iface);_.each(filterList,function(data){("ipv4"==options.ipversion&&data.value==staticIp||"ipv6"==options.ipversion&&(funcs.ipv6.address.full(data.value)==funcs.ipv6.address.full(staticIp)||checkLinklocal(data.value)))&&(filterList=_.without(filterList,data))}),_.each(list,addItem)}function checkLinklocal(data){var addr=funcs.ipv6.address.full(data),splitAddr=addr.split(":");return"fe80"==splitAddr[0].toLowerCase()}function clean(){$scope.clients.list.length=0,$scope.clients.selected.length=0}function activate(){$scope.clients.isError=!1,$scope.clients.isLoading=!0;var sourses="ipv6"==options.ipversion?"all leasesv6":"all leasesv4";nwClientListUtil.pull(sourses).then(function(output){clean(),make(output.clients,output.iface),$scope.clients.isLoading=!1},function(){$scope.clients.isLoading=!1,$scope.clients.isError=!0})}function getNotUniqRulesMsg(items){var i;for(i=0;i<items.length;i++){if(_.where(items,{mac:items[i].mac}).length>1)return translate("msg_several_mac_address",{proto:"MAC",abr:"proto"})+". "+translate("msg_clients_behind_repeater",{proto1:"MAC",proto2:"IP",abr:{key1:"proto1",key2:"proto2"}});if(_.findWhere(usedRules,{MACAddress:items[i].mac.toUpperCase()}))return translate("msg_mac_address_is_used")+". "+translate("msg_clients_behind_repeater",{proto1:"MAC",proto2:"IP",abr:{key1:"proto1",key2:"proto2"}})}return null}var options=$scope.ngDialogData,version="ipv4"==options.ipversion?"IPv4":"IPv6",staticIp=device.lan.data()[1][version].StaticIP[1];staticIp&&(staticIp=staticIp.Address);var iface=device.lan["interface"].getCurrent(),usedRules=iface[options.ipversion].dhcp.staticAddress.list();$scope.clients={isLoading:!0,isError:!1,list:[],selected:[],make:make,clean:clean,apply:function(){var selectedItems=_.pluck($scope.clients.selected,"item"),notUniqRulesMsg=getNotUniqRulesMsg(selectedItems);return notUniqRulesMsg?void alert(notUniqRulesMsg):void $scope.closeThisDialog(selectedItems)},refresh:function(){activate()},cancel:function(){$scope.closeThisDialog(null)},isEmpty:function(){return 0==$scope.clients.list.length},isSelected:function(){return $scope.clients.selected.length>0},getTitle:function(item){return item.hostname?item.ip?item.ip+" ("+item.hostname+") ":item.hostname:item.ip?item.ip:""}},options.comment&&($scope.clients.comment=options.comment),activate()}