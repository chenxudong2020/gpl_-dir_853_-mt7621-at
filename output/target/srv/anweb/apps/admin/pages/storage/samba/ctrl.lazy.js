"use strict";!function(){function storageSambaCtrl($scope,somovd,funcs,snackbars,ngDialog,translate,util){function init(){util.pull().then(function(){$scope.samba=util.getSettings(),__backupSamba=angular.copy($scope.samba),$scope.$emit("pageload")})}function editDir(dir,index,isNew){var dlg=ngDialog.open({template:"dialogs/samba/dialog.tpl.html",controller:"SambaDirDialogController",className:"dlna-dialog dialog_fixed_footer",resolve:funcs.getLazyResolve("dialogs/samba/ctrl.lazy.js","SambaDirDialogController"),data:{dir:angular.copy(dir),isNew:isNew,dirs:$scope.samba.Dirs,index:index}});dlg.closePromise.then(function(result){result&&result.value&&!_.isString(result.value)&&(isNew?$scope.samba.Dirs.push(result.value):_.extend(dir,result.value))})}var __backupSamba=null;init(),$scope.saveEnabled=function(){if(!$scope.samba)return!1;var changes=funcs.getChangesWithRemoved(__backupSamba,angular.copy($scope.samba));return!_.isEmpty(changes)},_.extend($scope,{apply:function(){function error(error){$scope.samba.Enable?error&&"invalid_usb_path"==error.name?($scope.samba.InvalidPath=!0,alert(translate("dlna_invalid_usb_path_note")),snackbars.add("dlna_invalid_usb_path_note")):snackbars.add("msg_rpc_write_error"):snackbars.add("msg_rpc_write_success"),init()}if(!$scope.storage_samba_form.$invalid){var overlay=$scope.overlay.circular,overlayId=overlay.start();util.apply($scope.samba).then(function(){$scope.samba.InvalidPath=!1,snackbars.add("msg_rpc_write_success"),init()})["catch"](error)["finally"](overlay.stop.bind(overlay,overlayId))}},editDir:editDir,createDir:function(){editDir({Name:""},null,!0)},removeDir:function(dir,indexes){$scope.samba.Dirs=_.toArray(_.omit($scope.samba.Dirs,indexes))}})}angular.module("app").controllerProvider.register("storageSambaCtrl",storageSambaCtrl),storageSambaCtrl.$inject=["$scope","somovd","funcs","snackbars","ngDialog","translate","sambaUtil"]}();