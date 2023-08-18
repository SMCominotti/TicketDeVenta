class Producto {
  static contadorProductos = 0;

  cosntructor(nombre, precio) {
    this._idProducto = ++Producto.contadorProductos;
    this._nombre = nombre;
    this._precio = precio;
  }

  get idProducto() {
    return this._idProducto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }
  get precio() {
    return this._precio;
  }

  set precio(precio) {
    this._precio = precio;
  }

  toString() {
    return `idProducto: ${this._idProducto}, nombre: $${this._nombre}, precio: ${this._precio}`;
  } //el primer signo $ es para que indique la moneda.
}

let producto1 = new Producto("Pantalon", 200);
let producto2 = new Producto("Camisa", 100);

class Orden {
  static contadorOrdenes = 0;

  static get MAX_PRODUCTOS() {
    return 5; //aca indico que el maximo es 5
  }

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._idProductos = [];
    this._contadorProductosAgregados = 0;
  }

  get _idOrden () {
    return this._idOrden;
  }

  agregarProducto(producto){
    if(this._idProductos.length < Orden.MAX_PRODUCTOS){
        this._idProductos.push(producto);
       //tambien podría usar:  this._priductos[this._contadorProductosAgregados++] = producto;
    }
    else{
        console.log('No se pueden agregar más productos');
    }
  }

  calcularTotal(){
    let totalVenta= 0;
    for(let producto of this._productos){
        totalVenta += producto.precio; //totalVenta = totalVenta + producto.precio
    }
    return totalVenta;
  }
mostrarOrden(){
    let productosOrden = '';
    for ( let producto of this._productos){
        productosOrden += producto.toString() + ' ';
    }

    console.log (`orden: ${this._idOrden} Total: ${this.calcularTotal()},Productos: ${productosOrden}`)
}

}
