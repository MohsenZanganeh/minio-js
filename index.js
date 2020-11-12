let express = require("express")
let app = express();
let minioClient = require("./minio")

app.get('/', (req, res) => {
    var file = '/tmp/photos-europe'

    // Make a bucket called europetrip.
    minioClient.makeBucket('europetrip', 'us-east-1', function(err) {
        if (err) return console.log(err)
    
        console.log('Bucket created successfully in "us-east-1".')
    
        var metaData = {
            'Content-Type': 'application/octet-stream',
            'X-Amz-Meta-Testing': 1234,
            'example': 5678
        }
        // Using fPutObject API upload your file to the bucket europetrip.
        minioClient.fPutObject('europetrip', 'photos-europe', file, metaData, function(err, etag) {
          if (err) return console.log(err)
          console.log('File uploaded successfully.')
        });
    });
    res.send({message:'wowwww'})
})

app.post('/', (req, res) => {
    res.send
})



app.listen(3000,()=>{
    console.log('Connect To Server.......');
})