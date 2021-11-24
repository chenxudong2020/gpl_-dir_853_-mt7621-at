"use strict";angular.module("app").controllerProvider.register("TracerouteSettings",function($scope,translate,$document,$timeout,navigationFilter){var customRules=navigationFilter.rules(),maxTtl=customRules.TracerouteMaxTtl||30,nQueries=customRules.TracerouteNQueriesl||2,waitTime=customRules.TracerouteWaitTime||3;$scope.setSettings=function(){$scope.tracerouteAdditionalSettings.$invalid||$scope.closeThisDialog()},$scope.applyKeypress=function(event){13==event.keyCode&&$timeout(function(){$scope.setSettings();var elm=document.querySelector("#traceroute_set_settings");elm.focus()})},$scope.resetSettings=function(){$scope.traceroute.max_ttl=maxTtl,$scope.traceroute.nqueries=nQueries,$scope.traceroute.waittime=waitTime},$scope.isInDefaultState=function(){return $scope.traceroute.max_ttl==maxTtl&&$scope.traceroute.nqueries==nQueries&&$scope.traceroute.waittime==waitTime},$scope.isNotChanged=function(){return $scope.traceroute.max_ttl==$scope.traceroute.tmp_max_ttl&&$scope.traceroute.nqueries==$scope.traceroute.tmp_nqueries&&$scope.traceroute.waittime==$scope.traceroute.tmp_waittime},$scope.closeSettingsDialog=function(){return $scope.isNotChanged()?void $scope.closeThisDialog():void(confirm(translate("discard_changes"))&&($scope.traceroute.max_ttl=$scope.traceroute.tmp_max_ttl,$scope.traceroute.nqueries=$scope.traceroute.tmp_nqueries,$scope.traceroute.waittime=$scope.traceroute.tmp_waittime,$scope.closeThisDialog()))}});