import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  data : Date = new Date();
  focus;
  focus1;
  serverMessage: string;
  analytics = firebase.analytics();

  constructor(private afAuth: AngularFireAuth, private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    // console.log(this.form);
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6), Validators.required]],
      passwordConfirm: ['', []]
    });

    const body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');

    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    // console.log(this.form);
  }

  ngOnDestroy(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');

    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  async onSubmit() {
    // const kemTest = this.form.value;
    const email = this.form.value.email; //    .get('email');
    const password = this.form.value.password; // .get('password');
    // console.log(kemTest);
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password).then(res => {
        // console.log(res);
        const method = res.operationType;
        this.analytics.logEvent('login', { method })
        this.router.navigate(['/hours']).catch(err => console.log(err));
      });
    } catch (err) {
      this.serverMessage = err;
      console.log(this.serverMessage);
    }
  }

}
