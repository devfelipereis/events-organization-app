import mongoose from 'mongoose';
import Promise from 'bluebird';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * Event Schema
 */
const EventSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
EventSchema.method({});

/**
 * Statics
 */
EventSchema.statics = {
  /**
   * Get Event
   * @param {ObjectId} id - The objectId of Event.
   * @returns {Promise<Event, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then(event => {
        if (event) {
          return event;
        }
        const err = new APIError('No such Event exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List Events in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of Events to be skipped.
   * @param {number} limit - Limit number of Events to be returned.
   * @returns {Promise<Event[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  },
};

/**
 * @typedef Event
 */
export default mongoose.model('Event', EventSchema);
