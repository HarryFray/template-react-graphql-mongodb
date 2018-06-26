const graphql = require('graphql');
const mongoose = require('mongoose');
const employeeModal = require('./db/employee.model');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
} = graphql;

const Employee = mongoose.model('employee');


const EmployeeType = new GraphQLObjectType({
  name: 'Employee',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    info: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    employees: {
      type: new GraphQLList(EmployeeType),
      resolve() {
        return Employee.find({});
      },
    },
    employee: {
      type: EmployeeType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Employee.findById(id);
      },
    },
  }),
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addEmployee: {
      type: EmployeeType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        info: { type: GraphQLString },
      },
      resolve(parentValue, { name, info }) {
        return new Employee({ name, info }).save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
