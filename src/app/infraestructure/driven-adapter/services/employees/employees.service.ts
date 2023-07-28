import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employees } from "src/app/domain/models/Employees/employees";
import { Employeesgateway } from "src/app/domain/models/Employees/gateway/employeesgateway";

@Injectable({
    providedIn: 'root'    
})

export class EmployeesService implements Employeesgateway{

    constructor(private http: HttpClient) {}

    newEmployee(name: string, role: string): Observable<Employees> {
       return this.http.post<Employees>('http://localhost:8080/employees', {name, role}) 
    }

    listEmployee(): Observable<Employees[]> {
        return this.http.get<Employees[]>('http://localhost:8080/employees') 
     }
}