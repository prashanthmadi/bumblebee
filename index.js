var request = require('request');
var azure = require('azure-storage');
var fs = require('fs');
var storageConnString = "DefaultEndpointsProtocol=https;AccountName=prmadistorage;AccountKey=OrCEJR9PVtGIJ7+hi1YxY7jgOQ/YLoFr/5qCBFm76NtrC2Fxbbkl5qNOhxoXrkmqsPv9LPTQ8mhv0M9D6vKZaA==;EndpointSuffix=core.windows.net";
var blobService = azure.createBlobService(storageConnString);
fs.createReadStream('test.jpg').pipe(blobService.createWriteStreamToBlockBlob('photos', 'test.jpg'));

