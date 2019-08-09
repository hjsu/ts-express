import express from 'express';

const router = express.Router();

const userHandler = (req: express.Request, res: express.Response) => {
  res.send('respond with a resource');
}

/* GET users listing. */
router.get('/', userHandler);

export default router;
