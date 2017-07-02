var azure = require('azure-storage');
var fs = require('fs');
const spawn = require('child_process').spawn;
var moment = require('moment');

var outputdir = __dirname + "/photos/";
var storageConnString = "DefaultEndpointsProtocol=https;AccountName=prmadistorage;AccountKey=OrCEJR9PVtGIJ7+hi1YxY7jgOQ/YLoFr/5qCBFm76NtrC2Fxbbkl5qNOhxoXrkmqsPv9LPTQ8mhv0M9D6vKZaA==;EndpointSuffix=core.windows.net";

if (!fs.existsSync(outputdir)) {
    fs.mkdirSync(outputdir);
}

function takePicture() {
    var blobService = azure.createBlobService(storageConnString);
    var outputfile = moment().valueOf() + ".png";
    var camera = spawn('raspistill', ['-o', outputdir + outputfile]);

    camera.on('exit', data => {
        fs.createReadStream(outputdir + outputfile).pipe(blobService.createWriteStreamToBlockBlob('photos', outputfile));
    });

    camera.stderr.on('data', data => {
        console.log(`stderr: ${data}`);
    });
}

setInterval(takePicture, 300000);