//FREDDIE GARAY
// SDI ONLINE PROJECT 3
// TERMNUMBER 0212


console.log ( "On the way to the North Pole we had to stop to clean up Appa, the flying bison.")
console.log ("Appa, requires attention and time, because he has been flying for 2 days non-stop. Everyone has to take a turn with Appa.")
console.log ( " ");

var appaWash = [
    "Appa's Feet ",
    "Appa's Back ",
    " Appa's Tail ",
    "Appa's Head ",
    "Appa's Teeth "
];
var timeSpentAppa = [ 60, 40, 30, 45, 10 ];
var crewNames = ["Aang", "Kitara", "Soaka"," Toph" ];

var timeSpent = function(startWash) {
    var appaW = appaWash [startWash],
    var timeAllSpent = timeSpentAppa[nextPerson];
    
    console.log (crewNames[0] + " wanted us to wash " + appaW + " for " + timeAllSpent +
     " minutes " + " On your marks, get set, Go! ");
    
    for (var time= 0; time < timeAllSpent; time += 5) {
       var timeLeft = timeAllSpent - time;
    
     console.log ("We have " + timeLeft + " minutes left. " + time + " done! ");

   }
    console.log (appaW + ",wash time completed! ")
};

for (var nextPerson = 0; nextPerson < appaWash.length; nextPerson++)
        {
            timeSpent(nextPerson);
};
          console.log ("Appa is completely clean and ready to go! ")
// Objects

console.log( " ");
console.log ("Team Avatar must travel to the different locations and defeat anti-benders in the different cities. ");
console.log ("The team will be traveling to key cities and take over to free this important locations" );
console.log(" ");

var avatarTravelLocations = {
    North:" Omagua ",
    West:" Ketar  ",
    East:" Tilantis  ",
    South:" City of Aaang ",
    Travel:[
        " Northern Water Tribe ",
        " Ketar Earth City of Omashu  ",
        " Capital City of Tilantis ",
        " Southern Air City of Aang "
    ],
    Water:" Master Watuu ",
    Earth:" Master Erthia ",
    Fire:" Master Feiria  ",
    Air:" Monk Gya "
};

for (var launchMe in avatarTravelLocations) {
    console.log (" Location: " + launchMe +"," + avatarTravelLocations[launchMe]);
};

var handleData = function (json) {};

handleData(json);









