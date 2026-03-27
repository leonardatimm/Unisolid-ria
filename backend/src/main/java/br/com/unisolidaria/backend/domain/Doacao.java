package br.com.unisolidaria.backend.domain;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;


@Entity
@Table(name = "tb_doacao")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Doacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String item;

    private Integer quantidade;

    private String categoria;

    private String nomeDoador;

    private LocalDate dataDoacao;

    @ManyToOne
    @JoinColumn(name = "ong_id")
    private Ong ong;

}