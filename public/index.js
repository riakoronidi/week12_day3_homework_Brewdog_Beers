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
  debugger;

  for(let beer of beers){
    displayBeerDetails(beer);
    // save(beer);
  }
};

const displayBeerDetails = function(beer){
  const ul = document.getElementById('beer-list');
  const li = document.createElement('li');
  const img = document.createElement('img');
  li.innerText = beer.name;
  img.src = beer.image_url;
  li.appendChild(img);
  ul.appendChild(li);
};

// var save = function (beer) {
//   var beersArray = JSON.parse(localStorage.getItem('toDoList')) || [];
//   // - add the newItem to the array
//   todosArray.push(newItem);
//   // - stringify the updated array
//   // var jsonString = JSON.stringify(todosArray);
//   // - save it back to localstoage
//   // localStorage.setItem('todoList', jsonString);
//
//   // or do it in one line
//   localStorage.setItem('toDoList', JSON.stringify(todosArray));
// }

// const handleSelectChanged = function(event){
//   var pTag = document.querySelector('#select-result');
//   pTag.innerText = this.value;
//
//   const select = document.querySelector('select');
//   var savedCountry = select.value;
//   var jsonString = JSON.stringify(savedCountry);
//   localStorage.setItem('savedCountry', jsonString);
// };
//
// const saveCountry = function(countries, savedCountry){
//   for(let country of countries){
//     if(savedCountry.name === country.name){
//       var jsonString = JSON.stringify(country);
//       localStorage.setItem('country', jsonString);
//     }
//
//   }
//   const select = document.querySelector('select');
//   var savedCountry = select.value;
//   var jsonString = JSON.stringify(savedCountry);
//   localStorage.setItem('savedCountry', jsonString);
// }


const app = function(){
  const url = "https://api.punkapi.com/v2/beers";
  makeRequest(url, requestComplete);

  // const select = document.querySelector('select');
  // select.addEventListener('change', handleSelectChanged);

}

window.addEventListener('load', app);
