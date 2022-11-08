const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

// Username: First_Node_Lab & Password: GEsGu8UiHfC4CKoV

const uri = "mongodb+srv://First_Node_Lab:GEsGu8UiHfC4CKoV@cluster0.6wtrm1x.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect
        const database = client.db("Sorowar's-Travelling Site");
        const serviceCollection = database.collection("services");
        // const orderCollection = database.collection("orders");
        // const hotelCollection = database.collection("hotels");
        // console.log('database connected')

        // send services to the database
        app.post('/services', async (req, res) => {
            const service = req.body;

            const result = await serviceCollection.insertOne(service);
            console.log(result);
            res.json(result)
        });

    } finally {

    }
}
run().catch(console.dir)




app.get('/', (req, res) => {
    res.send('I am Sorowar!')
})

app.listen(port, () => {
    console.log(`Travelling is on the way on port ${port}`)
})