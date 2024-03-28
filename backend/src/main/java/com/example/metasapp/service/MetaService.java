package com.example.metasapp.service;

import com.example.metasapp.model.Meta;
import com.example.metasapp.repository.IMetaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MetaService implements IMetaService {
    @Autowired
    private IMetaRepository metaRepo;
    @Override
    public Meta createMeta(Meta nuevaMeta) {
        return metaRepo.save(nuevaMeta);
    }

    @Override
    public Meta findMeta(Long idMeta) {
        return metaRepo.findById(idMeta).orElse(null);
    }

    @Override
    public List<Meta> findMetas() {
        return metaRepo.findAll();
    }

    @Override
    public Meta updateMeta(Meta actualizadaMeta) {
        return metaRepo.save(actualizadaMeta);
    }

    @Override
    public void deleteMeta(Long idMeta) {
        metaRepo.deleteById(idMeta);
    }
}
