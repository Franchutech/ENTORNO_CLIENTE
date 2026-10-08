export default class Carrito {

    #productosCarrito = new Map();

    //CONSTRUCTOR PRODUCTOS
    constructor(productos) {
        for (let producto of productos) {
            this.#productosCarrito.set(producto.SKU, { ...producto, unidades: 0 });
        }
    }//CIERRE CONSTRUCTOR

    //METODO ACTUALIZAR UNIDADES
    actualizarUnidades(SKU, unidades) {
        const producto = this.#productosCarrito.get(SKU);
        if (producto) {
            producto.unidades = Math.max(0, unidades);
        }
    }//CIERRE ACTUALIZAR UNIDADES

    //METODO OBTENER INFORMACION DE PRODUCTOS
    obtenerInformacionProducto(SKU) {
        const infoProducto = this.#productosCarrito.get(SKU);
        if (infoProducto) {
            return {
                title: infoProducto.title,
                price: infoProducto.price,
                SKU: infoProducto.SKU,
                unidades: infoProducto.unidades
            };
        } else {
            return null; 
        }

    }//CIERRE OBTENER INFO PRODUCTOS

//METODO OBTENER CARRITO
    obtenerCarrito() {
        const precioFinal = Array.from(this.#productosCarrito.values()).reduce((total, producto) => {
            const unidades = producto.unidades;
            return total + (parseFloat(producto.price) * unidades);
        }, 0);

        return {
            total: precioFinal.toFixed(2),
            currency: "€",
            products: Array.from(this.#productosCarrito.values()).filter(producto => producto.unidades > 0)
        };
    }//CIERRE OBTENER CARRITO

}//CIERRE CLASE CARRITO
