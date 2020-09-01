import React, { Component } from 'react'
import CardNota from '../CardNota/CardNota'

class ListaDeNotas extends Component {

    render(){
        return(
            <div class="col-sm-12 border-left">
                
                {this.props.notas.map((nota, index) =>{
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