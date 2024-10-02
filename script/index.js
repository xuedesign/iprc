//背景影片
loadjs('https://cdn.jsdelivr.net/npm/vide@0.5.1/dist/jquery.vide.min.js');

//圖片延遲載入
loadjs('https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js', function() {
    const observer = lozad();
    observer.observe();
});

//頂端浮動選單
//$(function(){$(window).load(function(){$(window).bind("scroll resize",function(){var o=$(this),t=o.scrollTop();180>t&&$("#top-bar").stop().animate({top:"-65px"}),t>180&&$("#top-bar").stop().animate({top:"0px"})}).scroll()})});

//icon文字
loadjs('https://kit.fontawesome.com/847bf76aff.js');

//wow載入動畫
loadjs('script/lib/wow.min.js', function() {
  new WOW().init();
});

//返回頂端
loadjs(['script/lib/jquery.ui.totop.min.js', 'https://cdn.jsdelivr.net/npm/jquery.easing@1.4.1/jquery.easing.min.js'], function() {
    $(document).ready(function() {
	$().UItoTop({ easingType: 'easeOutQuart' });
    });
});

//行動版選單
loadjs(['https://cdn.jsdelivr.net/npm/mmenu-js@8.1.1/dist/mmenu.min.js', 'https://cdn.jsdelivr.net/npm/mmenu-js@8.1.1/dist/mmenu.min.css'], function() {
    new Mmenu( document.querySelector( '#mobile-nav' ) );
        
    document.addEventListener(
        "DOMContentLoaded", () => {
        new Mmenu( "#mobile-nav", {
           "extensions": [
              "pagedim-black"
           ]
        });
        }
    );
});

// 另開視窗
function externalLinks() { 
 if (!document.getElementsByTagName) return; 
 var anchors = document.getElementsByTagName("a"); 
 for (var i=0; i<anchors.length; i++) { 
   var anchor = anchors[i]; 
   if (anchor.getAttribute("href") && 
       anchor.getAttribute("rel") == "external") 
     anchor.target = "_blank"; 
 } 
} 
window.onload = externalLinks;