import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AlterarComponent } from './home/alterar/alterar.component';
import { AlterarsenhaComponent } from './home/alterar/alterarsenha/alterarsenha.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Alterar', component: AlterarComponent },
  { path: 'Alterarsenha', component: AlterarsenhaComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
