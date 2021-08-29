import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/shared/Dish.model';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  juices : Dish[] = [

    {
      name: "Aam Panna",
      price: "100/-",
      image : "https://thumbs.dreamstime.com/b/aam-panna-salted-green-mano-juice-aam-panna-salted-green-mano-juice-99292908.jpg",
      description : "It is a refreshing summer cooler popular in northern and western parts of India."
    },
    {
      name: "Fruit juice",
      price: "100/-",
      image : "https://thumbs.dreamstime.com/b/assorted-fruit-juice-wood-background-assorted-fruit-juice-107111368.jpg",
      description : ""
    },
    {
      name: "Jal-jeera",
      price: "70/-",
      image : "https://thumbs.dreamstime.com/b/popular-indian-summer-drink-jal-jeera-wooden-surface-jaljeera-indian-summer-drink-made-fresh-lime-sugar-black-salt-112593667.jpg",
      description : ""
    },
    {
      name: "Lemonade",
      price: "70/-",
      image : "https://thumbs.dreamstime.com/b/lemonade-28180227.jpg",
      description : ""
    },
    {
      name: "Kokum",
      price: "80/-",
      image : "https://thumbs.dreamstime.com/b/kokum-sharbat-summer-drink-maharashtra-cold-beverage-sweet-tangy-made-fruit-38486206.jpg",
      description : ""
    }
  ]

  milkshakes : Dish[] = [

    {
      name: "Vanilla",
      price: "120/-",
      image : "https://thumbs.dreamstime.com/b/vanilla-milkshake-14632680.jpg",
      description : ""
    },
    {
      name: "Butterscotch",
      price: "180/-",
      image : "https://thumbs.dreamstime.com/b/ice-coffee-unicorn-cafe-sri-lanka-very-tasty-sweet-drink-ice-coffee-unicorn-cafe-sri-lanka-222181598.jpg",
      description : ""
    },
    {
      name: "Strawberry",
      price: "150/-",
      image : "https://thumbs.dreamstime.com/b/strawberry-milkshake-fresh-strawberries-white-background-35598191.jpg",
      description : ""
    },
    {
      name: "Mango",
      price: "150/-",
      image : "https://thumbs.dreamstime.com/b/mango-milkshake-ice-cream-served-dryfruits-icecream-87626978.jpg",
      description : ""
    },
    {
      name: "Pineapple",
      price: "150/-",
      image : "https://thumbs.dreamstime.com/b/view-pineapple-milkshake-26527778.jpg",
      description : ""
    },
    {
      name: "Choclate",
      price: "150/-",
      image : "https://thumbs.dreamstime.com/b/milkshake-smoothie-chocolate-cherry-glass-selective-focus-69870320.jpg",
      description : ""
    }
  ]

  frooty : Dish[] = [

    {
      name: "Sitaphal",
      price: "200/-",
      image : "https://www.vadodarachefs.com/wp-content/uploads/2020/01/ezgif.com-webp-to-jpg-e1578044921122.jpg",
      description : ""
    },
    {
      name: "Rasberry",
      price: "210/-",
      image : "https://amyinthekitchen.com/wp-content/uploads/2015/08/raspberry-smoothie-3.jpg",
      description : ""
    },
    {
      name: "Blueberry",
      price: "200/-",
      image : "https://static.toiimg.com/photo/84226147.cms",
      description : ""
    },
    {
      name: "Kaju",
      price: "230/-",
      image : "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/02/dry-fruits-milkshake-recipe.jpg",
      description : ""
    }
  ]


  sodas : Dish[] = [

    {
      name: "Coca-Cola",
      price: "90/-",
      image : "https://previews.123rf.com/images/denismart/denismart1801/denismart180100009/92973371-london-uk-january-02-2018-original-glass-of-coca-cola-drink-on-white-background-the-drink-is-produce.jpg",
      description : ""
    },
    {
      name: "Pepsi",
      price: "90/-",
      image : "https://www.nsmshop.com/wp-content/uploads/2017_NSM_WEB_431028_16.jpg",
      description : ""
    },
    {
      name: "Fruit Beer",
      price: "100/-",
      image : "",
      description : ""
    },
    {
      name: "Jeera Soda",
      price: "90/-",
      image : "",
      description : ""
    },
    {
      name: "Plain Soda",
      price: "60/-",
      image : "",
      description : ""
    }
  ]

}
