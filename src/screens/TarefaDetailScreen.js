import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/tarefas';

export default function TarefaDetailScreen({ route }) {
  const { tarefaId, tarefa } = route.params;
  const [detalhes, setDetalhes] = useState(tarefa);
  const [sugestao, setSugestao] = useState(null);
  const [loading, setLoading] = useState(true);
  const [processando, setProcessando] = useState(false);

  useEffect(() => {
    carregarDetalhes();
  }, []);

  const carregarDetalhes = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/${tarefaId}`);
      setDetalhes(response.data);
      if (response.data.sugestaoIa) {
        setSugestao(response.data.sugestaoIa);
      }
    } catch (err) {
      console.error('Erro ao carregar detalhes:', err);
      Alert.alert('Erro', 'Não foi possível carregar os detalhes da tarefa');
    } finally {
      setLoading(false);
    }
  };

  const atualizarStatus = async (acao) => {
    try {
      setProcessando(true);
      // Usar endpoints específicos do backend
      const endpoint = acao === 'aceitar' 
        ? `${API_URL}/${tarefaId}/aceitar`
        : `${API_URL}/${tarefaId}/rejeitar`;
      
      const response = await axios.put(endpoint);
      setDetalhes(response.data);
      const mensagem = acao === 'aceitar' ? 'Tarefa aceita com sucesso!' : 'Tarefa rejeitada com sucesso!';
      Alert.alert('Sucesso', mensagem);
    } catch (err) {
      console.error('Erro ao atualizar:', err.response?.data || err.message);
      Alert.alert('Erro', 'Não foi possível atualizar a tarefa');
    } finally {
      setProcessando(false);
    }
  };

  if (loading) {
    return (    
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#904684ff" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>{detalhes.titulo}</Text>
        <Text style={styles.descricao}>{detalhes.descricao}</Text>
        <Text style={styles.status}>Status: {detalhes.status}</Text>
      </View>

      {sugestao && (
        <View style={styles.cardSugestao}>
          <Text style={styles.sugestaoTitulo}>💡 Sugestão IA</Text>
          <Text style={styles.sugestaoTexto}>{sugestao}</Text>
        </View>
      )}

      <View style={styles.botoesContainer}>
        <TouchableOpacity
          style={[styles.botao, styles.botaoAceitar]}
          onPress={() => atualizarStatus('aceitar')}
          disabled={processando}
        >
          {processando ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.botaoTexto}>✓ Aceitar</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, styles.botaoRejeitar]}
          onPress={() => atualizarStatus('rejeitar')}
          disabled={processando}
        >
          {processando ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.botaoTexto}>✗ Rejeitar</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#904684ff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    lineHeight: 20,
  },
  status: {
    fontSize: 13,
    color: '#904684ff',
    fontWeight: '600',
  },
  cardSugestao: {
    backgroundColor: '#e3f2fd',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#ff9800',
  },
  sugestaoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff9800',
    marginBottom: 10,
  },
  sugestaoTexto: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  botao: {
    flex: 1,
    paddingVertical: 14,
    marginHorizontal: 5,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoAceitar: {
    backgroundColor: '#4caf50',
  },
  botaoRejeitar: {
    backgroundColor: '#f44336',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});