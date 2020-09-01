import React, {Component} from 'react';

class ListaDeCategorias extends Component{
 
    _handlerEventoInput(event){
        if(event.key == "Enter"){
            console.log('add')
        }
    }

    render(){
        return (
            <div class="nav navbar-nav navbar-right">
                <ul class="nav navbar-nav float-left">
                    <li>Cat 1</li>
                    <li>Cat 2</li>
                    <li>Cat 3</li>
                </ul>
                <input type="text"
                onKeyUp={this._handlerEventoInput.bind(this)}/>
            </div>
        );

    }
}

export default ListaDeCategorias;