import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/tarefas'; // ajuste conforme seu backend

export default function TarefasListScreen({ navigation }) {
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    carregarTarefas();
  }, []);

  const carregarTarefas = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setTarefas(response.data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar tarefas: ' + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const renderTarefa = ({ item }) => (
    <TouchableOpacity
      style={styles.tarefaCard}
      onPress={() => navigation.navigate('TarefaDetail', { tarefaId: item.id, tarefa: item })}
    >
      <Text style={styles.tarefaTitulo}>{item.titulo}</Text>
      <Text style={styles.tarefaDescricao}>{item.descricao}</Text>
      <Text style={styles.tarefaStatus}>Status: {item.status}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#2196F3" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.erro}>{error}</Text>
        <TouchableOpacity style={styles.btnRetry} onPress={carregarTarefas}>
          <Text style={styles.btnRetryText}>Tentar novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={tarefas}
        renderItem={renderTarefa}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  listContent: {
    paddingVertical: 10,
  },
  tarefaCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#800152ff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  tarefaTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  tarefaDescricao: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  tarefaStatus: {
    fontSize: 12,
    color: '#800152ff',
    fontWeight: '600',
  },
  erro: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 14,
  },
  btnRetry: {
    backgroundColor: '#800152ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  btnRetryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});