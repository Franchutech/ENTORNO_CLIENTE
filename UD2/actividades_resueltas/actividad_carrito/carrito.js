export default class Carrito {

    //CONSTRUCTOR PRODUCTOS
    constructor(productos) {
        this.productos = productos;
        this.unidades = {};

        for (let producto of productos) {
            this.unidades[producto.SKU] = 0;
        }
    }//CIERRE CONSTRUCTOR

    //METODO ACTUALIZAR UNIDADES
    actualizarUnidades(SKU, unidades) {
        this.unidades[SKU] = Math.max(0, unidades); 

        } //CIERRE ACTUALIZAR UNIDADES

    //METODO OBTENER INFORMACION DE PRODUCTOS
    obtenerInformacionProducto(SKU) {
        const infoProducto = this.productos.find(producto => producto.SKU === SKU);
        if (infoProducto) {
            return {
                title: infoProducto.title,
                price: infoProducto.price,
                SKU: infoProducto.SKU,
                unidades: this.unidades[SKU]
            };
        } else {
            return null; 
        }

    }//CIERRE OBTENER INFO PRODUCTOS

    //METODO OBTENER CARRITO
    obtenerCarrito() {
        const precioFinal = this.productos.reduce((total, producto) => {
            const unidades = this.unidades[producto.SKU];
            return total + (parseFloat(producto.price) * unidades);
        }, 0);
        return {
            total: precioFinal.toFixed(2),
            currency: "€",
            products: this.productos.filter(producto => this.unidades[producto.SKU] > 0)
        };
    }//CIERRE OBTENER CARRITO

}//CIERRE CLASE CARRITO
