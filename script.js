async function getCatFacts() {
    try {
        const data = await fetch("https://catfact.ninja/facts");
        console.log(data);

        const response = await data.json();
        console.log(response);
        return response;
    } catch {
        console.error("Something went wrong");
    }
}
//getCatFacts();

async function displayCatFacts() {
    try {
        const catFacts = await getCatFacts();
        console.log(catFacts);

        const catFactsList = document.querySelector("#catFactsList");

        catFacts.data.forEach(function(item) {
            const catFactItem = document.createElement("li");
            catFactItem.textContent = item.fact;
            catFactsList.appendChild(catFactItem);
        })
    } catch {
        console.error("Something went wrong");
    }
}
displayCatFacts();

//
//

async function getPokemon() {
    try {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        console.log(data);

        const response = await data.json();
        console.log(response);
        return response;
    }
    catch {
        console.error("Something went wrong");
    };
};

async function displayPokemon() {
    try {
        const pokemon = await getPokemon();
        console.log(pokemon);
        console.log(pokemon.name);
        console.log(pokemon.sprites);
        console.log(pokemon.sprites.front_shiny);

        const pokemonCard = document.querySelector("#pokemonCard");
        pokemonCard.innerHTML = `
        <h1 class="polemonName">${pokemon.name}</h1>
        <img class="pokemonImg" src="${pokemon.sprites.front_shiny}" alt="" />
        `
    }
    catch {
        console.error("Something went wrong");
    };
};
displayPokemon();