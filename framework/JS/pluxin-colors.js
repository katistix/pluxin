function Color(colorName){
  let colorHex;
  if (colorName == "red"){
    colorHex = "#FF0000";
  }
  else if (colorName == "blue"){
    colorHex = "#0000FF";
  }
  else if (colorName == "green"){
    colorHex = "#00FF00";
  }

  return colorHex;
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function componentToHex(c){
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b){
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function addColors(hex1, hex2){
  var newr = hexToRgb(hex1).r + hexToRgb(hex2).r;
  var newg = hexToRgb(hex1).g + hexToRgb(hex2).g;
  var newb = hexToRgb(hex1).b + hexToRgb(hex2).b;
  var newcolor = rgbToHex(newr, newg, newb);
  return {
    r: newr,
    g: newg,
    b: newb,
    hex: newcolor
  };
}

function subColors(hex1, hex2){
  var newr = hexToRgb(hex1).r - hexToRgb(hex2).r;
  var newg = hexToRgb(hex1).g - hexToRgb(hex2).g;
  var newb = hexToRgb(hex1).b - hexToRgb(hex2).b;
  var newcolor = rgbToHex(newr, newg, newb);
  return {
    r: newr,
    g: newg,
    b: newb,
    hex: newcolor
  };
}

function mulColors(hex1, hex2){
  var newr = hexToRgb(hex1).r * hexToRgb(hex2).r;
  var newg = hexToRgb(hex1).g * hexToRgb(hex2).g;
  var newb = hexToRgb(hex1).b * hexToRgb(hex2).b;
  var newcolor = rgbToHex(newr, newg, newb);
  return {
    r: newr,
    g: newg,
    b: newb,
    hex: newcolor
  };
}

function divColors(hex1, hex2){
  var newr = hexToRgb(hex1).r / hexToRgb(hex2).r;
  var newg = hexToRgb(hex1).g / hexToRgb(hex2).g;
  var newb = hexToRgb(hex1).b / hexToRgb(hex2).b;
  var newcolor = rgbToHex(newr, newg, newb);
  return {
    r: newr,
    g: newg,
    b: newb,
    hex: newcolor
  };
}
