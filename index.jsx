//Deividas Gineitis, MKDf-17/2

app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
app.newProject();

//pradiniai duomenys
var compWidth = 1920;
var compHeight = 1080;
var compDuration = 10;
var aR = 1;
var compFPS = 25;

var myComp = app.project.items.addComp(
  "myComp",
  compWidth,
  compHeight,
  aR,
  compDuration,
  compFPS
);

myComp.openInViewer();
var background = myComp.layers.addSolid(
  [255, 255, 255],
  "background",
  compWidth,
  compHeight,
  aR,
  compDuration
);

//spinner
{
  app.beginUndoGroup("createLayers");
  //create shapeLayer
  var spinner = myComp.layers.addShape();
  spinner.name = "spinner";
  spinner.property("Transform").property("Position").setValue([912, 544]);
  var spinnerContent = spinner
    .property("Contents")
    .addProperty("ADBE Vector Group");
  spinnerContent.name = "Ellipse 1";
  var spinnerGroup1 = spinner.property("Contents").property("Ellipse 1");
  //Add Ellipse
  var spinnerEllipse1 = spinnerGroup1
    .property("Contents")
    .addProperty("ADBE Vector Shape - Ellipse");
  spinnerEllipse1.property("Size").setValue([880, 880]); //Set Size
  //Stroke
  var spinnerEllipseStroke = spinnerGroup1
    .property("Contents")
    .addProperty("ADBE Vector Graphic - Stroke");
  spinnerEllipseStroke.property("Color").setValue([0, 0, 0]); //STROKE COLOR
  spinnerEllipseStroke.property("Stroke Width").setValue(30);
  //Trim Paths
  var spinnerEllipseTrimPaths = spinnerGroup1
    .property("Contents")
    .addProperty("ADBE Vector Filter - Trim");
  spinnerEllipseTrimPaths.property("Start").expression =
    "ease(time, 1, 2, 0, 10)";
  spinnerEllipseTrimPaths.property("End").expression =
    "ease(time, 0, 2, 0, 20)";
  spinnerEllipseTrimPaths.property("Offset").expression =
    "easeIn(time, 0, thisComp.duration, 0, 360 * thisComp.duration)";
  app.endUndoGroup();
}
