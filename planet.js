let nameH1;
let birthYearSpan;
let heightSpan;
let massSpan;
let filmsDiv;
let planetDiv;
const baseUrl = `http://localhost:9001/api`;

// Runs on page load
addEventListener('DOMContentLoaded', () => {
  nameH1 = document.querySelector('h1#name');
//   birthYearSpan = document.querySelector('span#birth_year');
//   massSpan = document.querySelector('span#mass');
//   heightSpan = document.querySelector('span#height');
//   homeworldSpan = document.querySelector('span#homeworld');
//   filmsUl = document.querySelector('#films>ul');
  const sp = new URLSearchParams(window.location.search)
  const id = sp.get('id')
  getPlanet(id)
});

async function getPlanet(id) {
  let planet;
  try {
    planet = await fetchPlanet(id)
    // planet.homeworld = await fetchHomeworld(planet)
    // planet.films = await fetchFilms(planet)
  }
  catch (ex) {
    console.error(`Error reading planet ${id} data.`, ex.message);
  }
  renderPlanet(planet);

}
async function fetchPlanet(id) {
  let planetUrl = `${baseUrl}/planets/${id}`;
  return await fetch(planetUrl)
    .then(res => res.json())
}

// async function fetchHomeworld(planet) {
//   const url = `${baseUrl}/planets/${planet?.homeworld}`;
//   const planet = await fetch(url)
//     .then(res => res.json())
//   return planet;
// }

// async function fetchFilms(planet) {
//   const url = `${baseUrl}/planets/${planet?.id}/films`;
//   const films = await fetch(url)
//     .then(res => res.json())
//   return films;
// }

const renderPlanet = planet => {
  document.title = `SWAPI - ${planet?.name}`;  // Just to make the browser tab say their name
  nameH1.textContent = planet?.name;
//   heightSpan.textContent = planet?.height;
//   massSpan.textContent = planet?.mass;
//   birthYearSpan.textContent = planet?.birth_year;
//   homeworldSpan.innerHTML = `<a href="/planet.html?id=${planet?.homeworld.id}">${planet?.homeworld.name}</a>`;
//   const filmsLis = planet?.films?.map(film => `<li><a href="/film.html?id=${film.id}">${film.title}</li>`)
//   filmsUl.innerHTML = filmsLis.join("");
}
