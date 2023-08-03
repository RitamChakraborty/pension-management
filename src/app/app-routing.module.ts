import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      animation: 'home',
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      animation: 'login',
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
