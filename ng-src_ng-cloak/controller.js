angular.module("mainApp",[])
  .controller("mainController",function($scope,$http){
    $scope.name = "Nombre generico";
    $http.get("https://api.github.com/users/mozilla/repos")
      .then(function(data){
        $scope.repos = data.data;
      },function(err){
        console.log("Error: "+err.statusText);
      });
  });
