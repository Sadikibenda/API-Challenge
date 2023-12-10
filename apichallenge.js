let Berries = document.querySelector('ul')

//fetch("https://pokeapi.co/api/v2/berry/")
fetch("https://pokeapi.co/api/v2/berry-flavor/")
.then(response => response.json())

.then(function(json) {
    //console.log(json)

    let search = json.results
    for (p of search){
        console.log(p)
        let listItem = document.createElement('li')
        listItem.innerHTML = p.name
        Berries.appendChild(listItem)

    }
})