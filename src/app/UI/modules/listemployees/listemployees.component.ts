import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../domain/models/employee.model';
import { HttpClient } from '@angular/common/http';
import { Employees } from 'src/app/domain/models/Employees/employees';
import { EmployeesUseCase } from 'src/app/domain/models/usecase/employee/employeesUseCase';

@Component({
  selector: 'app-listemployees',
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css']
})
export class ListemployeesComponent implements OnInit {

  listEmployeesModel!: Employees[];


  constructor(private http: HttpClient, private _employeesUseCase: EmployeesUseCase) { }
  ngOnInit(): void {
    this.listEmployee();

  }

  listEmployee() {
    //let id = this.listEmployeesModel.id;
    //let nombre = this.listEmployeesModel.name;
    //let role = this.listEmployeesModel.rol;
    //console.log(id, nombre, role);
    this._employeesUseCase.listEmployees()
      .subscribe((response: Employees[]) => {
        console.log(response);
        this.listEmployeesModel = response
    });
    //console.log(this.listEmployeesModel, "por aqui pase");

  }

}



