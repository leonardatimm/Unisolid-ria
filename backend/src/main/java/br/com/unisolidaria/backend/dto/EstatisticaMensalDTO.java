package br.com.unisolidaria.backend.dto;

import java.io.Serializable;

public class EstatisticaMensalDTO implements Serializable {
    private String mes;
    private Long total;

    // 1. Obrigatório: Construtor vazio
    public EstatisticaMensalDTO() {}

    // 2. Para quando o Hibernate manda Long (Objeto)
    public EstatisticaMensalDTO(String mes, Long total) {
        this.mes = mes;
        this.total = total;
    }

    // 3. Para quando o Hibernate manda long (Primitivo)
    // O Hibernate costuma preferir este para o COUNT()
    public EstatisticaMensalDTO(String mes, long total) {
        this.mes = mes;
        this.total = total;
    }

    // 4. "Plano C": Para quando ele se perde nos tipos e manda Objects
    public EstatisticaMensalDTO(Object mes, Object total) {
        this.mes = (mes != null) ? mes.toString() : "";
        this.total = (total instanceof Number) ? ((Number) total).longValue() : 0L;
    }

    // Getters e Setters
    public String getMes() { return mes; }
    public void setMes(String mes) { this.mes = mes; }
    public Long getTotal() { return total; }
    public void setTotal(Long total) { this.total = total; }
}