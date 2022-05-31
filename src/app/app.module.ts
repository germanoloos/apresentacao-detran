import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './app-material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthTokenHttpInterceptorProvider } from './core/interceptor/auth.interceptor';
import { CadastroModule } from './features/cadastro/cadastro.module';
import { HomeModule } from './features/home/home.module';
import { LoginModule } from './features/login/login.module';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HomeModule,
    LoginModule,
    CadastroModule
  ],
  providers: [AuthTokenHttpInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
