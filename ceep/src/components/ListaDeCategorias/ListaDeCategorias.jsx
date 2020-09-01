import React, {Component} from 'react';

class ListaDeCategorias extends Component{
 
    _handlerEventoInput(event){
        if(event.key == "Enter"){
            console.log('add')
            let valorCategoria = event.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }

    render(){
        return (
            <div class="nav navbar-nav navbar-right">
                <ul class="nav navbar-nav float-left">
                    {
                    this.props.categorias.map((categoria, index)=>{
                        return <li key={index}>{categoria}</li>;
                    })}
                </ul>
                <input type="text"
                onKeyUp={this._handlerEventoInput.bind(this)}/>
            </div>
        );

    }
}

export default ListaDeCategorias;