app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
var proj = app.newProject();
var myComp = proj.items.addComp("test2", 1280, 720, 1, 60, 25);
myComp.openInViewer();
var myShape = myComp.layers.addShape();
myShape.name = "contents";

var myShapeContent1 = myShape
  .property("Contents")
  .addProperty("ADBE Vector Group");
var myShapeContent2 = myShape
  .property("Contents")
  .addProperty("ADBE Vector Group");
var myShapeContent3 = myShape
  .property("Contents")
  .addProperty("ADBE Vector Group");

var myShapeGroup1 = myShape.property("Contents").property("Group 1");
myShapeGroup1.name = "Pirma Grupe";
var myShapeGroup2 = myShape.property("Contents").property("Group 2");
myShapeGroup2.name = "Antra Grupe";
var myShapeGroup3 = myShape.property("Contents").property("Group 3");
myShapeGroup3.name = "Trecia Grupe";

var myShapeRectangle = myShapeGroup1
  .property("Contents")
  .addProperty("ADBE Vector Shape - Rect");
var myShapeEllipse = myShapeGroup1
  .property("Contents")
  .addProperty("ADBE Vector Shape - Ellipse");
var myShapePolystar = myShapeGroup1
  .property("Contents")
  .addProperty("ADBE Vector Shape - Star");
var myShapePath = myShapeGroup1
  .property("Contents")
  .addProperty("ADBE Vector Shape - Group");

var myShapeFill = myShapeGroup2
  .property("Contents")
  .addProperty("ADBE Vector Graphic - Fill");
var myShapeStroke = myShapeGroup2
  .property("Contents")
  .addProperty("ADBE Vector Graphic - Stroke");
var myShapeGradientFill = myShapeGroup2
  .property("Contents")
  .addProperty("ADBE Vector Graphic - G-Fill");
var myShapeGradientStroke = myShapeGroup2
  .property("Contents")
  .addProperty("ADBE Vector Graphic - G-Stroke");

var myShapeMergePaths = myShapeGroup3
  .property("Contents")
  .addProperty("ADBE Vector Filter - Merge");
var myShapeOffsetPaths = myShapeGroup3
  .property("Contents")
  .addProperty("ADBE Vector Filter - Offset");
var myShapePuckerBloat = myShapeGroup3
  .property("Contents")
  .addProperty("ADBE Vector Filter - PB");
var myShapeRepeater = myShapeGroup3
  .property("Contents")
  .addProperty("ADBE Vector Filter - Repeater");
var myShapeRoundCorners = myShapeGroup3
  .property("Contents")
  .addProperty("ADBE Vector Filter - RC");
var myShapeTrimPaths = myShapeGroup3
  .property("Contents")
  .addProperty("ADBE Vector Filter - Trim");
var myShapeTwist = myShapeGroup3
  .property("Contents")
  .addProperty("ADBE Vector Filter - Twist");
var myShapeWigglePaths = myShapeGroup3
  .property("Contents")
  .addProperty("ADBE Vector Filter - Roughen");
var myShapeWiggleTransform = myShapeGroup3
  .property("Contents")
  .addProperty("ADBE Vector Filter - Wiggler");
var myShapeZigZag = myShapeGroup3
  .property("Contents")
  .addProperty("ADBE Vector Filter - Zigzag");
