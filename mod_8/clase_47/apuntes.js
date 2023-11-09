const list = document.querySelector("ul");

let info = ''

// fetch('https://swapi.dev/api/people')
//   .then(response => response.json())
//   .then(data => {
//     // log
//     data.results.forEach(item => info += `<li>${item.name}/${item.birth_year}</li>`);
//     list.innerHTML = info
//   })

// fetch('https://swapi.dev/api/people')
//   .then(response => response.json())
//   .then(data => {
//     data.results.forEach(p => {
//       list.innerHTML += `<li>${p.name} / ${p.birth_year}</li>`
//     })
//   })

fetch('https://swapi.dev/api/people')
  .then(response => response.json())
  .then(data => {
    const characters = data.results;
    for (let i = 0; i < characters.length; i++) {
      
      list.innerHTML += '<li>' + characters[i].name + ' / ' + characters[i].birth_year + '</li>'
    }
  })