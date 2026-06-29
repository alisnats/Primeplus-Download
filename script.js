const PLAYSTORE =
"https://play.google.com/store/apps/details?id=id.primecare.primeplus";

const APPSTORE =
"";

const playBtn=document.getElementById("playBtn");
const iosBtn=document.getElementById("iosBtn");

const ua=navigator.userAgent;

if(/Android/i.test(ua)){

    window.location.href=PLAYSTORE;

}

else if(/iPhone|iPad|iPod/i.test(ua)){

    if(APPSTORE!=""){

        window.location.href=APPSTORE;

    }else{

        iosBtn.onclick=function(e){

            e.preventDefault();

            alert("PrimePlus untuk iPhone akan segera tersedia di App Store.");

        }

    }

}

else{

    playBtn.href=PLAYSTORE;

    if(APPSTORE!=""){

        iosBtn.href=APPSTORE;

    }else{

        iosBtn.onclick=function(e){

            e.preventDefault();

            alert("PrimePlus untuk iPhone akan segera tersedia di App Store.");

        }

    }

}
