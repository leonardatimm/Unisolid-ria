import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class CadastroComponent {
  
  // Variável que guarda o que o usuário digita na tela
  cadastroData = { nome: '', email: '', senha: '' };
  
  // Sinais para mostrar mensagens na tela
  erroMensagem = signal('');
  sucessoMensagem = signal('');

  // Injetamos o nosso Serviço e o Roteador
  constructor(private authService: AuthService, private router: Router) {}

  cadastrar() {
    // Chama o método do serviço que vai lá no Java
    this.authService.cadastrar(this.cadastroData).subscribe({
      next: (resposta) => {
        // Se o Java retornar 201 CREATED (Sucesso)
        this.sucessoMensagem.set('Cadastro realizado com sucesso! Redirecionando...');
        this.erroMensagem.set('');
        
        // Espera 2 segundinhos para a pessoa ler e manda pro login
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: (erro) => {
        // Se o Java retornar erro (ex: e-mail já existe)
        this.erroMensagem.set(erro.error || 'Erro ao realizar cadastro. Tente novamente.');
        this.sucessoMensagem.set('');
      }
    });
  }
}