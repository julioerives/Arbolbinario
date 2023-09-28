class tree{
    constructor(numero){
        this.left=null
        this.right=null
        this.numero = typeof(numero ==="number") && !isNaN(numero) ? numero:50
    }
    add(numero){
        if(numero>this.numero){
            if(this.left===null)  this.left=new tree(numero)
            else this.left.add(numero) 
            
        }else{
                if(this.right===null) this.right=new tree(numero)
                else  this.right.add(numero)
        }
    }
    delete(numero){
         if(!numero)return
         if(typeof(numero==="number")&&!isNaN(numero)){
            if(numero>this.numero){
                this.left.delete(numero)
            }else if(numero<this.numero) this.right.delete(numero)
            else{ this.numero=null; this.left=null ; this.right=null; return}
         }else{
            console.log("no es un numero")
         }
    }
}
class recorrer{
    orden(nodo,array){
        if(!nodo) return;
        this.orden(nodo.right,array);
        array.push(nodo.numero)
        this.orden(nodo.left,array);
        return array
    }
      comoes(nodo,array){
        if(!nodo) return;
        array.push(nodo.numero)
        this.comoes(nodo.left,array);
        this.comoes(nodo.right,array)
        return array
    }
    primeroUltimo(nodo,array){
        if(!nodo) return;
        this.primeroUltimo(nodo.left,array)
        this.primeroUltimo(nodo.right,array)
        array.push(nodo.numero)
        return array
    }
}
const arbol= new tree(50)
arbol.add(30);
arbol.add(10);
arbol.add(40)
const reco = new recorrer();
console.log(reco.orden(arbol,[]))
console.log(reco.primeroUltimo(arbol,[]));
console.log(reco.comoes(arbol,[]))


