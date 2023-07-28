import { Observable } from "rxjs";
import { Employees } from "../employees";

export abstract class Employeesgateway {
    abstract newEmployee(name: string, role: string) : Observable<Employees>

    abstract listEmployee() : Observable<Employees[]>
    
}