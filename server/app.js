import express from 'express';
import router from './router.js';

export const app = express();
app.use('/', express.static('View'));

/**
 * parses text as url encoded data and exposes resulting object)
 */
app.use(router);