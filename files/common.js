function angularCreateMenu(appInitDivId, linksJSON){

    document.getElementById(appInitDivId).attributes["ng-init"].value = "links="+JSON.stringify(linksJSON)

}