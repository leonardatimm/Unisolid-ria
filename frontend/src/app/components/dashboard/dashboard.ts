import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoacaoService, DashboardDTO } from '../../services/doacao';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  stats = signal<DashboardDTO>({
    totalDoacoes: 0,
    totalItens: 0,
    categoriasAtivas: 0
  });

  constructor(private doacaoService: DoacaoService) {}

  ngOnInit(): void {
    this.doacaoService.getEstatisticas().subscribe({
      next: (dados) => this.stats.set(dados),
      error: (err) => console.error('Erro no Backend:', err)
    });
  }
}