import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginService = inject(LoginService)
  router = inject(Router)

  loginForm = new FormGroup({
    nome: new FormControl("", [Validators.required]),
    senha: new FormControl("", [Validators.required])
  })

  onSubmitLogin() {
    const { nome, senha } = this.loginForm.value

    if (!this.loginForm.valid || !nome || !senha) {
      alert("Existem campos não preenchidos!")
      return
    }

    this.loginService.login(nome, senha).subscribe({
      error: (err) => {
        if (err.status === 401) {
          alert("Usuário ou senha incorretos!")
        } else {
          alert("Erro interno! Tente novamente mais tarde...")
        }
      },
      next: () => {
        this.router.navigate(["/dashboard"]) 
      }
    })
  }
}