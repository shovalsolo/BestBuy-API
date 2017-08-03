/*import Cart from "./cart";*/

import request from "./bestbuy";
import carousel from "./carousel";
//import * as y from "./productutil";
import productutil from "./productutil";

export default class App{
	constructor(){
		
		//$(".caro" ).remove();
		this.initBBCall();
		
	}
	
	initBBCall () {
		request({url: "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))",api : "8ccddf4rtjz5k5btqam84qak"})
		.then(data => {
			carousel(data.products);
			
			this.addToCart();
			
			

			/* fill carosel with products */
		})
		.catch(error => {
			console.log("warning Christopher Robins... Error");
			console.log(error);
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
