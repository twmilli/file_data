import express from 'express';
import path from 'path';
import router from './router.js';

export const app = express();
app.use('/', express.static(path.join(__dirname,'../View')));

/**
 * parses text as url encoded data and exposes resulting object)
 */
app.use(router);