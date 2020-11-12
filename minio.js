var Minio = require('minio')
//play.min.io
var minioClient = new Minio.Client({
    endPoint: 'minio',
    port: 9000,
    accessKey: 'minio',
    secretKey: 'minio123'
});


module.exports = minioClient;