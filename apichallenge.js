let Berries = document.querySelector('ul')
let button = document.getElementsByTagName('button')[0]
//fetch("https://pokeapi.co/api/v2/berry/")


button.addEventListener('click', function(){
 fetch("https://pokeapi.co/api/v2/berry-flavor/")
.then(response => response.json())

.then(function(json) {
    //console.log(json)

    let search = json.results
    Berries.innerHTML = '';        // used this line of code to get response once after click!!! or use  { once: true } in the last line.
    for (p of search){
        //console.log(p)
        let listItem = document.createElement('li')
        listItem.innerHTML = p.name
        Berries.appendChild(listItem)

    }
})
})  

