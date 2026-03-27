import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout';
import { DashboardComponent } from './components/dashboard/dashboard';
import { DoacaoList } from './components/doacao-list/doacao-list';
import { OngList } from './components/ong-list/ong-list';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // <-- Aqui está a mágica: O Layout é a base
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent }, // <-- Dashboard fica dentro dele
      { path: 'doacoes', component: DoacaoList },
      { path: 'ongs', component: OngList },
    ]
  },
  // Rota de segurança: se digitar algo errado, volta pro início
  { path: '**', redirectTo: '' }
];