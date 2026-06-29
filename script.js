const PLAYSTORE='https://play.google.com/store/apps/details?id=id.primecare.primeplus';
const APPSTORE=''; // isi jika sudah tersedia
const ua=navigator.userAgent;
const btn=document.getElementById('downloadBtn');
const info=document.getElementById('info');
if(/Android/i.test(ua)){location.href=PLAYSTORE;}
else if(/iPhone|iPad|iPod/i.test(ua)){
 if(APPSTORE){location.href=APPSTORE;}
 else{btn.style.display='none';info.textContent='Versi iPhone segera hadir di App Store.';}
}else{
 btn.href=PLAYSTORE;
}
