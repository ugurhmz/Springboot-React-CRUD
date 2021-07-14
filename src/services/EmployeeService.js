import axios from "axios";

const EMPLOYEE_API_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {

  getAllEmployees() {
    return axios.get(EMPLOYEE_API_URL);
  }

  createEmployee(employee){
    return axios.post(EMPLOYEE_API_URL,employee);
  }

  
  getEmployeeWithID(employeeId) {
    return axios.get(EMPLOYEE_API_URL + '/' + employeeId);
  }

  updateEmployee(employee, employeeId) {
    return axios.put(EMPLOYEE_API_URL + '/' + employeeId, employee);
  }

  deleteEmployee(employeeId){
    return axios.delete(EMPLOYEE_API_URL + '/'+ employeeId);
  }

 
}

export default new EmployeeService();
