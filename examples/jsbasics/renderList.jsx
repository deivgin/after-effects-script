// Vardenis Pavardenis, MKDf-15/#
//naudojama viso bloko undo-redo grupe
{
  app.beginUndoGroup("createNewPorject");
  // uzdaro esama projekta be jokiu klausimu
  app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
  // sukurian auj projekta
  app.newProject();

  // metodas addComp sukuria nauja kompozicija su ivestais duomenimis
  var myComp = app.project.items.addComp("myComp", 1920, 1080, 1, 60, 25);
  // atidaro kompocizija aktyviame LA lange
  myComp.openInViewer();
  var myRenderList = myComp.renderers;

  app.endUndoGroup();
}

alert(myRenderList);

//myComp.renderer ="ADBE Picasso";
//myComp.renderer ="ADBE Advanced 3d";
//myComp.renderer ="ADBE Standard 3d";
//myComp.renderer ="ADBE Picasso";
