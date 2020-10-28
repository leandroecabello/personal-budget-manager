import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ErrorComponent } from './components/error/error.component';
import { ListOperationsComponent } from './components/list-operations/list-operations.component';
import { LoginComponent } from './components/login/login.component';
import { OperationComponent } from './components/operation/operation.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'addOperation',
    component: OperationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'operations',
    component: ListOperationsComponent,
    canActivate: [AuthGuard]
  },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
