import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_APP_URL || "",
})

// Keep every employee request under the /api prefix used by the deployment rewrite.
export const getEmployees = () => api.get('/api/employees')
export const getEmployeesById = (id) => api.get(`/api/employees/${id}`)
export const createEmployee = (employee) => api.post('/api/employees', employee)
export const updateEmployeeById = (id, employee) => api.put(`/api/employees/${id}`, employee)
export const deleteEmployeeById = (id) => api.delete(`/api/employees/${id}`)