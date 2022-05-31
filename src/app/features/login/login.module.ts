import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { AngularMaterialModule } from 'src/app/app-material';
import { SharedModule } from 'src/app/core/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AngularMaterialModule,
    SharedModule,
    HttpClientModule
  ]
})
export class LoginModule { }
