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
//background
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
  spinner.property("Transform").property("Position").setValue([960, 544]);
  var spinnerContent = spinner
    .property("Contents")
    .addProperty("ADBE Vector Group");
  spinnerContent.name = "Ellipse 1";
  var spinnerGroup1 = spinner.property("Contents").property("Ellipse 1");
  //Add Ellipse
  var spinnerEllipse1 = spinnerGroup1
    .property("Contents")
    .addProperty("ADBE Vector Shape - Ellipse");
  spinnerEllipse1.property("Size").setValue([900, 900]); //Set Size
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
  outerSpinner.property("Transform").property("Position").setValue([960, 544]);
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
  outerSpinnerEllipse1.property("Size").setValue([900, 900]); //Set Size
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
  scooter.trackMatteType = TrackMatteType.ALPHA;

  //create shape groups
  var frameContent = scooter
    .property("Contents")
    .addProperty("ADBE Vector Group");
  var leftWheelContent = scooter
    .property("Contents")
    .addProperty("ADBE Vector Group");
  var rightWheelContent = scooter
    .property("Contents")
    .addProperty("ADBE Vector Group");

  //Frame
  var frame = scooter.property("Contents").property("Group 1");
  frame.name = "frame";
  var framePath = frame
    .property("Contents")
    .addProperty("ADBE Vector Shape - Group");
  var frameMask = framePath.property("Path");
  var frameM = frameMask.value;
  //frame vertices
  var v1 = [-230, 204];
  var v2 = [25, 204];
  var v3 = [130, 104];
  var v4 = [167, 204];
  var v5 = [30, -204];
  var v6 = [70, -214];
  //combine vertices
  frameM.vertices = [v1, v2, v3, v4, v5, v6];
  frameM.closed = false;
  frameMask.setValue(frameM);
  //frame stroke
  var frameStroke = frame
    .property("Contents")
    .addProperty("ADBE Vector Graphic - Stroke");
  frameStroke.property("Stroke Width").setValue(30);
  frameStroke.property("Line Cap").setValue(2);
  frameStroke.property("Line Join").setValue(2);
  frameStroke.property("Color").setValue([0, 0, 0]);

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

  //Right wheel
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

  //scooter animation
  //scooter.property("Transform").property("Position").expression =
  //  'delay = thisComp.layer("Main controller").effect("Jump delay")("Slider");if(time > delay){surface = [960, 540];jumpHeight = thisComp.layer("Main controller").effect("Jump height")("Slider");jump = [960, jumpHeight];period = thisComp.layer("Main controller").effect("Jump period")("Slider");	t = time % (period * 2); if (t > period) t = 2 * period - t; linear(Math.sin(t * Math.PI / period), 0, 1, surface, jump)}else easeOut(time, 0, delay, [300,540],[960,540])';

  app.endUndoGroup();
}

{
  app.beginUndoGroup("scooter mask");

  //create shapeLayer
  var scooterMask = myComp.layers.addShape();
  scooterMask.name = "scooterMask";
  scooterMask.property("Transform").property("Position").setValue([960, 540]);
  var scooterMaskContent = scooterMask
    .property("Contents")
    .addProperty("ADBE Vector Group");
  scooterMaskContent.name = "Ellipse 1";
  var scooterMaskGroup1 = scooterMask
    .property("Contents")
    .property("Ellipse 1");
  //Add Ellipse
  var scooterMaskEllipse1 = scooterMaskGroup1
    .property("Contents")
    .addProperty("ADBE Vector Shape - Ellipse");
  scooterMaskEllipse1.property("Size").setValue([820, 820]); //Set Size
  //Fill
  var scooterMaskFill = scooterMask
    .property("Contents")
    .addProperty("ADBE Vector Graphic - Fill");

  scooterMask.enabled = false;

  app.endUndoGroup();
}

{
  app.beginUndoGroup("speed lines");
  //create layer
  var speedLines = myComp.layers.addShape();
  speedLines.name = "speedLines";
  //create shape groups
  var topLineContent = speedLines
    .property("Contents")
    .addProperty("ADBE Vector Group");
  var BottomLineContent = speedLines
    .property("Contents")
    .addProperty("ADBE Vector Group");

  //Top Line
  var topLine = speedLines.property("Contents").property("Group 1");
  topLine.name = "top line";
  var topLinePath = topLine
    .property("Contents")
    .addProperty("ADBE Vector Shape - Group");
  var topLineMask = topLinePath.property("Path");
  var topLineM = topLineMask.value;
  var vt1 = [-150, -50];
  var vt2 = [-50, -50];
  topLineM.vertices = [vt1, vt2];
  topLineM.closed = false;
  topLineMask.setValue(topLineM);
  //top stroke
  var topLineStroke = topLine
    .property("Contents")
    .addProperty("ADBE Vector Graphic - Stroke");
  topLineStroke.property("Stroke Width").setValue(30);
  topLineStroke.property("Line Cap").setValue(2);
  topLineStroke.property("Color").setValue([0, 0, 0]);
  //top trimp path
  var topLineTrimPath = topLine
    .property("Contents")
    .addProperty("ADBE Vector Filter - Trim");
  topLineTrimPath.property("Start").expression =
    'content("bottom line").content("Trim Paths 1").start.valueAtTime(time -0.1)';

  //Bottom Line
  var bottomLine = speedLines.property("Contents").property("Group 2");
  bottomLine.name = "bottom line";
  var bottomLinePath = bottomLine
    .property("Contents")
    .addProperty("ADBE Vector Shape - Group");
  var bottomLineMask = bottomLinePath.property("Path");
  var bottomLineM = bottomLineMask.value;
  var vb1 = [-250, 50];
  var vb2 = [-50, 50];
  bottomLineM.vertices = [vb1, vb2];
  bottomLineM.closed = false;
  bottomLineMask.setValue(bottomLineM);
  //bottom stroke
  var bottomLineStroke = bottomLine
    .property("Contents")
    .addProperty("ADBE Vector Graphic - Stroke");
  bottomLineStroke.property("Stroke Width").setValue(30);
  bottomLineStroke.property("Line Cap").setValue(2);
  bottomLineStroke.property("Color").setValue([0, 0, 0]);
  //bottom trim path
  var bottomLineTrimPath = bottomLine
    .property("Contents")
    .addProperty("ADBE Vector Filter - Trim");
  bottomLineTrimPath.property("Start").setValueAtTime(0, 100);
  bottomLineTrimPath.property("Start").setValueAtTime(1, 0);
  bottomLineTrimPath.property("Start").expression = 'loopOut("pingpong")';

  app.endUndoGroup();
}
