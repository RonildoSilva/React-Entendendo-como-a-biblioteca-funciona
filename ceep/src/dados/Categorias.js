export default class Categorias {
 
    constructor(){
        this.categorias = [];
        this._inscritos = [];
    }

    notificar(){
        this._inscritos.forEach(func => {
            func(this.categorias);
        });
    }

    inscrever(func){
        this._inscritos.push(func);
    }

    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria);
        this.notificar();
    }
}