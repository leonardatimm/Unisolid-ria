package br.com.unisolidaria.backend.services;


import br.com.unisolidaria.backend.domain.Ong;
import br.com.unisolidaria.backend.repositories.OngRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OngService {

    private final OngRepository repository;

    public OngService(OngRepository repository) {
        this.repository = repository;
    }

    public List<Ong> listarTodas(){
        return repository.findAll();
    }

    public Ong salvar(Ong ong){
        return repository.save(ong);
    }

    public void deletar(Long id){
        repository.deleteById(id);
    }

}
