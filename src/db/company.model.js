const mongoose = require('mongoose');

const CompanySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  employee: [{
    type: Schema.Types.ObjectId,
    ref: 'employee'
  }]
});

const Employee = mongoose.model('employee', CompanySchema);
