(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _carousel = require("./carousel");

exports.default = function (obj) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(obj.method || "GET", obj.url + '?apiKey=' + obj.api + '&format=json');

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = function () {
            return reject(xhr.statusText);
        };
        xhr.send(obj.body);
    });
};

},{"./carousel":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
            value: true
});

exports.default = function (obj) {
            //return new Promise ((resolve,reject) =>{

            for (var i = 0; i < obj.length; i++) {

                        //console.log(obj[i]);
                        //console.log(obj[i].albumTitle + " " + obj[i].manufacturer + " " + obj[i].modelNumber + " " + obj[i].mediumImage + " " + obj[i].includedItemList[0].includedItem);

                        var title = obj[i].albumTitle;
                        var manufacturer = obj[i].manufacturer;
                        var largeImage = obj[i].largeImage;
                        var includedItem = obj[i].includedItemList[0].includedItem;
                        var url = obj[i].url;
                        var addToCartUrl = obj[i].addToCartUrl;
                        var price = obj[i].regularPrice;
                        var sku = obj[i].sku;

                        //-------------jquery----------------------
                        // var newElement = document.createElement("div");
                        // $(newElement).css("background", "url("+mediumImage+")");
                        // $(newElement).append("<a class='Link' href="+url+"><p>"+title+"</p></a>");
                        // $(newElement).append("<input type='button' class='btn' onclick='location.href="+addToCartUrl+" value='Add to cart'>");
                        // $(newElement).addClass("pop");
                        // $(".bxSlider").append(newElement);
                        //---------------------------------------

                        var node = document.createElement("div");

                        node.innerHTML = "\n            <h4> " + manufacturer + " </h4>\n            <h6> " + includedItem + " </h6>\n            <h5> " + price + " </h5>";
                        var btn = document.createElement("button");
                        btn.setAttribute("class", "atc");
                        btn.innerHTML = "Add to cart";
                        btn.setAttribute("data-sku", sku);
                        btn.setAttribute("data-price", price);
                        node.appendChild(btn);

                        node.setAttribute("id", "caro");
                        node.style.backgroundImage = "url('" + largeImage + "')";
                        node.style.backgroundRepeat = "no-repeat";
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

};

var _index = require("./index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./index":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*import Cart from "./cart";*/

//import * as y from "./productutil";


var _bestbuy = require("./bestbuy");

var _bestbuy2 = _interopRequireDefault(_bestbuy);

var _carousel = require("./carousel");

var _carousel2 = _interopRequireDefault(_carousel);

var _productutil = require("./productutil");

var _productutil2 = _interopRequireDefault(_productutil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
	function App() {
		_classCallCheck(this, App);

		//$(".caro" ).remove();
		this.initBBCall();
	}

	_createClass(App, [{
		key: "initBBCall",
		value: function initBBCall() {
			var _this = this;

			(0, _bestbuy2.default)({ url: "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))", api: "8ccddf4rtjz5k5btqam84qak" }).then(function (data) {
				(0, _carousel2.default)(data.products);

				_this.addToCart();

				/* fill carosel with products */
			}).catch(function (error) {
				console.log("warning Christopher Robins... Error");
				console.log(error);
			});
		}
	}, {
		key: "addToCart",
		value: function addToCart() {
			// Listen for any click that happens on .atc when button is clicked then retrive value for sku and price
			// init new productutil().addToCart() pass both sku and price
			//-----------------jquery-------------------------
			// $(".atc").on("click",  function(){

			// 	var sku = $(this).attr('data-sku');
			// 	var price = $(this).attr('data-price');
			// 	new productutil().addToCart(sku,price);
			// });
			//-------------------java-script--------------------
			var adding = document.getElementsByClassName("atc");
			for (var i = 0; i < adding.length; i++) {
				adding[i].addEventListener("click", function (e) {
					var sku = e.target.getAttribute("data-sku");
					var price = e.target.getAttribute("data-price");
					new _productutil2.default().addToCart(sku, price);
				});
			}
		}
	}]);

	return App;
}();

exports.default = App;

var x = new App();

},{"./bestbuy":1,"./carousel":2,"./productutil":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        // console.log("12 work");

        _classCallCheck(this, _class);
    }

    _createClass(_class, [{
        key: "addToCart",
        value: function addToCart(sku, price) {
            var p = price;
            var s = sku;

            console.log(sku);
            console.log(price);
        }
    }]);

    return _class;
}();

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


exports.default = _class;

},{}]},{},[3]);
