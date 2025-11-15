package com.aihorizon.config;

import com.aihorizon.model.Tarefa;
import com.aihorizon.repository.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {
    
    @Autowired
    private TarefaRepository tarefaRepository;
    
    @Override
    public void run(String... args) throws Exception {
        // Inicializar dados de exemplo apenas se o banco estiver vazio
        if (tarefaRepository.count() == 0) {
            Tarefa tarefa1 = new Tarefa();
            tarefa1.setTitulo("Calibração de Sensores Mecatrônicos");
            tarefa1.setDescricao("Realizar calibração dos sensores de temperatura e pressão no sistema de automação industrial.");
            tarefa1.setStatus(Tarefa.StatusTarefa.PENDENTE);
            tarefa1.setSugestaoIa("Sugestão IA para: Calibração de Sensores Mecatrônicos\n\n" +
                    "Com base na análise da tarefa, recomendo:\n" +
                    "1. Verificar os componentes mecatrônicos envolvidos\n" +
                    "2. Realizar testes de integração antes da implementação\n" +
                    "3. Documentar o processo de automação\n" +
                    "4. Estabelecer protocolos de segurança para colaboração humano-IA\n\n" +
                    "Observações específicas: A descrição indica que esta tarefa requer atenção especial aos aspectos de controle e automação.");
            tarefaRepository.save(tarefa1);
            
            Tarefa tarefa2 = new Tarefa();
            tarefa2.setTitulo("Integração de Sistema Robótico");
            tarefa2.setDescricao("Integrar braço robótico com sistema de visão computacional para operações de montagem automatizada.");
            tarefa2.setStatus(Tarefa.StatusTarefa.PENDENTE);
            tarefa2.setSugestaoIa("Sugestão IA para: Integração de Sistema Robótico\n\n" +
                    "Com base na análise da tarefa, recomendo:\n" +
                    "1. Verificar os componentes mecatrônicos envolvidos\n" +
                    "2. Realizar testes de integração antes da implementação\n" +
                    "3. Documentar o processo de automação\n" +
                    "4. Estabelecer protocolos de segurança para colaboração humano-IA\n\n" +
                    "Observações específicas: A descrição indica que esta tarefa requer atenção especial aos aspectos de controle e automação.");
            tarefaRepository.save(tarefa2);
            
            Tarefa tarefa3 = new Tarefa();
            tarefa3.setTitulo("Otimização de Algoritmo de Controle");
            tarefa3.setDescricao("Otimizar algoritmo PID para melhorar resposta do sistema de controle de velocidade em motores elétricos.");
            tarefa3.setStatus(Tarefa.StatusTarefa.PENDENTE);
            tarefa3.setSugestaoIa("Sugestão IA para: Otimização de Algoritmo de Controle\n\n" +
                    "Com base na análise da tarefa, recomendo:\n" +
                    "1. Verificar os componentes mecatrônicos envolvidos\n" +
                    "2. Realizar testes de integração antes da implementação\n" +
                    "3. Documentar o processo de automação\n" +
                    "4. Estabelecer protocolos de segurança para colaboração humano-IA\n\n" +
                    "Observações específicas: A descrição indica que esta tarefa requer atenção especial aos aspectos de controle e automação.");
            tarefaRepository.save(tarefa3);
        }
    }
}







