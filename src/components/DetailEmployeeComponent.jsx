import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'


class DetailEmployeeComponent extends Component {
        constructor(props) {
            super(props);

            this.state = {
                    id:this.props.match.params.id,
                    employee : {}
            }
        }

        componentDidMount(){
            EmployeeService.getEmployeeWithID(this.state.id).then(res => {
                this.setState({
                    employee: res.data
                })
               
            })

           
        }


    render() {
        return (
            <div className="container mt-5 col-md-6" style={{fontSize:'1.5rem'}}>
                
                <div className="card text-center ">
                    <div className="card-header">
                    <i className="fas fa-user mr-1"></i> Employee ID : {this.state.employee.id} 
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                          <p> First name : { this.state.employee.firstName }</p>
                           
                           Last name :  {this.state.employee.lastName}
                        </h5>
                        <p className="card-text"> 
                        Email : {this.state.employee.email}
                        </p>
                        <a href="/employees" className="btn btn-primary btn-sm mt-4">Home</a>
                    </div>
                </div>


                
            </div>
        )
    }
}

export default  DetailEmployeeComponent;