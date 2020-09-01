import React, { Component } from 'react';
import ListaDeCategorias from './components/ListaDeCategorias/ListaDeCategorias'
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      notas:[],
      categorias:[],
    };
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({notas:arrayNotas});
    console.log('dd');
  }

  adicionarCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = {...this.state, categorias:novoArrayCategorias};
    this.setState(novoEstado);

  }

  render(){
    
    return (
      <div class="container">
        <div class="row">
        
        <FormularioCadastro 
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)}
        />
        <div class="col-sm-8">
          <ListaDeCategorias 
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias}
          />

          <ListaDeNotas 
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}
          />
        </div>       

        </div>
      </div>
    );
  }
}

export default App;
