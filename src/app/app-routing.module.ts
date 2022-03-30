import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskAssistanceComponent } from './components/home/ask-assistance/ask-assistance.component';
import { HomeComponent } from './components/home/home.component';
import { NewComponentComponent } from './components/home/new-component/new-component.component';
import { SearchComponentComponent } from './components/home/search-component/search-component.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

const routes: Routes = [
  {
     path: '', 
     pathMatch: 'full', 
     component: LoginComponent 
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  {
    path: 'home', 
    component: HomeComponent, 
    children: [
      { 
        path: '', 
        component: NewComponentComponent 
      },
      { 
        path: 'assistance', 
        component: AskAssistanceComponent 
      },
      { 
        path: 'search', 
        component: SearchComponentComponent 
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
