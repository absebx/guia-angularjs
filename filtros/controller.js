angular.module("mainApp",[])
  .filter("removeHtml",function(){
    return function(texto){
      return String(texto).replace(/<[^>]+>/gm,'');
    }
  })
  .controller("mainController",function($scope){
    $scope.name="abner"
    $scope.textHtml="<h1>Hola estoy en un html</h1>"
    $scope.costo = 1500;
    $scope.auto = {};
    $scope.auto.modelo = "autoBkn";
    $scope.auto.costo = 3699;
  });
