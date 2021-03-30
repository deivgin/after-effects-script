app.newProject();
var previewComp = app.project.items.addComp(
  "Preview Comp",
  1280,
  720,
  1,
  120,
  23.976
);
previewComp.openInViewer();
var newComp = app.project.items.addComp("2 Comp", 1280, 720, 1, 120, 23.976);
previewComp.layers.add(newComp);
previewComp.layers.addShape();
