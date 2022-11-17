import { Tag } from './../../shared/models/Tag';
import { Foods } from './../../shared/models/food';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number) : Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string) : Foods[]{
    return tag == "All"? 
    this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
   
  }

  getAllTag():Tag[]{
    return [
      { name: 'All', count: 8},
      { name: 'FastFood', count: 3},
      { name: 'Pizza', count: 1},
      { name: 'Lunch', count: 4},
      { name: 'Dessert', count: 4},
      { name: 'Hamburger', count: 1},
      { name: 'Breakfast', count: 2},
      { name: 'Sandwich', count: 1},
    ]
  }

  getAll():Foods[]{
    return [
      {
        id: 1,
        name: 'Dimsums',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Canada'],
        star: 2.5,
        imageUrl: '/assets/food-1.jpg',
        tags: ['Chienese Food', 'Dimsums', 'Lunch'],
      },
      {
        id: 2,
        name: 'Waffle',
        cookTime: '20',
        price: 20,
        favorite: true,
        origins: ['United states'],
        star: 4.7,
        imageUrl: '/assets/food-2.jpg',
        tags: ['Dessert', 'Breakfast'],
      },
      {
        id: 3,
        name: 'Pizza Pepperoni',
        cookTime: '20-25',
        price: 5,
        favorite: false,
        origins: ['Germany', 'Italy'],
        star: 3.7,
        imageUrl: '/assets/food-3.jpg',
        tags: ['Fastfood', 'Lunch', 'Pizza'],
      },
      {
        id:4,
        name: 'Pancakes',
        cookTime: '15-20',
        price: 2,
        favorite: true,
        origins: ['United Kingdom'],
        star: 3.8,
        imageUrl: '/assets/food-4.jpg',
        tags: ['Dessert', 'Syrup'],
      },
      {
        id: 5,
        name: 'Creamy Waffles',
        cookTime: '10-20',
        price: 11,
        favorite: true,
        origins: ['France', 'Australia'],
        star: 4.0,
        imageUrl: '/assets/food-5.jpg',
        tags: ['Desert', 'Breakfast', 'Dessert'],
      },
      {
        id: 6,
        name: 'Macarons',
        cookTime: '10-20',
        price: 9,
        favorite: false,
        origins: ['France'],
        star: 3.5,
        imageUrl: '/assets/food-6.jpg',
        tags: ['Dessert', 'Colorful', 'Sweet'],
      },
      {
        id: 7,
        name: 'Hamburger',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food-7.jpg',
        tags: ['Fastfood', 'Hamburger', 'Lunch'],
      },
      {
        id: 8,
        name: 'Grill Sandwich',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Italy','Germany'],
        star: 4,
        imageUrl: '/assets/food-8.jpg',
        tags: ['Fastfood', 'Sandwich', 'Lunch'],
      }
    ];
  }
}
