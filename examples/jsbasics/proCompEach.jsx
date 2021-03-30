//projektas
var idx = [];
for (var i = 1; i <= myComp.numLayers; i++) {
  idx = [i];
  myComp.layers.precompose(idx, myComp.layer(i).name, true);
}
