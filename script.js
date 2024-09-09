// script.js
const faces = ["imgs/chara/zoro.png","imgs/chara/akainu.png","imgs/chara/buggy.png","imgs/chara/law.png","imgs/chara/luffy.png","imgs/chara/roger.png","imgs/chara/sanji.png","imgs/chara/shanks.png","imgs/chara/teach.png","imgs/things/island.png","imgs/things/map.png","imgs/things/poneglyph.png","imgs/things/raftel.png","imgs/things/treasure.png","imgs/act/ally.png","imgs/act/die.png","imgs/act/fight.png","imgs/act/sink.png"]; // Add more symbols or words as needed

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function rollDice() {
  const storyCube = document.getElementById("storyCube");
  const face1 = document.getElementById("face1");
  const face2 = document.getElementById("face2");
  const face3 = document.getElementById("face3");
  
  let v1=(Math.floor(Math.random() * faces.length)),v2,v3;
  do{
	v2=(Math.floor(Math.random() * faces.length));
  }while(v2==v1);
  do{
	v3=(Math.floor(Math.random() * faces.length));
  }while(v3==v1||v3==v2);
  
  // Randomly select a symbol or word for each face
  const randomFace1= faces[v1];
  const randomFace2= faces[v2];
  const randomFace3= faces[v3];
  
  face1.style.backgroundImage = "url('imgs/dice-roll.gif')";
  face2.style.backgroundImage = "url('imgs/dice-roll.gif')";
  face3.style.backgroundImage = "url('imgs/dice-roll.gif')";

  // Update the cube with the selected faces
  sleep(500).then(() => {face1.style.backgroundImage = "url('"+randomFace1+"')";});
  sleep(1000).then(() => {face2.style.backgroundImage = "url('"+randomFace2+"')";});
  sleep(1500).then(() => {face3.style.backgroundImage = "url('"+randomFace3+"')";});
}
