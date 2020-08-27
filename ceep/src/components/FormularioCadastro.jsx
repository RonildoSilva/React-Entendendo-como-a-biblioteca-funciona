import React from 'react'
import { Component } from 'react';

class FormularioCadastro extends Component {

    render(){
        return(
            <form>
                <div className="form-group">
                    <input type="text" placeholder="Titulo"/>
                </div>
                <div className="form-group">
                    <textarea className="form-control" placeholder="Nota" 
                    rows="3"></textarea>
                </div>                    
                <div className="form-group">
                    <button className="btn btn-primary">Criar nota</button>
                </div>
            </form>
        );
    }
}

export default FormularioCadastro;