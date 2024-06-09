const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '.env') });
const { engine } = require('express-handlebars');
const { MONGO_URL } = require('./config/index');
const app = express();
const apiRouter = require('./routers/api.Router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'page')));
app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});
app.use('/', apiRouter);
app.use(_Error);

app.engine('.hbs', engine({ defaultLayout: false }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'page'));

app.listen(8008, () => {
  console.log('< Start Server 808 >');
});
_connectDB();

function _connectDB() {
  mongoose
    .set('debug', true)
    .set('strictQuery', true)
    .connect(MONGO_URL)
    .then(() => console.log('+ MongoDB success'))
    .catch((error) => {
      console.log('err', error.message);
      process.exit(1);
    });
}
function _Error(err, req, res, next) {
  res
    .status(err.static || 500)
    .json({ message: err.message, status: err.status });
  console.log('>-----------------------<');
  console.log('err', err);
  console.log('>-----------------------<');
}
