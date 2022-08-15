var racesFactionsTN = {

    "human": [
        "Republic",
        "Free Heaven Movement",
        "Red Fist",
        "Justice Empire",
        "City State of Deprov",
        "Church of the Cybergod",
        "Future Empire",
        //other
        "Boson Conundrum",
        "Cult of the Dark Machine",
        "Green Squad",
        "The Holy Kingdom of Smaex Prye",
        "Honey Kingdom",
        "Jade Legion",
        "The Khali",        
        "The Möebius",
        "Nation of the Independent Ghost Hunter Troops",
        "The National-Communist Galactic Belt",
        "Order of the Corpse Bombers",
        "Sons of the Ring",
        "Union Fort",
        "Wooden Troopland",
        //sub-factions
        "Atmo-Jumper Guild",
        "Dragon Troopers",
        "Scarab Node"        
    ],

    "Cloudan": [
        "Cloudan Confederacy",
        "Houken Fleet"
    ],

    "Aurost": [
        "Aurost Fatherland of Embemea",
    ],

    "Sun Serpent": [
        "Sun Serpent Empire",
        "Moon Serpent Sect"
    ],

    "minor": [
        "Xeronod race",
    ],

    "Anubis": [
        "Anubis"
    ],

    "Dark Machine": [
        "Dark Machine"
    ],

    //"uninhabited": [ "uninhabited" ]

}

//numbers related to the TN universe that are potentiall important
//always read 'meaning' like: "the number of"
var numbersTN = [

    {   meaning:"solar systems",
        value:900000   },

    {   meaning:"Planet Monuments",
        value:15720000,
        subsets: {

            //gas giant, rocky planet and moon distribution
            "celestial body type": [

                {   meaning:"gas giants",
                    value:1217000   },
                {   meaning:"rocky planets",
                    value:4822000   },
                {   meaning:"moons",
                    value:9681000   }
            ],

            //how many uninhabited planets exist per planet category? (2 755 000 overall)
            "uninhability distribution": [

                {   meaning:"gas giants",
                    value:1215000   },          
                {   meaning:"rocky planets",
                    value:420000   },
                {   meaning:"moons",
                    value:1130000   }                
            ],

            //faction division
            "faction affiliation": [

                {   meaning:"Republic colonies",
                    value:3000000,
                    subsets: [
                        {   meaning:"Republic",
                            value:2999943   },
                        {   meaning:"Atmo-Jumper Guild",
                            value:57   },                                                   
                    ]
                },                    
                {   meaning:"Free Heaven Movement colonies",
                    value:2640000,
                    subsets: [
                        {   meaning:"Free Heaven Movement",
                            value:2640000   },                                                
                    ]
                },
                {   meaning:"Technological Warzone colonies",
                    value:1558000,
                    subsets: [
                    //distribution within the TWZ
                        {   meaning:"Red Fist colonies",
                            value:392000,
                            subsets: [
                                {   meaning:"Red Fist",
                                    value:392000   }, 
                            ]   
                        },
                        {   meaning:"Justice Empire colonies",
                            value:438000,
                            subsets: [
                                {   meaning:"Justice Empire",
                                    value:437500   }, 
                                {   meaning:"Dragon Troopers",
                                    value:500      },                                     
                            ] 
                        },
                        {   meaning:"Church of the Cybergod colonies",
                            value:256000,
                            subsets: [
                                {   meaning:"Church of the Cybergod",
                                    value:256000   }, 
                            ] 
                        },
                        {   meaning:"Future Empire colonies",
                            value:372000,
                            subsets: [
                                {   meaning:"Future Empire",
                                    value:372000   }, 
                            ] 
                        }
                    ]
                },

                {   meaning:"Aurost colonies",
                    value:1351000,
                    subsets: [
                        {   meaning:"Aurost Fatherland of Embemea",
                            value:1351000  }, 
                    ]                        
                
                },
                {   meaning:"Cloudan colonies",
                    value:1933100,   
                    subsets: [
                        {   meaning:"Cloudan Confederacy",
                            value:1933000  }, 
                        {   meaning:"Houken Fleet",
                            value:100  },                            
                    ]                   
                },
                {   meaning:"Sun Serpent colonies",
                    value:1000900,   
                    subsets: [
                        {   meaning:"Sun Serpent Empire",
                            value:1000000  }, 
                        {   meaning:"Moon Serpent Sect",
                            value:900  },                             
                    ]                   
                },               
                {   meaning:"Anubis colonies (non-COTC)",
                    value:156000, 
                    subsets: [
                        {   meaning:"Anubis",
                            value:156000  },
                    ]                      
                },
                {   meaning:"colonies under Dark Machine occupation",
                    value:157000,   
                    subsets: [
                        {   meaning:"Dark Machine",
                            value:157000  },
                    ] 
                },
                {   meaning:"everything else",
                    value:4024000,   
                    subsets: [
                        {   meaning:"Boson Conundrum",
                            value:10000     },                         
                        {   meaning:"City State of Deprov",
                            value:1         }, 
                        {   meaning:"Honey Kingdom",
                            value:27000     },                             
                        {   meaning:"Jade Legion",
                            value:214000    },                                                    
                        {   meaning:"The Khali",
                            value:75000     },  
                        {   meaning:"The Möebius",
                            value:300000    },
                        {   meaning:"Nation of the Independent Ghost Hunter Troops",
                            value:8000      },                               
                        {   meaning:"The National-Communist Galactic Belt",
                            value: 98000    },                                                        
                        {   meaning:"Scarab Node",
                            value:35        },                              
                        {   meaning:"Union Fort",
                            value:1         },     
                        //{   meaning:"uninhabited",
                        //    value:2755000   },                                                                           
                    ]
                }
                //so far, 4,024,000 are the rest
                //these are autonomous, uninhabitable, undiscovered or otherwise outsider.

            ]
        }

    }

]

//include anywhere where the Ethereal Runes would be used

var simpleRunes = ["Ab", "Ai", "An", "Ao", "Ar", "Au",
                    "Be", "Bi", "Bo",
                    "Ca", "Co", "Cu",
                    "Da", "De", "Di",
                    "Ei", "El", "Ep", "Er", "Ev",
                    "Ia", "Ib", "Is", "Iv",
                    "Ga", "Go",
                    "Ha", "He",
                    "Ka", "Ke", "Ki",
                    "La", "Lu",
                    "Ma", "Me", "Mi",
                    "Na", "Ne", "Ni",
                    "Ob", "On", "Op",
                    "Pi", "Po",
                    "Ra", "Re", "Ri", "Ro", "Ru",
                    "Sa", "Se",
                    "Ta", "Te",
                    "Uv", "Ua",
                    "Va", "Vi", "Vo", "Vu",
                    "Za", "Ze", "Zi"];

var specialRunes = ["Bon", "Boq", "Bor",
                    "Cai", "Cao", "Cko", "Clu", "Cyar",
                    "Dan", "Dar", "Dis", "Dorg", "Dok", "Dox",
                    "Eje", "Eni",
                    "Gao",
                    "Hak", "Han", "Hel", "Hua", "Hva",
                    "Khe", "Kre",
                    "Lar",
                    "Mak", "Mal", "Mö",
                    "Nab", "Neo", "Nex", "Nos", "Nyk",
                    "Och", "Ota",
                    "Pel",
                    "Rea", "Rob", "Roi", "Rio", "Ris", "Ros",
                    "Sen", "Ses", "Shi", "Spi",
                    "Tem", "Tov", "Tzui",
                    "Vek", "Vel", "Voz",
                    "Ya",
                    "Xio", "Xy"];


var calendars = [
	["BY", "Beacon Year"],
	["KW", "Kvahk'er'Weplec"],
	["RD", "Republic Date"],
	["RY", "Resistance Year"],
	["IC", "Initial Contact"],
	["CD", "CyberDomini"],
	["UD", "Union Day"]
];

//the core
function convertDate(in_cal, in_date, out_cal){


	in_date = parseInt(in_date);
	var orig = in_date;

	//each number shows, when a certain calender started compared to the others
	//e.g. 563159 in BY equals to 1 in KW and 100325 in KW equals to 1 in RD
	var DateOrder =  [563159, 100325, 3426, 1406, 2036, 1042];
	var in_id = -1;
	var ou_id = -1;

	function MinorConvert(string){

		var output = -2;
		for(i=0;i<calendars.length;i++){ if(string==calendars[i][0]){ output = i-1 }}
		return output;

	}

	in_id = MinorConvert(in_cal);
	ou_id = MinorConvert(out_cal);

	//-2 serves as an error code
	//it was implemented, when "calendar" wasn't added yet, but I'm afraid to eliminate
	if (in_id > -2 && ou_id > -2){

		//if the calendars different, it iterates through the calendar array
		//if the calendars are identical, it doesn't change the input
		if (in_id != ou_id){
			if(in_id<ou_id)	     {	for(s=in_id;s<ou_id;s++){ in_date-= DateOrder[s+1]; }
				   						}else{	for(s=ou_id;s<in_id;s++){ in_date+= DateOrder[s+1]; }
			};
		};


	}else{ window.alert(in_cal + " to " + out_cal + " doesn't seem to be a valid conversation.") };


	//input is the returning value, either changed or unchanged (see comments at the condition above)
	return in_date;



}
