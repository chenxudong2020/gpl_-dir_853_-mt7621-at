"use strict";!function(){angular.module("app").service("statsMulticastUtil",["devinfo","device","funcs",function(devinfo,device,funcs){var paths={stats:"Device.Statistics.Multicast.Groups.",network:"Device.Network.Interface."},converter=device.statsMulticast.converter;return{subscribeInfo:function(cb,$scope){devinfo.onceAndSubscribe(paths.stats+"|"+paths.network,function(response){var stats,network,input,data=[];response&&response[paths.stats]&&response[paths.network]&&(stats=funcs.splitTree(response[paths.stats]),network=funcs.splitTree(response[paths.network]),input=funcs.buildTree(stats.concat(network)),data=converter.dsysinitToNative(input)),cb&&cb(data)},$scope)}}}])}();