import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { OperationComponent } from './components/operation/operation.component';
import { ListOperationsComponent } from './components/list-operations/list-operations.component';
import { ErrorComponent } from './components/error/error.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AuthGuard } from './auth.guard';
import { SaveTokenService } from './services/token/save-token.service';
import { EditOperationFormComponent } from './components/edit-operation-form/edit-operation-form.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    OperationComponent,
    ListOperationsComponent,
    ErrorComponent,
    NavigationComponent,
    EditOperationFormComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SaveTokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
