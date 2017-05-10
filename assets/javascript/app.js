$(document).ready(function(){
  console.log ("ready!");

  var config = {
    apiKey: "AIzaSyCcZlQoF-ztyvVMFyx50OImbfe-iNRK3K0",
    authDomain: "trainscheduler-fb53f.firebaseapp.com",
    databaseURL: "https://trainscheduler-fb53f.firebaseio.com",
    projectId: "trainscheduler-fb53f",
    storageBucket: "trainscheduler-fb53f.appspot.com",
    messagingSenderId: "360605777643"
  };
  firebase.initializeApp(config);



// Create a variable to reference the database
var database = firebase.database();

    // Initial Values
    var trainName = "";
    var destination = "";
    var trainTime = 0;
    var frequency = 0;

    // Capture Button Click
    $("#submit").on("click", function(event) {
      // Don't refresh the page!
      event.preventDefault();
      console.log("working");



    // YOUR TASK!!!
      // Code in the logic for storing and retrieving the most recent user.
      // Don't forget to provide initial data to your Firebase database.
      trainName = $("#trainName").val().trim();
      destination = $("#trainDestination").val().trim();
      trainTime = $("#trainTime").val().trim();
      frequency = $("#trainFrequency").val().trim();

      console.log(trainName, destination, trainTime, frequency)

      database.ref().push({
        trainName: trainName,
        destination: destination,
        trainTime: trainTime,
        frequency: frequency
    });
  });

    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("child_added", function(childSnapshot){
        var sv = childSnapshot.val();
        console.log("sv", sv);

        var svArr = Object.keys(sv);
        console.log("svArr", svArr);

      var lastIndex = svArr.length-1;

      var lastKey = svArr[lastIndex];

      var lastObj = sv[lastKey]


        console.log(sv.trainName)
        console.log(sv.destination)
        console.log(sv.trainTime)
        console.log(sv.frequency)


$("#table").append("<tr><td>"+sv.trainName+"</td><td>"+sv.destination+"</td><td>"+sv.trainTime+"</td><td>"+sv.frequency+"</td></tr>");



  },

    function(errorObject){
      console.log("The read failed: " + errrorObject.code);
  });




});

