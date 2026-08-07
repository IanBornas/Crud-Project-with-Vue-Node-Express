const express = require('express')
const router = express.Router()
const {getEmployees,getEmployeesById, createEmployee, updateEmployeeById, deleteEmployeeById} = require("../controllers/employeeController")

router.get("/", getEmployees)
router.get("/:id", getEmployeesById)
router.post("/", createEmployee)
router.put("/:id", updateEmployeeById)
router.delete("/:id", deleteEmployeeById)


module.exports = router