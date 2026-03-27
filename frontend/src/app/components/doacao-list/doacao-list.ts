import { Component, OnInit,signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- IMPORTANTE: Sem isso o form não funciona!
import { DoacaoService } from '../../services/doacao';

@Component({
  selector: 'app-doacao-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- Adicionado o FormsModule aqui
  templateUrl: './doacao-list.html',
  styleUrl: './doacao-list.css'
})
export class DoacaoList implements OnInit {
  
  doacoes = signal<any[]>([]);
  
  // Variável que guarda o que for digitado no formulário
  novaDoacao: any = {
    item: '',
    quantidade: 0,
    categoria: '',
    nomeDoador: ''
  };

  constructor(private doacaoService: DoacaoService) {}

  ngOnInit(): void {
    this.carregarDoacoes();
  }

carregarDoacoes() {
    this.doacaoService.listarTodas().subscribe({
      // A setinha => (arrow function) é vital para o Angular não perder o "this"
      next: (dados: any[]) => {
        console.log('RESPOSTA DO JAVA:', dados);
        // Sem essa linha exata abaixo, a tela fica com 0 registros
        this.doacoes.set(dados); 
      },
      error: (err: any) => console.error('Erro no Angular:', err)
    });
  }

  salvarDoacao() {
    // Validação simples
    if (!this.novaDoacao.item || this.novaDoacao.quantidade <= 0) {
      alert('Por favor, preencha o Item e a Quantidade!');
      return;
    }

    this.doacaoService.salvar(this.novaDoacao).subscribe({
      next: () => {
        this.carregarDoacoes(); // Atualiza a tabela na mesma hora
        // Limpa o formulário
        this.novaDoacao = { item: '', quantidade: 0, categoria: '', nomeDoador: '' }; 
      },
      error: (err) => console.error('Erro ao salvar doação:', err)
    });
  }

  excluirDoacao(id: number) {
    if(confirm('Tem certeza que deseja excluir esta doação?')) {
      this.doacaoService.excluir(id).subscribe({
        next: () => this.carregarDoacoes(),
        error: (err) => console.error('Erro ao excluir:', err)
      });
    }
  }
}