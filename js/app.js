//window.onload = function(){
//    var obj_lis = document.getElementById("test").getElementsByTagName("a");
//    for(i=0;i<obj_lis.length;i++){
//        obj_lis[i].onclick = function(){
//            var value =this.innerHTML;
//            alert(value);
//        }
//    }
//}
var nav="";
function value(val){
   nav = val;
   return nav;
}


var app = angular.module("myApp", ["ui.router"]);
//配置路由
app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state("list", {
            url: "/list/{type}",
            templateUrl: "template/template.html",
            controller: "myController"
        })
        $urlRouterProvider.otherwise("/list/toutiao");
    }])


app.controller("myController", ["$scope", "$http", "$rootScope", function ($scope, $http, $rootScope) {
        $rootScope.isShow = false;
        $scope.list = null;
        $rootScope.num = 10;
        $rootScope.spinnerShow = true;
        $rootScope.moreShow = true;
        $http({
            method: "get",
            url: "php/php.php"
//            params:{type:type}
        }).then(function (data) {

            $scope.list = data.data;
            $rootScope.isShow = true;
            $rootScope.spinnerShow = false;

        })
        $rootScope.more = function () {
            $rootScope.num += 10;
            if ($rootScope.num == 30) {
                $rootScope.moreShow = false;
            }
        }
    }
]);

