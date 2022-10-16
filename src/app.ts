import express from 'express';
import { Request, Response } from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/env', (req: Request, res: Response) => {
    res.json(process.env);
});

app.get('/health', (req: Request, res: Response) => {
    res.json({'health': 'OK'});
});

export default app;
