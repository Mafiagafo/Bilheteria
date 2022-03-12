import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/auth';
import { Observable } from 'rxjs';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  //usuario$: Observable<firebase.User>;
  // usuario$: any[0] = '';

  // constructor(private afAuth: AngularFireAuth) {
  //   //afAuth.authState.subscribe(user => console.log(user))
  //   this.usuario$ = afAuth.authState;
  //  }

  // logout(){
  //   this.afAuth.signOut();
  // }
}
