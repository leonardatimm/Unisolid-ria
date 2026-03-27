package br.com.unisolidaria.backend.controllers;


import br.com.unisolidaria.backend.domain.Ong;
import br.com.unisolidaria.backend.services.OngService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/ongs")
public class OngController {

    private final OngService service;

    public OngController(OngService service){
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Ong>> listarTodas(){
        return ResponseEntity.ok(service.listarTodas());
    }

    @PostMapping
    public ResponseEntity<Ong> salvar(@RequestBody Ong ong){
        Ong novaOng = service.salvar(ong);
        return ResponseEntity.status(HttpStatus.CREATED).body(novaOng);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id){
        service.deletar(id);
        return ResponseEntity.noContent().build();
    }

}
