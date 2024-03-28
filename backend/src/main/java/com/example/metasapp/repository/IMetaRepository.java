package com.example.metasapp.repository;

import com.example.metasapp.model.Meta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IMetaRepository extends JpaRepository<Meta, Long> {
}
