const { Workout } = require('../models');

const resolvers = {
  Query: {
    Workout: async () => {
      return await Workout.find({});
    }
  },
  Mutation: {
    addWorkout: async (parent, args ) => {
      return await Workout.create(args);
    }
  }
};

module.exports = resolvers;