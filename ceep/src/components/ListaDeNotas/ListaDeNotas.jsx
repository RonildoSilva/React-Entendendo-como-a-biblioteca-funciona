import React, { Component } from 'react'
import CardNota from '../CardNota/CardNota'

class ListaDeNotas extends Component {

    constructor(){
        super();
        this.state = {notas:[]}
    }
    componentDidMount(){
        this.props.notas.inscrever(this._novasNotas.bind(this));
    }

    _novasNotas(notas){
        this.setState(...this.state, notas);
    }

    render(){
        return(
            <div class="col-sm-12 border-left">
                
                {this.state.notas.map((nota, index) =>{
                    return (
                        <span key={index}>
                            <CardNota
                                indice = {index}
                                apagarNota={this.props.apagarNota}
                                titulo={nota.titulo}
                                texto={nota.texto}
                                categoria={nota.categoria}
                            />
                        </span>
                    );
                })}
            </div>
        );
    }

}

export default ListaDeNotas;