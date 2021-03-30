app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
app.newProject();
var compName = "myText";
var compWidth = 1920;
var compHeight = (h = 1080);
var compAspect = (a = 1);
var compDuration = 60;
var compFPS = 25;
var midH = compHeight / 2;
var midW = compWidth / 2;
var myTextArray = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
];
var colorStep = 255 / myTextArray.length;

var myComp = app.project.items.addComp(
  compName,
  compWidth,
  compHeight,
  compAspect,
  compDuration,
  compFPS
);
myComp.openInViewer();

for (i = 0; i < myTextArray.length; i++) {
  var skaiciai = myComp.layers.addText(myTextArray[i]);
  skaiciai.property("Transform").property("Anchor Point").setValue([0, 300]);
  skaiciai
    .property("Transform")
    .property("Rotation")
    .setValue([(i + 1) * 30]);
  var skaiciaiProperty = skaiciai.property("Source Text");
  var skaiciaiPropertyValue = skaiciaiProperty.value;
  skaiciaiPropertyValue.resetCharStyle();
  skaiciaiPropertyValue.fontSize = [100];
  skaiciaiPropertyValue.font = "Felix Titling";
  var frequency = 0.5;
  var red = Math.sin(frequency * i + 0) * 127 + 128;
  var green = Math.sin(frequency * i + 2) * 127 + 128;
  var blue = Math.sin(frequency * i + 4) * 127 + 128;
  skaiciaiPropertyValue.fillColor = [red, green, blue] / 255;
  skaiciaiProperty.setValue(skaiciaiPropertyValue);
}
