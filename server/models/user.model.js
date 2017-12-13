import mongoose from 'mongoose';
import Promise from 'bluebird';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
const bcrypt = Promise.promisifyAll(require('bcrypt'));

/**
 * User Schema
 */
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  },
  password: {
    type: String,
    required: true,
    match: /(?=.*[a-zA-Z])(?=.*[0-9]+).*/,
    minlength: 6,
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

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const hash = await bcrypt.hashAsync(this.password, 10);

    this.password = hash;

    next();
  } catch (err) {
    next(err);
  }
});

/**
 * Methods
 */
UserSchema.method({
  passwordIsValid: function(password) {
    try {
      return bcrypt.compareAsync(password, this.password);
    } catch (err) {
      throw err;
    }
  },
});

/**
 * Statics
 */
UserSchema.statics = {
  /**
   * Get user
   * @param {ObjectId} id - The objectId of user.
   * @returns {Promise<User, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then(user => {
        if (user) {
          return user;
        }
        const err = new APIError('No such user exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List users in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of users to be skipped.
   * @param {number} limit - Limit number of users to be returned.
   * @returns {Promise<User[]>}
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
 * @typedef User
 */
export default mongoose.model('User', UserSchema);
