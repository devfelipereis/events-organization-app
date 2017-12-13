import EventModel from '../models/event.model';

/**
 * Load event and append to req.
 */
function load(req, res, next, id) {
  EventModel.findById(id)
    .then(event => {
      req.event = event; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get event
 * @returns {event}
 */
function get(req, res) {
  return res.json(req.event);
}

/**
 * Create new event
 * @property {string} req.body.userId - The user who created the event.
 * @property {string} req.body.name - The name of event.
 * @property {string} req.body.startDate - When the event starts.
 * @property {string} req.body.endDate - When the event ends.
 * @returns {event}
 */
function create(req, res, next) {
  const event = new EventModel({
    userId: req.body.userId,
    name: req.body.name,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  });

  event
    .save()
    .then(savedEvent => res.json(savedEvent))
    .catch(e => next(e));
}

/**
 * Get event list.
 * @property {number} req.query.skip - Number of events to be skipped.
 * @property {number} req.query.limit - Limit number of events to be returned.
 * @returns {event[]}
 */
function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  EventModel.list({ limit, skip })
    .then(events => res.json(events))
    .catch(e => next(e));
}

export default { load, get, create, list };
