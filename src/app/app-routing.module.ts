import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from 'src/app/registration/registration.component';
import { SearchDeleteComponent } from 'src/app/search-delete/search-delete.component';


const routes: Routes = [
  {path:"",redirectTo:"/registration",pathMatch:"full"},
  {path:"registration",component:RegistrationComponent},
  {path:"serchDelete",component:SearchDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
