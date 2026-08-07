import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_APP_URL,
})

export const getEmployees = () => api.get('/employees')
export const getEmployeesById = (id) => api.get(`/employees/${id}`)
export const createEmployee = (employee) => api.post('/employees', employee)
export const updateEmployeeById = (id, employee) => api.put(`/employees/${id}`, employee)
export const deleteEmployeeById = (id) => api.delete(`/employees/${id}`)