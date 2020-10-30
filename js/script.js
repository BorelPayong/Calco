console.log("hello world !")

function value(valeur){
    console.log(valeur);
    button.addEventListener("click", () => {console.log(this)});
}

var button = document.querySelector(".button");

