package br.com.unisolidaria.backend.repositories;

import br.com.unisolidaria.backend.domain.Doacao;
import br.com.unisolidaria.backend.dto.EstatisticaMensalDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoacaoRepository extends JpaRepository<Doacao, Long> {
    @Query("SELECT SUM(d.quantidade) FROM Doacao d")
    Long somarTotalItens();

    @Query("SELECT COUNT(DISTINCT d.categoria) FROM Doacao d")
    Long contarCategoriasDistintas();

    @Query("SELECT new br.com.unisolidaria.backend.dto.EstatisticaMensalDTO(" +
            "to_char(d.dataDoacao, 'MM/YYYY'), " +
            "COUNT(d)) " +
            "FROM Doacao d " +
            "GROUP BY to_char(d.dataDoacao, 'MM/YYYY')")
    List<EstatisticaMensalDTO> buscarEstatisticasMensais();
}