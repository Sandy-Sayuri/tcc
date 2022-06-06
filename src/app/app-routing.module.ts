import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxLoginComponent } from './componet/box-login/box-login.component';
import { MenuComponent } from './componet/menu/menu.component';

const routes: Routes = [
  {path:'login',component:BoxLoginComponent},
  {path:'',component:MenuComponent},
  {path:'**',redirectTo:'login'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
