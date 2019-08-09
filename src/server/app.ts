import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import EJS from 'ejs';

import indexRouter from './routes/index';
import usersRouter from './routes/index';

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', EJS.__express);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
const missingRouteHandler = (
  req: express.Request, res: express.Response,
  next: express.NextFunction
) => next(createError(404));

app.use(missingRouteHandler);


// error handler
const errHandler = (
  err: createError.HttpError, req: express.Request,
  res: express.Response, next: express.NextFunction
) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
}

app.use(errHandler);

export default app;
