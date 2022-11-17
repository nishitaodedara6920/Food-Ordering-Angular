import { Foods } from './../shared/models/food';
import { CartItem } from './../shared/models/CartItem';
import { CartService } from './../services/cart.service';
import { Cart } from './../shared/models/Cart';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor( private cartService: CartService) { }

  ngOnInit(): void {
  }

  setCart() {
    // this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem: CartItem){
    // this.cartService.removeFromCart(CartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, qualityInString: string){
    const quantity = parseInt(qualityInString);
    // this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }
}
