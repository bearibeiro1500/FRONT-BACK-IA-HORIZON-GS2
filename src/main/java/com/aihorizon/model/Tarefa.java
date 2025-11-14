package com.aihorizon.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tarefas")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Tarefa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titulo;

    @Column(length = 1000)
    private String descricao;

    @Column(name = "sugestao_ia", length = 2000)
    private String sugestaoIa;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private StatusTarefa status = StatusTarefa.PENDENTE;

    public enum StatusTarefa {
        PENDENTE,
        ACEITO,
        REJEITADO
    }
}







