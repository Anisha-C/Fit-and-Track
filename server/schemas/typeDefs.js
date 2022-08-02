const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Workout {
    _id: ID
    workoutType: String
    duration: String
    date: String
    description: String
  }
  type Query {
    Workout: Workout
  }

  type Mutation {
    addWorkout(workoutType: String!, duration: String, date: String, description: String): Workout
  }
`;

module.exports = typeDefs;

