function autoReloadCSS(sheetid,interval) {
  var sheet = document.getElementById(sheetid)
  var src = sheet.getAttribute('href');
  setInterval( function() {
      newsrc = src+'?ar='+(new Date).getTime();
      sheet.setAttribute('href',newsrc)
  },interval*1000)
};
