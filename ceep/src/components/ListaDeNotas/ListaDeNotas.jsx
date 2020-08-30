import React, { Component } from 'react'
import CardNota from '../CardNota/CardNota'

class ListaDeNotas extends Component {

    render(){
        return(
            <div class="col-sm-8 border-left">
                {this.props.notas.map((nota, index) =>{
                    return (
                        <span key={index}>
                            <CardNota titulo={nota.titulo} texto={nota.texto}/>
                        </span>
                    );
                })}
            </div>
        );
    }

}

export default ListaDeNotas;