import { Component, OnInit } from '@angular/core';

import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = "Ürün Listesi"
  products: Product[] = [
    {id: 1, name: "Adana Kebap", price: 35, categoryId: 1, description: "Izgaralar", imageUrl:"https://media.istockphoto.com/photos/adana-kebap-served-with-appetiezers-picture-id1348696580?k=20&m=1348696580&s=612x612&w=0&h=a9Y9jWE3mC6_Adq8mGW3WEu-sOlyfRPqHHyPpAu0im8="},
    {id: 2, name: "Urfa Kebap", price: 35, categoryId: 2, description: "Izgaralar", imageUrl:""},
    {id: 3, name: "Lahmacun", price: 35, categoryId: 3, description: "Fırın", imageUrl:""},
    {id: 4, name: "Special Pide", price: 35, categoryId: 4, description: "Fırın", imageUrl:""},
    {id: 5, name: "Mercimek Çorbası", price: 35, categoryId: 5, description: "Çorbalar", imageUrl:""},
    {id: 5, name: "Mercimek Çorbası", price: 35, categoryId: 6, description: "Çorbalar", imageUrl:""},
    {id: 5, name: "Mercimek Çorbası", price: 35, categoryId: 7, description: "Çorbalar", imageUrl:"" },
    {id: 5, name: "Mercimek Çorbası", price: 35, categoryId: 8, description: "Tatlılar", imageUrl: ""},
    {id: 5, name: "Mercimek Çorbası", price: 35, categoryId: 9, description: "Tatlılar", imageUrl:""},
    {id: 5, name: "Mercimek Çorbası", price: 35, categoryId: 10, description: "İçecekler", imageUrl: ""}
  ]

  ngOnInit(): void {
  }

}
