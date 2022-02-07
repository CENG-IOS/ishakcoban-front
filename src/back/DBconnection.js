const { MongoClient } = require('mongodb');
async function main(){

    const uri = "mongodb+srv://ishakcbn:HLEbLSUqwbEtYwn1@cluster0.yelm0.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
 
    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
 