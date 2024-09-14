import express from 'express';
import { getTest } from './controller';

export const router = express.Router();

router.get('/test', getTest);
