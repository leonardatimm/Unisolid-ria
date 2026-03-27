package br.com.unisolidaria.backend.controllers;

import br.com.unisolidaria.backend.domain.Doacao;
import br.com.unisolidaria.backend.dto.EstatisticaMensalDTO;
import br.com.unisolidaria.backend.repositories.DoacaoRepository;
import br.com.unisolidaria.backend.services.DoacaoService;
import br.com.unisolidaria.backend.dto.DashboardDTO; // 1. Import no lugar certo agora
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RestController
@RequestMapping("/api/doacoes")
public class DoacaoController {

    private final DoacaoService service;
    private final DoacaoRepository repository; // 2. Declaramos o repositório aqui

    // 3. Adicionamos o repository no construtor para o Spring nos entregar a ferramenta pronta
    public DoacaoController(DoacaoService service, DoacaoRepository repository) {
        this.service = service;
        this.repository = repository;
    }

    @GetMapping
    public ResponseEntity<List<Doacao>> listarTodas() {
        return ResponseEntity.ok(service.listarTodas());
    }

    @PostMapping
    public ResponseEntity<Doacao> salvar(@RequestBody Doacao doacao) {
        Doacao novaDoacao = service.salvar(doacao);
        return ResponseEntity.status(HttpStatus.CREATED).body(novaDoacao);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        service.excluir(id);
        return ResponseEntity.noContent().build();
    }

    // O NOVO ENDPOINT FUNCIONAL
    @GetMapping("/estatisticas")
    public DashboardDTO getEstatisticas() {

        long total = repository.count();

        Long itens = repository.somarTotalItens();
        long totalItens = (itens != null) ? itens : 0;

        long categorias = repository.contarCategoriasDistintas();

        return new DashboardDTO(total, totalItens, categorias);
    }

    @GetMapping("/mensal")
    public List<EstatisticaMensalDTO> getMensal() {
        // Chamamos o método que você criou (ou vai criar) no Repository
        return repository.buscarEstatisticasMensais();
    }
}