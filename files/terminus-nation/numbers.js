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
