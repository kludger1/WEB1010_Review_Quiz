var h2 = document.querySelector("h2")
var whateva = document.querySelector(".whateva")
var hash = document.querySelector("#hash")
var input = document.querySelector("input[type=text]")
var clickme = document.querySelector("button")
function doStuff(input, src){
    hash.innerHTML += `
    <img src=${src} alt="Alternative text">
    `
    whateva.textContent = input
}
function loopIt(num){
    for (var i=1; i<num; i++){
        var inp = input.value
        doStuff(inp, `https://www.gettyimages.ae/gi-resources/images/Homepage/Hero/SEB-MET/GettyImages-857637824_shoes.jpg alt="Alternative text"`)
    }
}




clickme.addEventListener('click', function(){
// var inp = input.value
// hash.innerHTML +=`
// <img 
// src="https://www.gettyimages.ae/gi-resources/images/Homepage/Hero/SEB-MET/GettyImages-857637824_shoes.jpg" alt="Alternative text">
// `
loopIt(4)
})

