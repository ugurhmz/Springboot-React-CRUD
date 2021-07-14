package com.ugurhmz.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ugurhmz.springboot.exception.ResourceNotFoundException;
import com.ugurhmz.springboot.model.Employee;
import com.ugurhmz.springboot.repository.EmployeeRepository;



//@CrossOrigin(value="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	// GET ALL EMP
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	
	
	// CREATE employee rest api
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	
	
	// GET employee  with id rest api
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeWithId(@PathVariable Long id) {
		Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id+" Employee Not Found!"))	;				
		return ResponseEntity.ok(employee);	
	}
	
	
	// UPDATE employee rest api
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(
			@PathVariable Long id, 
			@RequestBody  Employee emp) 
	{
		// (1)  find with id
		Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee Not Found! "));
		
		
		// (2) set this object
		employee.setFirstName(emp.getFirstName());
		employee.setLastName(emp.getLastName());
		employee.setEmail(emp.getEmail());
		
		
		// (3) then save this object in repository
		Employee updatedEmplyee = employeeRepository.save(employee);
		return ResponseEntity.ok(updatedEmplyee);
		
	}
	
	
}
















