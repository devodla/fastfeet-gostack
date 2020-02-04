import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ response: 'Todo Ok' });
});

export default routes;
