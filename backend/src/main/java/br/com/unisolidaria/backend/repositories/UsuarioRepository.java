package br.com.unisolidaria.backend.repositories;

import br.com.unisolidaria.backend.domain.Users; // Importe a classe que acabamos de criar
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Users, Long> {

    // A Mágica do Spring: Só de escrever esse nome, o Java já sabe
    // que deve criar um "SELECT * FROM usuarios WHERE email = ?"
    Optional<Users> findByEmail(String email);
}
