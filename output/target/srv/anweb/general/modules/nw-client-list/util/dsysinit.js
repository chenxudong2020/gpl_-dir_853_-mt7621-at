"use strict";!function(){var nw=angular.module(regdep("nw-client-list"));nw.service("nwClientListUtil",["$q","funcs","devinfo","cookie","device",function($q,funcs,devinfo,cookie,device){function pull(source){var area=function(source){var areaList={all:clientsPath+"|"+ifacePath+"|"+hostnamePath,wifi:wifiStatsPath1+"|"+wifiStatsPath2+"|"+hostnamePath,leasesv4:serversPath},source=source&&source.split(" ");return _.chain(source).map(function(el){return areaList[el]}).compact().value().join("|")||areaList.all}(source);if(isLoading)return promise;var deferred=$q.defer();return isLoading=!0,promise=deferred.promise,devinfo.once(area).then(function(data){isLoading=!1;var servers,hostnames,input,serversClients,radio1,radio2,radio,iface=null,clients=[],wifiAPData=[];data&&data[clientsPath]&&(clients=funcs.fetchBranch(data[clientsPath],clientsPath),clients=funcs.newConfig.instanceObjectToArray(clients),data[ifacePath]&&(iface=funcs.fetchBranch(data[ifacePath],ifacePath))),data&&data[serversPath]&&data[hostnamePath]&&(servers=funcs.splitTree(data[serversPath]),hostnames=funcs.splitTree(data[hostnamePath]),input=servers.concat(hostnames),serversClients=statsConverter.dsysinitToNative(funcs.buildTree(input)),_.each(serversClients,function(cl){var temp={MACAddress:cl.MACAddress,Hostname:cl.hostname,IPAddress:cl.ip},repeaterClient=_.findWhere(clients,{IPAddress:temp.IPAddress});repeaterClient&&(clients=_.without(clients,repeaterClient)),_.findWhere(clients,{MACAddress:temp.MACAddress,IPAddress:temp.IPAddress})||clients.push(temp)})),data&&(data[wifiStatsPath1]||data[wifiStatsPath2])&&(radio1=funcs.splitTree(data[wifiStatsPath1]),radio2=funcs.splitTree(data[wifiStatsPath2]),radio=funcs.buildTree(radio1.concat(radio2)),radio=funcs.fetchBranch(radio,"Device.Statistics.WiFi.Radio."),_.each(radio,function(elem){_.each(elem.AccessPoint,function(ap){wifiAPData=wifiAPData.concat(_.map(funcs.newConfig.normalize(ap.AssociatedDevice),function(obj){var clientObj={MACAddress:obj.MACAddress,Port:ap.CrossLink};return clients.push(clientObj),obj}))})})),deferred.resolve(iface?{clients:clients,iface:iface,wifiAPData:wifiAPData}:{clients:clients,wifiAPData:wifiAPData})},function(){isLoading=!1,deferred.reject()}),deferred.promise}var promise,is=funcs.is,statsConverter=device.statsDHCP.converter,clientsPath="Device.Statistics.Neighbours.",ifacePath="Device.Network.Interface.",wifiStatsPath1="Device.Statistics.WiFi.Radio.1.AccessPoint.",wifiStatsPath2="Device.Statistics.WiFi.Radio.2.AccessPoint.",hostnamePath="Device.Hostnames.",serversPath="Device.Network.Server.",isLoading=!1;return{pull:pull,formClientsInfo:function(clients,clientType,iface,band,wifiAPData){function checkClientsPorts(elem,iface){if(!iface||_.isUndefined(elem.port)||_.isUndefined(elem.iface))return!0;if(""==elem.iface)return!1;if(-1!=elem.iface.indexOf("Bridge"))return!0;var iface=funcs.fetchBranch(iface,elem.iface);return iface?iface.Bridged:!1}function checkLinkLocal(ip,mac){if(is.ipv4(ip)||!ip)return!0;var addr=funcs.ipv6.address.full(ip),splitAddr=addr.split(":");return"ap"==cookie.get("device_mode")&&checkIfClientsConnected(mac)?!0:"fe80"!=splitAddr[0].toLowerCase()}function checkIfClientsConnected(mac){return!wifiAPData||_.isEmpty(wifiAPData)?!1:_.find(wifiAPData,function(client){return client.MACAddress.toUpperCase()==mac.toUpperCase()})}return _.chain(clients).sortBy(function(el){return is.ipv4(el.ip)?-1:1}).filter(function(el){return("mac"==clientType?!_.isEmpty(el.mac):!_.isEmpty(el.ip))&&checkClientsPorts(el,iface)&&checkLinkLocal(el.ip,el.mac)}).uniq(!1,function(el){return"mac"==clientType?el.mac:el.ip}).map(function(elem){var curentBand,obj={};switch(band&&(curentBand="Device.WiFi.Radio."+band),clientType){case"mac":band&&-1!==elem.port.indexOf(curentBand)?(obj.value=elem.mac,obj.title=elem.mac,obj.subtitle=elem.ip):band||(obj.value=elem.mac,obj.title=elem.mac,obj.subtitle=elem.ip);break;default:obj.value=elem.ip,obj.title=elem.ip,obj.subtitle=elem.mac}return elem.host&&(obj.subtitle=punycode.toUnicode(elem.host)+" / "+obj.subtitle),obj}).filter(function(elem){return _.has(elem,"value")}).value()},prepareClientsList:function(clients,version,direction,exclude,filterFn){function excludeRule(rule){function compare(rule,compareRule){return _.every(rule,function(value,name){return compareRule[name]==value})}return _.some(exclude,function(elem){return compare(elem,rule)})}return _.chain(clients).filter(function(elem){return excludeRule(elem)?!1:"wifi"!=direction?("ipv4"!=version||is.ipv4(elem.IPAddress))&&("ipv6"!=version||is.ipv6(elem.IPAddress))?elem.Flags&&"reachable"!=elem.Flags&&"stale"!=elem.Flags&&"delay"!=elem.Flags?!1:!0:!1:!0}).map(function(elem){return{ip:elem.IPAddress,mac:elem.MACAddress?elem.MACAddress.toUpperCase():"",host:elem.Hostname,port:elem.Port,iface:elem.Interface}}).filter(function(elem){return filterFn&&!filterFn(elem)?!1:!0}).value()},findClient:function(knownClients,addr,type){return"ip"==type?_.findWhere(knownClients,{IPAddress:addr}):_.findWhere(knownClients,{MACAddress:addr})},getHostname:function(client){return client.Hostname}}}])}();