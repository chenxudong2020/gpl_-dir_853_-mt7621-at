"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};!function(){angular.module("app").controllerProvider.register("HomeCtrl",["$scope","pageList","$state","translate",function($scope,pageList,$state){$scope.goPortsWizard=function(){$state.go("wizard.ports")},$scope.goStorageDlna=function(){$state.go("storage.dlna")},$scope.goUrlFilter=function(){$state.go("firewall.urlfilter")},$scope.goPrintServer=function(){$state.go("printserver")},$scope.goStorageTorrent=function(){$state.go("storage.torrent")},$scope.goWifiMac=function(){$state.go("wifi.mac")},$scope.goWifiCommon=function(){$state.go("wifi.common")},$scope.goYandexDnsRules=function(){$state.go("yandexdns.rules")},$scope.goSkyDns=function(){$state.go("skydns.settings")},pageList.summary&&($scope.goSummary=function(){$state.go("summary")}),$scope.goVServ=function(){$state.go("firewall.vservers.info")},$scope.hasForbidden=function(page){return"object"==("undefined"==typeof excludedPages?"undefined":_typeof(excludedPages))&&_.contains(excludedPages,page)},$scope.$emit("pageload")}])}();