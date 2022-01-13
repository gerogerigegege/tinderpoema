var poem = ["Siempre vocalicé mal mi nombre", "tinder", "bumble", "meetic", "lovoo", "happn", "grindr", "𝕣𝕖𝕓𝕒ñ𝕠𝕤 𝕥𝕖𝕟𝕕𝕖𝕣𝕤𝕖 𝕖𝕟 𝕞𝕚𝕤 𝕠𝕛𝕠𝕤", "match.com", "okcupid", "badoo",  "confundí el dolor y la felicidad con los festivales","tindog", "shakn", "adoptauntio", "facebookdating", "ourtime", "acepté que los seres son invisibles", "fairytrail", "heybaby", "chispa", "filteroff", "lantern", "curtn", "kippo", "her","reducido a la coherencia", "pure", "nuit", "xo","ship", "tastebuds", "coffee meets", "hinge", "match", "plenty of fish", "jaumo", "pof", "BLOOM", "tagged", "ablo", "taimi", "meetme", "Vdating", "liruch", "sapio", "boompi", "mint", "edarling", "eharmony", "zoosk", "hot or not", "shakn", "down", "feeld", "lovely", ]

var index = 0


function setup() {
  createCanvas(1660,1600);
   background(0);
  
}

function draw() {
 
  
  
  
}

function mousePressed(){
  textSize(50);
  textAlign(CENTER);
  fill(random(0,255),0,(0,255));
  stroke(random(0,255), (0,255), 0)
  text(poem[index], mouseX,mouseY)
  
 index = index + 1

if (index == poem.length) {
 index = 0
}
}
