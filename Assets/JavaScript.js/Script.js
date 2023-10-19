const offset = 0
const limit = 10
const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'

function convertListToHtml(pokemon){
    return `
    <li class = "pokemon">
    <span class = "number">#001</span>
    <span class = "name" >${pokemon.name}</span>
    <div class = "details">
            <ol class = "types">
                <li class = "type">grass</li>
                <li class = "type">poison</li>
            </ol>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt=${pokemon.name}>
    </div>
    </li>
    `
}

const pokemonsList = document.getElementById('pokemonList');

pokeApi.getpokemons().then((pokemons = []) => {
        pokemonsList.innerHTML += pokemons.map(convertListToHtml).join(' ')
    })
    /*--OBTENDO A RESPOSTA DA API, E É APENAS MOSTRADO O BODY AO INVÉS DO JSON NO BROWSER--
fetch(url).then(function(response){
    console.log(response)
})

-------ENCADEAMENTO ATRAVÉS DO .then E TRANSFORMANDO O BODY PARA JSON -------------
fetch(url).then(function(response){
    return response.json()
    .then (function(responseBody){
        console.log(responseBody)
    })
})
.catch(function(error){
    console.log(error)
})

--FORMA REDUZIDA COM O USO DE ARROW FUNCTION(CÓDIGO MAIS LIMPO)--
fetch(url).then((response) =>{ 
    return response.json()
    .then ((responseBody)=>{
        console.log(responseBody)
    })
})

--FORMA AINDA MAIS REDUZIDA QUANDO A RESPONSE É APENAS UMA ÚNICA LINHA---
fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {
        debugger
        console.log(pokemonList)
    })
    .catch((error)=> console.error(error))


--TRANSFORMANDO OS POKEMONS EM UMA LISTA HTML--*/