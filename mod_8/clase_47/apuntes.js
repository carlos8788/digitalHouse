const list = document.querySelector("ul");

let info = ''

fetch('https://swapi.dev/api/people')
  .then(response => response.json())
  .then(data => {
    // log
    data.results.forEach(item => info += `<li>${item.name}/${item.birth_year}</li>`);
    list.innerHTML = info
  })