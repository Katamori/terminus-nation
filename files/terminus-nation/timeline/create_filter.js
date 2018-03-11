/* MAIN PROCESS FLOW */

//defined in create_timeline.js
addBox();

createCheckboxList(["race", "faction", "context"]);










/* FUNCTIONS TO IMPLEMENT IT */
/*

NOTE: AS OF 2017/06/09, THESE FUNCTIONS HAVE BEEN DEPRECATED DUE TO THE USE OF ANGULAR.

//4: select all/none
function setCheckboxes(selfdiv, value){
    $(selfdiv).find("input[type=checkbox]").prop('checked', value);
}


//3: hide and show appropriate elements


function filterAll(){

    for(
    num=0, event=timelineJSON[0];
    num<timelineJSON.length;
    num++, event=timelineJSON[num]){

        $("#eventno"+(num+1)).show();

        var dateBY = convertDate(event.calendar, event.year, "BY");

        //first condition: no negative values are sorted out - sorry, it's for simplicity        
        if(
                dateBY >= Number($("#age_min").val()) &&
                dateBY <= Number($("#age_max").val()) &&
                $("#"+event.race.replace(/\s/g, '')).is(':checked') &&
                $("#"+event.faction.replace(/\s/g, '')).is(':checked') &&
                $("#"+event.context.replace(/\s/g, '')).is(':checked')
        ){
            $("#eventno"+(num+1)).show();
        }else {
            $("#eventno"+(num+1)).hide();          
        }



    }


}
*/

//2: create a list of checkboxes for a div
function createCheckboxList(categories){

    categories.forEach(function(category) {

        var tempCh = "";


        createList(category).forEach(function(item){
            tempCh+=
                "<input type='checkbox' "+
                    "ng-model='"+item.replace(/\s/g, '').replace(/ö/g, 'o')+"' "+
                    "id='"+item.replace(/\s/g, '')+"'>"+item+"<br>"
        })
     
        $("#select_"+category).append(
            "<input type='checkbox' ng-model='all_"+category+"'>Select all<br>"+
            //append selector buttons
            //"<button type='button' onclick='setCheckboxes(select_"+category+", true)'>Select all</button><br>"+
            //"<button type='button' onclick='setCheckboxes(select_"+category+", false)'>Select none</button><br>"+
            //and the important part            
            tempCh+"<br><br>"
        )  

    });

}


//1: this function selects all the distinct elements from the timeline
//(note: itemname must be a string, with "" signs)
function createList(itemname){

    var internalList = [];

    //do the first step, whatever occurs
    internalList.push(timelineJSON[0][itemname]);

    //do for the rest
    for(m=1;m<timelineJSON.length;m++){

        var isUnique = true;

        for(z=0; (z<internalList.length && isUnique); z++){
            isUnique = isUnique && (timelineJSON[m][itemname] != internalList[z]);
        }

        if (isUnique){ internalList.push(timelineJSON[m][itemname]) };


    }

    //case-sensitive ABC sort for usability
    return internalList.sort(function(a, b){return a.localeCompare(b)});

}
    