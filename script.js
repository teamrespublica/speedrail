function checkTableauLoaded() {
  if (typeof tableau !== 'undefined') {
    var viz = tableau.VizManager.getVizs()[0];
    if (viz.getWorkbook().getIsDoneRendering()) {
      // The embedded code has fully loaded, hide the toolbar
      var toolbar = document.querySelector('.tab-toolbar.public.tab-fill.tab-widget');
      toolbar.style.display = 'none';
    } else {
      // The embedded code is still loading, wait and try again
      setTimeout(checkTableauLoaded, 100);
    }
  } else {
    // The Tableau JavaScript API is not yet available, wait and try again
    setTimeout(checkTableauLoaded, 100);
  }
}

checkTableauLoaded();
