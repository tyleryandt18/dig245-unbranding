/* javascript */
console.log("My motivation for this project was to bring light to the stressful",
"nature of playing a collegiate sport. My sister was a D1 athlete at the University",
"of Washington, and transfered to a different school to better balance her time with",
"her sport and outside of it. Furthermore, this motivation comes from the newest",
"conference realignment of the PAC-12 to the Big 10 and other conferences.")

/* sources */
console.log("Sources: \n",
"https://www.cnn.com/2021/03/20/us/ohio-state-ej-liddell-basketball-death-threat-trnd/index.html\n",
"https://www.sportico.com/leagues/college-sports/2022/does-conference-realignment-travel-benefit-college-athletes-1234682570/\n",
"https://www.ncsasports.org/blog/study-time-demands-d1-studentathletes-excessive\n",
"https://www.highereddive.com/news/mental-health-student-athletes-jed-foundation/641146/#:~:text=In%20fall%202021%2C%2024%25%20of,leave%20or%20suffer%20an%20injury.\n")

console.log("NCAA March Madness logo: https://www.ncaa.com/march-madness-live/watch?cid=ncaa_mml_nav_men")

let myElements = document.getElementsByTagName("a");

/* test element retrieval */
console.log(myElements);
console.log(myElements[1].innerText);

let orig_texts = ["HOME", "SCORES", "PLAY", "OFFICIAL BRACKET"]
let texts = ["RECEIVING DEATH THREATS", "TIRED", "OVERWORKED", "STRESSED"];

for(let i = 0; i < myElements.length; i++){
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

let showLinks = document.getElementById("show-links");
console.log(showLinks);

showLinks.addEventListener("mouseover", function(){
    for(let i = 0; i < myElements.length; i++){
        myElements[i].innerText = texts[i];
        myElements[i].style = "color: red";
    }
})

showLinks.addEventListener("mouseout", function(){
    for(let i = 0; i < myElements.length; i++){
        myElements[i].innerText = orig_texts[i];
        myElements[i].style = "color: black";
    }
})