import { Foods } from './food';

export class CartItem{
    constructor(public food:Foods){
        this.food= food;
    }
    
    // food:Foods;
    quantity: number = 1;
    getPrice(): Number{
       return  this.food.price * this.quantity;
    }
}