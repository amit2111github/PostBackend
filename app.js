var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cors = require('cors')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const mongoose = require('mongoose')

var indexRouter = require('./routes/post')

var app = express()
app.use(cors())
mongoose
  .connect('mongodb://localhost:27017/demo-proj-post')
  .then((res) => {
    console.log('DB Connected...')
  })
  .catch((err) => console.log('DB Connection failed'))
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/post', indexRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
