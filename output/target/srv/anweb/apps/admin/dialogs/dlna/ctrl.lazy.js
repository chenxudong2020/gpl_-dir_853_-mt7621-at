"use strict";function MediaDirDialogController($scope){$scope.dir=$scope.ngDialogData.dir,$scope.mediaTypes=$scope.ngDialogData.mediaTypes,$scope.header=$scope.ngDialogData.isNew?"dlna_media_new_dir":"dlna_media_edit_dir",$scope.setDirectoryPath=function(node){$scope.currentFolder=node},$scope.selectDirectory=function(){$scope.dir.Path=$scope.currentFolder?$scope.currentFolder.Path:null,$scope.toggleFileBrowser(!1)},$scope.toggleFileBrowser=function(show){$scope.showFilebrowser=show},$scope.fileBrowserSelectEnabled=function(){return!!$scope.currentFolder},$scope.saveDir=function(){$scope.form.$invalid||$scope.closeThisDialog($scope.dir)},$scope.validateName=function(name){return name&&!function(name){var reg=/^([a-zA-Z0-9А-Яа-я\s])+$/;return reg.test(name)}(name)?"msg_invalid_name":null}}angular.module("app").controllerProvider.register("MediaDirDialogController",MediaDirDialogController);