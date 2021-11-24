"use strict";!function(){angular.module("app").service("ddnsUtil",["funcs","device","cpe","cpex",function(funcs,device,cpe){function makeHelper(){return new device.ddns.Helper(config)}function apply(settings){function getPath(data){var path=constants.ddns+"Instances."+(_.isUndefined(data.Instance)?"+1":data.Instance);return path}var data=converter.nativeToDsysinit(settings),initRule=funcs.fetchBranch(__initConfig,getPath(settings)+".");initRule=initRule?funcs.setValue(getPath(settings),initRule,{}):{};var diff=funcs.newConfig.makeDiff(initRule,data,attrs);return _.isEmpty(diff)?Promise.resolve():cpe.ApplyDifference(diff)}var attrs,config={},converter=device.ddns.converter,__initConfig=null,constants={ddns:"Device.Services.DDNS.",anweb:"Device.Services.Anweb.",iface:"Device.Network.Interface.",conn:"Device.Network.Connection.",wanGroup:"Device.Network.Group.",deviceInfo:"Device.DeviceInfo."};return{pull:function(){function getCustomProviders(){return[]}return Promise.all([cpe.GetParameterValues([constants.ddns,constants.anweb,constants.iface,constants.conn,constants.wanGroup,constants.deviceInfo]),cpe.GetParameterAttributes([constants.ddns])]).then(function(response){var data=funcs.buildTree(response[0].result.ParameterList);return data.custom=getCustomProviders(),attrs=funcs.buildTreeAttributes(response[1].result.ParameterList),__initConfig=funcs.deepClone(data),config=converter.dsysinitToNative(data),Promise.resolve()},function(){return Promise.reject()})},apply:apply,makeHelper:makeHelper,remove:function(items){var indexes=_.pluck(items,"Instance"),removeDiff={};return _.each(indexes,function(index){removeDiff[index]={Enable:!1},removeDiff["-"+index]={}}),removeDiff=funcs.setValue(constants.ddns+"Instances",removeDiff,{}),cpe.ApplyDifference(removeDiff)},wasActivate:function(){return!1}}}])}();