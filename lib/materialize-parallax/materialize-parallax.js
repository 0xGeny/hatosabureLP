/**
 * @module       Materialize Parallax
 * @licesne      MIT License
 * @see          http://materializecss.com/parallax-demo.html
 */
!function(i){i.fn.parallax=function(){var a=i(window).width();return this.each(function(t){function n(t){var n;n=a<601?r.height()>0?r.height():r.children("img").height():r.height()>0?r.height():500;var e=r.children("img").first(),l=e.height()-n,o=r.offset().top+n,h=r.offset().top,d=i(window).scrollTop(),s=window.innerHeight,c=(d+s-h)/(n+s),g=Math.round(l*c);t&&e.css("display","block"),o>d&&h<d+s&&e.css("transform","translate3D(-50%,"+g+"px, 0)")}var r=i(this).prepend('<div class="material-parallax parallax"><img src="images/_blank.png" alt=""></div>').find(".material-parallax");r.children("img").first().attr("src",r.parents("[data-parallax-img]").data("parallax-img")),r.children("img").one("load",function(){n(!0)}).each(function(){this.complete&&i(this).trigger("load")}),i(window).scroll(function(){a=i(window).width(),n(!1)}),i(window).resize(function(){a=i(window).width(),n(!1)})})}}(jQuery);
