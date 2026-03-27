package br.com.unisolidaria.backend.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DashboardDTO {
    private long totalDoacoes;
    private long totalItens;
    private long categoriasAtivas;

}
