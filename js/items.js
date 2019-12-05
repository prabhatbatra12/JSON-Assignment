//javascript
//Code refered from week 13 of class

//gets the header and section
let header = document.querySelector("header");
let section = document.querySelector("section");

//request url
let requestURL = "https://prabhatbatra12.github.io/JSON-Assignment/json/product.json"


//creates a new XHR object
let request = new XMLHttpRequest();

//opens a new request
request.open('GET', requestURL);

//request accept json
request.responseType = 'json';

//sends the request to the json
request.send();


//retrives the data from json file in server
request.onload = function() {
  let productInventory = request.response;
  console.log(productInventory);
  getProduct(productInventory);
}


//gets the product, output to the section
function getProduct(jsonObj) {

  //bind items object to a variable
  let products = jsonObj['items'];

  for (let i = 0; i < products.length; i++) {
    //create a few different elements to store price, feature, discription
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let list = document.createElement('ul');

    //grab the data associated with image to set the src and alt attribute
    img.setAttribute('src', 'https://prabhatbatra12.github.io/JSON-Assignment/images' + products[i].image);
    img.setAttribute('alt', products[i].image );

    h2.textContent = products[i].productName;
    p1.textContent = 'Product Description - ' + products[i].productDescription;
    p2.textContent = 'Cost - ' + products[i].cost;

    let features = products[i].features;
    for(let k = 0; k < features.length; k++ ) {
      let listItem = document.createElement('li');
      listItem.textContent = features[k];
      list.appendChild(listItem);
    }

    //Append everything into the section element
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(list);
    section.appendChild(article);
  }
}
