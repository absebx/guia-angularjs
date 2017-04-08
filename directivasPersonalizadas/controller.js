angular.module("mainApp",[])
  .directive('backImg',function(){
    return function(scope,element,attrs){
      //observe nos permite ingresar a los atrivutos de un elemento como si fueran json u objeto
      //observe solo se ejecuta una vez compilado el javascript, por eso no usar otra manera
      attrs.$observe('backImg',function(value){
        //el value es la url que mandamos, despues que angular la evaluara
        element.css({
          'background': 'url('+value+')',
          'background-size' : 'cover',
          'background-position' : 'center'
        });
      })
    }
  }) //background: url({{repo.owner.avatar_url}});background-position: center;
  //background-size: cover;
  .controller("mainController",function($scope,$http){
    $scope.name = "Nombre generico";
    $http.get("https://api.github.com/users/mozilla/repos")
      .then(function(data){
        $scope.repos = data.data;
      },function(err){
        console.log("Error: "+err.statusText);
      });
  });
