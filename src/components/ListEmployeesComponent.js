import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ListEmployeesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };

    // BIND
    this.addNewEmployee = this.addNewEmployee.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);

  }

  // update
  updateEmployee(id) {
    this.props.history.push(`/update-employee/${id}`);
  }

  // delete
    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then( res => {
          this.setState({employees : this.state.employees.filter ( employee => employee.id  !== id)})
        })
    }


  //detail employee
  detailEmployee(id) {
      this.props.history.push(`/detail-employee/${id}`);
  }

  // didMount
  componentDidMount() {

    EmployeeService.getAllEmployees().then((res) => {
      this.setState({ employees: res.data });
    });

  }

  //add employee
  addNewEmployee() {
    this.props.history.push('/add-newEmployee')
  }

 

  render() {
    return (
      <div>
        <h2 className="text-center text-success ">Employees List<i className="ml-3 fas fa-users"></i></h2>
        <div className="row">
          <button className="btn btn-success mb-4" onClick={this.addNewEmployee}>
            <span><i className="fas fa-plus">Add New Employee</i></span>
            </button>
        </div>

        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Operations</th>
              </tr>
            </thead>

            <tbody>
              {this.state.employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.email}</td>
                  <td>
                    <button className="btn btn-primary" onClick={ () => this.updateEmployee(emp.id) }>
                        <span><i className="fas fa-edit"></i></span>
                    </button>
                    <button className="btn btn-danger ml-2" onClick={ () => this.deleteEmployee(emp.id)}>
                        <span><i className="far fa-trash-alt"></i></span>
                    </button>
                    <button className="btn btn-info ml-2" onClick={() => this.detailEmployee(emp.id)}>
                        Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


      </div>
    );
  }
}

export default ListEmployeesComponent;
