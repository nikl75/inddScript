//ltg_roma_kompendium_2006_E01.jsx
//
//Vergibt bestehender XML-Struktur GUID und Time-Stamp.
//

var tTime = new Date();

main();

function main() {
	var dok = app.activeDocument;
	var rootXML = dok.xmlElements[0];
	var tElementCount = 0;


	var tItems = rootXML.evaluateXPathExpression("//*");
	// var tItems = rootXML.evaluateXPathExpression("//B02_Abschnitt");

	// pop(tItems.length);

	for (var i = 0; i < tItems.length; i++) {
		var tItem = tItems[i];

		if (!tItem.xmlAttributes.itemByName("GUID").isValid) {
			var tGUID = buildGUID();
			tItem.xmlAttributes.add("GUID", tGUID);
			// pop(tItem.isValid);
			tElementCount++;
		}
	}
	pop(tElementCount + " Elemente geändert");
}

function pop(mCon) {
	alert(mCon);
}

function buildGUID(){
	/* in die GUID noch teile des Dateinamen einfügen
	 * dient der Versionierung und das GUID dokument-übergreifend nicht 
	 * doppelt vergeben werden können 
	 */
	 var tGUID = "GUID_roma_kompendium_" + "DATEINAME" + "_" +  + tTime.getTime() + "_" + getRandomInt(100000);

		return tGUID;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}