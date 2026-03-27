import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OngService } from '../../services/ong';

@Component({
  selector: 'app-ong-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ong-list.html',
  styleUrl: './ong-list.css'
})
export class OngList implements OnInit {
  
  // Transformando a lista em um Signal para atualizar a tela na hora!
  ongs = signal<any[]>([]);

  // Variável para capturar os dados do formulário
  novaOng: any = {
    nomeFantasia: '',
    nomeReal: '',
    cnpj: '',
    responsavel: '',
    cpfResponsavel: '',
    telefoneResponsavel: ''
  };

  constructor(private ongService: OngService) {}

  ngOnInit(): void {
    this.carregarOngs();
  }

  carregarOngs() {
    this.ongService.listarTodas().subscribe({
      next: (dados: any[]) => {
        console.log('RESPOSTA DO JAVA (ONGs):', dados);
        this.ongs.set(dados); // Avisa o HTML que os dados chegaram
      },
      error: (err: any) => console.error('Erro no Angular:', err)
    });
  }

  salvarOng() {
    if (!this.novaOng.nomeFantasia || !this.novaOng.cnpj) {
      alert('Por favor, preencha o Nome Fantasia e o CNPJ!');
      return;
    }

    this.ongService.salvar(this.novaOng).subscribe({
      next: () => {
        this.carregarOngs(); // Recarrega a tabela na mesma hora
        // Limpa o formulário após salvar
        this.novaOng = { nomeFantasia: '', nomeReal: '', cnpj: '', responsavel: '', cpfResponsavel: '', telefoneResponsavel: '' };
      },
      error: (err) => console.error('Erro ao salvar ONG:', err)
    });
  }

  excluirOng(id: number) {
    if(confirm('Tem certeza que deseja excluir esta ONG?')) {
      this.ongService.deletar(id).subscribe({
        next: () => this.carregarOngs(),
        error: (err) => console.error('Erro ao excluir ONG:', err)
      });
    }
  }
}