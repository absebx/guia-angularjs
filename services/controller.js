angular.module("todoApp",["LocalStorageModule"])
  .service('ToDoService',function(localStorageService){

    this.key = "todolist";
    //se mueve la logica de creacion del objeto al servicio
    if(localStorageService.get(this.key)){
      this.activities = localStorageService.get(this.key);
    }else{
      this.activities = [];
    }

    this.add = function(newActv){
      this.activities.push(newActv);
      this.updateLocalStorage();
    }

    this.updateLocalStorage = function(){
      localStorageService.set(this.key,this.activities);
    }

    this.clean = function(){
      this.activities = [];
      this.updateLocalStorage();
      return this.activities;
    }

    this.getAll = function(){
      return this.activities;
    }

    this.removeItem = function(item){
      this.activities = this.activities.filter(function(activity){
        //si el resultado es verdadero se guarda, si da falso se quita
        //por eso se invierte la logica, se tienen que quedar los que son diferentes
        return activity !== item;
      });
      this.updateLocalStorage();
      return this.getAll();
    }
  })
  .controller("todoController",function($scope,$http,ToDoService){
    $scope.name="abner";
    $scope.newActv={};
    $scope.todo=ToDoService.getAll();

    $scope.addActv = function(){
      ToDoService.add($scope.newActv);
      $scope.newActv={};
    }

    $scope.clean = function(){
      $scope.todo = ToDoService.clean();
    }

    $scope.removeActv = function(item){
      $scope.todo =ToDoService.removeItem(item);

    }
  });
