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

// Arrays & For Loops

var bendingAttack = [ 
		"Water-Bending ", 
		"Fire-Bending ", 
		"Earth-Bending ", 
		"Sword-Fighting ", 
		"Air-Bending "
		];

var timeSpentFighting = [ 14, 
						  11, 
						  6, 
						  8, 
						  5
						  ];

var teamNames = [" Tetra ", 
				 " Kimara", 
				 " Teaaka",
				 " Makuu", 
				 " Pitu"
				 ];

var timeFight = function(startFight) {
    var fight = bendingAttack[startFight]
    var timeSpentInFight = timeSpentFighting[nextFighter] 	
    var fighter = teamNames[nextFighter] 
    console.log (fighter + " will kick some Anti-Benders butts, by " + fight + " minutes " + timeSpentInFight +
                 " AHHHHH! Fight! ");

	for (var t1= 0; t1 < timeSpentInFight; t1++) {
         
         console.log (fighter + " has been fighting for. " + t1 + " minutes! ");
         
         for (var t= 0; t < teamNames; t++) {}
         }
         console.log ("Anti-Bender defeated!! ");
         };
  
	for (var nextFighter = 0; nextFighter < teamNames.length; nextFighter++) 
		{ timeFight(nextFighter);
		};
	
	console.log ("We cleaned up house, and the city is free from suppressing forces! ")  
     
// exit loop
    



            
 

