MySite_id = 5;
var MySite_now = new Date();
var detik = MySite_now.getSeconds();
var MySite_ads = detik % MySite_id;
MySite_ads += 1;
if (MySite_ads == 1) {
  type="txt";
  txt="ضع اعلانك هنا مجانا";
  url="https://www.facebook.com/101174394637384";
  
}
if (MySite_ads == 2) {
	type="img";
  txt="ستندم اذا لم تقرا هذا ";
	url="http://onvictinitor.com/afu.php?zoneid=3046086";
}
if (MySite_ads == 3) {
	type="img";
  img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpfse2bi_kAYDQeILgsrCU3B62JFLclUAS2OyEdwWrBiJENMKv";
  url="https://go.arabclicks.com/aff_c?offer_id=41&aff_id=2140";
  
  
}
if (MySite_ads == 4) {
	type="txt";
  txt="مدونة اعرف الان";
  url="https://i-know-now-plus.blogspot.com/";
  
}
if (MySite_ads == 5) {
	type="txt";
  txt="كود يدمر اي واتساب";
  url="https://apk-play4net.blogspot.com/2020/01/hack-watsapp.html";
  
}
if (type=="img"){
document.write('<a href=" ' + url + '"target="_blank"><img src=" ' + img + ' " width="98%"/></a><a href="https://www.facebook.com/101174394637384" ><b>Ads Free Pro</b></a>');
}
if (type=="txt"){
document.write('<center><a href=" ' + url + '" target="_blank"> ' + txt + ' </a></center><a href="https://www.facebook.com/101174394637384" ><b>Ads Free Pro</b></a>');
}
