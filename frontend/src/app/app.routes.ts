import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout'; // Importe seu Layout
import { DashboardComponent } from './components/dashboard/dashboard';
import { DoacaoList } from './components/doacao-list/doacao-list';
import { OngList } from './components/ong-list/ong-list';
import { LoginComponent } from './components/login/login';
import { CadastroComponent } from './components/cadastro/cadastro';

export const routes: Routes = [
  // 1. Rota de Login (sem menu lateral)
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // 2. Rotas Protegidas (dentro do Layout com menu lateral)
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'doacoes', component: DoacaoList },
      { path: 'ongs', component: OngList }
    ]
  }
];