import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  wrongPassAlert: boolean = false;

  user = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.user);
    const { email, password } = this.user;
    // To add a new user just change '.login()' to '.register()'
    this.authService.login(email, password).then(res => {
      console.log('Ingresaste correctamente', res);
      if (res) {
        this.route.navigate(['/home']);
      } else {
        console.log('Algo salio mal, intentalo nuevamente.')
        this.wrongPassAlert = true;
      }
    })
  }

}
