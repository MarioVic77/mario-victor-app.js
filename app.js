import React, { Component } from "react";
import { View, Text, Image, Platform, ScrollView, StyleSheet } from 'react-native';

class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Biblioteca Virtual</Text>

        {/* Exibindo o primeiro livro */}
        <Livro
          nomeLivro="Dom Casmurro"
          autor="Machado de Assis"
          capa="https://m.media-amazon.com/images/I/61Z2bMhGicL._SY425_.jpg"
        />

        {/* Exibindo o segundo livro */}
        <Livro
          nomeLivro="O Primo Basílio"
          autor="José de Alencar"
          capa="https://m.media-amazon.com/images/I/41wvWlQcmRL._SY445_SX342_.jpg"
        />

        {/* Exibindo o terceiro livro */}
        <Livro
          nomeLivro="Memórias Póstumas de Brás Cubas"
          autor="Machado de Assis"
          capa="https://m.media-amazon.com/images/I/91GAAzBixYL._SY385_.jpg"
        />

      </ScrollView>
    );
  }
}

// Componente Livro que exibe as informações do livro
class Livro extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Image
          source={{ uri: this.props.capa }}
          style={styles.capa}
        />
        <Text style={styles.nome}>{this.props.nomeLivro}</Text>
        <Text style={styles.autor}>{this.props.autor}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  title: {
    color: '#006400',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    padding: 10,
  },
  capa: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
  },
  autor: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },
});

export default App;
