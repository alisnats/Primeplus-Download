const PLAYSTORE =
"https://play.google.com/store/apps/details?id=id.primecare.primeplus";

const APPSTORE = "";


const playBtn = document.getElementById("playBtn");
const iosBtn = document.getElementById("iosBtn");

const ua = navigator.userAgent;


// Android langsung ke Play Store
if (/Android/i.test(ua)) {

    window.location.href = PLAYSTORE;

}


// iPhone/iPad
else if (/iPhone|iPad|iPod/i.test(ua)) {

    if (APPSTORE !== "") {

        window.location.href = APPSTORE;

    } else {

        iosBtn.onclick = function(e) {

            e.preventDefault();

            alert("Primeplus untuk IOS akan segera tersedia di App Store.");

        };

    }

}


// Desktop / laptop
else {

    playBtn.href = PLAYSTORE;

    if (APPSTORE !== "") {

        iosBtn.href = APPSTORE;

    } else {

        iosBtn.onclick = function(e) {

            e.preventDefault();

            alert("Primeplus untuk IOS akan segera tersedia di App Store.");

        };

    }

}
