"use strict";function DHCPServerAddressPoolDialogCtrl($scope){var ranges=$scope.ngDialogData.ranges;$scope.range={value:null,list:[]},function(){_.each(ranges,function(range){$scope.range.list.push({label:range.start+" - "+range.end,value:range})})}(),function(){$scope.range.list,$scope.range.value=$scope.range.list[0].value}(),$scope.dialog={apply:function(){$scope.closeThisDialog($scope.range.value)},cancel:function(){$scope.closeThisDialog(null)}}}