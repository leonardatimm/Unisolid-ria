package br.com.unisolidaria.backend.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "usuarios")
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false, unique = true)
    private String email; // O unique garante que não teremos e-mails duplicados

    @Column(nullable = false)
    private String senha;

    // Construtor vazio (obrigatório para o Spring)
    public Users() {
    }

    // --- GETTERS E SETTERS ---
    // Dica de Suporte: Você pode gerar isso automaticamente na sua IDE
    // ou usar a anotação @Data se estiver usando a biblioteca Lombok!

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getSenha() { return senha; }
    public void setSenha(String senha) { this.senha = senha; }
}
