import React from 'react'
import { Component } from 'react';

class FormularioCadastro extends Component {

    constructor(){
        super();
        this.titulo = '';
    }

    handleMudancaTitulo(evento){
        this.titulo = evento.target.value;
    }

    render(){
        return(            
            <div className="row">
            <form>
                <div className="form-group">
                    <input type="text" placeholder="Titulo"
                    onChange={this.handleMudancaTitulo.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <textarea className="form-control" placeholder="Nota" 
                    rows={3}></textarea>
                </div>                    
                <div className="form-group">
                    <button className="btn btn-primary">Criar nota</button>
                </div>
            </form>
            </div>
        );
    }
}

export default FormularioCadastro;