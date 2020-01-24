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
type="txt";
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


document.write('<div id="AdsFreePro" >');
document.write('<div id="brand"><a href="https://fb.com/101174394637384" style="display: table-row;text-decoration: none;color: black;" id="BrandLink" target="_blank" title="Advertise here with egmads "><span>Ads Free Pro</span><img src="https://lh3.googleusercontent.com/-Uz5X_T2ub1k/XisajxdI5lI/AAAAAAAAAOE/cwU5I6Lsjlg7cTC81-ikzXCj1-Ncil9kwCLcBGAsYHQ/h120/FB_IMG_15798830971179388.jpg" id="BrandImage"style="width:16px; height:16px;"></a></div>');
if (type=="img"){
document.write('<a href=" ' + url + '"target="_blank"><img src=" ' + img + ' " width="98%"/></a>');
}
if (type=="txt"){
document.write('<center><a href=" ' + url + '" target="_blank"> ' + txt + ' </a></center>');
}
document.write('</div>');

//CSS Ready
function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
loadCSS("https://adsfreepro.github.io/ads/style.css");
