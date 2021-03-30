// Vardenis Pavardenis, MKDf-14/#
// Mokomes piesti pagal PATH'us
app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
app.newProject();
//pradiniai duomenys
var compWidth = null;
var compHeigth = null;
var aR = 1;
var compDuration = null;
var FPS = 25;
var size = null;
// (isNaN(compWidth)) - patikrinama ar ivedamas skaicius
// (compWidth % 1 !==0)  - tikrina ar ivestas skaicius yra sveikasis
// duom neu ivedimo patikrinimai
while (
  compWidth == null ||
  isNaN(compWidth) ||
  compWidth % 1 !== 0 ||
  compWidth < 4 ||
  compWidth > 30000
) {
  var compWidth = prompt("Enter composition width", 2000);
  if (
    compWidth == null ||
    isNaN(compWidth) ||
    compWidth % 1 !== 0 ||
    compWidth < 4 ||
    compWidth > 30000
  ) {
    alert("Please enter an INTEGER in range 4...30000");
  }
}
while (
  compHeigth == null ||
  isNaN(compHeigth) ||
  compHeigth % 1 !== 0 ||
  compHeigth < 4 ||
  compHeigth > 30000
) {
  var compHeigth = prompt("Enter composition heigth", 2000);
  if (
    compHeigth == null ||
    isNaN(compHeigth) ||
    compHeigth % 1 !== 0 ||
    compHeigth < 4 ||
    compHeigth > 30000
  ) {
    alert("Please enter an INTEGER in range 4...30000");
  }
}
while (
  compDuration == null ||
  isNaN(compDuration) ||
  compDuration < 0.1 ||
  compDuration > 10800.0
) {
  var compDuration = prompt("Enter composition duration", 10);
  if (
    compDuration == null ||
    isNaN(compDuration) ||
    compDuration < 0.1 ||
    compDuration > 10800.0
  ) {
    alert("Please enter a number in range 0,1...10800,00");
  }
}
while (
  size == null ||
  isNaN(size) ||
  size % 1 !== 0 ||
  size < 500 ||
  size > 10000
) {
  var size = prompt("Enter box size", 1000);
  if (
    size == null ||
    isNaN(size) ||
    size % 1 !== 0 ||
    size < 500 ||
    size > 10000
  ) {
    alert("Please enter an INTEGER in range 500...10000");
  }
}
//kompozicijos parametrai
var w = parseInt(compWidth);
var h = parseInt(compHeigth);
var cD = parseInt(compDuration);
//kubo parametrai
var boxSize = parseInt(size);
var halfSize = boxSize / 2;
// kompozicijos kurimas
var myComp = app.project.items.addComp("myComp", w, h, aR, cD, FPS);
myComp.openInViewer();
//vaizdo centro koordinates
var w2 = w / 2;
var h2 = h / 2;
// laiko paramterai
var startTime = 1;
var endTime = 5;
var midTime = (endTime + startTime) / 2;
var sideOpacity = 50;
// kubo parametrai
var triangleSideLength = halfSize * Math.sqrt(2);
var triangleHalfLength = triangleSideLength / 2;
var triangleHeight = Math.sqrt(
  Math.pow(triangleSideLength, 2) - Math.pow(triangleHalfLength, 2)
);
var triangleLongHeightPart = (triangleHeight / 3) * 2;
var triangleShortHeightPart = (triangleHeight / 3) * 1;
var boxSideDiagonal = boxSize * Math.sqrt(2);
var boxSideHalfDiagonal = boxSideDiagonal / 2;
var boxDiagonal = boxSize * Math.sqrt(3);
var boxHalfDiagonal = boxDiagonal / 2;
var triangleAnchorZ = Math.sqrt(
  Math.pow(boxSideHalfDiagonal, 2) - Math.pow(triangleLongHeightPart, 2)
);
var angleX = (Math.atan2(boxSize, boxSize) * 180) / Math.PI;
var angleY = (Math.acos(triangleAnchorZ / boxSideHalfDiagonal) * 180) / Math.PI;
var angleZ = (Math.atan2(triangleHalfLength, triangleHeight) * 180) / Math.PI;
//paramteru isvestis pasitikrinimui
alert(
  "Parameters of BOX are: \
SideDiagonal: " +
    boxSideDiagonal +
    "\
SideHalfDiagonal: " +
    boxSideHalfDiagonal +
    "\
BoxDiagonal: " +
    boxDiagonal +
    "\
BoxHalfDiagonal: " +
    boxHalfDiagonal +
    "\
triangleSideLength: " +
    triangleSideLength +
    "\
triangleHalfLength: " +
    triangleHalfLength +
    "\
triangleHeight: " +
    triangleHeight +
    "\
triangleLongHeightPart: " +
    triangleLongHeightPart +
    "\
triangleShortHeightPart: " +
    triangleShortHeightPart +
    "\
AnchorLength: " +
    triangleAnchorZ +
    "\
angleX:" +
    angleX +
    "\
angleY:" +
    angleY +
    "\
angleZ:" +
    angleZ
);
//kuriamas null object'as kuris valdys kubo padeti asiu atzvilgiu
var myNull = myComp.layers.addNull();
myNull.source.name = "Valdikliai";
myNull.threeDLayer = true;
myNull.property("Transform").property("Position").setValue([w2, h2, 0]);
// kubo konstravimas
{
  app.beginUndoGroup("AddCubeSides");
  for (i = 1; i <= 6; i++) {
    var myShape = myComp.layers.addShape();
    myShape.name = "Box" + i;
    myShape.threeDLayer = true;
    myShape.parent = myNull;
    myShape.property("Transform").property("Position").setValue([0, 0, 0]);
    myShape
      .property("Transform")
      .property("Anchor Point")
      .setValueAtTime(midTime, [0, 0, halfSize]);
    myShape
      .property("Transform")
      .property("Anchor Point")
      .setValueAtTime(endTime, [0, 0, boxSize]);
    if (i <= 4) {
      myShape
        .property("Transform")
        .property("Orientation")
        .setValue([0, i * 90, 0]);
    } else {
      myShape
        .property("Transform")
        .property("Orientation")
        .setValue([i * 180 + 90, 0, 0]);
    }
    myShape.property("Transform").property("Opacity").setValue([sideOpacity]);
    var myShapeContent = myShape
      .property("Contents")
      .addProperty("ADBE Vector Group");
    var myShapeGroup = myShape.property("Contents").property("Group 1");
    var myShapePath = myShapeGroup
      .property("Contents")
      .addProperty("ADBE Vector Shape - Group");
    var myShapeMask = myShapePath.property("Path");
    var myShapeM = myShapeMask.value;
    var p11 = [-halfSize, -halfSize];
    var p12 = [-halfSize, -halfSize];
    var p13 = [-halfSize, halfSize];
    var p14 = [-halfSize, halfSize];
    var p15 = [halfSize, halfSize];
    var p16 = [halfSize, halfSize];
    var p17 = [halfSize, -halfSize];
    var p18 = [halfSize, -halfSize];
    myShapeM.vertices = [p11, p12, p13, p14, p15, p16, p17, p18];
    myShapeMask.setValueAtTime(startTime, myShapeM);
    myShapeM.closed = true;
    var p21 = [0, -halfSize];
    var p22 = [-halfSize, 0];
    var p23 = [-halfSize, 0];
    var p24 = [0, halfSize];
    var p25 = [0, halfSize];
    var p26 = [halfSize, 0];
    var p27 = [halfSize, 0];
    var p28 = [0, -halfSize];
    myShapeM.vertices = [p21, p22, p23, p24, p25, p26, p27, p28];
    myShapeMask.setValueAtTime(midTime, myShapeM);
    myShapeM.closed = true;
    var p31 = [0, -0];
    var p32 = [0, -0];
    var p33 = [0, -0];
    var p34 = [0, -0];
    var p35 = [0, -0];
    var p36 = [0, -0];
    var p37 = [0, -0];
    var p38 = [0, -0];
    myShapeM.vertices = [p31, p32, p33, p34, p35, p36, p37, p38];
    myShapeMask.setValueAtTime(endTime, myShapeM);
    myShapeM.closed = true;
    var myShapeFill = myShapeGroup
      .property("Contents")
      .addProperty("ADBE Vector Graphic - Fill");
    myShapeFill.property("Color").setValue([125 / 255, 125 / 255, 125 / 255]);
    var myShapeStroke = myShapeGroup
      .property("Contents")
      .addProperty("ADBE Vector Graphic - Stroke");
    myShapeStroke.property("Color").setValue([0 / 255, 0 / 255, 0 / 255]);
    myShapeStroke.property("Stroke Width").setValue([5]);
  }
  app.endUndoGroup();
}
//trikampiu konstravimas
{
  app.beginUndoGroup("AddTriangle");
  for (i = 1; i <= 8; i++) {
    var myTriangle = myComp.layers.addShape();
    myTriangle.name = "Triangle";
    myTriangle.threeDLayer = true;
    myTriangle.parent = myNull;
    myTriangle.property("Transform").property("Position").setValue([0, 0, 0]);
    myTriangle
      .property("Transform")
      .property("Anchor Point")
      .setValueAtTime(startTime, [0, 0, boxDiagonal / 2]);
    myTriangle
      .property("Transform")
      .property("Anchor Point")
      .setValueAtTime(midTime, [0, 0, triangleAnchorZ]);
    switch (i) {
      case 1:
        myTriangle
          .property("Transform")
          .property("Orientation")
          .setValue([-angleX, angleY, angleZ]);
        break;
      case 2:
        myTriangle
          .property("Transform")
          .property("Orientation")
          .setValue([angleX, angleY, angleZ]);
        break;
      case 3:
        myTriangle
          .property("Transform")
          .property("Orientation")
          .setValue([angleX, angleY + 180, angleZ]);
        break;
      case 4:
        myTriangle
          .property("Transform")
          .property("Orientation")
          .setValue([-angleX, angleY + 180, angleZ]);
        break;
      case 5:
        myTriangle
          .property("Transform")
          .property("Orientation")
          .setValue([angleX, -angleY, -angleZ]);
        break;
      case 6:
        myTriangle
          .property("Transform")
          .property("Orientation")
          .setValue([angleX, -angleY + 180, -angleZ]);
        break;
      case 7:
        myTriangle
          .property("Transform")
          .property("Orientation")
          .setValue([-angleX, -angleY + 180, -angleZ]);
        break;
      case 8:
        myTriangle
          .property("Transform")
          .property("Orientation")
          .setValue([-angleX, -angleY, -angleZ]);
        break;
    }
    myTriangle
      .property("Transform")
      .property("Opacity")
      .setValue([sideOpacity]);
    var myTriangleContent = myTriangle
      .property("Contents")
      .addProperty("ADBE Vector Group");
    var myTriangleGroup = myTriangle.property("Contents").property("Group 1");
    var myTrianglePath = myTriangleGroup
      .property("Contents")
      .addProperty("ADBE Vector Shape - Group");
    var myTriangleMask = myTrianglePath.property("Path");
    var myTriangleM = myTriangleMask.value;
    var p11 = [0, 0];
    var p12 = [0, 0];
    var p13 = [0, 0];
    var p14 = [0, 0];
    var p15 = [0, 0];
    var p16 = [0, 0];
    myTriangleM.vertices = [p11, p12, p13, p14, p15, p16];
    myTriangleMask.setValueAtTime(startTime, myTriangleM);
    myTriangleM.closed = true;
    var p21 = [-triangleHalfLength, -triangleShortHeightPart];
    var p22 = [-triangleHalfLength, -triangleShortHeightPart];
    var p23 = [triangleHalfLength, 0 - triangleShortHeightPart];
    var p24 = [triangleHalfLength, 0 - triangleShortHeightPart];
    var p25 = [0, triangleLongHeightPart];
    var p26 = [0, triangleLongHeightPart];
    myTriangleM.vertices = [p21, p22, p23, p24, p25, p26];
    myTriangleMask.setValueAtTime(midTime, myTriangleM);
    myTriangleM.closed = true;
    var p31 = [-triangleSideLength, triangleLongHeightPart];
    var p32 = [0, -triangleShortHeightPart - triangleHeight];
    var p33 = [0, -triangleShortHeightPart - triangleHeight];
    var p34 = [triangleSideLength, triangleLongHeightPart];
    var p35 = [triangleSideLength, triangleLongHeightPart];
    var p36 = [-triangleSideLength, triangleLongHeightPart];
    myTriangleM.vertices = [p31, p32, p33, p34, p35, p36];
    myTriangleMask.setValueAtTime(endTime, myTriangleM);
    myTriangleM.closed = true;
    var myTriangleFill = myTriangleGroup
      .property("Contents")
      .addProperty("ADBE Vector Graphic - Fill");
    myTriangleFill.property("Color").setValue([255 / 255, 0 / 255, 0 / 255]);
    var myTriangleStroke = myTriangleGroup
      .property("Contents")
      .addProperty("ADBE Vector Graphic - Stroke");
    myTriangleStroke.property("Color").setValue([0 / 255, 0 / 255, 0 / 255]);
    myTriangleStroke.property("Stroke Width").setValue([5]);
  }
  app.endUndoGroup();
}
//kuriama kamera
var myCamera = myComp.layers.addCamera("Camera", [1000, 1000]);
myNull.moveToBeginning();
