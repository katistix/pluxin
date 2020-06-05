

Getting Started
=============


### About PluxIn

PluxIn is a collection of JavaScript files that makes your Web Development workflow much easier. The goal of PluxIn is to keep Web Development fully based on JavaScript with little to no use of other languages.

#### List of all PluxIn modules

+ pluxin-files.js
+ pluxin-colors.js
+ pluxin-images.js

#### Extra information

You don't need to clone this repository, you can include in the "head" of your html page the "script" tag provided to every file. This way you will import that file directly from the internet so you don't need to store it locally.

pluxin-files.js
========

### Include only pluxin-files.js
```html
<script type="text/javascript"src="https://katistix.github.io/pluxin/framework/JS/pluxin-files.js"></script>
```

#### Generate a file
>createFile(name, extension, content);

```javascript
var myFile = new createFile("exampleFile", "txt", "Lorem ipsum");
```

#### Download a file
>downloadFile(file);

```javascript
downloadFile(myFile);
```

#### Select file from memory
>selectFile(callback);

##### myScript.js

```javascript
//Create a callback function
function myCallback(file){
  console.log(file);
  //Logs all the properties of a file.


  //Example to log only one property:
  console.log(file.name);
  //Logs the selected file's name
}
```

##### myHtml.html

```html
<!--Import myScript.js-->
<script type="text/javascript"src="myScript.js"></script>
<!--Create a button and do selectFile on click-->
<button onclick="selectFile(myCallback);">
```


pluxin-colors.js
========

### Include only pluxin-colors.js
```html
<script type="text/javascript"src="https://katistix.github.io/pluxin/framework/JS/pluxin-colors.js"></script>
```

#### Premade colors
>Color(colorName);

```javascript
console.log(Color("red"));
//Output in console: #FF0000
```
##### Available colors:
- Red
- Green
- Blue

#### Hex to RGB
>hexToRgb(hex);

```javascript
console.log(hexToRgb("#055989"));
//Output: {r: 5, g: 89, b: 137}

console.log(hexToRgb("#055989").r);
//Output: 5

console.log(hexToRgb("#055989").g);
//Output: 89

console.log(hexToRgb("#055989").b);
//Output: 137
```


#### RGB to Hex
>rgbToHex(r, g, b);

```javascript
console.log(rgbToHex(23, 137, 5));
//Output:  #178905
```

pluxin-images.js
========

### Include only pluxin-images.js
```html
<script type="text/javascript"src="https://katistix.github.io/pluxin/framework/JS/pluxin-images.js"></script>
```

#### Create an image object
>image(path);

```javascript
var myImage = image("dog.png");
```

#### Append an image to body
>showImage(image);

```javascript
showImage(myImage);
```

#### Remove an image from body
>hideImage(image);

```javascript
hideImage(myImage);
```

#### Add filter to image
>addFilter(image, filter, filterStrength);

```javascript
addFilter(myImage, "grayscale", "100%");
```


#### Resize an image
>resizeImage(image, height, width);

```javascript
resizeImage(myImage, 100, 100);
//Values in pixels
```

#### Position an image
>positionImage(image, type, top, left);

```javascript
positionImage(myImage, "absolute", "100px", "100px");
```

Future Updates
=============
- Appending images to any element
- More premade colors
- Info for selecting a file
- And much more
