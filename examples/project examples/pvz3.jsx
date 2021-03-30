// paleidziam AE
app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
app.newProject();

// bendri kintamieji
var cW = 1920;
var cH = 1080;
var aR = 1;
var cD = 40;
var startTime = 0;
var midTime = cD / 2;
var cFPS = 25;
var eleH = 150;
var eleW = 250;
var towerLayers = null;
// boksto layer'iu input'o ciklas ir apsidraudziam nuo neleistinu input'o tipu
while (
  towerLayers == null ||
  isNaN(towerLayers) ||
  towerLayers % 1 !== 0 ||
  towerLayers < 1 ||
  towerLayers > 18
) {
  towerLayers = prompt("Enter number of tower layers", 2);
  if (
    towerLayers == null ||
    isNaN(towerLayers) ||
    towerLayers % 1 !== 0 ||
    towerLayers < 1 ||
    towerLayers > 18
  ) {
    alert("Please enter an INTEGER in range 1...18");
  }
}
var eleColor = [0, 0, 255] / 255;
var strColor = [0, 255, 0] / 255;
var pavadinimai = ["FR", "BA", "LE", "RI", "TO", "BO"];
var layers = parseInt(towerLayers); // iki 18 sluoksniu ()padaryti per prompt'a
// sukuriam UNDO/REDO grupe
{
  app.beginUndoGroup("wholeProject");
  //kuriame projekta
  var myComp = app.project.items.addComp("woodenTower", cW, cH, aR, cD, cFPS);
  //atidarom sukurta kompozicija "viewer'yje"
  myComp.openInViewer();

  //bendras elementu matomumo valdiklis
  var visibilityNull = myComp.layers.addNull();
  var visibilityNullName = (visibilityNull.source.name =
    "partVisibilityController");
  visibilityNull.threeDLayer = true;
  visibilityNull.enabled = false;
  visibilityNull
    .property("Transform")
    .property("Position")
    .setValue([cW / 2, cH / 2, 0]);

  //bendras anumacijos/elementu grafiniu parametru valdiklis
  var mainNull = myComp.layers.addNull(); // idedam NULL OBJECT'a
  var mainNullName = (mainNull.source.name = "mainController"); // suteikiam varda
  mainNull.threeDLayer = true; // keiciam sluoksni is 2D i 3D
  mainNull.enabled = false; // isjungiu sluoksnio matomuma, nes man jo tiesiog nereikia
  mainNull
    .property("Transform")
    .property("Position")
    .setValue([cW / 2, cH / 2, 0]); // uzsiduodu LA pozicija priklausomai nuo COMP parametru

  //kuriami EXPC
  var slider1 = mainNull.property("Effects").addProperty("ADBE Slider Control"); // idedamas EXPC
  var sliderName1 = (slider1.name = "sideOpacity"); // EXPC loginis vardas
  mainNull.effect(sliderName1).property("Slider").setValue([100]); // default reiksme
  mainNull.effect(sliderName1).property("Slider").expression =
    "clamp(value,0,100);"; // funkcijos ribos

  var slider11 = mainNull.property("Effects").addProperty("ADBE Color Control");
  var sliderName11 = (slider11.name = "sideColor");
  mainNull.effect(sliderName11).property("Color").setValue(eleColor);

  var slider2 = mainNull.property("Effects").addProperty("ADBE Slider Control");
  var sliderName2 = (slider2.name = "mainOpacity");
  mainNull.effect(sliderName2).property("Slider").setValue([100]);
  mainNull.effect(sliderName2).property("Slider").expression =
    "clamp(value,0,100);";

  var slider3 = mainNull.property("Effects").addProperty("ADBE Slider Control");
  var sliderName3 = (slider3.name = "strokeWidth");
  mainNull.effect(sliderName3).property("Slider").setValue([5]);
  mainNull.effect(sliderName3).property("Slider").expression =
    "clamp(value,0,10);";

  var slider33 = mainNull.property("Effects").addProperty("ADBE Color Control");
  var sliderName33 = (slider33.name = "strokeColor");
  mainNull.effect(sliderName33).property("Color").setValue(strColor);

  var slider4 = mainNull.property("Effects").addProperty("ADBE Slider Control");
  var sliderName4 = (slider4.name = "mainScale");
  mainNull.effect(sliderName4).property("Slider").setValue([100]);
  mainNull.effect(sliderName4).property("Slider").expression =
    "clamp(value,0,200);";

  var slider5 = mainNull.property("Effects").addProperty("ADBE Angle Control");
  var sliderName5 = (slider5.name = "mainRotation");
  mainNull.effect(sliderName5).property("Angle").setValue([0]);
  mainNull.effect(sliderName5).property("Angle").expression =
    "clamp(value,0,360);";

  var slider55 = mainNull
    .property("Effects")
    .addProperty("ADBE Slider Control");
  var sliderName55 = (slider55.name = "rotationSpeed");
  mainNull.effect(sliderName55).property("Slider").setValue([1]);
  mainNull.effect(sliderName55).property("Slider").expression =
    "clamp(value,0,10);";

  mainNull.property("Transform").property("Scale").expression =
    'temp = thisComp.layer("mainController").effect("mainScale")("Slider");[temp, temp, temp];';
  mainNull.property("Transform").property("Y Rotation").expression = // i EXP itraukiu VAR
    'var t = time;var initialAngle = thisComp.layer("+mainNullName+").effect("+sliderName5+")("Angle");var rotationSpeed = thisComp.layer("+mainNullName+").effect("+sliderName55+")("Slider");var finalRotation = initialAngle+rotationSpeed*t;finalRotation';

  for (k = 0; k <= layers - 1; k++) {
    // kuriama LA kieki

    var layerNull = myComp.layers.addNull();
    layerNull.source.name = k + 1 + "-layerController";
    layerNull.threeDLayer = true;
    layerNull.enabled = false;
    layerNull
      .property("Transform")
      .property("Position")
      .setValue([cW / 2, cH / 2, 0]);

    for (j = 1; j <= 3; j++) {
      // kuriam EL kieki sluoksnyje

      var elementNull = myComp.layers.addNull();
      elementNull.source.name = "elementController";
      elementNull.threeDLayer = true;
      elementNull.enabled = false;
      elementNull
        .property("Transform")
        .property("Position")
        .setValue([cW / 2, cH / 2, 0]);

      var sliderVisibility = visibilityNull
        .property("Effects")
        .addProperty("ADBE Checkbox Control");
      var sliderVisibilityName = (sliderVisibility.name =
        k + 1 + " - layer; " + j + " - part");

      //mainNull.effect(sliderName3).property("Slider").expression = '''clamp(value,0,10);''';

      for (i = 0; i <= 5; i++) {
        // konstruojam detale is EL
        var myShapeElement = myComp.layers.addShape();
        myShapeElement.name = k + 1 + "-" + j + "-" + pavadinimai[i]; // kontruoju LA EL varda pagal ju kieki ir vieta
        myShapeElement.threeDLayer = true;
        myShapeElement.parent = elementNull;

        // idedu efektus ir tam tikrais laiko momentais keiciu reikiamias efektu parametru reiksmes
        myShapeElement.property("Effects").addProperty("CC Light Burst 2.5");
        myShapeElement
          .property("Effects")
          .property("CC Light Burst 2.5")
          .property("Intensity")
          .setValueAtTime(startTime + 1 * j + 3 * k - 0.1, 0);
        myShapeElement
          .property("Effects")
          .property("CC Light Burst 2.5")
          .property("Intensity")
          .setValueAtTime(startTime + 1 * j + 3 * k, 10);
        myShapeElement
          .property("Effects")
          .property("CC Light Burst 2.5")
          .property("Intensity")
          .setValueAtTime(startTime + 1 * j + 3 * k + 0.5, 0);

        myShapeElement
          .property("Effects")
          .property("CC Light Burst 2.5")
          .property("Ray Length")
          .setValueAtTime(startTime + 1 * j + 3 * k - 0.1, 0);
        myShapeElement
          .property("Effects")
          .property("CC Light Burst 2.5")
          .property("Ray Length")
          .setValueAtTime(startTime + 1 * j + 3 * k, 10);
        myShapeElement
          .property("Effects")
          .property("CC Light Burst 2.5")
          .property("Ray Length")
          .setValueAtTime(startTime + 1 * j + 3 * k + 0.5, 0);

        myShapeElement.property("Effects").addProperty("Fast Blur (Legacy)");
        myShapeElement
          .property("Effects")
          .property("Fast Blur (Legacy)")
          .property("Blurriness")
          .setValueAtTime(startTime + 1 * j + 3 * k - 0.1, 0);
        myShapeElement
          .property("Effects")
          .property("Fast Blur (Legacy)")
          .property("Blurriness")
          .setValueAtTime(startTime + 1 * j + 3 * k, 10);
        myShapeElement
          .property("Effects")
          .property("Fast Blur (Legacy)")
          .property("Blurriness")
          .setValueAtTime(startTime + 1 * j + 3 * k + 0.5, 0);

        myShapeElement.property("Transform").property("Opacity").expression =
          'if (thisComp.layer("+visibilityNullName+").effect("+sliderVisibilityName+")("Checkbox")==1){0;}else{thisComp.layer("+mainNullName+").effect("+sliderName2+")("Slider");}';
        var myShapeContent1 = myShapeElement
          .property("Contents")
          .addProperty("ADBE Vector Group"); // aktyvuoju SHAPE LAYER >> add
        var myShapeGroup1 = myShapeElement
          .property("Contents")
          .property("Group 1"); // sukuriu grupe SHAPE LAYER >> add >> group
        var myShapeRectangle = myShapeGroup1
          .property("Contents")
          .addProperty("ADBE Vector Shape - Rect"); // i grupe idedu RECT elementa
        switch (
          i // kadangi detales EL gana skirtingi, tai pagal tam tikrus atvejus priskiriu reikiamas reiksmes (siuo atveju paprasciau nei rasyti PROTINGA cikla)
        ) {
          case 0:
            myShapeRectangle.property("Size").setValue([150, 250]);
            myShapeElement
              .property("Transform")
              .property("Position")
              .setValue([-375, 0, 0]);
            myShapeElement
              .property("Transform")
              .property("Z Rotation")
              .setValue([90]);
            myShapeElement
              .property("Transform")
              .property("Y Rotation")
              .setValue([90]);
            break;
          case 1:
            myShapeRectangle.property("Size").setValue([150, 250]);
            myShapeElement
              .property("Transform")
              .property("Position")
              .setValue([375, 0, 0]);
            myShapeElement
              .property("Transform")
              .property("Z Rotation")
              .setValue([90]);
            myShapeElement
              .property("Transform")
              .property("Y Rotation")
              .setValue([90]);
            break;
          case 2:
            myShapeRectangle.property("Size").setValue([150, 750]);
            myShapeElement
              .property("Transform")
              .property("Position")
              .setValue([0, 0, 125]);
            myShapeElement
              .property("Transform")
              .property("Z Rotation")
              .setValue([90]);
            break;
          case 3:
            myShapeRectangle.property("Size").setValue([150, 750]);
            myShapeElement
              .property("Transform")
              .property("Position")
              .setValue([0, 0, -125]);
            myShapeElement
              .property("Transform")
              .property("Z Rotation")
              .setValue([90]);
            break;
          case 4:
            myShapeRectangle.property("Size").setValue([250, 750]);
            myShapeElement
              .property("Transform")
              .property("Position")
              .setValue([0, -75, 0]);
            myShapeElement
              .property("Transform")
              .property("Z Rotation")
              .setValue([90]);
            myShapeElement
              .property("Transform")
              .property("X Rotation")
              .setValue([90]);
            break;
          case 5:
            myShapeRectangle.property("Size").setValue([250, 750]);
            myShapeElement
              .property("Transform")
              .property("Position")
              .setValue([0, 75, 0]);
            myShapeElement
              .property("Transform")
              .property("Z Rotation")
              .setValue([90]);
            myShapeElement
              .property("Transform")
              .property("X Rotation")
              .setValue([90]);
            break;
        }
        var myShapeFill = myShapeGroup1
          .property("Contents")
          .addProperty("ADBE Vector Graphic - Fill"); // i grupe idedu FILL elementa
        myShapeFill.property("Color").expression =
          'thisComp.layer("+mainNullName+").effect("+sliderName11+")("Color");';

        myShapeFill.property("Opacity").expression =
          'thisComp.layer("+mainNullName+").effect("+sliderName1+")("Slider");';
        var myShapeStroke = myShapeGroup1
          .property("Contents")
          .addProperty("ADBE Vector Graphic - Stroke"); // i grupe idedu STROKE elementa

        myShapeStroke.property("Stroke Width").expression =
          'thisComp.layer("+mainNullName+").effect("+sliderName3+")("Slider");';
        myShapeStroke.property("Color").expression =
          'thisComp.layer("+mainNullName+").effect("+sliderName33+")("Color");';
      }
      elementNull.parent = layerNull; // parent to NULL
      layerNull.parent = mainNull; // parent to NULL

      //elementNull.property("Transform").property("Position").setValue([0,0,-500+250*j]);

      elementNull
        .property("Transform")
        .property("Position")
        .setValueAtTime(startTime, [
          0,
          -2000 - 200 * j - 1000 * k,
          -500 + 250 * j,
        ]);
      elementNull
        .property("Transform")
        .property("Position")
        .setValueAtTime(startTime + 1 * j + 3 * k, [0, 0, -500 + 250 * j]);

      elementNull
        .property("Transform")
        .property("Orientation")
        .setValue([0, 0, 0]);

      layerNull
        .property("Transform")
        .property("Position")
        .setValue([0, -150 * k, 0]);

      layerNull
        .property("Transform")
        .property("Y Rotation")
        .setValue([90 * k]);

      elementNull.moveToBeginning(); // nusiunciu LA i eiles virsu cikle
      layerNull.moveToBeginning(); // nusiunciu LA i eiles virsu cikle
    }
  }
  // kamera ir jos nustatymai
  var myCamera = myComp.layers.addCamera("Camera", [cW / 2, 0]);
  myCamera.property("Camera Options").property("Zoom").setValue([1500]);

  visibilityNull.moveToBeginning(); // nusiunciu LA i eiles virsu
  mainNull.moveToBeginning(); // nusiunciu LA i eiles virsu

  app.executeCommand(2004);

  mainNull.selected = true;

  app.endUndoGroup();
}
