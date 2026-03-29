# 💙 UniSolidária - Plataforma de Gestão Assistencial

> Substituindo o controle manual (papel/planilhas) por um sistema digital seguro, garantindo transparência e eficiência no controle de doações para entidades assistenciais de Brusque.

![Status do Projeto](https://img.shields.io/badge/Status-MVP%20Concluído-success)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat&logo=spring&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white)

---

## 🎯 Visão do Produto
O **UniSolidária** é uma plataforma Web centralizada focada em resolver a falta de rastreabilidade e a perda de tempo na gestão de donativos. Construído com arquitetura moderna (Monorepo), o sistema atende gestores de ONGs locais e voluntários responsáveis pela triagem e organização de estoques.

## 🚀 Funcionalidades do MVP

* **Segurança e Autenticação:** Telas responsivas e modernas para Cadastro e Login de usuários, com validação de dados e proteção de rotas.
* **Dashboard Painel de Guerrilha:** Visão em tempo real do total de doações recebidas, itens em triagem e famílias atendidas.
* **Gestão de Doações (CRUD):** Cadastro rápido de novos donativos com atualização instantânea na interface utilizando Angular Signals.
* **Gestão de Parceiros:** Controle e listagem das ONGs parceiras cadastradas no sistema.
* **Interface UI/UX:** Design limpo, intuitivo e responsivo utilizando Bootstrap.

### ⏳ Próximos Passos (Roadmap)
- [ ] Implementação de segurança avançada com JWT Token.
- [ ] Integração com JasperReports para geração de relatórios de estoque em PDF com um clique.
- [ ] Vínculo automático entre doações e ONGs de destino.

---

## 💻 Tecnologias Utilizadas

A aplicação foi desenvolvida no modelo **Monorepo** (Frontend e Backend no mesmo repositório), utilizando as seguintes tecnologias:

**Frontend:**
* Angular (Standalone Components, Signals)
* TypeScript
* Bootstrap 5 / CSS3 customizado
* HTML5

**Backend:**
* Java 17+
* Spring Boot (Web, Data JPA)
* PostgreSQL (Banco de Dados Relacional)
* Hibernate / JPA para mapeamento objeto-relacional

---

## 🛠️ Como Executar o Projeto Localmente

### Pré-requisitos
* Java 17 ou superior
* Node.js (v18+) e Angular CLI
* PostgreSQL rodando na porta 5432
* Git

### 1. Clonando o Repositório
```bash
git clone [https://github.com/SEU_USUARIO/unisolidaria.git](https://github.com/leonardatimm/unisolidaria.git)
cd unisolidaria
2. Configurando o Backend (Spring Boot)
Abra o pgAdmin ou seu terminal do PostgreSQL e crie um banco de dados chamado unisolidaria_db.

Navegue até a pasta do backend: cd backend

Configure o arquivo src/main/resources/application.properties com suas credenciais do banco:
spring.datasource.url=jdbc:postgresql://localhost:5432/unisolidaria_db
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha
spring.jpa.hibernate.ddl-auto=update
Execute a aplicação (a porta padrão é 8080). As tabelas serão criadas automaticamente pelo Hibernate.

3. Configurando o Frontend (Angular)
Abra um novo terminal e navegue até a pasta do frontend: cd frontend

Instale as dependências do projeto:
npm install

Inicie o servidor de desenvolvimento:
ng serve

👩‍💻 Autora
Leonarda
Analista de Suporte de TI | Desenvolvedora Backend

Desenvolvido com 💙 para conectar quem quer fazer o bem com quem precisa.

---
