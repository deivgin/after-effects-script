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
  app.beginUndoGroup("spinner");
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
  spinnerEllipseStroke.property("Line Cap").setValue(2);
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

//outer spinner
{
  app.beginUndoGroup("outer spinner");
  //create shapeLayer
  var outerSpinner = myComp.layers.addShape();
  outerSpinner.name = "outerSpinner";
  outerSpinner.property("Transform").property("Position").setValue([912, 544]);
  outerSpinner.property("Transform").property("Scale").setValue([92.6, 92.6]);
  var outerSpinnerContent = outerSpinner
    .property("Contents")
    .addProperty("ADBE Vector Group");
  outerSpinnerContent.name = "Ellipse 1";
  var outerSpinnerGroup1 = outerSpinner
    .property("Contents")
    .property("Ellipse 1");
  //Add Ellipse
  var outerSpinnerEllipse1 = outerSpinnerGroup1
    .property("Contents")
    .addProperty("ADBE Vector Shape - Ellipse");
  outerSpinnerEllipse1.property("Size").setValue([880, 880]); //Set Size
  //Stroke
  var outerSpinnerEllipseStroke = outerSpinnerGroup1
    .property("Contents")
    .addProperty("ADBE Vector Graphic - Stroke");
  outerSpinnerEllipseStroke.property("Color").setValue([0, 0, 0]); //STROKE COLOR
  outerSpinnerEllipseStroke.property("Stroke Width").setValue(10);
  app.endUndoGroup();
}

//scooter
{
  app.beginUndoGroup("scooter");
  var scooter = myComp.layers.addShape();
  scooter.name = "scooter";

  var frameContent = scooter
    .property("Contents")
    .addProperty("ADBE Vector Group");
  var leftWheelContent = scooter
    .property("Contents")
    .addProperty("ADBE Vector Group");
  var rightWheelContent = scooter
    .property("Contents")
    .addProperty("ADBE Vector Group");

  var frame = scooter.property("Contents").property("Group 1");
  frame.name = "frame";

  //Left Wheel
  var leftWheel = scooter.property("Contents").property("Group 2");
  leftWheel.name = "left wheel";
  leftWheel.property("Transform").property("Position").setValue([-241, 204]);
  //left wheel ellipse
  var leftWheelEllipse = leftWheel
    .property("Contents")
    .addProperty("ADBE Vector Shape - Ellipse");
  leftWheelEllipse.property("Size").setValue([108, 108]);
  //left wheel stroke
  var leftWheelStroke = leftWheel
    .property("Contents")
    .addProperty("ADBE Vector Graphic - Stroke");
  leftWheelStroke.property("Stroke Width").setValue(30);
  leftWheelStroke.property("Line Cap").setValue(2);
  leftWheelStroke.property("Color").setValue([0, 0, 0]);

  var rightWheel = scooter.property("Contents").property("Group 3");
  rightWheel.name = "right wheel";
  rightWheel.property("Transform").property("Position").setValue([167, 204]);
  //right wheel ellipse
  var rightWheelEllipse = rightWheel
    .property("Contents")
    .addProperty("ADBE Vector Shape - Ellipse");
  rightWheelEllipse.property("Size").setValue([108, 108]);
  //right wheel stroke
  var rightWheelStroke = rightWheel
    .property("Contents")
    .addProperty("ADBE Vector Graphic - Stroke");
  rightWheelStroke.property("Stroke Width").setValue(30);
  rightWheelStroke.property("Line Cap").setValue(2);
  rightWheelStroke.property("Color").setValue([0, 0, 0]);

  app.endUndoGroup();
}
