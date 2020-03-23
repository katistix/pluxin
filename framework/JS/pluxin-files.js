function createFile(name, extension, content){
  this.fileName = name;
  this.fileExtension = extension;
  this.fileContent = content;
}

function downloadFile(file){
  var downloadElement = document.createElement('a');
  downloadElement.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(file.fileContent);
  downloadElement.target = '_blank';
  downloadElement.download = file.fileName + '.' + file.fileExtension;
  downloadElement.click();
}

function selectFile(callback){
  var input = document.createElement('input');
  input.type = 'file';
  input.addEventListener('change', (event) =>{
    var file = event.target.files[0];
    callback(file);

  });
  input.click();
}
