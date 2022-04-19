import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userLogged: string = "";

  constructor(
    private authService: AuthService,
    private route: Router,
  ) { }

  ngOnInit(): void {
   this.userLogged = JSON.parse(localStorage.getItem('userLogged') || '{}');
  }

  logout() {
    this.authService.logout();
    this.route.navigate(['/']);
  }

}
