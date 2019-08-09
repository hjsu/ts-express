import express from 'express';

const router = express.Router();

const indexHandler = (req: express.Request, res: express.Response) => {
  res.render('index', { title: 'Express' });
}
  
/* GET home page. */
router.get('/', indexHandler);

export default router;
