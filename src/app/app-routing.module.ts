import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RekenmachineComponent } from './rekenmachine/rekenmachine.component';

const routes: Routes = [{path:'rekenmachine', component: RekenmachineComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
