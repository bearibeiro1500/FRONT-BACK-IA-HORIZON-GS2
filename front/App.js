import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import TarefasListScreen from './src/screens/TarefasListScreen';
import TarefaDetailScreen from './src/screens/TarefaDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="TarefasList"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ac3a97ff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="TarefasList" 
          component={TarefasListScreen}
          options={{ title: 'AI Horizon - Tarefas' }}
        />
        <Stack.Screen 
          name="TarefaDetail" 
          component={TarefaDetailScreen}
          options={{ title: 'Detalhes da Tarefa' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





