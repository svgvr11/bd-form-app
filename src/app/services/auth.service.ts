import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat//auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afauth: AngularFireAuth
  ) { }

    async login(user:string, password:string) {
      try {
        return await this.afauth.signInWithEmailAndPassword(user, password);
      } catch (err) {
        console.log("Error en login: ", err);
        return null;
      }
    }

    async register(email:string, password:string) {
      try {
        return await this.afauth.createUserWithEmailAndPassword(email, password);
      } catch (err) {
        console.log('Error al registrarse: ', err);
        return null;
      }
    }

    getUserLogged() {
      return this.afauth.authState;
    }

    logout() {
      this.afauth.signOut();
    }
}
