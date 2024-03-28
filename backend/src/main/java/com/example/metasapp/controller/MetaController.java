package com.example.metasapp.controller;

import com.example.metasapp.model.Meta;
import com.example.metasapp.service.IMetaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:8081"})
public class MetaController {
    @Autowired
    private IMetaService metaService;

    @CrossOrigin(origins = {"http://localhost:5173", "http://localhost:8081"})
    @PostMapping("/meta/crear")
    private Meta createMeta(@RequestBody Meta nuevaMeta){
        return metaService.createMeta(nuevaMeta);
    }

    @CrossOrigin(origins = {"http://localhost:5173", "http://localhost:8081"})
    @GetMapping("/meta/{id}")
    private Meta findMeta(@PathVariable Long id){
        return metaService.findMeta(id);
    }

    @CrossOrigin(origins = {"http://localhost:5173", "http://localhost:8081"})
    @GetMapping("/meta/todas")
    private List<Meta> findMetas(){
        return metaService.findMetas();
    }

    @CrossOrigin(origins = {"http://localhost:5173", "http://localhost:8081"})
    @PutMapping("/meta/actualizar")
    private Meta updateMeta(@RequestBody Meta actualizadaMeta){
        return metaService.updateMeta(actualizadaMeta);
    }

    @CrossOrigin(origins = {"http://localhost:5173", "http://localhost:8081"})
    @DeleteMapping("/meta/borrar/{id}")
    private String deleteMeta(@PathVariable Long id){
         metaService.deleteMeta(id);
        return "Meta borrada con exito";
    }
}
