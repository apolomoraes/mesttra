const api = fetch('https://pokeapi.co/api/v2/pokemon?limit=120');

const pokemons = document.querySelector('#pokemons');

api.then((response) => {
  console.log(response);
  return response.json();
}).then((datas) => {
  console.log(datas);
  datas.results.map((data, index) => {
    pokemons.insertAdjacentHTML('beforeend', `
        <li class="pokemon-card">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${index + 1}.gif"/>
        <h3>${data.name}</h3>
      </li>
      `)

    // const li = document.createElement('li');
    // li.innerText = data.text;
    // tasks.appendChild(li);
  })
})

