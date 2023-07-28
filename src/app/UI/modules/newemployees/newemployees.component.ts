import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employees } from 'src/app/domain/models/Employees/employees';
import { EmployeesUseCase } from 'src/app/domain/models/usecase/employee/employeesUseCase';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newemployees',
  templateUrl: './newemployees.component.html',
  styleUrls: ['./newemployees.component.css']
})
export class NewemployeesComponent implements OnInit{
  
  newEmployeesModel = new Employees;

constructor(private http: HttpClient, private _employeesUseCase:EmployeesUseCase){}
  ngOnInit(): void {
    
  }

  newEmployees(){
    let nombre = this.newEmployeesModel.name;
    let role = this.newEmployeesModel.role;
    console.log(nombre, role);
    this._employeesUseCase.newEmployee(nombre, role).subscribe((data:any) => {console.log(data)}); 
    
  }
}
