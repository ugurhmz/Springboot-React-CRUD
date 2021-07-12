import React, { Component } from "react";

class ListEmployeesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
  }

  render() {
    return (
      <div>
        <h2 className="text-center text-success ">Employees List</h2>
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
