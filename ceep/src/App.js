import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      notas:[]
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

  render(){
    
    return (
      <div class="container">
        <div class="row">
        
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas 
          apagarNota={this.deletarNota.bind(this)}
          notas={this.state.notas}/>

        </div>
      </div>
    );
  }
}

export default App;
