

function colourGen(){
    var randNum=Math.floor(Math.random()*16777215);
    var hexNum='#'+randNum.toString(16);
    document.getElementById('curr-colour').innerHTML=hexNum;
    document.body.style.backgroundColor=hexNum;
    document.getElementById("curr-colour").style.color=hexNum;
}

document.getElementById("btn").addEventListener("click" ,colourGen);


colourGen();