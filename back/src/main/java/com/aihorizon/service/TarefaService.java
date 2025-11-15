package com.aihorizon.service;

import com.aihorizon.model.Tarefa;
import com.aihorizon.repository.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TarefaService {
    
    @Autowired
    private TarefaRepository tarefaRepository;
    
    public List<Tarefa> listarTodas() {
        return tarefaRepository.findAll();
    }
    
    public Optional<Tarefa> buscarPorId(Long id) {
        return tarefaRepository.findById(id);
    }
    
    public Tarefa criar(Tarefa tarefa) {
        // Gerar sugestão IA automaticamente
        if (tarefa.getSugestaoIa() == null || tarefa.getSugestaoIa().isEmpty()) {
            tarefa.setSugestaoIa(gerarSugestaoIa(tarefa));
        }
        return tarefaRepository.save(tarefa);
    }
    
    public Tarefa atualizar(Long id, Tarefa tarefaAtualizada) {
        return tarefaRepository.findById(id)
                .map(tarefa -> {
                    tarefa.setTitulo(tarefaAtualizada.getTitulo());
                    tarefa.setDescricao(tarefaAtualizada.getDescricao());
                    if (tarefaAtualizada.getSugestaoIa() != null) {
                        tarefa.setSugestaoIa(tarefaAtualizada.getSugestaoIa());
                    }
                    if (tarefaAtualizada.getStatus() != null) {
                        tarefa.setStatus(tarefaAtualizada.getStatus());
                    }
                    return tarefaRepository.save(tarefa);
                })
                .orElseThrow(() -> new RuntimeException("Tarefa não encontrada com id: " + id));
    }
    
    public Tarefa atualizarStatus(Long id, Tarefa.StatusTarefa status) {
        return tarefaRepository.findById(id)
                .map(tarefa -> {
                    tarefa.setStatus(status);
                    return tarefaRepository.save(tarefa);
                })
                .orElseThrow(() -> new RuntimeException("Tarefa não encontrada com id: " + id));
    }
    
    public void deletar(Long id) {
        tarefaRepository.deleteById(id);
    }
    
    private String gerarSugestaoIa(Tarefa tarefa) {
        // Simulação de geração de sugestão IA baseada na tarefa
        StringBuilder sugestao = new StringBuilder();
        sugestao.append("Sugestão IA para: ").append(tarefa.getTitulo()).append("\n\n");
        sugestao.append("Com base na análise da tarefa, recomendo:\n");
        sugestao.append("1. Verificar os componentes mecatrônicos envolvidos\n");
        sugestao.append("2. Realizar testes de integração antes da implementação\n");
        sugestao.append("3. Documentar o processo de automação\n");
        sugestao.append("4. Estabelecer protocolos de segurança para colaboração humano-IA\n");
        
        if (tarefa.getDescricao() != null && !tarefa.getDescricao().isEmpty()) {
            sugestao.append("\nObservações específicas: ");
            sugestao.append("A descrição indica que esta tarefa requer atenção especial aos aspectos de controle e automação.");
        }
        
        return sugestao.toString();
    }
}







