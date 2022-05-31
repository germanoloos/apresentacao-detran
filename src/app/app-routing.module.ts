import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home-routing.module').then((m) => m.HomeRoutingModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login-routing.module').then((m) => m.LoginRoutingModule)
  },
  {
    path: 'cadastrar',
    loadChildren: () =>
      import('./features/cadastro/cadastro-routing.module').then((m) => m.CadastroRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
