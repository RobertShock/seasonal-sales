
// You work as a developer for a big box store. Here is a JSON representation of a small sample of the products you sell.
// Here is a JSON representation of some of the departments in your stores.
function domString(){
}



var productsArray = [];

// domString(products);

var productsContainer = document.getElementById("products-container");

// function printProductsArrayToDom(array) {
//   for ( var i = 0; i < array.length; i++ ) {
//     var currentProducts = array[i];
//     var productsDomString = productsDomStringFunction(currentProducts);
//   productsContainer.innerHTML += productsDomString;
//   }
// }

function productsDomStringFunction(currentProducts) {
  for ( var i = 0; i < currentProducts.length; i++ ) {
  var productsDomString = "";
    productsDomString += '<section class="products">';
    productsDomString +=   '<div class="productsName">';
    productsDomString +=     '<h2>' + currentProducts[i].name + '</h2>';
    productsDomString +=   '</div>';
    productsDomString +=   '<div class="productsPrice">'
    productsDomString +=     '<p>' + currentProducts[i].price + '</p>';
    productsDomString +=   '</div>'
    productsDomString +=   '</section>';
    writeToDom(productsDomString);
  };
}

function writeToDom(string){
  productsContainer.innerHTML = string;
}

function executeThisCodeAfterFileLoads() {
  var data = JSON.parse(this.responseText);
  productsDomStringFunction(data.products);
}

// function executeThisCodeAfterFileLoads2(arrayName){
//   var data = JSON.parse(this.responseText);
//     printCategoriesArrayToDom(data.categories);
// }

function executeThisCodeIfFileErrors(){
  console.log("FAIL TRY AGAIN");
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest.addEventListener("error", executeThisCodeIfFileErrors);
myRequest.open("GET", "products.json");
myRequest.send()

// var myRequest2 = new XMLHttpRequest();
// myRequest2.addEventListener("load", executeThisCodeAfterFileLoads2);
// myRequest2.addEventListener("error", executeThisCodeIfFileErrors);
// myRequest2.open("GET", "categories.json");
// myRequest2.send()

