import { Component, OnInit } from '@angular/core';

import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title = "Kategori Listesi"
  categories: Category[] = [
    {id: 1, name: "Ana Yemekler"},
    {id: 2, name: "Izgaralar"},
    {id: 3, name: "Fırın Yemekleri"},
    {id: 4, name: "Çorbalar"},
    {id: 5, name: "Tatlılar"},
    {id: 6, name: "İçecekler"},

  ]

  ngOnInit(): void {
  }

}
