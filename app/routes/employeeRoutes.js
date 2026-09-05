const express = require('express')
const router = express.Router()
const {getEmployees,getEmployeesById, createEmployee, updateEmployeeById, deleteEmployeeById} = require("../controllers/employeeController")

router.get("/employees", getEmployees)
router.get("/employees/:id", getEmployeesById)
router.post("/employees", createEmployee)
router.put("/employees/:id", updateEmployeeById)
router.delete("/employees/:id", deleteEmployeeById)


module.exports = router