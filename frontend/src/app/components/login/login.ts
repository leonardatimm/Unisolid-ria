import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  
  // O HTML está usando "usuario", mas o Java espera "email". Vamos mapear!
  loginData = { usuario: '', senha: '' };
  erroMensagem = signal('');

  constructor(private authService: AuthService, private router: Router) {}

  entrar() {
    // Montamos o "pacote" exatamente como a classe Users do Java espera
    const payloadLogin = {
      email: this.loginData.usuario,
      senha: this.loginData.senha
    };

    // Chama a API de login
    this.authService.login(payloadLogin).subscribe({
      next: (usuarioLogado) => {
        // Se a senha bater, o Java devolve os dados do usuário.
        // Guardamos no navegador para usar no cabeçalho do Layout depois!
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
        
        // Limpa erros e vai para o painel de controle
        this.erroMensagem.set('');
        this.router.navigate(['/dashboard']);
      },
      error: (erro) => {
        // Se a senha estiver errada ou e-mail não existir
        this.erroMensagem.set('E-mail ou senha inválidos!');
      }
    });
  }
}