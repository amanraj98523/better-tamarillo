
const Employee = require('../models/Employee');

exports.addEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEmployees = async (req, res) => {
 
};

exports.updateEmployee = async (req, res) => {

};

exports.deleteEmployee = async (req, res) => {

};
