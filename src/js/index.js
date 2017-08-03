/*import Cart from "./cart";*/

import request from "./bestbuy";
import carousel from "./carousel";
//import * as y from "./productutil";
import productutil from "./productutil";
//import categoryutil from "./categoryutil";



export default class App{
	constructor(){
		this.baseurl = "https://api.bestbuy.com/v1/products";
        this.url = "https://api.bestbuy.com/v1/products";
		//$(".content" ).remove();
		this.category();
		this.initBBCall();
		
	}
	
	initBBCall () {
		request({url: this.url, api : "8ccddf4rtjz5k5btqam84qak" })
		//request({url: "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))",api : "8ccddf4rtjz5k5btqam84qak"})
		.then(data => {
			carousel(data.products);
			
			this.addToCart();
			//this.category();
			
			

			/* fill carosel with products */
		})
		.catch(error => {
			console.log("warning Christopher Robins... Error");
			console.log(error);
		});
	}

	category(){
		// Listen for click on category .category when li is clicked then retrive value for sku and price
		// init new categoryutil().category() pass both sku and price
		//-------------------java-script--------------------
		
		// var selected = document.getElementsByClassName("category");
        // for (var i = 0; i < selected.length; i++){
        //    selected[i].addEventListener("click", (e) =>  {
		// 	   var selectedCategory = e.target.getAttribute("category-data");
        //        new categoryutil().category(selectedCategory);
        //    });
		// }
		

        $(".option").on("click", (e) => {
			//getting the button id when clicking on the button
			let target = e.target.value;
			//setting a param and getting the value from the button that is the id of the link 
			this.url = this.baseurl + target;
			//concatinating the url with the base url and the value fron the button data
			this.initBBCall();
			//calling the initBBcall to call the api
		});

	}

	addToCart(){
		// Listen for any click that happens on .atc when button is clicked then retrive value for sku and price
		// init new productutil().addToCart() pass both sku and price

		//-----------------jquery-------------------------
		// $(".atc").on("click",  function(){
			
		// 	var sku = $(this).attr('data-sku');
		// 	var price = $(this).attr('data-price');
		// 	new productutil().addToCart(sku,price);
		// });

		//-------------------java-script--------------------
		let adding = document.getElementsByClassName("atc");
        for (var i = 0; i < adding.length; i++){
           adding[i].addEventListener("click", (e) =>  {
               let sku = e.target.getAttribute("data-sku");
               let price = e.target.getAttribute("data-price");
               new productutil().addToCart(sku,price);
           });
        }
	}

	

}
let x = new App;



	