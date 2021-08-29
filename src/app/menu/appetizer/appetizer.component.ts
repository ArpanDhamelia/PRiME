import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/shared/Dish.model';

@Component({
  selector: 'app-appetizer',
  templateUrl: './appetizer.component.html',
  styleUrls: ['./appetizer.component.css']
})
export class AppetizerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  vegappetizers : Dish[] = [
    { name : 'Black Bean Dip',
    price : '150/-',
    image : 'https://www.onceuponachef.com/images/2013/09/Creamy-Black-Bean-Dip-575x360.jpg',
    description : 'this creamy black bean dip. Admittedly, it’s not going to win a beauty contest, but it’s so flavorful, healthy and easy to make, you won’t care.' },
    { name : 'Methi Muthia',
    price : '160/-',
    image : 'https://aahaaramonline.com/wp-content/uploads/2017/01/steamed_methi_muthiya_gujarati_snack_recipe.jpg',
    description : 'Methi muthia are steamed or fried dumplings made from chickpea flour and fenugreek leaves/methi.. ' },
    { name : 'Paneer Tikka',
    price : '190/-',
    image : 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG',
    description : 'Paneer Tikka is a popular and delicious tandoori snack where paneer (Indian cottage cheese cubes) are marinated in a spiced yogurt-based marinade, arranged on skewers and grilled in the oven' },
    { name : 'Sweet Potato Tikki',
    price : '140/-',
    image : 'https://myheartbeets.com/wp-content/uploads/2020/09/easy-sweet-potato-tikki.jpg',
    description : 'The perfect fall snack for your cup of chai. Sweet potato tikki wins at both flavor and texture. It’s crisp on the outside, creamy on the inside and it’s spicy and sweet!' },
    { name : 'Sabudana Tikki',
    price : '130/-',
    image : 'http://www.ifairer.com/article_image/1534855743-ifairer.jpg',
    description : 'Sabudana tikki are thin pan-fried patties made with tapioca pearls, mashed potatoes and spices. Also known as sabudana cutlet' },
    { name : 'Indian Onion Salad (Laccha Pyaaz)',
    price : '110/-',
    image : 'https://homade.recipes/wp-content/uploads/2020/10/laccha-onion-salad-onion-ring-salad-dhaba-style-pyaz-ka-salad-recipe-main-photo-1603867191-751x350.jpg',
    description : 'Laccha pyaaz is a classic Indian onion salad - thinly sliced onion rings, lemon, green chili, and cilantro.' },
    { name : 'Dal Vada  (Gujarati Moong Dalwada)',
    price : '120/-',
    image : 'https://3.bp.blogspot.com/-QTNjy2Nrfi8/WUtf9ksYE3I/AAAAAAAABE4/JFOa7PAYHPAAu5RSJdB43cmETu2AWw12wCLcBGAs/s1600/DSC_4306.JPG',
    description : ' These are golden crispy from outside and soft, spongy, fluffy from inside.' },

    { name : 'Paneer 65',
    price : '200/-',
    image : 'https://d1uz88p17r663j.cloudfront.net/resized/c18b6d3f9ef78b35741213513a8c7668_Paneer_65_Plating_1500_700.jpg',
    description : 'a spicy and lip-smacking snack recipe made with deep fried paneer fritters tossed in spicy curry sauce.' },
    { name : 'Crispy Kothimbir Vadi  (Maharashtrian Snack)',
    price : '180/-',
    image : 'https://www.archanaskitchen.com/images/archanaskitchen/Guest_Writers/Darshana_Shah/Kothimbir_Vadi_Coriander_Fritters.jpg',
    description : 'It is savory cilantro fritters that are steamed first, sliced and then fried into oil till crisp.' },
    { name : 'Veg Kabab Recipe (Seekh Kabab)',
    price : '150/-',
    image : 'https://i.ndtvimg.com/i/2017-09/seekh-kebab_600x350_41506416404.jpg',
    description : 'cooked mixed vegetable mixture is shaped around the skewers and grill to the perfection.' },
  ]

  nonvegappetizers : Dish[] = [
    { name : 'Indian Chicken Keema Sliders',
    price : '240/-',
    image : 'https://myfoodstory.com/wp-content/uploads/2016/03/keema-pav-burger-indian-lamb-sloppy-joes-recipe.1024x1024-2.jpg',
    description : 'Filled with juicy chicken, these sliders are a great party starter.' },
    { name : 'Prawn Masala Dumplings',
    price : '230/-',
    image : 'https://thumbs.dreamstime.com/b/prawn-roast-shrimp-fry-sri-lanka-prawn-roast-konju-roast-shrimp-fry-sri-lanka-fish-curry-spicy-prawns-masala-banana-leaf-189648075.jpg',
    description : 'Prawn Masala Kozhukattai Recipe is a delicious snack where dumplings are made from rice flour and then filled with prawn masala. ' },
    { name : 'Mutton Galouti Kebab',
    price : '180/-',
    image : 'https://c.ndtvimg.com/galouti_625x300_1526723838254.jpg',
    description : "Galouti literally translates to 'soft' and that makes this Indian kebab recipe a melt in the mouth from the Awadhi table." },
    { name : 'Cheesy Chicken Tikka',
    price : '250/-',
    image : 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/pal.rini1-gmail.com/Cheesy_Chicken_Tikka_recipe_edited.jpg',
    description : 'Cheesy chicken tikka is a party appetizer that just melts in your mouth.' },
    { name : 'Hyderabadi Chicken Shikampuri Kebab',
    price : '230/-',
    image : 'http://www.ifairer.com/article_image/1534855743-ifairer.jpg',
    description : 'Sabudana tikki are thin pan-fried patties made with tapioca pearls, mashed potatoes and spices. Also known as sabudana cutlet' },
    { name : 'Chicken Seekh Kebab',
    price : '250/-',
    image : 'https://homade.recipes/wp-content/uploads/2020/10/laccha-onion-salad-onion-ring-salad-dhaba-style-pyaz-ka-salad-recipe-main-photo-1603867191-751x350.jpg',
    description : 'Laccha pyaaz is a classic Indian onion salad - thinly sliced onion rings, lemon, green chili, and cilantro.' },
    { name : 'Dum Ke Shami Kebab',
    price : '200/-',
    image : 'https://3.bp.blogspot.com/-QTNjy2Nrfi8/WUtf9ksYE3I/AAAAAAAABE4/JFOa7PAYHPAAu5RSJdB43cmETu2AWw12wCLcBGAs/s1600/DSC_4306.JPG',
    description : ' These are golden crispy from outside and soft, spongy, fluffy from inside.' },

    { name : 'Murgh Aloo Tikki',
    price : '180/-',
    image : 'https://d1uz88p17r663j.cloudfront.net/resized/c18b6d3f9ef78b35741213513a8c7668_Paneer_65_Plating_1500_700.jpg',
    description : 'a spicy and lip-smacking snack recipe made with deep fried paneer fritters tossed in spicy curry sauce.' },

    { name : 'KFC Style Crispy Chicken Popcorn',
    price : '240/-',
    image : 'https://www.archanaskitchen.com/images/archanaskitchen/Guest_Writers/Darshana_Shah/Kothimbir_Vadi_Coriander_Fritters.jpg',
    description : 'It is savory cilantro fritters that are steamed first, sliced and then fried into oil till crisp.' },
    { name : 'Chicken & Bell Pepper Skewers',
    price : '210/-',
    image : 'https://i.ndtvimg.com/i/2017-09/seekh-kebab_600x350_41506416404.jpg',
    description : 'cooked mixed vegetable mixture is shaped around the skewers and grill to the perfection.' },
  ]

}
