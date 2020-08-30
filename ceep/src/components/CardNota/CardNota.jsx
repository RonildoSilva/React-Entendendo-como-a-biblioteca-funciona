import React, { Component } from 'react'

class CardNota extends Component {

    render(){
        return(
            <div class="card col-sm-4">
                <div class="card-body">
                    <h5 class="card-title">{this.props.titulo}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">{this.props.texto}</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
        );
    }

    
                    
                
}

export default CardNota;