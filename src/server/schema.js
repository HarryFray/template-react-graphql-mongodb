const graphql = require('graphql');
const axios = require('axios');
const employeeModal = require('./db/employee.model');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const EmployeeType = new GraphQLObjectType({
  name: 'Employee',
  fields: () => ({
    name: { type: GraphQLString },
    info: { type: GraphQLString },
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    employees: {
      type: EmployeeType,
      args: { name: { type: GraphQLString }, info: { type: GraphQLString } },
      resolve(parentValue, args) {
        return employeeModal.retrieveEmployees();
      }
    },
  }
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addEmployee: {
      type: EmployeeType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        info: { type: GraphQLString }
      },
      resolve(parentValue, { name, info }) {
        return employeeModal.insertNewEmployee({ name, info })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
})
