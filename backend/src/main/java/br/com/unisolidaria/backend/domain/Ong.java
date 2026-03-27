package br.com.unisolidaria.backend.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tb_ong")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Ong {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomeFantasia;
    private String nomeReal;
    private String cnpj;
    private String responsavel;
    private String cpfResponsavel;
    private String telefoneResponsavel;

}