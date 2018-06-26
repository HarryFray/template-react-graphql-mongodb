const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  info: {
    type: String,
  },
});

const Employee = mongoose.model('employee', EmployeeSchema);
