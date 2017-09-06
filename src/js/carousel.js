import index from "./index";

export default function(obj){

        for (var i=0; i<obj.length ; i++){
 
            //-------------jquery----------------------
            // var newElement = document.createElement("div");
            // $(newElement).css("background", "url("+mediumImage+")");
            // $(newElement).append("<a class='Link' href="+url+"><p>"+title+"</p></a>");
            // $(newElement).append("<input type='button' class='btn' onclick='location.href="+addToCartUrl+" value='Add to cart'>");
            // $(newElement).addClass("pop");
            // $(".bxSlider").append(newElement);
            //---------------------------------------
            if (obj[i].includedItemList.length > 0 && obj[i].manufacturer !== null) {
                //if the result from the API is not empty

                let manufacturer = obj[i].manufacturer;
                let largeImage = obj[i].largeImage;
                let includedItem = obj[i].includedItemList[0].includedItem;
            
                let url = obj[i].url;
                let addToCartUrl = obj[i].addToCartUrl;
                let price= obj[i].regularPrice;
                let sku = obj[i].sku
                
            //saving all the parameters to populate of the product

                let node=document.createElement("div");
            //creating a new div to contain the info from API
                
                node.innerHTML = `
                <h4 class="manufacturer"> ${manufacturer} </h4>
                <h6 class="includedItem"> ${includedItem} </h6>
                <h5 class="price"> ${price} </h5>`;
                let btn=document.createElement("button");
                btn.setAttribute("class","atc");
                btn.innerHTML = "Add to cart";
                btn.setAttribute("data-sku",sku);
                btn.setAttribute("data-price",price);
                node.appendChild(btn);

                node.setAttribute("class","caro");
                //style for the background
                node.style.backgroundImage = "url('" + largeImage + "')";
                node.style.backgroundRepeat="no-repeat";
                node.style.backgroundPosition="center";
                node.style.height = '50vh';
                document.getElementById("slider").appendChild(node);

            }
            else{
              
            }

        }
    
}