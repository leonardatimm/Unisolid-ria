package br.com.unisolidaria.backend.services;

import br.com.unisolidaria.backend.domain.Users;
import br.com.unisolidaria.backend.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    // Método para Cadastrar
    public Users cadastrarUsuario(Users novoUsuario) {
        // Verifica se o e-mail já tem dono
        Optional<Users> usuarioExistente = repository.findByEmail(novoUsuario.getEmail());
        if (usuarioExistente.isPresent()) {
            throw new RuntimeException("Este e-mail já está cadastrado no UniSolidária!");
        }

        // (No futuro, aqui nós vamos criptografar a senha! Por hoje, vamos salvar direto para o MVP rodar)
        return repository.save(novoUsuario);
    }

    // Método para o Login
    public Users fazerLogin(String email, String senha) {
        Optional<Users> usuario = repository.findByEmail(email);

        if (usuario.isPresent() && usuario.get().getSenha().equals(senha)) {
            return usuario.get(); // Login deu boa!
        }
        throw new RuntimeException("E-mail ou senha inválidos.");
    }
}