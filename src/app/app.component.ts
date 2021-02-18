import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'InstagramClone';

ngOnInit():void {

  var firebaseConfig = {
    apiKey: "AIzaSyAJpzOfX6U2k6AiMHgwmljW7UYTZ-U9IHw",
    authDomain: "amg-instagram-clone.firebaseapp.com",
    databaseURL: "https://amg-instagram-clone.firebaseio.com",
    projectId: "amg-instagram-clone",
    storageBucket: "amg-instagram-clone.appspot.com",
    messagingSenderId: "393823650211",
    appId: "1:393823650211:web:71a76ca911f9c23b30da16",
    measurementId: "G-P5P3BZG8MV"
  };

  firebase.initializeApp(firebaseConfig)
}

  
}
