import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewComponentComponent } from './components/home/new-component/new-component.component';
import { SearchComponentComponent } from './components/home/search-component/search-component.component';
import { AskAssistanceComponent } from './components/home/ask-assistance/ask-assistance.component';
import { AddCompService } from './services/add-comp.service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NewComponentComponent,
    SearchComponentComponent,
    AskAssistanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    AddCompService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
