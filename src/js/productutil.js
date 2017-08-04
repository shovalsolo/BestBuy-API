export default class{
    constructor(){
       // console.log("12 work");
       this.total = 0;
       this.amount = 0;
    }

    addToCart(sku,price){
        
        var cart = {price:price, qty:0 };
        var item  = JSON.parse(sessionStorage.getItem(sku));

        
    //adding to sessionStorage after converting to string
    if(typeof(Storage)!==undefined){

        if(item==null){
            //
            cart.qty =1;
        }
            else{
            cart.qty= item.qty +1;
            //document.getElementsByClassName("counter").innerHTML=cart.qty;
            //$(".counter").html(cart.qty)
            //cart.amount = item.price + price; 
            this.total+= cart.qty;
            this.amount = cart.price * cart.qty;
            console.log(this.amount);
            $(".counter").html(this.total);
            } 
        }
        else{
            console.log("your browser is not supporting session Storage")
        }
        sessionStorage.setItem(sku , JSON.stringify(cart));

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