main();
function main() {

    app.activeDocument.allGraphics


    var doc = app.properties.activeDocument,
        text,
        xt,
        xe,
        xa;

    if (!doc) return;
    xt = doc.xmlTags.itemByName("emphasis");
    if (!xt.isValid) { xt = doc.xmlTags.add({ name: "emphasis" }); }
    text = app.selection;
    if (text.length != 1 || (!text[0].properties.baseline)) {
        alert("You need to select some text…");
        return;
    }
    text = text[0];

    xe = doc.xmlElements[0].xmlElements.add(xt, text);
    xa = xe.xmlAttributes.itemByName("type");
    if (!xa.isValid) {
        xa = xe.xmlAttributes.add("type", "bold");
    }
}
