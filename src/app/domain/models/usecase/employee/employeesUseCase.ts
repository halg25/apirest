import { Injectable } from "@angular/core";
import { Employeesgateway } from "../../Employees/gateway/employeesgateway";
import { Observable } from "rxjs";
import { Employees } from "../../Employees/employees";

@Injectable({
    providedIn: 'root'
})

export class EmployeesUseCase{

    constructor(private _employeesGateway: Employeesgateway) {}

    newEmployee(name: string, rol: string) :Observable<Employees>{
        return this._employeesGateway.newEmployee(name, rol);
    }

    listEmployees() :Observable<Employees[]>{
        return this._employeesGateway.listEmployee()
    }
    
}