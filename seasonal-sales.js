
function productsJSONLoad(){
    let productsData = JSON.parse(this.responseText).products;
    getCategories(productsData);
}

function Fail(){
}

let theProducts = new XMLHttpRequest();
theProducts.addEventListener("load", productsJSONLoad);
theProducts.addEventListener("error", Fail);
theProducts.open("GET", "products.json");
theProducts.send();

function getCategories(productsParam){
    let myCategories = new XMLHttpRequest();
    myCategories.addEventListener("load", departmentsJSONLoad);
    myCategories.addEventListener("error", Fail);
    myCategories.open("GET", "departments.json");
    myCategories.send();

    function departmentsJSONLoad() {
        let categoriesData = JSON.parse(this.responseText).categories;
        combinedArray(productsParam, categoriesData);
    }
}

let productArrayVariable = [];

function combinedArray(productsArray, categoriesArray){
    productsArray.forEach(function(product){
        let currentCategoryId = product["category_id"];
        categoriesArray.forEach(function(category){
            if(currentCategoryId === category.id){
                product["categoryName"] = category.name;
                product["seasonDiscount"] = category["season_discount"];
                product["discount"] = category.discount;
                product["salePrice"] = product.price - product.price * product.discount;
            }
        });
    });
    productArrayVariable = productsArray;
    domString(productsArray);
}

function domString(products){
    let productString = "";

    for(let i = 0; i < products.length; i++){
        productString += `<h2>${products[i].name}</h2>`;
        productString += `<h3>${products[i].categoryName}</h3>`;
        if(selectedSeason === products[i].seasonDiscount){
            productString += `<p>${products[i].salePrice.toFixed(2)}</p>`;
        } else {
            productString += `<p>${products[i].price}</p>`;
        }
    }
    writeToDom(productString);
}

function writeToDom(strang){
    mainContainer.innerHTML = strang;
}

let selectBtn = document.getElementById("selectBtn");
let selectedSeason = "";

selectBtn.addEventListener('change', function(e){
    console.log(e);
    
    let selectOptions = e.target.childNodes;
    for(let i = 0; i < selectOptions.length; i++){
        if(selectOptions[i].selected) {
            console.log(selectOptions[i].value);
            selectedSeason = selectOptions[i].value;
        }
    }
        domString(productArrayVariable);
    });












