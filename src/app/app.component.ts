import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Chris';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAXQ3rUebU9W3xHMIT8rvg9QjB0koMrad8',
      authDomain: 'schnitzel-f436e.firebaseapp.com',
    });
  }
}
