// Vardenis Pavardenis, MKDf-14/#
// Mokomes piesti 3D elementus
app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
app.newProject();

//pradiniai duomenys
var compWidth = 1920 * 4;
var compHeigth = 1080 * 4;
var aR = 1;
var compMidDuration = 10;
var compDuration = 20;
var FPS = 25;

// kubo duomenys
var cubeSize = compHeigth / 2;
var cubePartQuantity = 4;
var cubePartSize = cubeSize / cubePartQuantity;
var halfCubePartSize = cubePartSize / 2;

// kubo sienliu koordinaciu zingsniai
var xStart = -(cubePartQuantity - 1) * halfCubePartSize;
var yStart = xStart;
var zStart = cubeSize / 2;

//fono spalva
var bkg = [0, 0, 0] / 255;
// kubo sieneliu spalvos
var yellow = [248, 195, 0] / 255;
var grey = [114, 112, 111] / 255;
var red = [218, 37, 29] / 255;
var blue = [0, 124, 195] / 255;
var white = [222, 222, 221] / 255;
var green = [158, 203, 40] / 255;
var colors = [yellow, grey, red, blue, white, green];
// kubo sienliu pavadinimai
var pavadinimai = ["VIRSUS", "PRIEKIS", "KAIRE", "GALAS", "DESINE", "APACIA"]; //var sdkjbfc = pavadinimai[0].substring (indexA, indexB)

// laiko tasku kintamieji
var startTime = 0;
var endTime = Math.ceil(compMidDuration * 0.7);
var midTime = endTime * 0.7;

// kompozicija
var myComp = app.project.items.addComp(
  "myComp",
  compWidth,
  compHeigth,
  aR,
  compDuration,
  FPS
);
myComp.openInViewer();

//vaizdo centro koordinates
var w2 = compWidth / 2;
var h2 = compHeigth / 2;

// BKG
var myBackGround = myComp.layers.addSolid(
  bkg,
  "BKG",
  compWidth,
  compHeigth,
  aR,
  compDuration
);

// bendras kubo valdiklis
var myNull = myComp.layers.addNull();
myNull.source.name = "Bendras";
myNull.threeDLayer = true;
myNull.property("Transform").property("Position").setValue([w2, h2, 0]);
myNull.property("Transform").property("Y Rotation").expression =
  "360*5/Math.exp(time/3);";

{
  app.beginUndoGroup("AddCubeSides");
  // kubo sienu konstravimo algoritmas
  for (k = 0; k <= 5; k++) {
    var myNull2 = myComp.layers.addNull();
    myNull2.source.name = pavadinimai[k];
    myNull2.threeDLayer = true;
    myNull2.property("Transform").property("Position").setValue([w2, h2, 0]);
    myNull2.parent = myNull;
    // kubo daliu stulpelyje konstravimas
    for (i = 0; i <= 3; i++) {
      // kubo daliu eileje konstravimas
      for (j = 0; j <= 3; j++) {
        var n = i + 1;
        var m = j + 1;

        var myShape = myComp.layers.addShape();
        myShape.name = pavadinimai[k].substring(0, 3) + "_" + n + m; //.char(0); indexOf...
        myShape.threeDLayer = true;
        myShape.parent = myNull2;
        var z = zStart + Math.ceil(Math.random() * 6000);
        var zz = -zStart + Math.ceil(Math.random() * 20000);
        var randomEndTime = Math.random() * midTime + 2;
        myShape
          .property("Transform")
          .property("Position")
          .setValueAtTime(startTime, [
            xStart + cubePartSize * j,
            yStart + cubePartSize * i,
            z,
          ]);
        myShape
          .property("Transform")
          .property("Position")
          .setValueAtTime(randomEndTime, [
            xStart + cubePartSize * j,
            yStart + cubePartSize * i,
            zStart,
          ]);
        myShape
          .property("Transform")
          .property("Position")
          .setValueAtTime(compMidDuration, [
            xStart + cubePartSize * j,
            yStart + cubePartSize * i,
            zStart,
          ]);
        myShape
          .property("Transform")
          .property("Position")
          .setValueAtTime(compMidDuration + 1, [
            xStart + cubePartSize * j,
            yStart + cubePartSize * i,
            zz,
          ]);
        myShape
          .property("Transform")
          .property("Opacity")
          .setValueAtTime(startTime, [0]);
        myShape
          .property("Transform")
          .property("Opacity")
          .setValueAtTime(randomEndTime, [100]);
        myShape
          .property("Transform")
          .property("Opacity")
          .setValueAtTime(compMidDuration, [100]);
        myShape
          .property("Transform")
          .property("Opacity")
          .setValueAtTime(compMidDuration + 1, [0]);

        var myShapeContent1 = myShape
          .property("Contents")
          .addProperty("ADBE Vector Group");
        var myShapeGroup1 = myShape.property("Contents").property("Group 1");

        var myShapeRectangle = myShapeGroup1
          .property("Contents")
          .addProperty("ADBE Vector Shape - Rect");
        myShapeRectangle
          .property("Size")
          .setValue([cubePartSize, cubePartSize]);
        myShape
          .property("Contents")
          .property("Group 1")
          .property("Transform")
          .property("Scale")
          .setValue([95, 95]);

        var myShapeFill = myShapeGroup1
          .property("Contents")
          .addProperty("ADBE Vector Graphic - Fill");
        var RandomColor = colors[Math.floor(Math.random() * colors.length)];
        myShapeFill.property("Color").setValue(RandomColor);

        var myShapeRoundCorners = myShapeGroup1
          .property("Contents")
          .addProperty("ADBE Vector Filter - RC");
        myShapeRoundCorners.property("Radius").setValue(cubePartSize / 10);
      }
    }
    switch (k) {
      case 0:
        myNull2
          .property("Transform")
          .property("Orientation")
          .setValue([90, 0, 0]);
        break;
      case 1:
        myNull2
          .property("Transform")
          .property("Orientation")
          .setValue([0, 0, 0]);
        break;
      case 2:
        myNull2
          .property("Transform")
          .property("Orientation")
          .setValue([0, 90 * 3, 0]);
        break;
      case 3:
        myNull2
          .property("Transform")
          .property("Orientation")
          .setValue([0, 90 * 2, 0]);
        break;
      case 4:
        myNull2
          .property("Transform")
          .property("Orientation")
          .setValue([0, 90, 0]);
        break;
      case 5:
        myNull2
          .property("Transform")
          .property("Orientation")
          .setValue([90 * 3, 0, 0]);
        break;
    }
  }
  app.endUndoGroup();
}

var myCamera = myComp.layers.addCamera("Camera", [w2, h2]);
myCamera.moveToBeginning();
{
  app.beginUndoGroup("AddLights");
  for (m = 0; m <= 3; m++) {
    mm = m + 1;
    var myLight = myComp.layers.addLight("MyLight" + "_" + mm, [w2, h2]);
    myLight.property("Transform").property("Point of Interest").expression =
      'thisComp.layer("Bendras").transform.position;';
    switch (m) {
      case 0:
        myLight
          .property("Transform")
          .property("Position")
          .setValue([0, 0, -2160]);
        break;
      case 1:
        myLight
          .property("Transform")
          .property("Position")
          .setValue([0, compHeigth, -2160]);
        break;
      case 2:
        myLight
          .property("Transform")
          .property("Position")
          .setValue([compWidth, compHeigth, -2160]);
        break;
      case 3:
        myLight
          .property("Transform")
          .property("Position")
          .setValue([compWidth, 0, -2160]);
        break;
    }
    myLight.property("Light Options").property("Intensity").setValue([100]);
    myLight.property("Light Options").property("Cone Angle").setValue([100]);
    myLight.property("Light Options").property("Radius").setValue([10000]);
    myLight
      .property("Light Options")
      .property("Falloff Distance")
      .setValue([10000]);
    myLight
      .property("Light Options")
      .property("Shadow Darkness")
      .setValue([50]);
    myLight
      .property("Light Options")
      .property("Shadow Diffusion")
      .setValue([20]);
    myLight.moveToBeginning();
  }
  app.endUndoGroup();
}

myNull.moveToBeginning();
