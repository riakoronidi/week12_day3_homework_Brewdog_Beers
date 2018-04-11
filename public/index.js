const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
};

const requestComplete = function(){
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const beers = JSON.parse(jsonString);
  populateList(beers);
};

const populateList = function(beers){
  const ul = document.getElementById('beer-list');
  for(let beer of beers){
    displayBeerDetails(beer);
  }
};

const displayBeerDetails = function(beer){
  const ul = document.getElementById('beer-list');

  // var ingredientsArray = [];
  // ingredientsArray.push(beer.ingredients);
  // for(element of ingredientsArray){
  //   let li = document.createElement('li');
  //   li.innerText = element;
  //   ul.appendChild(li);
  // }
  const li = document.createElement('li');
  const img = document.createElement('img');
  li.innerText = beer.name;
  img.src = beer.image_url;
  li.appendChild(img);
  ul.appendChild(li);
};


const app = function(){
  const url = "https://api.punkapi.com/v2/beers";
  makeRequest(url, requestComplete);
}

window.addEventListener('load', app);
