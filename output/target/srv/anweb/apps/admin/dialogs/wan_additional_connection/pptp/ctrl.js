"use strict";function WanAdditionalConnectionPPTPDialogCtrl($scope){var data=$scope.ngDialogData;$scope.connType=data.type,$scope.select={type:{value:null,list:[]},connection:{value:null,list:[]},isShowConnection:function(){return"internet"==select.type.value&&select.connection.list.length>1}};var select=$scope.select;!function(){!function(){var list=select.type.list;list.push({label:"wan_additional_select_type_internet",value:"internet"}),data.useAuto&&list.push({label:"wan_additional_select_type_vpn",value:"vpn"})}(),function(){var list=select.connection.list;data.notCreate||list.push({label:"wan_additional_select_connection_new",value:{type:"new"}}),_.each(data.connections,function(elem){list.push({label:elem.data.Name,value:elem})})}()}(),function(){!function(){var list=select.type.list;select.type.value=list.length?list[0].value:null}(),function(){var list=select.connection.list;select.connection.value=list.length?list[0].value:null}()}(),$scope.cancel=function(){$scope.closeThisDialog(null)},$scope.apply=function(){var mode=function(){return"vpn"==select.type.value?"auto":"internet"==select.type.value?"new"==select.connection.value.type?"new":"select":void 0}(),connection="select"==mode?select.connection.value:null;$scope.closeThisDialog({mode:mode,connection:connection})}}