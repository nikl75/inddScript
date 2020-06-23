//ltg_roma_kompendium_2006_E01.jsx
//
//Vergibt bestehender XML-Struktur GUID und Time-Stamp.
//

main();

function main() {
	var dok = app.activeDocument;
	var rootXML = dok.xmlElements[0];


	var tTags = dok.xmlTags;

	var tItems = rootXML.evaluateXPathExpression("//*");
	// var tItems = rootXML.evaluateXPathExpression("//B02_Abschnitt");

	pop(tItems.length);

	for (var i = 0; i < tItems.length; i++) {
		var tItem = tItems[i];

		if (!tItem.xmlAttributes.itemByName("GUID").isValid) {
			var tGUID = buildGUID();
			tItem.xmlAttributes.add("GUID", tGUID);
			// pop(tItem.isValid);
		}
	}
}

function pop(mCon) {
	alert(mCon);
}

function buildGUID(){
		return "GUID_XXX_123456";
}