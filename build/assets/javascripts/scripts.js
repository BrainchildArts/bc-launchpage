/*!
 * fullPage 2.7.6
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
(function(d,h){"function"===typeof define&&define.amd?define(["jquery"],function(m){return h(m,d,d.document,d.Math)}):"undefined"!==typeof exports?module.exports=h(require("jquery"),d,d.document,d.Math):h(jQuery,d,d.document,d.Math)})("undefined"!==typeof window?window:this,function(d,h,m,n,E){var p=d(h),u=d(m),ma;d.fn.fullpage=function(c){function v(){c.css3&&(c.css3=Na());c.anchors.length||(c.anchors=d(c.sectionSelector+"[data-anchor]").map(function(){return d(this).data("anchor").toString()}).get());
Oa();e.setAllowScrolling(!0);r=p.height();e.setAutoScrolling(c.autoScrolling,"internal");var a=d(".fp-section.active").find(".fp-slide.active");a.length&&(0!==d(".fp-section.active").index(".fp-section")||0===d(".fp-section.active").index(".fp-section")&&0!==a.index())&&U(a);na();oa();p.on("load",function(){var a=h.location.hash.replace("#","").split("/"),d=a[0],a=a[1];d&&(c.animateAnchor?V(d,a):e.silentMoveTo(d,a))})}function Oa(){k.css({height:"100%",position:"relative"});k.addClass("fullpage-wrapper");
d("html").addClass("fp-enabled");k.removeClass("fp-destroyed");Pa();d(".fp-section").each(function(a){var b=d(this),g=b.find(".fp-slide"),f=g.length;a||0!==d(".fp-section.active").length||b.addClass("active");b.css("height",r+"px");c.paddingTop&&b.css("padding-top",c.paddingTop);c.paddingBottom&&b.css("padding-bottom",c.paddingBottom);"undefined"!==typeof c.sectionsColor[a]&&b.css("background-color",c.sectionsColor[a]);"undefined"!==typeof c.anchors[a]&&b.attr("data-anchor",c.anchors[a]);"undefined"!==
typeof c.anchors[a]&&b.hasClass("active")&&W(c.anchors[a],a);c.menu&&c.css3&&d(c.menu).closest(".fullpage-wrapper").length&&d(c.menu).appendTo(q);0<f?Qa(b,g,f):c.verticalCentered&&pa(b)});c.fixedElements&&c.css3&&d(c.fixedElements).appendTo(q);c.navigation&&Ra();c.scrollOverflow?("complete"===m.readyState&&qa(),p.on("load",qa)):ra()}function Qa(a,b,g){var f=100*g,e=100/g;b.wrapAll('<div class="fp-slidesContainer" />');b.parent().wrap('<div class="fp-slides" />');a.find(".fp-slidesContainer").css("width",
f+"%");1<g&&(c.controlArrows&&Sa(a),c.slidesNavigation&&Ta(a,g));b.each(function(a){d(this).css("width",e+"%");c.verticalCentered&&pa(d(this))});a=a.find(".fp-slide.active");a.length&&(0!==d(".fp-section.active").index(".fp-section")||0===d(".fp-section.active").index(".fp-section")&&0!==a.index())?U(a):b.eq(0).addClass("active")}function Pa(){d(c.sectionSelector).each(function(){d(this).addClass("fp-section")});d(c.slideSelector).each(function(){d(this).addClass("fp-slide")})}function Sa(a){a.find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>');
"#fff"!=c.controlArrowColor&&(a.find(".fp-controlArrow.fp-next").css("border-color","transparent transparent transparent "+c.controlArrowColor),a.find(".fp-controlArrow.fp-prev").css("border-color","transparent "+c.controlArrowColor+" transparent transparent"));c.loopHorizontal||a.find(".fp-controlArrow.fp-prev").hide()}function Ra(){q.append('<div id="fp-nav"><ul></ul></div>');var a=d("#fp-nav");a.addClass(function(){return c.showActiveTooltip?"fp-show-active "+c.navigationPosition:c.navigationPosition});
for(var b=0;b<d(".fp-section").length;b++){var g="";c.anchors.length&&(g=c.anchors[b]);var g='<li><a href="#'+g+'"><span></span></a>',f=c.navigationTooltips[b];"undefined"!==typeof f&&""!==f&&(g+='<div class="fp-tooltip '+c.navigationPosition+'">'+f+"</div>");g+="</li>";a.find("ul").append(g)}d("#fp-nav").css("margin-top","-"+d("#fp-nav").height()/2+"px");d("#fp-nav").find("li").eq(d(".fp-section.active").index(".fp-section")).find("a").addClass("active")}function qa(){d(".fp-section").each(function(){var a=
d(this).find(".fp-slide");a.length?a.each(function(){J(d(this))}):J(d(this))});ra()}function ra(){var a=d(".fp-section.active");c.scrollOverflowHandler.afterRender&&c.scrollOverflowHandler.afterRender(a);K(a);X(a);d.isFunction(c.afterLoad)&&c.afterLoad.call(a,a.data("anchor"),a.index(".fp-section")+1);d.isFunction(c.afterRender)&&c.afterRender.call(k)}function sa(){var a;if(!c.autoScrolling||c.scrollBar){for(var b=p.scrollTop(),g=0,f=n.abs(b-m.querySelectorAll(".fp-section")[0].offsetTop),e=m.querySelectorAll(".fp-section"),
h=0;h<e.length;++h){var k=n.abs(b-e[h].offsetTop);k<f&&(g=h,f=k)}a=d(e).eq(g);if(!a.hasClass("active")&&!a.hasClass("fp-auto-height")){Y=!0;b=d(".fp-section.active");g=b.index(".fp-section")+1;f=Z(a);e=a.data("anchor");h=a.index(".fp-section")+1;k=a.find(".fp-slide.active");if(k.length)var l=k.data("anchor"),v=k.index();w&&(a.addClass("active").siblings().removeClass("active"),d.isFunction(c.onLeave)&&c.onLeave.call(b,g,h,f),d.isFunction(c.afterLoad)&&c.afterLoad.call(a,e,h),K(a),W(e,h-1),c.anchors.length&&
(z=e,aa(v,l,e,h)));clearTimeout(ba);ba=setTimeout(function(){Y=!1},100)}c.fitToSection&&(clearTimeout(ca),ca=setTimeout(function(){w&&c.fitToSection&&(d(".fp-section.active").is(a)&&requestAnimFrame(function(){t=!0}),A(a),requestAnimFrame(function(){t=!1}))},c.fitToSectionDelay))}}function L(a,b){if(l.m[a]){var d,f;"down"==a?(d="bottom",f=e.moveSectionDown):(d="top",f=e.moveSectionUp);if(0<b.length)if(c.scrollOverflowHandler.isScrolled(d,b))f();else return!0;else f()}}function Ua(a){var b=a.originalEvent;
if(!ta(a.target)&&da(b)){c.autoScrolling&&a.preventDefault();a=d(".fp-section.active");var g=c.scrollOverflowHandler.scrollable(a);w&&!x&&(b=ua(b),F=b.y,M=b.x,a.find(".fp-slides").length&&n.abs(N-M)>n.abs(G-F)?n.abs(N-M)>h.outerWidth/100*c.touchSensitivity&&(N>M?l.m.right&&e.moveSlideRight():l.m.left&&e.moveSlideLeft()):c.autoScrolling&&n.abs(G-F)>p.height()/100*c.touchSensitivity&&(G>F?L("down",g):F>G&&L("up",g)))}}function ta(a,b){b=b||0;var g=d(a).parent();return b<c.normalScrollElementTouchThreshold&&
g.is(c.normalScrollElements)?!0:b==c.normalScrollElementTouchThreshold?!1:ta(g,++b)}function da(a){return"undefined"===typeof a.pointerType||"mouse"!=a.pointerType}function Va(a){a=a.originalEvent;c.fitToSection&&y.stop();da(a)&&(a=ua(a),G=a.y,N=a.x)}function va(a,b){for(var c=0,d=a.slice(n.max(a.length-b,1)),e=0;e<d.length;e++)c+=d[e];return n.ceil(c/b)}function B(a){var b=(new Date).getTime();if(c.autoScrolling&&!O){a=a||h.event;var g=a.wheelDelta||-a.deltaY||-a.detail,f=n.max(-1,n.min(1,g)),e=
"undefined"!==typeof a.wheelDeltaX||"undefined"!==typeof a.deltaX,e=n.abs(a.wheelDeltaX)<n.abs(a.wheelDelta)||n.abs(a.deltaX)<n.abs(a.deltaY)||!e;149<C.length&&C.shift();C.push(n.abs(g));c.scrollBar&&(a.preventDefault?a.preventDefault():a.returnValue=!1);a=d(".fp-section.active");a=c.scrollOverflowHandler.scrollable(a);g=b-wa;wa=b;200<g&&(C=[]);w&&(b=va(C,10),g=va(C,70),b>=g&&e&&(0>f?L("down",a):L("up",a)));return!1}c.fitToSection&&y.stop()}function xa(a,b){var g=("undefined"===typeof b?d(".fp-section.active"):
b).find(".fp-slides"),f=g.find(".fp-slide").length;if(!(!g.length||x||2>f)){var f=g.find(".fp-slide.active"),e=null,e="prev"===a?f.prev(".fp-slide"):f.next(".fp-slide");if(!e.length){if(!c.loopHorizontal)return;e="prev"===a?f.siblings(":last"):f.siblings(":first")}x=!0;H(g,e)}}function ya(){d(".fp-slide.active").each(function(){U(d(this),"internal")})}function A(a,b,g){requestAnimFrame(function(){var f=a.position();if("undefined"!==typeof f){var e=a.hasClass("fp-auto-height")&&f.top?f.top-r+a.height():
f.top,f={element:a,callback:b,isMovementUp:g,dest:f,dtop:e,yMovement:Z(a),anchorLink:a.data("anchor"),sectionIndex:a.index(".fp-section"),activeSlide:a.find(".fp-slide.active"),activeSection:d(".fp-section.active"),leavingSection:d(".fp-section.active").index(".fp-section")+1,localIsResizing:t};if(!(f.activeSection.is(a)&&!t||c.scrollBar&&p.scrollTop()===f.dtop&&!a.hasClass("fp-auto-height"))){if(f.activeSlide.length)var h=f.activeSlide.data("anchor"),k=f.activeSlide.index();c.autoScrolling&&c.continuousVertical&&
"undefined"!==typeof f.isMovementUp&&(!f.isMovementUp&&"up"==f.yMovement||f.isMovementUp&&"down"==f.yMovement)&&(f.isMovementUp?d(".fp-section.active").before(f.activeSection.nextAll(".fp-section")):d(".fp-section.active").after(f.activeSection.prevAll(".fp-section").get().reverse()),I(d(".fp-section.active").position().top),ya(),f.wrapAroundElements=f.activeSection,f.dest=f.element.position(),f.dtop=f.dest.top,f.yMovement=Z(f.element));if(!d.isFunction(c.onLeave)||f.localIsResizing||!1!==c.onLeave.call(f.activeSection,
f.leavingSection,f.sectionIndex+1,f.yMovement))za(f.activeSection),a.addClass("active").siblings().removeClass("active"),K(a),w=!1,aa(k,h,f.anchorLink,f.sectionIndex),Wa(f),z=f.anchorLink,W(f.anchorLink,f.sectionIndex)}}})}function Wa(a){if(c.css3&&c.autoScrolling&&!c.scrollBar)Aa("translate3d(0px, -"+a.dtop+"px, 0px)",!0),c.scrollingSpeed?ea=setTimeout(function(){fa(a)},c.scrollingSpeed):fa(a);else{var b=Xa(a);d(b.element).animate(b.options,c.scrollingSpeed,c.easing).promise().done(function(){fa(a)})}}
function Xa(a){var b={};c.autoScrolling&&!c.scrollBar?(b.options={top:-a.dtop},b.element=".fullpage-wrapper"):(b.options={scrollTop:a.dtop},b.element="html, body");return b}function fa(a){a.wrapAroundElements&&a.wrapAroundElements.length&&(a.isMovementUp?d(".fp-section:first").before(a.wrapAroundElements):d(".fp-section:last").after(a.wrapAroundElements),I(d(".fp-section.active").position().top),ya());a.element.find(".fp-scrollable").mouseover();d.isFunction(c.afterLoad)&&!a.localIsResizing&&c.afterLoad.call(a.element,
a.anchorLink,a.sectionIndex+1);X(a.element);w=!0;d.isFunction(a.callback)&&a.callback.call(this)}function K(a){a=ga(a);a.find("img[data-src], source[data-src], audio[data-src]").each(function(){d(this).attr("src",d(this).data("src"));d(this).removeAttr("data-src");d(this).is("source")&&d(this).closest("video").get(0).load()})}function X(a){a=ga(a);a.find("video, audio").each(function(){var a=d(this).get(0);a.hasAttribute("autoplay")&&"function"===typeof a.play&&a.play()})}function za(a){a=ga(a);a.find("video, audio").each(function(){var a=
d(this).get(0);a.hasAttribute("data-ignore")||"function"!==typeof a.pause||a.pause()})}function ga(a){var b=a.find(".fp-slide.active");b.length&&(a=d(b));return a}function Ba(){if(!Y&&!c.lockAnchors){var a=h.location.hash.replace("#","").split("/"),b=a[0],a=a[1],d="undefined"===typeof z,f="undefined"===typeof z&&"undefined"===typeof a&&!x;b.length&&(b&&b!==z&&!d||f||!x&&ha!=a)&&V(b,a)}}function Ya(a){w&&(a.pageY<P?e.moveSectionUp():a.pageY>P&&e.moveSectionDown());P=a.pageY}function H(a,b){var g=b.position(),
f=b.index(),e=a.closest(".fp-section"),h=e.index(".fp-section"),k=e.data("anchor"),l=e.find(".fp-slidesNav"),m=ia(b),v=e.find(".fp-slide.active"),p=t;if(c.onSlideLeave){var q=v.index(),r;r=q==f?"none":q>f?"left":"right";if(!p&&"none"!==r&&d.isFunction(c.onSlideLeave)&&!1===c.onSlideLeave.call(v,k,h+1,q,r,f)){x=!1;return}}za(v);b.addClass("active").siblings().removeClass("active");p||K(b);!c.loopHorizontal&&c.controlArrows&&(e.find(".fp-controlArrow.fp-prev").toggle(0!==f),e.find(".fp-controlArrow.fp-next").toggle(!b.is(":last-child")));
e.hasClass("active")&&aa(f,m,k,h);var u=function(){p||d.isFunction(c.afterSlideLoad)&&c.afterSlideLoad.call(b,k,h+1,m,f);X(b);x=!1};c.css3?(g="translate3d(-"+n.round(g.left)+"px, 0px, 0px)",Ca(a.find(".fp-slidesContainer"),0<c.scrollingSpeed).css(Da(g)),ja=setTimeout(function(){u()},c.scrollingSpeed,c.easing)):a.animate({scrollLeft:n.round(g.left)},c.scrollingSpeed,c.easing,function(){u()});l.find(".active").removeClass("active");l.find("li").eq(f).find("a").addClass("active")}function Ea(){na();
if(Q){var a=d(m.activeElement);a.is("textarea")||a.is("input")||a.is("select")||(a=p.height(),n.abs(a-ka)>20*n.max(ka,a)/100&&(e.reBuild(!0),ka=a))}else clearTimeout(la),la=setTimeout(function(){e.reBuild(!0)},350)}function na(){var a=c.responsive||c.responsiveWidth,b=c.responsiveHeight,d=a&&h.outerWidth<a,f=b&&p.height()<b;a&&b?e.setResponsive(d||f):a?e.setResponsive(d):b&&e.setResponsive(f)}function Ca(a){var b="all "+c.scrollingSpeed+"ms "+c.easingcss3;a.removeClass("fp-notransition");return a.css({"-webkit-transition":b,
transition:b})}function Za(a,b){if(825>a||900>b){var c=n.min(100*a/825,100*b/900).toFixed(2);q.css("font-size",c+"%")}else q.css("font-size","100%")}function W(a,b){c.menu&&(d(c.menu).find(".active").removeClass("active"),d(c.menu).find('[data-menuanchor="'+a+'"]').addClass("active"));c.navigation&&(d("#fp-nav").find(".active").removeClass("active"),a?d("#fp-nav").find('a[href="#'+a+'"]').addClass("active"):d("#fp-nav").find("li").eq(b).find("a").addClass("active"))}function Z(a){var b=d(".fp-section.active").index(".fp-section");
a=a.index(".fp-section");return b==a?"none":b>a?"up":"down"}function J(a){a.css("overflow","hidden");var b=c.scrollOverflowHandler,d=b.wrapContent(),f=a.closest(".fp-section"),e=b.scrollable(a),h;e.length?h=b.scrollHeight(a):(h=a.get(0).scrollHeight,c.verticalCentered&&(h=a.find(".fp-tableCell").get(0).scrollHeight));f=r-parseInt(f.css("padding-bottom"))-parseInt(f.css("padding-top"));h>f?e.length?b.update(a,f):(c.verticalCentered?a.find(".fp-tableCell").wrapInner(d):a.wrapInner(d),b.create(a,f)):
b.remove(a);a.css("overflow","")}function pa(a){a.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:'+Fa(a)+'px;" />')}function Fa(a){var b=r;if(c.paddingTop||c.paddingBottom)b=a,b.hasClass("fp-section")||(b=a.closest(".fp-section")),a=parseInt(b.css("padding-top"))+parseInt(b.css("padding-bottom")),b=r-a;return b}function Aa(a,b){b?Ca(k):k.addClass("fp-notransition");k.css(Da(a));setTimeout(function(){k.removeClass("fp-notransition")},10)}function Ga(a){var b=k.find('.fp-section[data-anchor="'+
a+'"]');b.length||(b=d(".fp-section").eq(a-1));return b}function V(a,b){var c=Ga(a);"undefined"===typeof b&&(b=0);a===z||c.hasClass("active")?Ha(c,b):A(c,function(){Ha(c,b)})}function Ha(a,b){if("undefined"!==typeof b){var c=a.find(".fp-slides"),d;d=a.find(".fp-slides");var e=d.find('.fp-slide[data-anchor="'+b+'"]');e.length||(e=d.find(".fp-slide").eq(b));d=e;d.length&&H(c,d)}}function Ta(a,b){a.append('<div class="fp-slidesNav"><ul></ul></div>');var d=a.find(".fp-slidesNav");d.addClass(c.slidesNavPosition);
for(var f=0;f<b;f++)d.find("ul").append('<li><a href="#"><span></span></a></li>');d.css("margin-left","-"+d.width()/2+"px");d.find("li").first().find("a").addClass("active")}function aa(a,b,d,f){f="";c.anchors.length&&!c.lockAnchors&&(a?("undefined"!==typeof d&&(f=d),"undefined"===typeof b&&(b=a),ha=b,Ia(f+"/"+b)):("undefined"!==typeof a&&(ha=b),Ia(d)));oa()}function Ia(a){if(c.recordHistory)location.hash=a;else if(Q||R)history.replaceState(E,E,"#"+a);else{var b=h.location.href.split("#")[0];h.location.replace(b+
"#"+a)}}function ia(a){var b=a.data("anchor");a=a.index();"undefined"===typeof b&&(b=a);return b}function oa(){var a=d(".fp-section.active"),b=a.find(".fp-slide.active"),c=ia(a),f=ia(b);a.index(".fp-section");a=String(c);b.length&&(a=a+"-"+f);a=a.replace("/","-").replace("#","");q[0].className=q[0].className.replace(RegExp("\\b\\s?fp-viewing-[^\\s]+\\b","g"),"");q.addClass("fp-viewing-"+a)}function Na(){var a=m.createElement("p"),b,c={webkitTransform:"-webkit-transform",OTransform:"-o-transform",
msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};m.body.insertBefore(a,null);for(var d in c)a.style[d]!==E&&(a.style[d]="translate3d(1px,1px,1px)",b=h.getComputedStyle(a).getPropertyValue(c[d]));m.body.removeChild(a);return b!==E&&0<b.length&&"none"!==b}function $a(){if(Q||R){var a=Ja();d(".fullpage-wrapper").off("touchstart "+a.down).on("touchstart "+a.down,Va);d(".fullpage-wrapper").off("touchmove "+a.move).on("touchmove "+a.move,Ua)}}function ab(){if(Q||R){var a=
Ja();d(".fullpage-wrapper").off("touchstart "+a.down);d(".fullpage-wrapper").off("touchmove "+a.move)}}function Ja(){return h.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function ua(a){var b=[];b.y="undefined"!==typeof a.pageY&&(a.pageY||a.pageX)?a.pageY:a.touches[0].pageY;b.x="undefined"!==typeof a.pageX&&(a.pageY||a.pageX)?a.pageX:a.touches[0].pageX;R&&da(a)&&c.scrollBar&&(b.y=a.touches[0].pageY,b.x=a.touches[0].pageX);return b}function U(a,b){e.setScrollingSpeed(0,
"internal");"undefined"!==typeof b&&(t=!0);H(a.closest(".fp-slides"),a);"undefined"!==typeof b&&(t=!1);e.setScrollingSpeed(D.scrollingSpeed,"internal")}function I(a){c.scrollBar?k.scrollTop(a):c.css3?Aa("translate3d(0px, -"+a+"px, 0px)",!1):k.css("top",-a)}function Da(a){return{"-webkit-transform":a,"-moz-transform":a,"-ms-transform":a,transform:a}}function Ka(a,b,c){switch(b){case "up":l[c].up=a;break;case "down":l[c].down=a;break;case "left":l[c].left=a;break;case "right":l[c].right=a;break;case "all":"m"==
c?e.setAllowScrolling(a):e.setKeyboardScrolling(a)}}function bb(){I(0);d("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove();d(".fp-section").css({height:"","background-color":"",padding:""});d(".fp-slide").css({width:""});k.css({height:"",position:"","-ms-touch-action":"","touch-action":""});y.css({overflow:"",height:""});d("html").removeClass("fp-enabled");d.each(q.get(0).className.split(/\s+/),function(a,b){0===b.indexOf("fp-viewing")&&q.removeClass(b)});d(".fp-section, .fp-slide").each(function(){c.scrollOverflowHandler.remove(d(this));
d(this).removeClass("fp-table active")});k.addClass("fp-notransition");k.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function(){d(this).replaceWith(this.childNodes)});y.scrollTop(0);d.each(["fp-section","fp-slide","fp-slidesContainer"],function(a,b){d("."+b).removeClass(b)})}function S(a,b,d){c[a]=b;"internal"!==d&&(D[a]=b)}function T(a,b){console&&console[a]&&console[a]("fullPage: "+b)}var y=d("html, body"),q=d("body"),e=d.fn.fullpage;c=d.extend({menu:!1,anchors:[],lockAnchors:!1,
navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1E3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowHandler:ma,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,
controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,resize:!1,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,sectionSelector:".section",slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},c);(function(){c.continuousVertical&&(c.loopTop||c.loopBottom)&&(c.continuousVertical=!1,T("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));
c.scrollBar&&c.scrollOverflow&&T("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox");c.continuousVertical&&c.scrollBar&&(c.continuousVertical=!1,T("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));d.each(c.anchors,function(a,b){(d("#"+b).length||d('[name="'+b+'"]').length)&&T("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")})})();
d.extend(d.easing,{easeInOutCubic:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c}});d.extend(d.easing,{easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c}});e.setAutoScrolling=function(a,b){S("autoScrolling",a,b);var g=d(".fp-section.active");c.autoScrolling&&!c.scrollBar?(y.css({overflow:"hidden",height:"100%"}),e.setRecordHistory(D.recordHistory,"internal"),k.css({"-ms-touch-action":"none","touch-action":"none"}),g.length&&I(g.position().top)):(y.css({overflow:"visible",
height:"initial"}),e.setRecordHistory(!1,"internal"),k.css({"-ms-touch-action":"","touch-action":""}),I(0),g.length&&y.scrollTop(g.position().top))};e.setRecordHistory=function(a,b){S("recordHistory",a,b)};e.setScrollingSpeed=function(a,b){S("scrollingSpeed",a,b)};e.setFitToSection=function(a,b){S("fitToSection",a,b)};e.setLockAnchors=function(a){c.lockAnchors=a};e.setMouseWheelScrolling=function(a){if(a){a="";var b;h.addEventListener?b="addEventListener":(b="attachEvent",a="on");var c="onwheel"in
m.createElement("div")?"wheel":m.onmousewheel!==E?"mousewheel":"DOMMouseScroll";if("DOMMouseScroll"==c)m[b](a+"MozMousePixelScroll",B,!1);else m[b](a+c,B,!1)}else m.addEventListener?(m.removeEventListener("mousewheel",B,!1),m.removeEventListener("wheel",B,!1),m.removeEventListener("MozMousePixelScroll",B,!1)):m.detachEvent("onmousewheel",B)};e.setAllowScrolling=function(a,b){"undefined"!==typeof b?(b=b.replace(/ /g,"").split(","),d.each(b,function(b,c){Ka(a,c,"m")})):a?(e.setMouseWheelScrolling(!0),
$a()):(e.setMouseWheelScrolling(!1),ab())};e.setKeyboardScrolling=function(a,b){"undefined"!==typeof b?(b=b.replace(/ /g,"").split(","),d.each(b,function(b,c){Ka(a,c,"k")})):c.keyboardScrolling=a};e.moveSectionUp=function(){var a=d(".fp-section.active").prev(".fp-section");a.length||!c.loopTop&&!c.continuousVertical||(a=d(".fp-section").last());a.length&&A(a,null,!0)};e.moveSectionDown=function(){var a=d(".fp-section.active").next(".fp-section");a.length||!c.loopBottom&&!c.continuousVertical||(a=
d(".fp-section").first());a.length&&A(a,null,!1)};e.silentMoveTo=function(a,b){requestAnimFrame(function(){e.setScrollingSpeed(0,"internal")});e.moveTo(a,b);requestAnimFrame(function(){e.setScrollingSpeed(D.scrollingSpeed,"internal")})};e.moveTo=function(a,b){var c=Ga(a);"undefined"!==typeof b?V(a,b):0<c.length&&A(c)};e.moveSlideRight=function(a){xa("next",a)};e.moveSlideLeft=function(a){xa("prev",a)};e.reBuild=function(a){if(!k.hasClass("fp-destroyed")){t=!0;requestAnimFrame(function(){t=!0});var b=
h.outerWidth;r=p.height();c.resize&&Za(r,b);d(".fp-section").each(function(){var a=d(this).find(".fp-slides"),b=d(this).find(".fp-slide");c.verticalCentered&&d(this).find(".fp-tableCell").css("height",Fa(d(this))+"px");d(this).css("height",r+"px");c.scrollOverflow&&(b.length?b.each(function(){J(d(this))}):J(d(this)));1<b.length&&H(a,a.find(".fp-slide.active"))});(b=d(".fp-section.active").index(".fp-section"))&&e.silentMoveTo(b+1);t=!1;requestAnimFrame(function(){t=!1});d.isFunction(c.afterResize)&&
a&&c.afterResize.call(k);d.isFunction(c.afterReBuild)&&!a&&c.afterReBuild.call(k)}};e.setResponsive=function(a){var b=q.hasClass("fp-responsive");a?b||(e.setAutoScrolling(!1,"internal"),e.setFitToSection(!1,"internal"),d("#fp-nav").hide(),q.addClass("fp-responsive")):b&&(e.setAutoScrolling(D.autoScrolling,"internal"),e.setFitToSection(D.autoScrolling,"internal"),d("#fp-nav").show(),q.removeClass("fp-responsive"))};var x=!1,Q=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
R="ontouchstart"in h||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,k=d(this),r=p.height(),t=!1,La=!0,z,ha,w=!0,C=[],O,l={m:{up:!0,down:!0,left:!0,right:!0}};l.k=d.extend(!0,{},l.m);var D=d.extend(!0,{},c),la,ea,ja,ba,ca,Ma;d(this).length&&v();var Y=!1;p.on("scroll",sa);var G=0,N=0,F=0,M=0,wa=(new Date).getTime();h.requestAnimFrame=function(){return h.requestAnimationFrame||h.webkitRequestAnimationFrame||h.mozRequestAnimationFrame||h.oRequestAnimationFrame||h.msRequestAnimationFrame||function(a){a()}}();
p.on("hashchange",Ba);u.keydown(function(a){clearTimeout(Ma);var b=d(":focus");b.is("textarea")||b.is("input")||b.is("select")||!c.keyboardScrolling||!c.autoScrolling||(-1<d.inArray(a.which,[40,38,32,33,34])&&a.preventDefault(),O=a.ctrlKey,Ma=setTimeout(function(){var b=a.shiftKey;switch(a.which){case 38:case 33:l.k.up&&e.moveSectionUp();break;case 32:if(b&&l.k.up){e.moveSectionUp();break}case 40:case 34:l.k.down&&e.moveSectionDown();break;case 36:l.k.up&&e.moveTo(1);break;case 35:l.k.down&&e.moveTo(d(".fp-section").length);
break;case 37:l.k.left&&e.moveSlideLeft();break;case 39:l.k.right&&e.moveSlideRight()}},150))});u.keyup(function(a){La&&(O=a.ctrlKey)});d(h).blur(function(){O=La=!1});k.mousedown(function(a){2==a.which&&(P=a.pageY,k.on("mousemove",Ya))});k.mouseup(function(a){2==a.which&&k.off("mousemove")});var P=0;u.on("click touchstart","#fp-nav a",function(a){a.preventDefault();a=d(this).parent().index();A(d(".fp-section").eq(a))});u.on("click touchstart",".fp-slidesNav a",function(a){a.preventDefault();a=d(this).closest(".fp-section").find(".fp-slides");
var b=a.find(".fp-slide").eq(d(this).closest("li").index());H(a,b)});c.normalScrollElements&&(u.on("mouseenter",c.normalScrollElements,function(){e.setMouseWheelScrolling(!1)}),u.on("mouseleave",c.normalScrollElements,function(){e.setMouseWheelScrolling(!0)}));d(".fp-section").on("click touchstart",".fp-controlArrow",function(){var a=d(this).closest(".fp-section");d(this).hasClass("fp-prev")?l.m.left&&e.moveSlideLeft(a):l.m.right&&e.moveSlideRight(a)});p.resize(Ea);var ka=r;e.destroy=function(a){e.setAutoScrolling(!1,
"internal");e.setAllowScrolling(!1);e.setKeyboardScrolling(!1);k.addClass("fp-destroyed");clearTimeout(ja);clearTimeout(ea);clearTimeout(la);clearTimeout(ba);clearTimeout(ca);p.off("scroll",sa).off("hashchange",Ba).off("resize",Ea);u.off("click","#fp-nav a").off("mouseenter","#fp-nav li").off("mouseleave","#fp-nav li").off("click",".fp-slidesNav a").off("mouseover",c.normalScrollElements).off("mouseout",c.normalScrollElements);d(".fp-section").off("click",".fp-controlArrow");clearTimeout(ja);clearTimeout(ea);
a&&bb()}};ma={afterRender:function(c){var d=c.find("fp-slides");c=c.find(".fp-scrollable");d.length&&(c=d.find(".fp-slide.active"));c.mouseover()},create:function(c,d){c.find(".fp-scrollable").slimScroll({allowPageScroll:!0,height:d+"px",size:"10px",alwaysVisible:!0})},isScrolled:function(c,d){if("top"===c)return!d.scrollTop();if("bottom"===c)return d.scrollTop()+1+d.innerHeight()>=d[0].scrollHeight},scrollable:function(c){return c.find(".fp-slides").length?c.find(".fp-slide.active").find(".fp-scrollable"):
c.find(".fp-scrollable")},scrollHeight:function(c){return c.find(".fp-scrollable").get(0).scrollHeight},remove:function(c){c.find(".fp-scrollable").children().first().unwrap().unwrap();c.find(".slimScrollBar").remove();c.find(".slimScrollRail").remove()},update:function(c,d){c.find(".fp-scrollable").css("height",d+"px").parent().css("height",d+"px")},wrapContent:function(){return'<div class="fp-scrollable"></div>'}}});
$(document).ready(function() {
    $('#fullpage').fullpage();
});