// Vardenis Pavardenis, MKDf-14/#
// Mokomes piesti pagal PATH'us

app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
app.newProject();

var w = 1280;
var h = 720;
var aR = 1;
var cD = 60;
var FPS = 25;
//vaizdo centro koordinates
var w2 = w / 2;
var h2 = h / 2;
var myComp = app.project.items.addComp("myComp", w, h, aR, cD, FPS);
myComp.openInViewer();
// Mask i Solid'a (page 173-176)

var myShape = myComp.layers.addShape();
myShape.name = "Apskritimas";
var myCircle = myShape.property("Contents").addProperty("ADBE Vector Group");
var myCircleShape = myCircle
  .property("Contents")
  .addProperty("ADBE Vector Shape - Ellipse");
myCircleShape.property("Size").setValue([100, 100]);
myCircleShape.property("Position").setValue([0, 150]);
var myCircleStroke = myCircle
  .property("Contents")
  .addProperty("ADBE Vector Graphic - Stroke");
myCircleStroke.property("Stroke Width").setValue([1]);

var mySolid = myComp.layers.addSolid(
  [255 / 255, 0 / 255, 0 / 255],
  "CrossSolid",
  w,
  h,
  aR
);
/*
var newMask1 = mySolid.Masks.addProperty("Mask");
	var figure1 = newMask1.property("maskShape");
		var myShape1 = figure1.value;
		var p1 = [w2-100,h2-100];
		var p2 = [w2+100,h2-100];
		var p3 = [w2+100,h2+100];
		var p4 = [w2-100,h2+100];
		myShape1.vertices = [p1,p2,p3,p4];
		myShape1.closed = true;
		figure1.setValue(myShape1);
*/
var newMask2 = mySolid.Masks.addProperty("Mask");
var figure2 = newMask2.property("maskShape");
var myShape2 = figure2.value;
var p1 = [w2 - 150, h2 - 50];
var p2 = [w2 - 50, h2 - 50];
var p3 = [w2 - 50, h2 - 150];
var p4 = [w2 + 50, h2 - 150];
var p5 = [w2 + 50, h2 - 50];
var p6 = [w2 + 150, h2 - 50];
var p7 = [w2 + 150, h2 + 50];
var p8 = [w2 + 50, h2 + 50];
var p9 = [w2 + 50, h2 + 150];
var p10 = [w2 - 50, h2 + 150];
var p11 = [w2 - 50, h2 + 50];
var p12 = [w2 - 150, h2 + 50];
myShape2.vertices = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];
myShape2.inTangents = [
  [-60, -30],
  [30, 60],
  [-60, -30],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 67.23],
  [0, 0],
  [0, 0],
];
myShape2.outTangents = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 67.23],
  [0, 0],
  [0, 0],
  [0, 0],
];
myShape2.closed = true;
figure2.setValue(myShape2);

var newMask3 = mySolid.Masks.addProperty("Mask");
var figure3 = newMask3.property("maskShape");
var myShape3 = figure3.value;
var p1 = [w2 - 100, h2 - 100];
var p2 = [w2 + 100, h2 - 100];
var p3 = [w2 + 100, h2 + 100];
var p4 = [w2 - 100, h2 + 100];
myShape3.vertices = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
];
figure3.setValueAtTime(0, myShape3);
myShape3.vertices = [p1, p2, p3, p4];
figure3.setValueAtTime(5, myShape3);
myShape3.closed = true;
//////////////
var myShape2 = myComp.layers.addShape();
myShape2.name = "CrossShape";
myShape2.property("Transform").property("Position").setValue([100, 100]);
var myShape2Content = myShape2
  .property("Contents")
  .addProperty("ADBE Vector Group");
var myShape2Group = myShape2.property("Contents").property("Group 1");

var myShape2Path = myShape2Group
  .property("Contents")
  .addProperty("ADBE Vector Shape - Group");
var myShape2Mask = myShape2Path.property("Path");
var myShape2M = myShape2Mask.value;
var p1 = [w2 - 150, h2 - 50];
var p2 = [w2 - 50, h2 - 50];
var p3 = [w2 - 50, h2 - 150];
var p4 = [w2 + 50, h2 - 150];
var p5 = [w2 + 50, h2 - 50];
var p6 = [w2 + 150, h2 - 50];
var p7 = [w2 + 150, h2 + 50];
var p8 = [w2 + 50, h2 + 50];
var p9 = [w2 + 50, h2 + 150];
var p10 = [w2 - 50, h2 + 150];
var p11 = [w2 - 50, h2 + 50];
var p12 = [w2 - 150, h2 + 50];
myShape2M.vertices = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];
myShape2M.inTangents = [
  [-60, -30],
  [30, 60],
  [-60, -30],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 67.23],
  [0, 0],
  [0, 0],
];
myShape2M.outTangents = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 67.23],
  [0, 0],
  [0, 0],
  [0, 0],
];
myShape2M.closed = true;
myShape2Mask.setValue(myShape2M);
var myShapeFill = myShape2Group
  .property("Contents")
  .addProperty("ADBE Vector Graphic - Fill");
myShapeFill.property("Color").setValue([125 / 255, 125 / 255, 125 / 255]);
