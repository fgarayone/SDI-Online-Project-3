// FREDDIE GARAY
// SDI ONLINE PROJECT 3
// TERMNUMBER 0212

// Story Begins
console.log ( "On the way to the city of Omagua, we had to stop for a rest. The city was full of refugee's that were affected ")
console.log ( "by the Anti-Benders. The Anti-benders were group dedicated only to suppressing the freedom of having bending ability")
console.log ( "We had to fight and defeat the anti-benders to leave the city. Each single one of us took turns fighting and freeing");
console.log ( "the city from these ruthless people.")
console.log (" ")

// JavaScript Starts

// Arrays

var bendingAttack = [ 
		"Water-Bending ", 
		"Fire-Bending ", 
		"Earth-Bending ", 
		"Sword-Fighting ", 
		"Air-Bending "
];

var timeSpentFighting = [ 8, 20, 10, 15, 25 ];
var teamNames = ["Tetra", "Kimara", "Teaaka","Makuu", "Pitu"];

var timeFight = function(startFight) {
    var strikeNow = bendingAttack[startFight],
        timeAllSpent = timeSpentFighting[nextPersonFight];
    console.log (teamNames[0] + " will kick some anti-benders butts, by " + bendingAttack[0] + " for " + timeAllSpent +
     " minutes " + " AHHHHH! Fight! ");
for (var time= 0; time < timeAllSpent; time +=2) {
      var timeLeft = timeAllSpent - time;
      
      console.log ("We have " + timeLeft + " minutes left. " + time + " done! ");

   }
    console.log (nextPersonFight + ",fight time completed! ")
};

for (var nextPersonFight =[0]; nextPersonFight < bendingAttack.length; nextPersonFight++)
        {
            timeFight(nextPersonFight);
};
          console.log ("We cleaned up house, and the city is free from suppressing forces! ")    
 

