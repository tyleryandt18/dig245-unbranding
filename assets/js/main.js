/* javascript */
console.log("")

let myElements = document.getElementsByTagName("a");

/* test element retrieval */
console.log(myElements);
console.log(myElements[1].innerText);

let orig_texts = ["HOME", "SCORES", "PLAY", "OFFICIAL BRACKET"]
let texts = ["RECEIVING DEATH THREATS", "TIRED", "OVERWORKED", "STRESSED"];

for(let i = 0; i < 4; i++){
    myElements[i].addEventListener("mouseover", function(event){
        event.target.innerText = texts[i];
        event.target.style = "color: red";
        console.log(myElements[i].innerText);
    })
    myElements[i].addEventListener("mouseout", function(event){
        event.target.innerText = orig_texts[i];
        event.target.style.color = "black";
    })
}