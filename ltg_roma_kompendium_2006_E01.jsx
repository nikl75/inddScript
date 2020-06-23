//ltg_roma_kompendium_2006_E01.jsx
//
//Vergibt bestehender XML-Struktur GUID und Time-Stamp.
//

main();

function main(){
	var _dok = app.activeDocument;
	var _rootXML = _dok.xmlElements[0];

	
	_rootXML.xmlElements.item(1).xmlAttributes.add("example_attribute", "This is an XML attribute. It will not appear in the layout!");


	display(_rootXML[1]);
}

function display(mCon){
	alert(mCon);
}
