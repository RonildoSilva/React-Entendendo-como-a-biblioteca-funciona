import React, { Component } from 'react'

class CardNota extends Component {

    apagar(){
        const indice = this.props.indice;
        this.props.apagarNota(indice);
    }
    render(){
        return(
            <div class="card col-sm-4 float-left">
                <div class="card-body">
                    <h5 class="card-title">{this.props.titulo}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>                    
                    <p class="card-text">{this.props.texto}</p>
                    <button onClick={this.apagar.bind(this)}
                        class="btn btn-outline-danger">Delete
                    </button>
                </div>
            </div>
        );
    }

    
                    
                
}

export default CardNota;