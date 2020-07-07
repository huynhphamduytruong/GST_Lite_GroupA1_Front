
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {

    // items = [];

    addToCart(product) {
      // this.items.push(product);
      var cart = JSON.parse(localStorage.getItem('cart')) ?? [] ;
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  
    getItems() {
      // return this.items;
      return JSON.parse(localStorage.getItem('cart'));
    }
  
    clearCart() {
      localStorage.removeItem('cart');
      // this.items = [];
      // return this.items;
    }

}