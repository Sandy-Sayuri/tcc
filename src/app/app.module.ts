import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { getPaginatorIntl } from './paginator';
import { LoginService } from './shared/services/login.service';
import { BoxLoginComponent } from './componet/box-login/box-login.component';
import { HomeComponent } from './componet/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    BoxLoginComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [ LoginService,
    {provide: MatPaginatorIntl, useValue: getPaginatorIntl()}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
