const express = require('express')
const router = express('router')
const {getEmployees,getEmployeesById, createEmployee} = require("../controllers/employeeController")

router.get("/", getEmployees)
router.get("/:id", getEmployeesById)
router.post("/", createEmployee)
//router.put("/", updateEmployee)
//router.delete("/", deleteEmployee)


module.exports = router