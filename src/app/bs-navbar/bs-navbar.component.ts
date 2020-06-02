import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  user: firebase.User;
  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(response => {
    this.user = response;
    });
  }

  ngOnInit(): void {
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
