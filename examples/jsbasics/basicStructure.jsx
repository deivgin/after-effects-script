// Vardenis Pavardenis, MKDf-#/#
//naudojama viso bloko undo-redo grupe

// uzdaro esama projekta be jokiu klausimu
app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
// sukurian auj projekta
app.newProject();
//apsirasomi pradiniai kintamieji
var compW = null;
var compH = null;
var compA = 1;
var compD = null;
var compFPS = 25;
// (isNaN(compW)) - patikrinama ar ivedamas skaicius
// (compW % 1 !==0)  - tikrina ar ivestas skaicius yra sveikasis
// duomenu ivedimo patikrinimai
while (
  compW == null ||
  isNaN(compW) ||
  compW % 1 !== 0 ||
  compW < 4 ||
  compW > 30000
) {
  var compW = prompt("Enter composition width", 1920);
  if (
    compW == null ||
    isNaN(compW) ||
    compW % 1 !== 0 ||
    compW < 4 ||
    compW > 30000
  ) {
    alert("Please enter an INTEGER in range 4...30000");
  }
}
while (
  compH == null ||
  isNaN(compH) ||
  compH % 1 !== 0 ||
  compH < 4 ||
  compH > 30000
) {
  var compH = prompt("Enter composition heigth", 1080);
  if (
    compH == null ||
    isNaN(compH) ||
    compH % 1 !== 0 ||
    compH < 4 ||
    compH > 30000
  ) {
    alert("Please enter an INTEGER in range 4...30000");
  }
}
while (compD == null || isNaN(compD) || compD < 0.1 || compD > 10800.0) {
  var compD = prompt("Enter composition duration", 60);
  if (compD == null || isNaN(compD) || compD < 0.1 || compD > 10800.0) {
    alert("Please enter a number in range 0,1...10800,00");
  }
}
// ivestu duomenu priskyrimas reikiamam duomenu tipui
var w = parseInt(compW);
var h = parseInt(compH);
var cD = parseFloat(compD);

// metodas addComp sukuria nauja kompozicija su ivestais duomenimis
var myComp = app.project.items.addComp("myComp", w, h, compA, cD, compFPS);
// atidaro kompocizija aktyviame LA lange
myComp.openInViewer();

//kuriam LA
{
  app.beginUndoGroup("createLayers");
  var mySolid = myComp.layers.addSolid([0, 0, 0] / 255, "BKG", w, h, compA, cD);
  var myShape = myComp.layers.addShape();
  var myNull = myComp.layers.addNull();
  var myText = myComp.layers.addText();

  myShape.name = "testShape";
  myNull.source.name = "controllers";
  app.endUndoGroup();
}

{
  app.beginUndoGroup("configureParameters");
  var myShapeRectangle = myShape
    .property("Contents")
    .addProperty("ADBE Vector Shape - Rect");
  myShapeRectangle.property("Size").setValue([200, 200]); // const
  var animStopTime = 3;
  myShape
    .property("Transform")
    .property("Position")
    .setValueAtTime(0, [0, 540]); // KF1
  myShape
    .property("Transform")
    .property("Position")
    .setValueAtTime(animStopTime, [1920, 540]); // KF2
  //myShape.property("Transform").property("Rotation").expression = '''linear(time,0,'''+animStopTime+''',0,360*10);'''; // break EXP insert VAR
  var myExp = "var t = time;linear(t,0,$endTime,0,360*10);";
  myShape.property("Transform").property("Rotation").expression = myExp.replace(
    "$endTime",
    animStopTime
  ); // EXP replace
  var myFX = myShape.property("Effects").addProperty("Gaussian Blur");
  myFX.property("Blurriness").setValue([20]);
  myFX.property("Blur Dimensions").setValue(2);

  var myShapeFill = myShape
    .property("Contents")
    .addProperty("ADBE Vector Graphic - Fill");
  myShapeFill.property(1).setValue(2); // value from ARRAY >> drop-down menu list
  app.endUndoGroup();
}

myNull.moveToBeginning();
