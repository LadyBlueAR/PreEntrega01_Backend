import { existsSync, readFileSync, writeFileSync } from 'fs';
import ProductManager from './ProductManager.js';

class Cart {

    static #id;
    #path;
    #carts;
    #products;

    constructor() {
        this.#path = './carts.json';
        this.#carts = this.readFile();
        Cart.#id = this.#carts.length > 0 ? this.#carts[this.#carts.length - 1 ].id : 0;
        this.#products = new ProductManager();
    }

    readFile() {
        try {
            let data;
            if(existsSync(this.#path))
                data = JSON.parse(readFileSync(this.#path, 'utf-8'));
            else
                data = [];
            return data;
        } catch (error) {
            console.log("No se pudo leer el archivo", error)
        }
    }

    createCart() {
        try {
            const newCart = {
                id: ++Cart.#id,
                products: [],
            }

            this.#carts.push(newCart);
            writeFileSync(this.#path, JSON.stringify(this.#carts));
            return 'Carrito creado exitosamente';
        } catch (error) {
            console.log("No se pudo crear el carrito", error)
        }
    }

    getCarts() {
        return this.#carts;
    }

    getCartById(id) {
        const cartId = this.#carts.find(c => c.id === id);
        if (cartId) {
            return cartId
        } else {
            console.log("El carrito no existe");
        }
    }

    addProductToCart(idCart, idProd){
        try {
            const cartIndex = this.#carts.findIndex( c => c.id === idCart)
            const productEx = this.#products.getProductById(idProd);

            console.log(cartIndex)
            console.log(productEx);

        } catch (error) {

        }
    }
}

export default Cart;