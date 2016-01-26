app.directive('appDetails',function(){
 return{
    restrict: 'E',
    scope:{
        inf: '='
    },
    templateUrl:'js/directives/appInfo.html'
 }
});