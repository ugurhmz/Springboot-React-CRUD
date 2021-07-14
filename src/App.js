import React from 'react';
import FooterComponent from "./components/FooterComponent";
import ListEmployeesComponent from "./components/ListEmployeesComponent";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import DetailEmployeeComponent from './components/DetailEmployeeComponent';



function App() {
  return (
    <div>
         <Router>
                <NavbarComponent />
                    <div className="container">
                      <Switch>  
                          <Route path="/" exact component={ListEmployeesComponent}></Route>               
                          <Route path="/employees" component={ListEmployeesComponent}></Route>               
                          <Route path="/add-newEmployee" component={AddEmployeeComponent}></Route>
                          <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route>
                          <Route path="/detail-employee/:id" component={DetailEmployeeComponent}></Route>
                                           
                      </Switch>
                    </div>
                <FooterComponent />
         </Router>
    </div>
  );
}

export default App;
