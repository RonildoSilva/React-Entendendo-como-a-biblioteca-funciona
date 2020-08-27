import React from 'react'
import { Component } from 'react';

class FormularioCadastro extends Component {

    render(){
        return(
            <form>
                <input type="text" placeholder="Titulo"/>
                <textarea placeholder="Nota"></textarea>
                <button className="btn btn-primary">Criar nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;