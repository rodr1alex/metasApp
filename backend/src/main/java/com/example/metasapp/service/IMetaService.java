package com.example.metasapp.service;

import com.example.metasapp.model.Meta;

import java.util.List;

public interface IMetaService {
    public Meta createMeta(Meta nuevaMeta);
    public Meta findMeta(Long idMeta);
    public List<Meta> findMetas();
    public Meta updateMeta(Meta actualizadaMeta);
    public void deleteMeta(Long idMeta);
}
