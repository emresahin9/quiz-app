import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem("playerName");
    localStorage.removeItem("questionOrder");
    localStorage.removeItem("correctAnswers");
    localStorage.removeItem("wrongAnswers");
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      name: ["", Validators.required]
    })
  }

  login() {
    if (this.loginForm.valid) {
      let player = Object.assign({}, this.loginForm.value);
      console.log(player);
      localStorage.setItem("playerName", player.name);
      localStorage.setItem("questionOrder", "1");
      localStorage.setItem("correctAnswers", "0");
      localStorage.setItem("wrongAnswers", "0");
      this.router.navigate(['quiz']);
    }
    else
      this.loginForm.markAllAsTouched();
  }
}
