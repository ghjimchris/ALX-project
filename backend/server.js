import { configDotenv } from 'dotenv'
import express, { json, urlencoded } from 'express'
import cors from 'cors';
import helmet from 'helmet';
import { corsOptions, 
  // corsOptionsDelegate, whitelist 
} from './config/cors.js';

import mountRoutes from './routes/index.js';

const app = express();
app.use(cors(corsOptions));
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: true }));

configDotenv()

const PORT = process.env.APP_PORT || 4000;

app.get('/', function (_, res) {
  res.send('Welcome')
})

app.get('/api/health', function (_, res) {
  res.send('Healthy')
})

mountRoutes(app);

app.listen(PORT, () => console.info(`App running on Port ${PORT}`));