"use strict";!function(){angular.module("app").service("adblockUtil",["funcs","device","cpe","devinfo",function(funcs,device,cpe,devinfo){function push(settings){var data=converter.nativeToDsysinit(settings),diff=funcs.newConfig.makeDiff(__initCpeConfig,data,attrs);return _.isEmpty(diff)?Promise.resolve():cpe.ApplyDifference(diff)}function isModified(){var __init=_.omit(funcs.deepClone(__initConfig),"ValidPath"),__now=_.omit(funcs.deepClone(config),"ValidPath");return __initConfig&&config&&!_.isEqual(__now,__init)}function getData(){return config}function getStorageStatus(){return isPlugged}function getValidPath(){return validPath}function parseStorageStatus(data){var usb;data&&data[paths.usb]&&(usb=funcs.fetchBranch(data[paths.usb],paths.usb),isPlugged=_.size(funcs.newConfig.normalize(usb)))}function parseValidPath(data){var ab;data&&data[paths.adblock]&&(ab=funcs.fetchBranch(data[paths.adblock],paths.adblock),validPath=_.isEmpty(ab.Path)?!0:ab.ValidPath)}var paths={adblock:"Device.Services.AdBlock.",usb:"Device.USB.Storage."},config=null,__initConfig=null,__initCpeConfig=null,attrs=null,converter=device.adblock.converter,isPlugged=!1,validPath=!0;return{pull:function(){function success(response){var data=funcs.buildTree(response[0].result.ParameterList);return attrs=funcs.buildTreeAttributes(response[1].result.ParameterList),parseStorageStatus(response[2]),__initCpeConfig=funcs.deepClone(data),config=converter.dsysinitToNative(data),__initConfig=funcs.deepClone(config),validPath=funcs.deepClone(config.ValidPath),config.ValidPath=getValidPath,Promise.resolve()}var arrPaths=[paths.adblock];return arrPaths.push(paths.usb),Promise.all([cpe.GetParameterValues(arrPaths),cpe.GetParameterAttributes([paths.adblock]),devinfo.once(paths.usb)]).then(success,function(){return Promise.reject()})},push:push,getData:getData,getStorageStatus:getStorageStatus,isModified:isModified,subscribe:function($scope){var area=[paths.adblock];area.push(paths.usb),devinfo.subscribe(area.join("|"),function(data){data&&(parseStorageStatus(data),parseValidPath(data))},$scope)}}}])}();