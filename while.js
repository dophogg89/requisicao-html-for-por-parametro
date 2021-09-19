const url = 'https://pokeapi.co/api/v2/pokemon?limit=10000';
//requisição
fetch(url)
    .then(response => response.json())
    .then(pokemon => {
        //console.log(pokemon);
        const listPokemon = pokemon.results;
        tratarPokemon(listPokemon);
    });
//tratando a variável dentro da requisição (const listPokemon)
function tratarPokemon(results) {
    console.log(results);
    let i = 0;
        i < results.length;
        i++;
    while (let i = 0; i < results.length; i++) {
        document.querySelector("tbody").insertAdjacentHTML('beforeend', criarLinha(results[i]))
        console.log(results[i]);
    }
}
function criarLinha(pokemon) {
    /*Template Strings
    são strings que permitem expressões embutidas. Você pode utilizar string multi-linhas e interpolação de string com elas.
    Basicamente é uma nova forma de criar strings e tornar o seu código um pouco mais legível.*/
    return `
    <tr>
        <td>
            ${pokemon.name}
        </td>
    </tr>`
}