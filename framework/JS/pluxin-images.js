function image(path){
  var img = document.createElement('img');
  img.setAttribute("src", path);
  return img;
}

function showImage(img){
  document.body.appendChild(img);
}

function hideImage(img){
  document.body.removeChild(img);
}

function addFilter(image, filter, filterStrength){
  var last = image.style.filter;
  image.style.filter = last + filter + "(" + filterStrength + ") ";
}

function resizeImage(image, height, width){
  image.height = height;
  image.width = width;
}

function positionImage(image, type, top, left){
  image.style.position = type;
  image.style.top = top;
  image.style.left = left;
}
