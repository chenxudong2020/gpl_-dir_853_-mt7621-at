"use strict";function IPTVStepController($scope,$rootScope,manualProfile,translate){var freeLanPorts,lanPorts,profile=manualProfile.profile();$scope.noFreeLans=!1,profile.$Groups&&profile.$Groups.lan&&(freeLanPorts=[],lanPorts=$rootScope.rootLANPorts,_.each(lanPorts,function(port){port.management||freeLanPorts.push(port.name)}),0==freeLanPorts.length&&($scope.noFreeLans=!0)),$scope.iptvStep={isHide:function(field){switch(field){case"UseVID":case"Use":case"VPIVCI":return autoconf.BR2_PACKAGE_ANWEB_CUSTOM_ROSTELECOM_35980||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_ROSTELECOM_36855||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_TATTELEKOM_36956||autoconf.BR2_PACKAGE_ANWEB_CUSTOM_ROSTELECOM_41660}},profile:profile,onIptvStepUseChange:function(){profile.$IPTVStep.Use||manualProfile.clearServices("iptv")},requiredVID:function(){return manualProfile.requiredVID()},setIPTVService:function(port){var warn=manualProfile.setService(port,"iptv");warn&&_.defer(function(){return alert(translate(warn))})},checkJointVLAN:function(){var warn=manualProfile.checkJointVLAN("$IPTVStep");warn&&_.defer(function(){return alert(translate(warn))})},checkJointVPIVCI:function(){var warn=manualProfile.checkJointVPIVCI("$IPTVStep");warn&&_.defer(function(){return alert(translate(warn))})}}}angular.module("wizard").controller("IPTVStepController",IPTVStepController),IPTVStepController.$inject=["$scope","$rootScope","manualProfile","translate"];