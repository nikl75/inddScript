//ltg_roma_kompendium_2006_E01.jsx
//
//Vergibt bestehender XML-Struktur GUID und Time-Stamp.
//

main();

function main(){
	//Make certain that user interaction (display of dialogs, etc.) is turned on.
	app.scriptPreferences.userInteractionLevel = UserInteractionLevels.interactWithAll;
	var myObjectList = new Array;
	if(app.documents.length != 0){
		tellme();

	}
	
}

function display(mCon){
}
