package br.com.unisolidaria.backend.services;

import br.com.unisolidaria.backend.domain.Doacao;
import br.com.unisolidaria.backend.repositories.DoacaoRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DoacaoService {

    // Injeção de Dependência: O Spring traz o Repository pronto para usarmos
    private final DoacaoRepository repository;

    public DoacaoService(DoacaoRepository repository) {
        this.repository = repository;
    }

    // Método para listar todas as doações (GET)
    public List<Doacao> listarTodas() {
        return repository.findAll();
    }

    // Método para salvar uma nova doação (POST)
    public Doacao salvar(Doacao doacao) {
        // Aqui no futuro podemos colocar regras, ex: "se quantidade < 1, dê erro"
        return repository.save(doacao);
    }
    // Método para excluir uma nova doação (DELETE)
    public void excluir(Long id) {
        // O repository.deleteById é um método que o Spring já te dá pronto!
        repository.deleteById(id);
    }
}