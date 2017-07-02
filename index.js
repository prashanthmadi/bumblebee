var azure = require('azure-storage');
var fs = require('fs');
const spawn = require('child_process').spawn;
var moment = require('moment');

var currentMillis = moment().valueOf();

var storageConnString = "DefaultEndpointsProtocol=https;AccountName=prmadistorage;AccountKey=OrCEJR9PVtGIJ7+hi1YxY7jgOQ/YLoFr/5qCBFm76NtrC2Fxbbkl5qNOhxoXrkmqsPv9LPTQ8mhv0M9D6vKZaA==;EndpointSuffix=core.windows.net";
var blobService = azure.createBlobService(storageConnString);
var camera = spawn( 'raspistill', [ '-o', "./photos/"+currentMillis+".png" ] );

camera.stdout.on( 'data', data => {
    console.log( `stdout: ${data}` );
    // fs.createReadStream('test.jpg').pipe(blobService.createWriteStreamToBlockBlob('photos', 'test.jpg'));
});

camera.stderr.on( 'data', data => {
    console.log( `stderr: ${data}` );
});
