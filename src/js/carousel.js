import index from "./index";

export default function(obj){
    //return new Promise ((resolve,reject) =>{

        for (var i=0; i<obj.length ; i++){

            //console.log(obj[i]);
            //console.log(obj[i].albumTitle + " " + obj[i].manufacturer + " " + obj[i].modelNumber + " " + obj[i].mediumImage + " " + obj[i].includedItemList[0].includedItem);

            let title = obj[i].albumTitle;
            let manufacturer = obj[i].manufacturer;
            let largeImage = obj[i].largeImage;
            let includedItem = obj[i].includedItemList[0].includedItem;
            let url = obj[i].url;
            let addToCartUrl = obj[i].addToCartUrl;
            let price= obj[i].regularPrice;
            let sku = obj[i].sku
            
            //-------------jquery----------------------
            // var newElement = document.createElement("div");
            // $(newElement).css("background", "url("+mediumImage+")");
            // $(newElement).append("<a class='Link' href="+url+"><p>"+title+"</p></a>");
            // $(newElement).append("<input type='button' class='btn' onclick='location.href="+addToCartUrl+" value='Add to cart'>");
            // $(newElement).addClass("pop");
            // $(".bxSlider").append(newElement);
            //---------------------------------------

            let node=document.createElement("div");
           
            node.innerHTML = `
            <h4> ${manufacturer} </h4>
            <h6> ${includedItem} </h6>
            <h5> ${price} </h5>`;
            let btn=document.createElement("button");
            btn.setAttribute("class","atc");
            btn.innerHTML = "Add to cart";
            btn.setAttribute("data-sku",sku);
            btn.setAttribute("data-price",price);
            node.appendChild(btn);

            //<button class=“atc” data-sku="${sku}" data-price="${price}"> Add to Cart </button>`;

            node.setAttribute("id","caro");
            node.style.backgroundImage = "url('" + largeImage + "')";
            node.style.backgroundRepeat="no-repeat";
            node.style.height = '50vh';
            document.getElementById("slider").appendChild(node);

            // let brand = document.createElement("p");
            // node.appendChild (brand);
            // brand.innerHTML= manufacturer;

            // let name = document.createElement("p");
            // node.appendChild (name);
            // name.innerHTML= title;

            // let item = document.createElement("p");
            // node.appendChild (item);
            // item.innerHTML= includedItem;

            // let actualprice = document.createElement("p");
            // node.appendChild (actualprice);
            // actualprice.innerHTML= price;

        }
 
    //});

    
}