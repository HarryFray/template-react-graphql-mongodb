const mongoose = require('mongoose');



const EmployeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  info: {
    type: String
  }
});

const Employee = mongoose.model('Employee', EmployeeSchema);


module.exports.retrieveEmployees = () =>
  Employee.find({})
    .select('name info')
    .then(res => console.log('asdfasdf', res.data))
    .catch(err => console.log(`retriveEmployees DB ${err}`));


module.exports.insertNewEmployee = (newEmployee) => {
  new Employee(newEmployee)
    .save()
    .then((res) => res)
    .catch(err => console.log(`insertNewEmployees DB ${err}`));
};