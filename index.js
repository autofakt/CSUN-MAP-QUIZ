var globalIndex = 0;



function initMap() {

  //Counters for right/wrong questions
  var correct = 0;
  var wrong = 0;

  //Array for all the questions. Used within a loop structure
  var questionArray = ["Where is the police services station?", "Where is the Soraya Performing Arts Center?", "Where is Sequoia Hall?", "Where are the tennis courts?", "Where is the soccer practice field?"];

  var landmarks = [{
      type: "Police Station",
      north: 34.23912168112364,
      south: 34.23818150970245,
      east: -118.53290096876049,
      west: -118.53382364866161
    },
    {
      type: "The Soraya",
      north: 34.236159218612464,
      south: 34.23562702867313,
      east: -118.52745072004222,
      west: -118.52888838407421
    },
    {
      type: "Sequoia Hall",
      north: 34.240877822258156,
      south: 34.240115058387076,
      east: -118.52749363538646,
      west: -118.52850214597606
    },
    {
      type: "Tennis Courts",
      north: 34.244656062310824,
      south: 34.24362726257336,
      east: -118.52339522001171,
      west: -118.5246183073225,
    },
    {
      type: "Soccer Practice Field",
      north: 34.24611055082738,
      south: 34.245401047374045,
      east: -118.5257341062727,
      west: -118.52710739728832,
    }

  ];

  // The location of CSUN
  const csun = {
    lat: 34.2429,
    lng: -118.52827
  };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: csun,
    gestureHandling: "none",
    zoomControl: false,
    mapTypeControl: false,
    featureType: "none",
    mapId: 'dce91e9065195c89',
    streetViewControl: false,
    fullscreenControl: false
  });

  const policeStation = new google.maps.Rectangle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map,
    bounds: {
      north: 34.23912168112364,
      south: 34.23818150970245,
      east: -118.53290096876049,
      west: -118.53382364866161,
    }
  });

  //Used for the infobox data. One of each rectangle
  const contentString1 =
    "Police Services Station";
  const infowindow1 = new google.maps.InfoWindow({
    content: contentString1,
    maxWidth: 80,
    disableAutoPan: true,
    position: {
      lat: 34.238713683494574,
      lng: -118.53333012220287
    },
    title: "Police Services"
  });

  policeStation.addListener("click", () => {
    infowindow1.open(map);
  });

  const theSoraya = new google.maps.Rectangle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map,
    bounds: {
      north: 34.236159218612464,
      south: 34.23562702867313,
      east: -118.52745072004222,
      west: -118.52888838407421,
    }
  });

  const contentString2 =
    "The Soraya - Younes and Soraya Nazarian Center for the Performing Arts";
  const infowindow2 = new google.maps.InfoWindow({
    content: contentString2,
    maxWidth: 120,
    disableAutoPan: true,
    position: {
      lat: 34.23589312406329,
      lng: -118.52822319623851
    },
    title: "The Soraya"
  });

  theSoraya.addListener("click", () => {
    infowindow2.open(map);
  });

  const sequoiaHall = new google.maps.Rectangle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map,
    bounds: {
      north: 34.240877822258156,
      south: 34.240115058387076,
      east: -118.52749363538646,
      west: -118.52850214597606,
    }
  });

  const contentString3 =
    "Sequoia Hall - Within this 82,000 square-foot two-story modern structure sits the Marilyn Magaram Center, which includes a Food Science laboratory with a conference room, A Food chemistry laboratory, and the Nobbs Auditorium.";
  const infowindow3 = new google.maps.InfoWindow({
    content: contentString3,
    maxWidth: 120,
    disableAutoPan: true,
    position: {
      lat: 34.24054078791157,
      lng: -118.52800861951732
    },
    title: "Sequoia Hall"
  });

  sequoiaHall.addListener("click", () => {
    infowindow3.open(map);
  });

  const tennisCourts = new google.maps.Rectangle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map,
    bounds: {
      north: 34.244656062310824,
      south: 34.24362726257336,
      east: -118.52339522001171,
      west: -118.5246183073225,
    }
  });

  const contentString4 =
    "Tennis Courts - Located near Parking Lot G4. There are 26 blue tennis courts and nets with shaded seating area.";
  const infowindow4 = new google.maps.InfoWindow({
    content: contentString4,
    maxWidth: 120,
    disableAutoPan: true,
    position: {
      lat: 34.24414166401399,
      lng: -118.52401749250316
    },
    title: "Tennis Courts"
  });

  tennisCourts.addListener("click", () => {
    infowindow4.open(map);
  });

  const soccerPracticeField = new google.maps.Rectangle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map,
    bounds: {
      north: 34.24611055082738,
      south: 34.245401047374045,
      east: -118.5257341062727,
      west: -118.52710739728832,
    }
  });

  const contentString5 =
    "Practice Soccer Field - Located south of Matador Diamond and west of the Matador Tennis Complex. Parking to attend Matador soccer matches is available in Lot F5.";
  const infowindow5 = new google.maps.InfoWindow({
    content: contentString5,
    maxWidth: 120,
    disableAutoPan: true,
    position: {
      lat: 34.245738062260145,
      lng: -118.52639929410839
    },
    title: "Soccer Practice Field"
  });

  soccerPracticeField.addListener("click", () => {
    infowindow5.open(map);
  });

  //Adds all the rectangles into an array for loops
  var recArray = [];
  recArray.push(policeStation);
  recArray.push(theSoraya);
  recArray.push(sequoiaHall);
  recArray.push(tennisCourts);
  recArray.push(soccerPracticeField);


  //Hides all the rectangles until its time
  policeStation.setOptions({
    visible: false
  });
  theSoraya.setOptions({
    visible: false
  });
  sequoiaHall.setOptions({
    visible: false
  });
  tennisCourts.setOptions({
    visible: false
  });
  soccerPracticeField.setOptions({
    visible: false
  });


  function playWrong() {
    var wrong = new Audio('wrong.mp3');
    wrong.play();
  }

  function playCorrect() {
    var correct = new Audio('correct.mp3');
    correct.play();
  }

  function addShakeClass() {
    var map = document.getElementById("map");
    map.classList.add("shakes");
  }

  function removeShakeClass() {
    var map = document.getElementById("map");
    map.classList.remove("shakes");
    map.scrollBy(0, 0);
  }

  function loadQuestion(index) {
    var quiz = document.getElementById("quiz");
    var tempQuestion = document.createElement("P");
    tempQuestion.classList.add("questions");
    tempQuestion.innerHTML = questionArray[index];
    quiz.appendChild(tempQuestion);
  }

  function loadCorrectAnswer() {
    var quiz = document.getElementById("quiz");
    var tempAnswer = document.createElement("P");
    tempAnswer.classList.add("correctAnswers");
    tempAnswer.innerHTML = "Yes, that was correct!";
    quiz.appendChild(tempAnswer);
    playCorrect();
  }

  function loadWrongAnswer() {
    var quiz = document.getElementById("quiz");
    var tempWrongAnswer = document.createElement("P");
    tempWrongAnswer.classList.add("wrongAnswers");
    tempWrongAnswer.innerHTML = "No, that was wrong!";
    quiz.appendChild(tempWrongAnswer);
    playWrong();
    addShakeClass();
  }

  function checkAnswer(lat, lng, index) {
    var latGood = (lat <= landmarks[index].north && lat >= landmarks[index].south);
    var lngGood = (lng >= landmarks[index].west && lng <= landmarks[index].east);
    return latGood && lngGood;
  }

  function loadResultsTab() {
    var quiz = document.getElementById("quiz");
    var tempResult = document.createElement("P");
    tempResult.classList.add("resultTab");
    tempResult.innerHTML = "correct: " + correct + "  wrong: " + wrong;
    quiz.appendChild(tempResult);
  }

  function start() {
    var startButton = document.getElementById("start");
    startButton.disabled = 'disabled';
    google.maps.event.addListener(map, "dblclick", function(e) {
      removeShakeClass();
      var result = e.latLng.toJSON();
      //  alert(result.lat + " "+ result.lng);
      var answerCorrect = checkAnswer(result.lat, result.lng, globalIndex);

      if (answerCorrect) {
        correct++;
        loadCorrectAnswer();
        recArray[globalIndex].strokeColor = "green";
        recArray[globalIndex].fillColor = "green";
        recArray[globalIndex].setOptions({
          visible: true
        });
      } else {
        wrong++;
        loadWrongAnswer();
        recArray[globalIndex].strokeColor = "red";
        recArray[globalIndex].fillColor = "red";
        recArray[globalIndex].setOptions({
          visible: true
        });
      }
      globalIndex++;
      if (globalIndex < 5) {
        loadQuestion(globalIndex);
      } else {
        loadResultsTab();
      }
    });
    loadQuestion(globalIndex);
    policeStation.setOptions({
      visible: false
    });
    theSoraya.setOptions({
      visible: false
    });
    sequoiaHall.setOptions({
      visible: false
    });
    tennisCourts.setOptions({
      visible: false
    });
    soccerPracticeField.setOptions({
      visible: false
    });

  }

  function onload() {
    var startButton = document.getElementById("start");
    startButton.addEventListener("click", start);
  }

  window.addEventListener("load", onload);

}
