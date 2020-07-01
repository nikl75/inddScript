//ltg_roma_kompendium_2006_E01.jsx
//
//Vergibt bestehender XML-Struktur GUID und Time-Stamp.
//

var tTime = new Date();
var dok = app.activeDocument;
var tDocName = dok.name;

main();

function main() {
	var rootXML = dok.xmlElements[0];
	var tElementCountGUID = 0;
	var tElementCountIS = 0;
	var tElementCountIT = 0;
	var tOVERWRITE = 0;

	var tItems = rootXML.evaluateXPathExpression("//*");
	// var tItems = rootXML.evaluateXPathExpression("//B02_Abschnitt");

	// pop(tItems.length);

	for (var i = 0; i < tItems.length; i++) {
		var tItem = tItems[i];

		if (!tItem.xmlAttributes.itemByName("GUID").isValid) {
			var tGUID = buildGUID();
			tItem.xmlAttributes.add("GUID", tGUID);
			tElementCountGUID++;
		}
		// } else if (tItem.xmlAttributes.itemByName("GUID").isValid && tOVERWRITE){
		// 	var tGUID = buildGUID();
		// 	tItem.xmlAttributes.item("GUID").value = tGUID;
		// 	tElementCountGUID++;
		// }
		if (!tItem.xmlAttributes.itemByName("indesign-source").isValid) {
			tItem.xmlAttributes.add("indesign-source", tDocName)
			tElementCountIS++;
		} else if (tItem.xmlAttributes.itemByName("indesign-source").isValid){
			tItem.xmlAttributes.item("indesign-source").value = tDocName;
			tElementCountIS++;
		}
		if (!tItem.xmlAttributes.itemByName("indesign-timestamp").isValid) {
			tItem.xmlAttributes.add("indesign-timestamp", buildTIMESTAMP());
			tElementCountIT++;
		} else if (tItem.xmlAttributes.itemByName("indesign-timestamp").isValid && tOVERWRITE){
			tItem.xmlAttributes.item("indesign-timestamp").value = buildTIMESTAMP();
			tElementCountIT++;

		}
	}
	pop(tElementCountGUID + " GUID\n" + tElementCountIS + " Indesign-Source\n" +tElementCountIT + " Indesign-Timestamp");
}

function pop(mCon) {
	alert(mCon);
}

function buildGUID(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
function buildTIMESTAMP(){
	return tTime.getTime().toString();
}