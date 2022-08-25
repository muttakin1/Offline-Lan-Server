const express = require('express')
const config = require('./config/config')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const doctorRoutes = require('./routes/doctor.route');
const patientRoutes = require('./routes/patient.route');
const reportRoutes = require('./routes/report.route');
const authRoutes = require('./routes/auth.route');
const path = require('path');
const app = express()

app.use(express.static(path.join(__dirname, "client/build")));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

//mounting the routes
app.use('/', patientRoutes);
app.use('/', doctorRoutes);
app.use('/', authRoutes);
app.use('/', reportRoutes);

// connect to the database
mongoose.connect(config.mongoUri, { useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true, })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));

//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname+"./client/build/index.html"));
});

app.listen(config.serverPort, () => {
  console.log(`Example app listening at http://localhost:${config.serverPort}`)
})