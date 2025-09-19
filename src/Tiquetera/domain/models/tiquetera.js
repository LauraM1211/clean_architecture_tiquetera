//clase client pascalCase

class tiquetera { //entidad 
    constructor({id, nrotiquetera, cliente, saldo, totaltransacciones, observaciones}){
        this.id = id;
        this.nrotiquetera = nrotiquetera;
        this.cliente = cliente;
        this.saldo = saldo;
        this.totaltransacciones = totaltransacciones;
        this.observaciones = observaciones;
    }
}

export default tiquetera;