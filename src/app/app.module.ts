import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewemployeesComponent } from './UI/modules/newemployees/newemployees.component';
import { Employeesgateway } from './domain/models/Employees/gateway/employeesgateway';
import { EmployeesService } from './infraestructure/driven-adapter/services/employees/employees.service';
import { ListemployeesComponent } from './UI/modules/listemployees/listemployees.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewemployeesComponent,
    ListemployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: Employeesgateway, useClass: EmployeesService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
