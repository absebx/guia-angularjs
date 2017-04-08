angular.module("mainApp",[])
  .run(function($rootScope){
    $rootScope.name = "RootName";
  })
  .controller("mainController",function($scope){
    $scope.name="Controlador Nombre";

    $scope.click = function(){
      $scope.name="nombreCLick";
      console.log("lala");
    }

  }).controller("childController", function($scope){
    //$scope.name="Controlador hijo";
  });
