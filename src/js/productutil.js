export default class{
    constructor(){
       
       this.total = 0; //will be the counter of the quantity of all items 
       this.amount = 0; //will be the sum of the same item
       this.totalQty = 0;
       this.totalPrice = 0;
    }

    addToCart(sku,price){
        
        var cart = {price:price, qty:0 }; // price of item ant the quantity of the item
        var item  = JSON.parse(sessionStorage.getItem(sku)); // inserting begining state to item

        
    //adding to sessionStorage after converting to string
    if(typeof(Storage)!==undefined){

        if(item==null){
            
            cart.qty =1;
            //this.total = 1;
            this.amount = cart.price * cart.qty;
            //console.log("cart qty "+ cart.qty);
            //console.log("amounty "+ this.amount);

            $(".sku").html(sku);
            $(".quantity").val(cart.qty);
            $(".total-amount").html(this.amount);

        }
            else{
            cart.qty= item.qty +1;
            this.amount = cart.price * cart.qty;
            //console.log("cart qty "+ cart.qty);
            //console.log("amounty "+ this.amount);
            
            $(".sku").html(sku);
            $(".quantity").val(cart.qty);
            $(".total-amount").html(this.amount);
            
            } 
        }
        else{
            console.log("your browser is not supporting session Storage")
        }
        sessionStorage.setItem(sku , JSON.stringify(cart));
        this.getTotalQty();
        this.getTotalPrice();


    };

    getTotalQty(){
        this.totalQty = 0;
            for (var i = 0; i < sessionStorage.length; i++){
               
                if (this.totalQty === 0)
                    {
                        var x = sessionStorage.key(i);
                        // x is the key in location i that is actualy the item of the button that clicked 
                        this.totalQty = JSON.parse(sessionStorage.getItem(x)).qty; 
                        // setting totalQty with the qty from the item after parsing it
                    }
                    else
                        {
                            var x  = sessionStorage.key(i);
                            this.totalQty += JSON.parse(sessionStorage.getItem(x)).qty;
                        }
                
                $(".all-quantity").html(this.totalQty);
                $(".counter").html(this.totalQty);

            }
    };

    getTotalPrice(){
        this.totalPrice = 0;
        for(var i = 0; i < sessionStorage.length; i++)
            {
                // if(this.totalPrice === 0 ){
                //     var p =  sessionStorage.key(i);
                //     this.totalPrice = parseFloat(JSON.parse(sessionStorage.getItem(p)).price);
                //     //console.log("this.total = 0");
                // }
                // else
                //     {
                        var p = sessionStorage.key(i);

                        var parPrice = parseFloat(JSON.parse(sessionStorage.getItem(p)).price);
                        var parQty = parseFloat(JSON.parse(sessionStorage.getItem(p)).qty);
                        this.totalPrice += parPrice * parQty
                        
                    // }
                
            }
            console.log(this.totalPrice);
            $(".total-cart").html(this.totalPrice);
    };

    //model test

    // showCart(){
    // var modal = document.getElementById('myModal');

    // // Get the button that opens the modal
    // var btn = document.getElementById("myBtn");

    // // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];

    // // When the user clicks the button, open the modal 
    // btn.onclick = function() {
    //     modal.style.display = "block";
    // }

    // // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    //     modal.style.display = "none";
    // }

    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // }       

    // };
 


}