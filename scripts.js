async function start(){
const response = await fetch('https://animechan.vercel.app/api/random')
const data = await response.json()
console.log(data)
createquote(data.quote)
createanime(data.anime)
createchar(data.character)
}

start()

function createanime(enemy){

    document.getElementById('anime').innerHTML = enemy
    document.getElementById("anime").style.fontSize = "100px";
}


function createchar(kher){

    document.getElementById('quote').innerHTML = kher
    document.getElementById("quote").style.fontSize = "100px";
}

function createquote(qts){

    document.getElementById('character').innerHTML = qts
    document.getElementById("character").style.fontSize = "50px";


}
