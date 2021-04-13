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
var background = myComp.layers.addSolid([255,255,255], "background", compWidth, compHeight, aR, compDuration);

//spinner
{
    app.beginUndoGroup("createLayers");
      var spinner = myComp.layers.addShape();
      spinner.name = "spinner";
      spinner.property("Transform").property("Position").setValue([912,544]);

      var spinnerElipse1 = spinner.property("Contents").addProperty("ADBE Vector Shape");

    app.endUndoGroup();
}