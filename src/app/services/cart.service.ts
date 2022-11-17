import { Foods } from './../shared/models/food';
import { CartItem } from './../shared/models/CartItem';
import { Cart } from './../shared/models/Cart';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart();

  addToCart(food: Foods): void {
    let cartItem = this.cart.items
      .find(item => item.food.id === food.id);
    if (cartItem)
      return;

    this.cart.items.push(new CartItem(food));
    // this.setCartToLocalStorage();
  }

  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items
      // .filter(item => item.food.id != foodId);
    // this.setCartToLocalStorage();
  }

  changeQuantity(foodId: string, quantity: number) {
    let cartItem = this.cart.items
      // .find(item => item.food.id === foodId);
    if (!cartItem) return;

    // cartItem.quantity = quantity;    
    // this.setCartToLocalStorage();
  }
  getCart(){
    
  }
}