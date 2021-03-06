import React from 'react'
import { Component } from 'react';

class FormularioCadastro extends Component {

    constructor(props){
        super(props);
        this.titulo = '';
        this.texto = '';
        this.categoria = 'Sem categoria';
        this.state = {categorias:[]};
        this._novasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount(){
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias){
        this.setState({...this.state, categorias});
    }

    _handleMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handleMudancaTexto(evento){
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto, this.categoria);
    }

    _handleMudancaCategoria(evento){
        evento.stopPropagation();
        this.categoria = evento.target.value;
    }

    render(){
        return(            
            <div class="col-sm-4">
            <form onSubmit={this._criarNota.bind(this)} >
                <div className="form-group">
                    <select onChange={this._handleMudancaCategoria.bind(this)}>
                        <option defaultChecked={true}>
                            Sem categoria
                        </option>

                        {this.state.categorias.map((categoria, index) =>{
                            return <option key={index}>{categoria}</option>
                        })}
                    </select>
                </div>

                <div className="form-group">
                    <input type="text" placeholder="Titulo"
                    onChange={this._handleMudancaTitulo.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <textarea className="form-control" placeholder="Nota" 
                    rows={3}
                    onChange={this._handleMudancaTexto.bind(this)}
                    />
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