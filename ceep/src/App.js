import React, { Component } from 'react';
import ListaDeCategorias from './components/ListaDeCategorias/ListaDeCategorias'
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'

import Categorias from './dados/Categorias'
import ArrayDeNotas from './dados/Notas'

class App extends Component {
  
  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render(){
    
    return (
      <div class="container">
        <div class="row">
        
        <FormularioCadastro 
          categorias={this.categorias.categorias}
          criarNota={this.notas.criarNota}
        />

        <div class="col-sm-8">
          <ListaDeCategorias 
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />

          <ListaDeNotas 
            apagarNota={this.notas.apagarNota}
            notas={this.notas.notas}
          />
        </div>       

        </div>
      </div>
    );
  }
}

export default App;
