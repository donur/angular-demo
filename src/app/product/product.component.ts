import { Component, OnInit } from '@angular/core';
import { Product } from './product';
declare let alertify:any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = "Ürün Listesi"
  filterText = ""
  products: Product[] = [
    {id: 1, name: "Adana Kebap", price: 35, categoryId: 1, description: "Izgaralar", imageUrl:"https://media.istockphoto.com/photos/adana-kebap-served-with-appetiezers-picture-id1348696580?k=20&m=1348696580&s=612x612&w=0&h=a9Y9jWE3mC6_Adq8mGW3WEu-sOlyfRPqHHyPpAu0im8="},
    {id: 2, name: "Urfa Kebap", price: 35, categoryId: 2, description: "Izgaralar", imageUrl:"https://media.istockphoto.com/photos/adana-kebap-served-with-appetiezers-picture-id1361575022?k=20&m=1361575022&s=612x612&w=0&h=4XajzoNHWdOd7EzgBQYZjmbB-wI4k9NwmWpErpzCnGA="},
    {id: 3, name: "Lahmacun", price: 35, categoryId: 3, description: "Fırın", imageUrl:"https://media.istockphoto.com/photos/traditional-delicious-turkish-food-lahmacun-picture-id1288871087?k=20&m=1288871087&s=612x612&w=0&h=YtewGP85UVCvvMBPs4f2xYBY_Ta-eVt4E4XzYGoExzw="},
    {id: 4, name: "Special Pide", price: 35, categoryId: 4, description: "Fırın", imageUrl:"https://media.istockphoto.com/photos/turkish-pide-with-meat-on-the-board-picture-id1160977797?k=20&m=1160977797&s=612x612&w=0&h=6a4lX4JDiL1jHsgup2CCsJOhOcZ3LwgktuedCAjnsFw="},
    {id: 5, name: "Mercimek Çorbası", price: 35, categoryId: 5, description: "Çorbalar", imageUrl:"https://media.istockphoto.com/photos/red-lentil-soup-stock-photo-picture-id1211369947?k=20&m=1211369947&s=612x612&w=0&h=vM__nvZ0ejUlHoUIgj3H63Jr_zov7FPOENX2Eo1DFR0="},
    {id: 5, name: "Ezogelin Çorbası", price: 35, categoryId: 6, description: "Çorbalar", imageUrl:"https://media.istockphoto.com/photos/meat-solyanka-soup-picture-id1155179529?k=20&m=1155179529&s=612x612&w=0&h=oFWEEpbmwH18jOrAUG1xsrgexMDiwBo4VYw1uSYETyw="},
    {id: 5, name: "Mercimek Çorbası", price: 35, categoryId: 7, description: "Çorbalar", imageUrl:"" },
    {id: 5, name: "Mercimek Çorbası", price: 35, categoryId: 8, description: "Tatlılar", imageUrl: ""},
    {id: 5, name: "Mercimek Çorbası", price: 35, categoryId: 9, description: "Tatlılar", imageUrl:""},
    {id: 5, name: "Mercimek Çorbası", price: 35, categoryId: 10, description: "İçecekler", imageUrl: ""}
  ]

  ngOnInit(): void {
  }

  addToCart(product) {
    alertify.success(product.name + " Sepete eklendi!")
  }

}
