var app = angular.module("sampleApp", ["firebase"]);

app.controller("QuizCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://cppleaders.firebaseio.com/cppleaders");


  function authHandler(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      // download the data into a local object
      var query = ref.orderByValue();
      $scope.submissions = $firebaseArray(query);
    }
  }

  function load() {
    // ref.orderByValue().on("value", function(snapshot) {
    //   $scope.submissions = [];
    //   var newset = [];
    //   snapshot.forEach(function(data) {
    //     var r = {};
    //     r.user = data.key();
    //     r.timeSpent = data.val();
    //     newset.push(r);                        
    //   });
    //   console.log(newset);
    //   $scope.submissions = newset;
    //   console.log($scope.submissions);
    // });

    var query = ref.orderByValue();
    $scope.submissions = $firebaseArray(query);  
    //console.log("don");
    console.log($scope.submissions);
  }

  load();
    
  // ref.child("cppleaders").on("value", function(snapshot) {
  //   alert(snapshot.val());  // Alerts "San Francisco"
  // });
  
  // ref.authWithPassword({
  //   email    : 'yusun@csupomona.edu',
  //   password : '12345'
  // }, authHandler);

});
