import dotenv from 'dotenv'
import { connectToDb } from "./db/index.js";
import { app } from "./app.js";
dotenv.config({ path: './env' })




connectToDb()
    .then(() => {
        console.log(`🥡MongoDb connection succesful🥡`)
        try {
            app.listen(process.env.PORT, () => {
                console.log(`🏃app running successfully on port ${process.env.PORT}`);
            })

        } catch (error) {
            console.log('Port running failed:::: ', error);
        }

    })
    .catch((err) => {
        console.log(`MongoDb Connection Faild`, err);
    })
app.get('/', (req, res) => {
    res.send("<h1>Shakil<h1/>")
})

/*
    (async () => {
        try {

            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on('Error::::::>>>', (err) => {
                throw err
            })
            app.listen(process.env.PORT, () => {
                console.log('App is listening on Port 8000');
            })

        } catch (error) {
            console.error('MONGODB Connection Error', error)
            throw error
        }
    })()


    */