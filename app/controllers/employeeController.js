const { db } = require("../config/firebase");

//get employees
const getEmployees = async (req,res) =>{
    try {
        const snapshot = await db.collection("employees").get();
        const employees = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(employees)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

//get by id
const getEmployeesById = async (req,res) => {
    try {
        const docRef = db.collection("employees").doc(req.params.id)
        const doc = await docRef.get()
        if (!doc.exists) {
            return res.status(404).json({message:'Employee not found'})
        }
        res.json({ id: doc.id, ...doc.data() })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//post employees
const createEmployee = async (req,res) => {
  try {
    const { name, email, department, position } = req.body;
    if (!name || !email || !department || !position) {
      return res.status(400).json({ error: "Please fill the required forms" });
    }
    const docRef = await db.collection("employees").add({ name, email, department, position });
    res.status(201).json({ id: docRef.id, name, email, department, position });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


//update employee by id
const updateEmployeeById = async(req,res)=>{
    try{
        const {id} = req.params;
        const employeeData = req.body
        const docRef = db.collection("employees").doc(id);
        const doc = await docRef.get();
        if (!doc.exists){
            return res.status(404).json({ error: 'Employee not found' });
        }
        await docRef.update(employeeData);
        res.status(200).json({message: 'Employee updated sucessfully!'})        
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

//delete employee by id
const deleteEmployeeById = async(req,res)=> {
    try{
        const {id} = req.params
        const employeeData = req.body
        const docRef = db.collection("employees").doc(id);
        const doc = await docRef.get(); 
        
        if (!doc.exists){
            return res.status(404).json({ error: 'Employee not found!' });
        }

        await docRef.delete(employeeData)
        res.status(200).json({message: 'Employee Deleted sucessfully!'})    
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getEmployees,
    getEmployeesById,
    createEmployee,
    updateEmployeeById,
    deleteEmployeeById
}

