angular.module("ajaxApp",[])
  .controller("ajaxController",function($scope,$http){
    $scope.nombre="abner";
    $scope.posts=[];
    $scope.loading = true;
    $http.get("https://jsonplaceholder.typicode.com/posts")
      .then(function(data){
        $scope.posts=data.data;
        console.log($scope.posts);
        $scope.loading=false;
      },function(err){

      });


  });
