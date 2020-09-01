import React, {Component} from 'react';

class ListaDeCategorias extends Component{
 
    constructor(){
        super();
        this.state = {categorias:[]};
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias.bind(this));
    }

    _novasCategorias(categorias){
        console.log(categorias);
        this.setState({...this.state, categorias});
    }
    
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
                    this.state.categorias.map((categoria, index)=>{
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