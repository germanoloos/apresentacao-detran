import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';


@NgModule({
  declarations: [
    CadastrarComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
