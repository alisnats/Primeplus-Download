const PLAYSTORE =
"https://play.google.com/store/apps/details?id=id.primecare.primeplus";

const APPSTORE = "";

const playBtn=document.getElementById("playBtn");
const iosBtn=document.getElementById("iosBtn");
const info=document.getElementById("info");

playBtn.href=PLAYSTORE;

if(APPSTORE===""){

iosBtn.href="#";

iosBtn.onclick=function(e){

e.preventDefault();

alert("Versi iOS akan segera hadir.");

};

}else{

iosBtn.href=APPSTORE;

}

