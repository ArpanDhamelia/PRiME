import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/shared/Dish.model';

@Component({
  selector: 'app-main-course',
  templateUrl: './main-course.component.html',
  styleUrls: ['./main-course.component.css']
})
export class MainCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  veg: Dish[] = [
    {
      name: "Paneer Tikka",
      price: "180/-",
      image : "https://thumbs.dreamstime.com/b/indian-delicious-cuisine-paneer-tikka-masala-tandoori-chapati-isolated-white-background-indian-delicious-cuisine-paneer-158846105.jpg",
      description : "Paneer Tikka Masala recipe is brimming with bright flavors from the spiced tomato onion curry sauce and delightfully marinated grilled cottage cheese."
    },
    {
      name: "Kadai Paneer",
      price: "160/-",
      image : "https://thumbs.dreamstime.com/b/indian-style-cottage-cheese-vegetarian-curry-dish-kadai-paneer-traditional-punjabi-food-garnished-onion-chi-chili-183714515.jpg",
      description : "Kadai Paneer is a vibrant, tangy, spiced paneer dish that can brighten up your day any time. Made with the usual Indian pantry staples like onions, tomatoes, capsicum (green bell peppers) and Indian spices"
    },
    {
      name: "Butter paneer Masala",
      price: "180/-",
      image : "https://thumbs.dreamstime.com/b/indian-main-course-paneer-butter-masala-punjabi-curry-109156136.jpg",
      description : "it is known for its mildly sweet and spicy taste with the goodness of fresh cream and butter topping with moist paneer."
    },
    {
      name: "Mutter paneer",
      price: "180/-",
      image : "",
      description : ""
    },
    {
      name: "Sev Tamatar",
      price: "130/-",
      image : "",
      description : ""
    },
    {
      name: "Bhindi Masala",
      price: "140/-",
      image : "",
      description : ""
    },
    {
      name: "Palak Paneer",
      price: "180/-",
      image : "",
      description : ""
    },
    {
      name: "Malai Kofta",
      price: "180/-",
      image : "",
      description : ""
    },
    {
      name: "Jeera Aloo",
      price: "160/-",
      image : "",
      description : ""
    },
    {
      name: "Kaju Curry",
      price: "160/-",
      image : "",
      description : ""
    },

    {
      name: "Butter Paneer",
      price: "180/-",
      image : "",
      description : ""
    }
  ]

  nonveg: Dish[] = [
    {
      name: "Butter Chicken",
      price: "200/-",
      image : "https://thumbs.dreamstime.com/b/butter-chicken-curry-bowl-delicious-indian-naan-bread-basmati-rice-cilantro-garnish-104019037.jpg",
      description : "Aromatic golden chicken pieces in an incredible creamy curry sauce"
    },
    {
      name: "Kadai Chicken",
      price: "210/-",
      image : "https://thumbs.dreamstime.com/b/kadai-chicken-indian-food-indian-curry-wooden-background-top-view-kadai-chicken-indian-food-indian-curry-wooden-179640355.jpg",
      description : "Kadai Chicken is a delicious Indian chicken curry where chicken is cooked with freshly ground spices."
    },
    {
      name: "Chicken Tikka Masala",
      price: "280/-",
      image : "",
      description : ""
    },
    {
      name: "Bundel khandi Chicken",
      price: "350/-",
      image : "",
      description : ""
    },
    {
      name: "Egg Curry",
      price: "120/-",
      image : "",
      description : ""
    },
    {
      name: "Chicken Home style",
      price: "350/-",
      image : "",
      description : ""
    }
  ]
  breads : Dish[] = [
    {
      name: "Butter Naan",
      price: "50/-",
      image : "https://thumbs.dreamstime.com/b/delicious-tandoori-style-naan-garlic-bread-rustic-wood-table-top-tandoori-naan-garlic-bread-201538151.jpg",
      description : "healthy and soft whole wheat butter naan made without tandoor."
    },
    {
      name: "Butter Roti",
      price: "40/-",
      image : "https://thumbs.dreamstime.com/b/butter-roti-isolated-over-rustic-wooden-background-selective-focus-224438601.jpg",
      description : "a traditional and tasty north indian flatbread"
    },
    {
      name: "Rumali Roti",
      price: "40/-",
      image : "",
      description : ""
    },
    {
      name: "Plain Roti",
      price: "30/-",
      image : "",
      description : ""
    },
    {
      name: "Butter Naan",
      price: "50/-",
      image : "",
      description : ""
    },
    {
      name: "Kulche",
      price: "40/-",
      image : "",
      description : ""
    }

  ]
}
