import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { Employee } from '../../Modals/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:Employee[];
  newEmployee:Employee;
  dataSource = this.employees;
  displayedColumns: string[] = [ 'CardNumber', 'Delete'];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
    this.newEmployee = {CardNumber:0};
  }

  getEmployees()
  {
    this.employeeService.getEmployee().subscribe(x=> this.employees = x);
    console.log(this.employees);
  }

  delete(employee:Employee)
  {
    this.employeeService.remove(employee).subscribe(x=>{
        this.getEmployees();
        this.dataSource = this.employees;
    });
  }

  add()
  {
    this.employeeService.add(this.newEmployee).subscribe(x=>{
      this.getEmployees();
      this.dataSource = this.employees;
    });
  }

}
