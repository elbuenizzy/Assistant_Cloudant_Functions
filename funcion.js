function main(params) {
    /**
     * Proporcionamos los datos de conexión
     */
     
    var dbName = '';
    var url = ``;
    var cloudantOrError = getCloudantAccount(url);
    
    /**
     * Validamos tener acceso a cloudant
     */
    if (typeof cloudantOrError !== 'object') {
        return Promise.reject(cloudantOrError);
    }
    var cloudant = cloudantOrError;
    var cloudantDb = cloudant.use(dbName);
    
    
    return cloudantDb.insert(params);
}
function getCloudantAccount(url) {
    var Cloudant = require('@cloudant/cloudant');
    var cloudant;
    cloudant = Cloudant(url);
    return cloudant;
}
