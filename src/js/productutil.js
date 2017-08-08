export default class{
    constructor(){
       // console.log("12 work");
       this.total = 0; //will be the counter of the quantity of all items 
       this.amount = 0; //will be the sum of the same item
       //this.getTotal();
    }

    addToCart(sku,price){
        
        var cart = {price:price, qty:0 }; // price of item ant the quantity of the item
        var item  = JSON.parse(sessionStorage.getItem(sku)); // inserting begining state to item

        
    //adding to sessionStorage after converting to string
    if(typeof(Storage)!==undefined){

        if(item==null){
            //
            cart.qty =1;
            this.total = 1;
            this.amount = cart.price * cart.qty;
            console.log("cart qty "+ cart.qty);
            console.log("amounty "+ this.amount);
            $(".totals").html("the total amount is : "+this.amount);

            //console.log("total "+this.total);
            //$(".counter").html(this.total);
           
        }
            else{
            cart.qty= item.qty +1;
            this.amount = cart.price * cart.qty;
            console.log("cart qty "+ cart.qty);
            console.log("amounty "+ this.amount);
            $(".totals").html("the total amount is : "+this.amount);

            //document.getElementsByClassName("counter").innerHTML=cart.qty;
            //$(".counter").html(cart.qty)
            //cart.amount = item.price + price;


            ////let diff= cart.qty - item.qty; 
            ////this.total+= cart.qty;
            ////$(".counter").html(this.total);
            } 
        }
        else{
            console.log("your browser is not supporting session Storage")
        }
        sessionStorage.setItem(sku , JSON.stringify(cart));
        this.getTotal(cart.qty);

    }

    getTotal(qty){
        let cartTotal = qty; 
        console.log("cart Total "+cartTotal);
            for (var i = 0; i < localStorage.length; i++){
                var key = sessionStorage.getItem(sessionStorage.key(i));
                this.total =  this.total + sessionStorage.getItem(sessionStorage.key(i).qty);
                console.log("total in cart"+this.total);
                $(".counter").html(cartTotal);

            }
        }


}






// function selectApi(id){
//     var selected = id;
    

//     if (selected == abcat0502000) {
//         console.log("Laptops");
//         console.log(selected.id);

//     }else if(selected == pcmcat209400050001){
//         console.log("Cell phones");
//         console.log(selected.id);

//     }else if(selected == abcat0101000){
//         console.log("Television");
//         console.log(selected.id);

//     }else{
//         console.log("Headphones");
//         console.log(selected.id);
//     }

// }


// function selectApi1(p,s){
//     var price = p;
//     var sku = s;
//     console.log(price);
//     console.log(sku);
// }
//export {selectApi,selectApi1};