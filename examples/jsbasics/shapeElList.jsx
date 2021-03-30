app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
var proj = app.newProject();
var myComp = proj.items.addComp("test2", 1280, 720, 1, 60, 25);
myComp.openInViewer();
var myShape = myComp.layers.addShape();
myShape.name = "contents";

var myShapeRectangle = myShape
  .property("Contents")
  .addProperty("ADBE Vector Shape - Rect");
var myShapeEllipse = myShape
  .property("Contents")
  .addProperty("ADBE Vector Shape - Ellipse");
var myShapePolystar = myShape
  .property("Contents")
  .addProperty("ADBE Vector Shape - Star");
var myShapePath = myShape
  .property("Contents")
  .addProperty("ADBE Vector Shape - Group");

var myShapeFill = myShape
  .property("Contents")
  .addProperty("ADBE Vector Graphic - Fill");
var myShapeStroke = myShape
  .property("Contents")
  .addProperty("ADBE Vector Graphic - Stroke");
var myShapeGradientFill = myShape
  .property("Contents")
  .addProperty("ADBE Vector Graphic - G-Fill");
var myShapeGradientStroke = myShape
  .property("Contents")
  .addProperty("ADBE Vector Graphic - G-Stroke");

var myShapeMergePaths = myShape
  .property("Contents")
  .addProperty("ADBE Vector Filter - Merge");
var myShapeOffsetPaths = myShape
  .property("Contents")
  .addProperty("ADBE Vector Filter - Offset");
var myShapePuckerBloat = myShape
  .property("Contents")
  .addProperty("ADBE Vector Filter - PB");
var myShapeRepeater = myShape
  .property("Contents")
  .addProperty("ADBE Vector Filter - Repeater");
var myShapeRoundCorners = myShape
  .property("Contents")
  .addProperty("ADBE Vector Filter - RC");
var myShapeTrimPaths = myShape
  .property("Contents")
  .addProperty("ADBE Vector Filter - Trim");
var myShapeTwist = myShape
  .property("Contents")
  .addProperty("ADBE Vector Filter - Twist");
var myShapeWigglePaths = myShape
  .property("Contents")
  .addProperty("ADBE Vector Filter - Roughen");
var myShapeWiggleTransform = myShape
  .property("Contents")
  .addProperty("ADBE Vector Filter - Wiggler");
var myShapeZigZag = myShape
  .property("Contents")
  .addProperty("ADBE Vector Filter - Zigzag");
