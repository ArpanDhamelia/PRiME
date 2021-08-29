import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/shared/Dish.model';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  kulfi : Dish[] = [
    {
      name : "Lychee Rabri Kulfi",
      price: "120/-",
      image : "https://c.ndtvimg.com/2021-07/pql1bh5_kulfi_625x300_13_July_21.jpg",
      description : ""
    },
    {
      name : "Malai",
      price: "100/-",
      image : "https://c.ndtvimg.com/2020-04/0n0vnkm8_kulfi_625x300_13_April_20.jpg",
      description : ""
    },
    {
      name : "Pista",
      price: "70/-",
      image : "https://i.ndtvimg.com/i/2018-03/kulfi_620x350_51521531449.jpg",
      description : ""
    },
    {
      name : "Chikoo",
      price: "70/-",
      image : "https://chikooparlour.com/Uploads/ProductMain/chikoo-kulfi-89.jpg",
      description : ""
    },
    {
      name : "Kaju Draksh",
      price: "80/-",
      image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/micah8j4ymzaucnd4uoi",
      description : ""
    }
  ]

  ice: Dish[] = [
    {
      name : "Vanilla",
      price: "120/-",
      image : "https://c.ndtvimg.com/2020-01/g47pm5vo_ice-cream_625x300_22_January_20.jpg",
      description : ""
    },
    {
      name : "Butterscotch",
      price: "180/-",
      image : "https://www.ticklingpalates.com/wp-content/uploads/2015/06/Eggless-Butterscotch-Ice-cream-recipe-1-500x375.jpg",
      description : ""
    },
    {
      name : "Strawberry",
      price: "150/-",
      image : "https://www.milkmaid.in/sites/default/files/2020-06/strawberry-ice-cream-590x436.jpg",
      description : ""
    },
    {
      name : "Mango",
      price: "150/-",
      image : "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/05/mango-ice-cream-recipe-5.jpg",
      description : ""
    },
    {
      name : "Raj-Bhog",
      price: "150/-",
      image : "",
      description : ""
    },
    {
      name : "Gulab-Jamunn",
      price : "150",
      image : "",
      description : ""
    }
  ]
  exc: Dish[] = [
    {
      name : "Chukandar Ka Halwa With Vanilla Ice Cream",
      price: "200/-",
      image : "https://c.ndtvimg.com/2020-08/oar86seg_beetroot-halwa_625x300_14_August_20.jpg",
      description : ""
    },
    {
      name : "Almond And Rose Kheer",
      price: "210/-",
      image : "https://c.ndtvimg.com/2020-07/t8lvghl_kheer_625x300_29_July_20.jpg",
      description : ""
    },
    {
      name : "Active Charcoal Modak",
      price: "200/-",
      image : "",
      description : ""
    },
    {
      name : "Paal Poli",
      price: "230/-",
      image : "",
      description : ""
    },
    {
      name : "Thandai Mousse ",
      price: "230/-",
      image : "",
      description : ""
    }
  ]

}
