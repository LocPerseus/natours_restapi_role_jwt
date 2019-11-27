const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });
// console.log(process.env);
const app = require('./app');
const PORT = process.env.PORT || 3000;

const DB = process.env.DATABASE_LOCAL;

// Connect Mongoose
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log('DB connection successfully.');
    });


// 4) START SERVER
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));