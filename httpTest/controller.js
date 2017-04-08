angular.module("ajaxApp",[])
  .controller("ajaxController",function($scope,$http){
    $scope.nombre="abner";
    $scope.posts=[];
    $scope.newPost={};
    $http.get("https://jsonplaceholder.typicode.com/posts")
      .then(function(data){
        $scope.posts=data.data;
        console.log($scope.posts);
      },function(err){

      });

    $scope.addPost = function(){
      $http.post("https://jsonplaceholder.typicode.com/posts",{
        title: $scope.newPost.title,
        body: $scope.newPost.body,
        userID: 1
      })
        .then(function(data,status,headers,config){
          $scope.posts.push($scope.newPost);
          $scope.newPost={};
          console.log(data);
        },function(data,status,headers,config){

        });
    }
  });
