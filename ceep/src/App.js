import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'

class App extends Component {
  
  criarNota(titulo, texto){

  }

  render(){
    
    return (
      <section>
        
        <FormularioCadastro criarNota={this.criarNota}/>
        <ListaDeNotas />

      </section>
    );
  }
}

export default App;
