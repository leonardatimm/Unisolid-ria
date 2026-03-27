package br.com.unisolidaria.backend.repositories;

import br.com.unisolidaria.backend.domain.Ong;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OngRepository extends JpaRepository<Ong, Long> {
}
