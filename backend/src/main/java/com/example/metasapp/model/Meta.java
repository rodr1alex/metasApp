package com.example.metasapp.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Meta {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String detalles;
    private String periodo;
    private int eventos;
    private String icono;
    private int meta;
    @Temporal(TemporalType.DATE)
    private LocalDate plazo;
    private int completado;
}
