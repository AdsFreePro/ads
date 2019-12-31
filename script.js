MySite_id = 3;
var MySite_now = new Date();
var detik = MySite_now.getSeconds();
var MySite_ads = detik % MySite_id;
MySite_ads += 1;
if (MySite_ads == 1) {
  
  img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpfse2bi_kAYDQeILgsrCU3B62JFLclUAS2OyEdwWrBiJENMKv";
  url="https://go.arabclicks.com/aff_c?offer_id=41&aff_id=2140";
  
}
if (MySite_ads == 2) {
  img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpfse2bi_kAYDQeILgsrCU3B62JFLclUAS2OyEdwWrBiJENMKv";
  url="https://go.arabclicks.com/aff_c?offer_id=41&aff_id=2140";
  
}
if (MySite_ads == 3) {
  img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpfse2bi_kAYDQeILgsrCU3B62JFLclUAS2OyEdwWrBiJENMKv";
  url="https://go.arabclicks.com/aff_c?offer_id=41&aff_id=2140";
  
  
}
document.write('<a href=" ' + url + ' "><img src=" ' + img + ' " width="98%"/></a>');


// تفعيل اختصار روابط التلقائي
var autoshort = true; // false & true
//
var linkredirect = "https://adsfreepro.github.io/link",  // رابط صفحة اعادة التوجيه
redirect_protected = "youtube.com,facebook.com,google.com,twitter.com"; // الروابط المحمية من الاختصار
// تعديل الكتابات
var redirecttext = "جاري التوجيه";
var urltextinput ="ضع الرابط هنا";
var textgeturl = "الحصول على رابط التوجيه";
var waittext = "إنتظر قليلا";
var secondswait = 1; // عداد الثواني
var secondstext =  ["ثانيا", "ثواني"]; 
// تعديل على الالوان و الخط
var fillStyle = "#552a86",  // لون البنفسجي
strokeStyle = "#eee", // لون الخط الرمادي
fontFamily = "cairo", // اسم الخط
fontColor =  '#FFFFFF'; // للون الخط
!function(){var e=document.createElement("script")
e.type="text/javascript",e.async=!0,e.src="https://cdn.jsdelivr.net/gh/abdelalilebbihi/abdou_tech/gadget/redirect-page.js"
var t=document.getElementsByTagName("script")[0]
t.parentNode.insertBefore(e,t)}();
