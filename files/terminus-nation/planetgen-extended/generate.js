Math.seedrandom();

function generatePlanet(){

    //empty out HTML blocks
    document.getElementById("name").innerHTML = "";
    document.getElementById("type").innerHTML = "";
    document.getElementById("race").innerHTML = "";
    document.getElementById("faction").innerHTML = "";

    //some actual logic
    var planets = [];


    for(a=0; a<document.getElementById("max").value; a++){

        /*
        KEPT FOR HISTORICAL PURPOSES

        var raceID = Math.floor(Math.random()*Object.keys(racesFactionsTN).length);
        var factionID = Math.floor(Math.random()*Object.keys(racesFactionsTN[Object.keys(racesFactionsTN)[raceID]]).length)
        */

        var type = generateType();
        var occupants = generateFaction(type);

        //console.log(occupants);

        var params = {
            name: generateName(),
            type: type,
            race: occupants[0],
            faction: occupants[1]

        }

        planets[a] = new Planet();
        planets[a].fillData(params);



        document.getElementById("name").innerHTML += planets[a].getName() + "<br>"; 
        document.getElementById("type").innerHTML += planets[a].getType() + "<br>"; 
        document.getElementById("race").innerHTML += params.race + "<br>";  
        document.getElementById("faction").innerHTML += params.faction + "<br>";                 
    }    
       

}

function generateName(){

    var maxlength = 7;
    var spaceChance = 2;

    var name = "";
    var syll = 0;
    var hadSpace = false;

    //unlike in the previous version, special runes are used by default
    var runes = simpleRunes.concat(specialRunes);

    //for evey planet, randomize the name length
    syll = Math.ceil(Math.random()*maxlength);

    for(i=0; i<syll; i++){

        name += runes[Math.floor((Math.random() * runes.length))];

        //random space, with 100/spaceChance percent of change
        //only if it's the first space and is not on the edge
        if(!(hadSpace) && (i<syll-1 && i>0) && (Math.floor(Math.random() * spaceChance) == 0))
        {   name += " "; i++; hadSpace = true; }
    }

    //source: https://stackoverflow.com/a/4478303/2320153
    name = name.toLowerCase().replace(/(?: |\b)( \w)/g, function(name, r){ return r.toUpperCase()})
    
    return name.charAt(0).toUpperCase() + name.slice(1);

}

function generateType(){

    //create probability line
    var line = [];
    line.push(numbersTN[1].subsets["celestial body type"][0].value);
    line.push(numbersTN[1].subsets["celestial body type"][1].value + line[0]);  
    line.push(numbersTN[1].subsets["celestial body type"][2].value + line[1]);

    var ret = Math.floor(Math.random()*line[2]);

    if(line[0] >= ret){                   ret = 1 }else
    if(line[1] >= ret && ret > line [0]){ ret = 2 }else
    if(line[2] >= ret && ret > line [1]){ ret = 3 }  

    return ret;  
}



function generateFaction(ptype){

    var ret= [];

    //decide if it's inhabited or not
    var inhChance = Math.ceil(Math.random()*numbersTN[1].subsets["celestial body type"][ptype-1].value);

    if(inhChance < numbersTN[1].subsets["uninhability distribution"][ptype-1].value){
        ret[0]="uninhabited";
        ret[1]="uninhabited";      
        return ret;

    }else{

        //if it can be inhabited:
        var line = [ { faction:"nothing", value:0 } ];

        //creating "ratio line" for randomgen via recursive depth search on the faction number list
        function fillLine(obj){

            obj.forEach(function(e) {
                if(typeof e.subsets === "undefined"){
                    line.push( { faction:e.meaning, value:e.value+line[line.length-1].value } )              
                }else{               
                    fillLine(e.subsets)
                }  
            }, this);

        }

        fillLine(numbersTN[1].subsets["faction affiliation"]);
        //console.log(line);

        //generate the number
        var n = Math.ceil(Math.random()*line[line.length-1].value);
        var found = false;

        for(m=1; !found && m<line.length-1; m++){
            found = found || ((n>=line[m-1].value) && (n<line[m].value))
        }

        //console.log(line[m-2].value+" < "+n+" < "+line[m-1].value+
        //            " meaning that this planet belongs to "+line[m-1].faction)
            

        //find the race and return with the values
        Object.keys(racesFactionsTN).forEach(function(e) {
            racesFactionsTN[e].forEach(function(inner_e) {
                if ( inner_e === line[m-1].faction ){ 
                    ret[0]=e;
                    ret[1]=line[m-1].faction;
                }       
            }, this);
        }, this);

        return ret;
    }
}
