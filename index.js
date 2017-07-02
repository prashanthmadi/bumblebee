var azure = require('azure-storage');
var fs = require('fs');
const PiCamera = require('pi-camera');
const myCamera = new PiCamera({
  mode: 'photo',
  output: `${ __dirname }/test.jpg`,
  width: 2592,
  height: 1944,
  nopreview: true,
});

var storageConnString = "DefaultEndpointsProtocol=https;AccountName=prmadistorage;AccountKey=OrCEJR9PVtGIJ7+hi1YxY7jgOQ/YLoFr/5qCBFm76NtrC2Fxbbkl5qNOhxoXrkmqsPv9LPTQ8mhv0M9D6vKZaA==;EndpointSuffix=core.windows.net";
var blobService = azure.createBlobService(storageConnString);

myCamera.snap()
  .then((result) => {
    console.log(result);
    fs.createReadStream('test.jpg').pipe(blobService.createWriteStreamToBlockBlob('photos', 'test.jpg'));
  })
  .catch((error) => {
    console.log(error);
  });
