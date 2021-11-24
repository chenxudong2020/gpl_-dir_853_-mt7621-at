"use strict";!function(){angular.module("app").service("statsNetworkUtil",["funcs","device","devinfo","translate",function(funcs,device,devinfo,translate){var converter=device.statsNetwork.converter,paths={networkStats:"Device.Statistics.Interface.",network:"Device.Network.","switch":"Device.Switch.",uptime:"Device.DeviceInfo.",routing:"Device.Routing.",dsl:"Device.Statistics.xDSL.",eogre:"Device.Network.Interface.EoGRE.",eoip:"Device.Network.Interface.EoIP.",vconfig:"Device.Network.Interface.Vconfig.",usb:"Device.USB.Connection.",openvpn:"Device.Network.Server.VPN.OpenVPN.",dwp812:"Device.USB.ODUControl."};return{subscribeInfo:function(cb,$scope){devinfo.init({need_auth:!0});var subscribeString=paths.networkStats+"|"+paths.network+"|"+paths["switch"]+"|"+paths.routing+"|"+paths.uptime;subscribeString+="|"+paths.eogre+"|"+paths.vconfig,subscribeString+="|"+paths.eoip+"|"+paths.vconfig,subscribeString+="|"+paths.usb,console.log("subscribeString",subscribeString),devinfo.onceAndSubscribe(subscribeString,function(response){function getRxTxInfo(item){function sizeTranslater(value){return translate("units_"+value)}function getValue(value){return _.isFinite(value)&&value>0?funcs.lookSize(value).toString(sizeTranslater):"-"}return _.isUndefined(item.RX)&&_.isUndefined(item.TX)||"up"!=item.State?null:(parseInt(item.RX),parseInt(item.TX),getValue(item.RX)+" / "+getValue(item.TX))}var networkStats,network,sw,routes,uptime,concatResponse,usbs,input,data;response&&response[paths.networkStats]&&response[paths.network]&&response[paths["switch"]]&&(networkStats=funcs.splitTree(response[paths.networkStats]),network=funcs.splitTree(response[paths.network]),sw=funcs.splitTree(response[paths["switch"]]),routes=funcs.splitTree(response[paths.routing]),uptime=funcs.splitTree(response[paths.uptime]),concatResponse=networkStats.concat(network,sw,routes,uptime),usbs=funcs.splitTree(response[paths.usb]),concatResponse=concatResponse.concat(usbs),input=funcs.buildTree(concatResponse),input.isGrouping=void 0,data=converter.dsysinitToNative(input),_.map(data,function(item){return item.RxTx=getRxTxInfo(item),item}),cb&&cb(data))},$scope)}}}])}();