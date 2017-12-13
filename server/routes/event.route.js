import express from 'express';
import eventCtrl from '../controllers/event.controller';

const router = express.Router();

router
  .route('/')
  /** GET /api/events - Get list of events */
  .get(eventCtrl.list)

  /** POST /api/users - Create new user */
  .post(eventCtrl.create);

router
  .route('/:eventId')
  /** GET /api/events/:eventId - Get event */
  .get(eventCtrl.get);

/** Load event when API with eventId route parameter is hit */
router.param('eventId', eventCtrl.load);

export default router;
