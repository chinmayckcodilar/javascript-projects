const endDate="14 March 2023 12:17 PM";
document.getElementById("end-time").innerHTML=endDate;

function timeCounter(){
    const end= new Date(endDate);
    const now= new Date();
    var timeCal=end-now;
    if (timeCal<=0){
        return;
    }
    var toSeconds=timeCal/1000;
    document.getElementById("days").innerHTML=Math.floor(toSeconds/60/60/24)+" Days";
    document.getElementById("hour").innerHTML=Math.floor(toSeconds/60/60%24)+" Hrs.";
    document.getElementById("minute").innerHTML=Math.floor((toSeconds/60)%60)+"Mins.";
    document.getElementById("seconds").innerHTML=Math.floor(toSeconds%60)+"Secs.";

}

timeCounter();

setInterval(timeCounter,1000);