/*!
 * jScrollPane - v2.0.23 - 2016-01-28
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2014 Kelvin Luck
 * Dual licensed under the MIT or GPL licenses.
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.fn.jScrollPane=function(b){function c(b,c){function d(c){var f,h,j,k,l,o,p=!1,q=!1;if(N=c,void 0===O)l=b.scrollTop(),o=b.scrollLeft(),b.css({overflow:"hidden",padding:0}),P=b.innerWidth()+rb,Q=b.innerHeight(),b.width(P),O=a('<div class="jspPane" />').css("padding",qb).append(b.children()),R=a('<div class="jspContainer" />').css({width:P+"px",height:Q+"px"}).append(O).appendTo(b);else{if(b.css("width",""),p=N.stickToBottom&&A(),q=N.stickToRight&&B(),k=b.innerWidth()+rb!=P||b.outerHeight()!=Q,k&&(P=b.innerWidth()+rb,Q=b.innerHeight(),R.css({width:P+"px",height:Q+"px"})),!k&&sb==S&&O.outerHeight()==T)return void b.width(P);sb=S,O.css("width",""),b.width(P),R.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}O.css("overflow","auto"),S=c.contentWidth?c.contentWidth:O[0].scrollWidth,T=O[0].scrollHeight,O.css("overflow",""),U=S/P,V=T/Q,W=V>1,X=U>1,X||W?(b.addClass("jspScrollable"),f=N.maintainPosition&&($||bb),f&&(h=y(),j=z()),e(),g(),i(),f&&(w(q?S-P:h,!1),v(p?T-Q:j,!1)),F(),C(),L(),N.enableKeyboardNavigation&&H(),N.clickOnTrack&&m(),J(),N.hijackInternalLinks&&K()):(b.removeClass("jspScrollable"),O.css({top:0,left:0,width:R.width()-rb}),D(),G(),I(),n()),N.autoReinitialise&&!pb?pb=setInterval(function(){d(N)},N.autoReinitialiseDelay):!N.autoReinitialise&&pb&&clearInterval(pb),l&&b.scrollTop(0)&&v(l,!1),o&&b.scrollLeft(0)&&w(o,!1),b.trigger("jsp-initialised",[X||W])}function e(){W&&(R.append(a('<div class="jspVerticalBar" />').append(a('<div class="jspCap jspCapTop" />'),a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragTop" />'),a('<div class="jspDragBottom" />'))),a('<div class="jspCap jspCapBottom" />'))),cb=R.find(">.jspVerticalBar"),db=cb.find(">.jspTrack"),Y=db.find(">.jspDrag"),N.showArrows&&(hb=a('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",k(0,-1)).bind("click.jsp",E),ib=a('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",k(0,1)).bind("click.jsp",E),N.arrowScrollOnHover&&(hb.bind("mouseover.jsp",k(0,-1,hb)),ib.bind("mouseover.jsp",k(0,1,ib))),j(db,N.verticalArrowPositions,hb,ib)),fb=Q,R.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){fb-=a(this).outerHeight()}),Y.hover(function(){Y.addClass("jspHover")},function(){Y.removeClass("jspHover")}).bind("mousedown.jsp",function(b){a("html").bind("dragstart.jsp selectstart.jsp",E),Y.addClass("jspActive");var c=b.pageY-Y.position().top;return a("html").bind("mousemove.jsp",function(a){p(a.pageY-c,!1)}).bind("mouseup.jsp mouseleave.jsp",o),!1}),f())}function f(){db.height(fb+"px"),$=0,eb=N.verticalGutter+db.outerWidth(),O.width(P-eb-rb);try{0===cb.position().left&&O.css("margin-left",eb+"px")}catch(a){}}function g(){X&&(R.append(a('<div class="jspHorizontalBar" />').append(a('<div class="jspCap jspCapLeft" />'),a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragLeft" />'),a('<div class="jspDragRight" />'))),a('<div class="jspCap jspCapRight" />'))),jb=R.find(">.jspHorizontalBar"),kb=jb.find(">.jspTrack"),_=kb.find(">.jspDrag"),N.showArrows&&(nb=a('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",k(-1,0)).bind("click.jsp",E),ob=a('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",k(1,0)).bind("click.jsp",E),N.arrowScrollOnHover&&(nb.bind("mouseover.jsp",k(-1,0,nb)),ob.bind("mouseover.jsp",k(1,0,ob))),j(kb,N.horizontalArrowPositions,nb,ob)),_.hover(function(){_.addClass("jspHover")},function(){_.removeClass("jspHover")}).bind("mousedown.jsp",function(b){a("html").bind("dragstart.jsp selectstart.jsp",E),_.addClass("jspActive");var c=b.pageX-_.position().left;return a("html").bind("mousemove.jsp",function(a){r(a.pageX-c,!1)}).bind("mouseup.jsp mouseleave.jsp",o),!1}),lb=R.innerWidth(),h())}function h(){R.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){lb-=a(this).outerWidth()}),kb.width(lb+"px"),bb=0}function i(){if(X&&W){var b=kb.outerHeight(),c=db.outerWidth();fb-=b,a(jb).find(">.jspCap:visible,>.jspArrow").each(function(){lb+=a(this).outerWidth()}),lb-=c,Q-=c,P-=b,kb.parent().append(a('<div class="jspCorner" />').css("width",b+"px")),f(),h()}X&&O.width(R.outerWidth()-rb+"px"),T=O.outerHeight(),V=T/Q,X&&(mb=Math.ceil(1/U*lb),mb>N.horizontalDragMaxWidth?mb=N.horizontalDragMaxWidth:mb<N.horizontalDragMinWidth&&(mb=N.horizontalDragMinWidth),_.width(mb+"px"),ab=lb-mb,s(bb)),W&&(gb=Math.ceil(1/V*fb),gb>N.verticalDragMaxHeight?gb=N.verticalDragMaxHeight:gb<N.verticalDragMinHeight&&(gb=N.verticalDragMinHeight),Y.height(gb+"px"),Z=fb-gb,q($))}function j(a,b,c,d){var e,f="before",g="after";"os"==b&&(b=/Mac/.test(navigator.platform)?"after":"split"),b==f?g=b:b==g&&(f=b,e=c,c=d,d=e),a[f](c)[g](d)}function k(a,b,c){return function(){return l(a,b,this,c),this.blur(),!1}}function l(b,c,d,e){d=a(d).addClass("jspActive");var f,g,h=!0,i=function(){0!==b&&tb.scrollByX(b*N.arrowButtonSpeed),0!==c&&tb.scrollByY(c*N.arrowButtonSpeed),g=setTimeout(i,h?N.initialDelay:N.arrowRepeatFreq),h=!1};i(),f=e?"mouseout.jsp":"mouseup.jsp",e=e||a("html"),e.bind(f,function(){d.removeClass("jspActive"),g&&clearTimeout(g),g=null,e.unbind(f)})}function m(){n(),W&&db.bind("mousedown.jsp",function(b){if(void 0===b.originalTarget||b.originalTarget==b.currentTarget){var c,d=a(this),e=d.offset(),f=b.pageY-e.top-$,g=!0,h=function(){var a=d.offset(),e=b.pageY-a.top-gb/2,j=Q*N.scrollPagePercent,k=Z*j/(T-Q);if(0>f)$-k>e?tb.scrollByY(-j):p(e);else{if(!(f>0))return void i();e>$+k?tb.scrollByY(j):p(e)}c=setTimeout(h,g?N.initialDelay:N.trackClickRepeatFreq),g=!1},i=function(){c&&clearTimeout(c),c=null,a(document).unbind("mouseup.jsp",i)};return h(),a(document).bind("mouseup.jsp",i),!1}}),X&&kb.bind("mousedown.jsp",function(b){if(void 0===b.originalTarget||b.originalTarget==b.currentTarget){var c,d=a(this),e=d.offset(),f=b.pageX-e.left-bb,g=!0,h=function(){var a=d.offset(),e=b.pageX-a.left-mb/2,j=P*N.scrollPagePercent,k=ab*j/(S-P);if(0>f)bb-k>e?tb.scrollByX(-j):r(e);else{if(!(f>0))return void i();e>bb+k?tb.scrollByX(j):r(e)}c=setTimeout(h,g?N.initialDelay:N.trackClickRepeatFreq),g=!1},i=function(){c&&clearTimeout(c),c=null,a(document).unbind("mouseup.jsp",i)};return h(),a(document).bind("mouseup.jsp",i),!1}})}function n(){kb&&kb.unbind("mousedown.jsp"),db&&db.unbind("mousedown.jsp")}function o(){a("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"),Y&&Y.removeClass("jspActive"),_&&_.removeClass("jspActive")}function p(c,d){if(W){0>c?c=0:c>Z&&(c=Z);var e=new a.Event("jsp-will-scroll-y");if(b.trigger(e,[c]),!e.isDefaultPrevented()){var f=c||0,g=0===f,h=f==Z,i=c/Z,j=-i*(T-Q);void 0===d&&(d=N.animateScroll),d?tb.animate(Y,"top",c,q,function(){b.trigger("jsp-user-scroll-y",[-j,g,h])}):(Y.css("top",c),q(c),b.trigger("jsp-user-scroll-y",[-j,g,h]))}}}function q(a){void 0===a&&(a=Y.position().top),R.scrollTop(0),$=a||0;var c=0===$,d=$==Z,e=a/Z,f=-e*(T-Q);(ub!=c||wb!=d)&&(ub=c,wb=d,b.trigger("jsp-arrow-change",[ub,wb,vb,xb])),t(c,d),O.css("top",f),b.trigger("jsp-scroll-y",[-f,c,d]).trigger("scroll")}function r(c,d){if(X){0>c?c=0:c>ab&&(c=ab);var e=new a.Event("jsp-will-scroll-x");if(b.trigger(e,[c]),!e.isDefaultPrevented()){var f=c||0,g=0===f,h=f==ab,i=c/ab,j=-i*(S-P);void 0===d&&(d=N.animateScroll),d?tb.animate(_,"left",c,s,function(){b.trigger("jsp-user-scroll-x",[-j,g,h])}):(_.css("left",c),s(c),b.trigger("jsp-user-scroll-x",[-j,g,h]))}}}function s(a){void 0===a&&(a=_.position().left),R.scrollTop(0),bb=a||0;var c=0===bb,d=bb==ab,e=a/ab,f=-e*(S-P);(vb!=c||xb!=d)&&(vb=c,xb=d,b.trigger("jsp-arrow-change",[ub,wb,vb,xb])),u(c,d),O.css("left",f),b.trigger("jsp-scroll-x",[-f,c,d]).trigger("scroll")}function t(a,b){N.showArrows&&(hb[a?"addClass":"removeClass"]("jspDisabled"),ib[b?"addClass":"removeClass"]("jspDisabled"))}function u(a,b){N.showArrows&&(nb[a?"addClass":"removeClass"]("jspDisabled"),ob[b?"addClass":"removeClass"]("jspDisabled"))}function v(a,b){var c=a/(T-Q);p(c*Z,b)}function w(a,b){var c=a/(S-P);r(c*ab,b)}function x(b,c,d){var e,f,g,h,i,j,k,l,m,n=0,o=0;try{e=a(b)}catch(p){return}for(f=e.outerHeight(),g=e.outerWidth(),R.scrollTop(0),R.scrollLeft(0);!e.is(".jspPane");)if(n+=e.position().top,o+=e.position().left,e=e.offsetParent(),/^body|html$/i.test(e[0].nodeName))return;h=z(),j=h+Q,h>n||c?l=n-N.horizontalGutter:n+f>j&&(l=n-Q+f+N.horizontalGutter),isNaN(l)||v(l,d),i=y(),k=i+P,i>o||c?m=o-N.horizontalGutter:o+g>k&&(m=o-P+g+N.horizontalGutter),isNaN(m)||w(m,d)}function y(){return-O.position().left}function z(){return-O.position().top}function A(){var a=T-Q;return a>20&&a-z()<10}function B(){var a=S-P;return a>20&&a-y()<10}function C(){R.unbind(zb).bind(zb,function(a,b,c,d){bb||(bb=0),$||($=0);var e=bb,f=$,g=a.deltaFactor||N.mouseWheelSpeed;return tb.scrollBy(c*g,-d*g,!1),e==bb&&f==$})}function D(){R.unbind(zb)}function E(){return!1}function F(){O.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(a){x(a.target,!1)})}function G(){O.find(":input,a").unbind("focus.jsp")}function H(){function c(){var a=bb,b=$;switch(d){case 40:tb.scrollByY(N.keyboardSpeed,!1);break;case 38:tb.scrollByY(-N.keyboardSpeed,!1);break;case 34:case 32:tb.scrollByY(Q*N.scrollPagePercent,!1);break;case 33:tb.scrollByY(-Q*N.scrollPagePercent,!1);break;case 39:tb.scrollByX(N.keyboardSpeed,!1);break;case 37:tb.scrollByX(-N.keyboardSpeed,!1)}return e=a!=bb||b!=$}var d,e,f=[];X&&f.push(jb[0]),W&&f.push(cb[0]),O.bind("focus.jsp",function(){b.focus()}),b.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(b){if(b.target===this||f.length&&a(b.target).closest(f).length){var g=bb,h=$;switch(b.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:d=b.keyCode,c();break;case 35:v(T-Q),d=null;break;case 36:v(0),d=null}return e=b.keyCode==d&&g!=bb||h!=$,!e}}).bind("keypress.jsp",function(b){return b.keyCode==d&&c(),b.target===this||f.length&&a(b.target).closest(f).length?!e:void 0}),N.hideFocus?(b.css("outline","none"),"hideFocus"in R[0]&&b.attr("hideFocus",!0)):(b.css("outline",""),"hideFocus"in R[0]&&b.attr("hideFocus",!1))}function I(){b.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"),O.unbind(".jsp")}function J(){if(location.hash&&location.hash.length>1){var b,c,d=escape(location.hash.substr(1));try{b=a("#"+d+', a[name="'+d+'"]')}catch(e){return}b.length&&O.find(d)&&(0===R.scrollTop()?c=setInterval(function(){R.scrollTop()>0&&(x(b,!0),a(document).scrollTop(R.position().top),clearInterval(c))},50):(x(b,!0),a(document).scrollTop(R.position().top)))}}function K(){a(document.body).data("jspHijack")||(a(document.body).data("jspHijack",!0),a(document.body).delegate('a[href*="#"]',"click",function(b){var c,d,e,f,g,h,i=this.href.substr(0,this.href.indexOf("#")),j=location.href;if(-1!==location.href.indexOf("#")&&(j=location.href.substr(0,location.href.indexOf("#"))),i===j){c=escape(this.href.substr(this.href.indexOf("#")+1));try{d=a("#"+c+', a[name="'+c+'"]')}catch(k){return}d.length&&(e=d.closest(".jspScrollable"),f=e.data("jsp"),f.scrollToElement(d,!0),e[0].scrollIntoView&&(g=a(window).scrollTop(),h=d.offset().top,(g>h||h>g+a(window).height())&&e[0].scrollIntoView()),b.preventDefault())}}))}function L(){var a,b,c,d,e,f=!1;R.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(g){var h=g.originalEvent.touches[0];a=y(),b=z(),c=h.pageX,d=h.pageY,e=!1,f=!0}).bind("touchmove.jsp",function(g){if(f){var h=g.originalEvent.touches[0],i=bb,j=$;return tb.scrollTo(a+c-h.pageX,b+d-h.pageY),e=e||Math.abs(c-h.pageX)>5||Math.abs(d-h.pageY)>5,i==bb&&j==$}}).bind("touchend.jsp",function(){f=!1}).bind("click.jsp-touchclick",function(){return e?(e=!1,!1):void 0})}function M(){var a=z(),c=y();b.removeClass("jspScrollable").unbind(".jsp"),O.unbind(".jsp"),b.replaceWith(yb.append(O.children())),yb.scrollTop(a),yb.scrollLeft(c),pb&&clearInterval(pb)}var N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb=this,ub=!0,vb=!0,wb=!1,xb=!1,yb=b.clone(!1,!1).empty(),zb=a.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";"border-box"===b.css("box-sizing")?(qb=0,rb=0):(qb=b.css("paddingTop")+" "+b.css("paddingRight")+" "+b.css("paddingBottom")+" "+b.css("paddingLeft"),rb=(parseInt(b.css("paddingLeft"),10)||0)+(parseInt(b.css("paddingRight"),10)||0)),a.extend(tb,{reinitialise:function(b){b=a.extend({},N,b),d(b)},scrollToElement:function(a,b,c){x(a,b,c)},scrollTo:function(a,b,c){w(a,c),v(b,c)},scrollToX:function(a,b){w(a,b)},scrollToY:function(a,b){v(a,b)},scrollToPercentX:function(a,b){w(a*(S-P),b)},scrollToPercentY:function(a,b){v(a*(T-Q),b)},scrollBy:function(a,b,c){tb.scrollByX(a,c),tb.scrollByY(b,c)},scrollByX:function(a,b){var c=y()+Math[0>a?"floor":"ceil"](a),d=c/(S-P);r(d*ab,b)},scrollByY:function(a,b){var c=z()+Math[0>a?"floor":"ceil"](a),d=c/(T-Q);p(d*Z,b)},positionDragX:function(a,b){r(a,b)},positionDragY:function(a,b){p(a,b)},animate:function(a,b,c,d,e){var f={};f[b]=c,a.animate(f,{duration:N.animateDuration,easing:N.animateEase,queue:!1,step:d,complete:e})},getContentPositionX:function(){return y()},getContentPositionY:function(){return z()},getContentWidth:function(){return S},getContentHeight:function(){return T},getPercentScrolledX:function(){return y()/(S-P)},getPercentScrolledY:function(){return z()/(T-Q)},getIsScrollableH:function(){return X},getIsScrollableV:function(){return W},getContentPane:function(){return O},scrollToBottom:function(a){p(Z,a)},hijackInternalLinks:a.noop,destroy:function(){M()}}),d(c)}return b=a.extend({},a.fn.jScrollPane.defaults,b),a.each(["arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){b[this]=b[this]||b.speed}),this.each(function(){var d=a(this),e=d.data("jsp");e?e.reinitialise(b):(a("script",d).filter('[type="text/javascript"],:not([type])').remove(),e=new c(d,b),d.data("jsp",e))})},a.fn.jScrollPane.defaults={showArrows:!1,maintainPosition:!0,stickToBottom:!1,stickToRight:!1,clickOnTrack:!0,autoReinitialise:!1,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:void 0,animateScroll:!1,animateDuration:300,animateEase:"linear",hijackInternalLinks:!1,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:3,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:!1,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:!0,hideFocus:!1,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:.8}});
/**
* simplePagination.js v1.6
* A simple jQuery pagination plugin.
* http://flaviusmatis.github.com/simplePagination.js/
*
* Copyright 2012, Flavius Matis
* Released under the MIT license.
* http://flaviusmatis.github.com/license.html
*/

(function($){
	var methods = {
		init: function(options) {
			var o = $.extend({
				items: 1,
				itemsOnPage: 1,
				pages: 0,
				displayedPages: 5,
				edges: 2,
				currentPage: 0,
				useAnchors: true,
				hrefTextPrefix: '#page-',
				hrefTextSuffix: '',
				prevText: 'Prev',
				nextText: 'Next',
				ellipseText: '&hellip;',
				ellipsePageSet: true,
				cssStyle: 'light-theme',
				listStyle: '',
				labelMap: [],
				selectOnClick: true,
				nextAtFront: false,
				invertPageOrder: false,
				useStartEdge : true,
				useEndEdge : true,
				onPageClick: function(pageNumber, event) {
					// Callback triggered when a page is clicked
					// Page number is given as an optional parameter
				},
				onInit: function() {
					// Callback triggered immediately after initialization
				}
			}, options || {});

			var self = this;

			o.pages = o.pages ? o.pages : Math.ceil(o.items / o.itemsOnPage) ? Math.ceil(o.items / o.itemsOnPage) : 1;
			if (o.currentPage)
				o.currentPage = o.currentPage - 1;
			else
				o.currentPage = !o.invertPageOrder ? 0 : o.pages - 1;
			o.halfDisplayed = o.displayedPages / 2;

			this.each(function() {
				self.addClass(o.cssStyle + ' simple-pagination').data('pagination', o);
				methods._draw.call(self);
			});

			o.onInit();

			return this;
		},

		selectPage: function(page) {
			methods._selectPage.call(this, page - 1);
			return this;
		},

		prevPage: function() {
			var o = this.data('pagination');
			if (!o.invertPageOrder) {
				if (o.currentPage > 0) {
					methods._selectPage.call(this, o.currentPage - 1);
				}
			} else {
				if (o.currentPage < o.pages - 1) {
					methods._selectPage.call(this, o.currentPage + 1);
				}
			}
			return this;
		},

		nextPage: function() {
			var o = this.data('pagination');
			if (!o.invertPageOrder) {
				if (o.currentPage < o.pages - 1) {
					methods._selectPage.call(this, o.currentPage + 1);
				}
			} else {
				if (o.currentPage > 0) {
					methods._selectPage.call(this, o.currentPage - 1);
				}
			}
			return this;
		},

		getPagesCount: function() {
			return this.data('pagination').pages;
		},

		setPagesCount: function(count) {
			this.data('pagination').pages = count;
		},

		getCurrentPage: function () {
			return this.data('pagination').currentPage + 1;
		},

		destroy: function(){
			this.empty();
			return this;
		},

		drawPage: function (page) {
			var o = this.data('pagination');
			o.currentPage = page - 1;
			this.data('pagination', o);
			methods._draw.call(this);
			return this;
		},

		redraw: function(){
			methods._draw.call(this);
			return this;
		},

		disable: function(){
			var o = this.data('pagination');
			o.disabled = true;
			this.data('pagination', o);
			methods._draw.call(this);
			return this;
		},

		enable: function(){
			var o = this.data('pagination');
			o.disabled = false;
			this.data('pagination', o);
			methods._draw.call(this);
			return this;
		},

		updateItems: function (newItems) {
			var o = this.data('pagination');
			o.items = newItems;
			o.pages = methods._getPages(o);
			this.data('pagination', o);
			methods._draw.call(this);
		},

		updateItemsOnPage: function (itemsOnPage) {
			var o = this.data('pagination');
			o.itemsOnPage = itemsOnPage;
			o.pages = methods._getPages(o);
			this.data('pagination', o);
			methods._selectPage.call(this, 0);
			return this;
		},

		getItemsOnPage: function() {
			return this.data('pagination').itemsOnPage;
		},

		_draw: function() {
			var	o = this.data('pagination'),
				interval = methods._getInterval(o),
				i,
				tagName;

			methods.destroy.call(this);

			tagName = (typeof this.prop === 'function') ? this.prop('tagName') : this.attr('tagName');

			var $panel = tagName === 'UL' ? this : $('<ul' + (o.listStyle ? ' class="' + o.listStyle + '"' : '') + '></ul>').appendTo(this);

			// Generate Prev link
			if (o.prevText) {
				methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage - 1 : o.currentPage + 1, {text: o.prevText, classes: 'prev'});
			}

			// Generate Next link (if option set for at front)
			if (o.nextText && o.nextAtFront) {
				methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage + 1 : o.currentPage - 1, {text: o.nextText, classes: 'next'});
			}

			// Generate start edges
			if (!o.invertPageOrder) {
				if (interval.start > 0 && o.edges > 0) {
					if(o.useStartEdge) {
						var end = Math.min(o.edges, interval.start);
						for (i = 0; i < end; i++) {
							methods._appendItem.call(this, i);
						}
					}
					if (o.edges < interval.start && (interval.start - o.edges != 1)) {
						$panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
					} else if (interval.start - o.edges == 1) {
						methods._appendItem.call(this, o.edges);
					}
				}
			} else {
				if (interval.end < o.pages && o.edges > 0) {
					if(o.useStartEdge) {
						var begin = Math.max(o.pages - o.edges, interval.end);
						for (i = o.pages - 1; i >= begin; i--) {
							methods._appendItem.call(this, i);
						}
					}

					if (o.pages - o.edges > interval.end && (o.pages - o.edges - interval.end != 1)) {
						$panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
					} else if (o.pages - o.edges - interval.end == 1) {
						methods._appendItem.call(this, interval.end);
					}
				}
			}

			// Generate interval links
			if (!o.invertPageOrder) {
				for (i = interval.start; i < interval.end; i++) {
					methods._appendItem.call(this, i);
				}
			} else {
				for (i = interval.end - 1; i >= interval.start; i--) {
					methods._appendItem.call(this, i);
				}
			}

			// Generate end edges
			if (!o.invertPageOrder) {
				if (interval.end < o.pages && o.edges > 0) {
					if (o.pages - o.edges > interval.end && (o.pages - o.edges - interval.end != 1)) {
						$panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
					} else if (o.pages - o.edges - interval.end == 1) {
						methods._appendItem.call(this, interval.end);
					}
					if(o.useEndEdge) {
						var begin = Math.max(o.pages - o.edges, interval.end);
						for (i = begin; i < o.pages; i++) {
							methods._appendItem.call(this, i);
						}
					}
				}
			} else {
				if (interval.start > 0 && o.edges > 0) {
					if (o.edges < interval.start && (interval.start - o.edges != 1)) {
						$panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
					} else if (interval.start - o.edges == 1) {
						methods._appendItem.call(this, o.edges);
					}

					if(o.useEndEdge) {
						var end = Math.min(o.edges, interval.start);
						for (i = end - 1; i >= 0; i--) {
							methods._appendItem.call(this, i);
						}
					}
				}
			}

			// Generate Next link (unless option is set for at front)
			if (o.nextText && !o.nextAtFront) {
				methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage + 1 : o.currentPage - 1, {text: o.nextText, classes: 'next'});
			}

			if (o.ellipsePageSet && !o.disabled) {
				methods._ellipseClick.call(this, $panel);
			}

		},

		_getPages: function(o) {
			var pages = Math.ceil(o.items / o.itemsOnPage);
			return pages || 1;
		},

		_getInterval: function(o) {
			return {
				start: Math.ceil(o.currentPage > o.halfDisplayed ? Math.max(Math.min(o.currentPage - o.halfDisplayed, (o.pages - o.displayedPages)), 0) : 0),
				end: Math.ceil(o.currentPage > o.halfDisplayed ? Math.min(o.currentPage + o.halfDisplayed, o.pages) : Math.min(o.displayedPages, o.pages))
			};
		},

		_appendItem: function(pageIndex, opts) {
			var self = this, options, $link, o = self.data('pagination'), $linkWrapper = $('<li></li>'), $ul = self.find('ul');

			pageIndex = pageIndex < 0 ? 0 : (pageIndex < o.pages ? pageIndex : o.pages - 1);

			options = {
				text: pageIndex + 1,
				classes: ''
			};

			if (o.labelMap.length && o.labelMap[pageIndex]) {
				options.text = o.labelMap[pageIndex];
			}

			options = $.extend(options, opts || {});

			if (pageIndex == o.currentPage || o.disabled) {
				if (o.disabled || options.classes === 'prev' || options.classes === 'next') {
					$linkWrapper.addClass('disabled');
				} else {
					$linkWrapper.addClass('active');
				}
				$link = $('<span class="current">' + (options.text) + '</span>');
			} else {
				if (o.useAnchors) {
					$link = $('<a href="' + o.hrefTextPrefix + (pageIndex + 1) + o.hrefTextSuffix + '" class="page-link">' + (options.text) + '</a>');
				} else {
					$link = $('<span >' + (options.text) + '</span>');
				}
				$link.click(function(event){
					return methods._selectPage.call(self, pageIndex, event);
				});
			}

			if (options.classes) {
				$link.addClass(options.classes);
			}

			$linkWrapper.append($link);

			if ($ul.length) {
				$ul.append($linkWrapper);
			} else {
				self.append($linkWrapper);
			}
		},

		_selectPage: function(pageIndex, event) {
			var o = this.data('pagination');
			o.currentPage = pageIndex;
			if (o.selectOnClick) {
				methods._draw.call(this);
			}
			return o.onPageClick(pageIndex + 1, event);
		},


		_ellipseClick: function($panel) {
			var self = this,
				o = this.data('pagination'),
				$ellip = $panel.find('.ellipse');
			$ellip.addClass('clickable').parent().removeClass('disabled');
			$ellip.click(function(event) {
				if (!o.disable) {
					var $this = $(this),
						val = (parseInt($this.parent().prev().text(), 10) || 0) + 1;
					$this
						.html('<input type="number" min="1" max="' + o.pages + '" step="1" value="' + val + '">')
						.find('input')
						.focus()
						.click(function(event) {
							// prevent input number arrows from bubbling a click event on $ellip
							event.stopPropagation();
						})
						.keyup(function(event) {
							var val = $(this).val();
							if (event.which === 13 && val !== '') {
								// enter to accept
								if ((val>0)&&(val<=o.pages))
								methods._selectPage.call(self, val - 1);
							} else if (event.which === 27) {
								// escape to cancel
								$ellip.empty().html(o.ellipseText);
							}
						})
						.bind('blur', function(event) {
							var val = $(this).val();
							if (val !== '') {
								methods._selectPage.call(self, val - 1);
							}
							$ellip.empty().html(o.ellipseText);
							return false;
						});
				}
				return false;
			});
		}
	};
	$.fn.pagination = function(method) {
		// Method calling logic
		if (methods[method] && method.charAt(0) != '_') {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' +  method + ' does not exist on jQuery.pagination');
		}

	};
})(jQuery);

// uniform
!function(e,t,n){"use strict";function s(e){var t=Array.prototype.slice.call(arguments,1);return e.prop?e.prop.apply(e,t):e.attr.apply(e,t)}function a(e,t,n){var s,a;for(s in n)n.hasOwnProperty(s)&&(a=s.replace(/ |$/g,t.eventNamespace),e.bind(a,n[s]))}function r(e,t,n){a(e,n,{focus:function(){t.addClass(n.focusClass)},blur:function(){t.removeClass(n.focusClass),t.removeClass(n.activeClass)},mouseenter:function(){t.addClass(n.hoverClass)},mouseleave:function(){t.removeClass(n.hoverClass),t.removeClass(n.activeClass)},"mousedown touchbegin":function(){e.is(":disabled")||t.addClass(n.activeClass)},"mouseup touchend":function(){t.removeClass(n.activeClass)}})}function i(e,t){e.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass)}function l(e,t,n){n?e.addClass(t):e.removeClass(t)}function u(e,t,n){var s="checked",a=t.is(":"+s);t.prop?t.prop(s,a):a?t.attr(s,s):t.removeAttr(s),l(e,n.checkedClass,a)}function o(e,t,n){l(e,n.disabledClass,t.is(":disabled"))}function c(e,t,n){switch(n){case"after":return e.after(t),e.next();case"before":return e.before(t),e.prev();case"wrap":return e.wrap(t),e.parent()}return null}function d(e,n,a){var r,i,l;return a||(a={}),a=t.extend({bind:{},divClass:null,divWrap:"wrap",spanClass:null,spanHtml:null,spanWrap:"wrap"},a),r=t("<div />"),i=t("<span />"),n.autoHide&&e.is(":hidden")&&"none"===e.css("display")&&r.hide(),a.divClass&&r.addClass(a.divClass),n.wrapperClass&&r.addClass(n.wrapperClass),a.spanClass&&i.addClass(a.spanClass),l=s(e,"id"),n.useID&&l&&s(r,"id",n.idPrefix+"-"+l),a.spanHtml&&i.html(a.spanHtml),r=c(e,r,a.divWrap),i=c(e,i,a.spanWrap),o(r,e,n),{div:r,span:i}}function f(e,n){var s;return n.wrapperClass?(s=t("<span />").addClass(n.wrapperClass),s=c(e,s,"wrap")):null}function p(){var n,s,a,r;return r="rgb(120,2,153)",s=t('<div style="width:0;height:0;color:'+r+'">'),t("body").append(s),a=s.get(0),n=e.getComputedStyle?e.getComputedStyle(a,"").color:(a.currentStyle||a.style||{}).color,s.remove(),n.replace(/ /g,"")!==r}function m(e){return e?t("<span />").text(e).html():""}function v(){return navigator.cpuClass&&!navigator.product}function h(){return void 0!==e.XMLHttpRequest?!0:!1}function C(e){var t;return e[0].multiple?!0:(t=s(e,"size"),!t||1>=t?!1:!0)}function b(){return!1}function y(e,t){var n="none";a(e,t,{"selectstart dragstart mousedown":b}),e.css({MozUserSelect:n,msUserSelect:n,webkitUserSelect:n,userSelect:n})}function w(e,t,n){var s=e.val();""===s?s=n.fileDefaultHtml:(s=s.split(/[\/\\]+/),s=s[s.length-1]),t.text(s)}function g(e,t,n){var s,a;for(s=[],e.each(function(){var e;for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&(s.push({el:this,name:e,old:this.style[e]}),this.style[e]=t[e])}),n();s.length;)a=s.pop(),a.el.style[a.name]=a.old}function k(e,t){var n;n=e.parents(),n.push(e[0]),n=n.not(":visible"),g(n,{visibility:"hidden",display:"block",position:"absolute"},t)}function H(e,t){return function(){e.unwrap().unwrap().unbind(t.eventNamespace)}}var x=!0,A=!1,W=[{match:function(e){return e.is("a, button, :submit, :reset, input[type='button']")},apply:function(t,n){var l,u,c,f,p;return u=n.submitDefaultHtml,t.is(":reset")&&(u=n.resetDefaultHtml),f=t.is("a, button")?function(){return t.html()||u}:function(){return m(s(t,"value"))||u},c=d(t,n,{divClass:n.buttonClass,spanHtml:f()}),l=c.div,r(t,l,n),p=!1,a(l,n,{"click touchend":function(){var n,a,r,i;p||t.is(":disabled")||(p=!0,t[0].dispatchEvent?(n=document.createEvent("MouseEvents"),n.initEvent("click",!0,!0),a=t[0].dispatchEvent(n),t.is("a")&&a&&(r=s(t,"target"),i=s(t,"href"),r&&"_self"!==r?e.open(i,r):document.location.href=i)):t.click(),p=!1)}}),y(l,n),{remove:function(){return l.after(t),l.remove(),t.unbind(n.eventNamespace),t},update:function(){i(l,n),o(l,t,n),t.detach(),c.span.html(f()).append(t)}}}},{match:function(e){return e.is(":checkbox")},apply:function(e,t){var n,s,l;return n=d(e,t,{divClass:t.checkboxClass}),s=n.div,l=n.span,r(e,s,t),a(e,t,{"click touchend":function(){u(l,e,t)}}),u(l,e,t),{remove:H(e,t),update:function(){i(s,t),l.removeClass(t.checkedClass),u(l,e,t),o(s,e,t)}}}},{match:function(e){return e.is(":file")},apply:function(e,n){function l(){w(e,p,n)}var u,f,p,m;return u=d(e,n,{divClass:n.fileClass,spanClass:n.fileButtonClass,spanHtml:n.fileButtonHtml,spanWrap:"after"}),f=u.div,m=u.span,p=t("<span />").html(n.fileDefaultHtml),p.addClass(n.filenameClass),p=c(e,p,"after"),s(e,"size")||s(e,"size",f.width()/10),r(e,f,n),l(),v()?a(e,n,{click:function(){e.trigger("change"),setTimeout(l,0)}}):a(e,n,{change:l}),y(p,n),y(m,n),{remove:function(){return p.remove(),m.remove(),e.unwrap().unbind(n.eventNamespace)},update:function(){i(f,n),w(e,p,n),o(f,e,n)}}}},{match:function(e){if(e.is("input")){var t=(" "+s(e,"type")+" ").toLowerCase(),n=" color date datetime datetime-local email month number password search tel text time url week ";return n.indexOf(t)>=0}return!1},apply:function(e,t){var n,a;return n=s(e,"type"),e.addClass(t.inputClass),a=f(e,t),r(e,e,t),t.inputAddTypeAsClass&&e.addClass(n),{remove:function(){e.removeClass(t.inputClass),t.inputAddTypeAsClass&&e.removeClass(n),a&&e.unwrap()},update:b}}},{match:function(e){return e.is(":radio")},apply:function(e,n){var l,c,f;return l=d(e,n,{divClass:n.radioClass}),c=l.div,f=l.span,r(e,c,n),a(e,n,{"click touchend":function(){t.uniform.update(t(':radio[name="'+s(e,"name")+'"]'))}}),u(f,e,n),{remove:H(e,n),update:function(){i(c,n),u(f,e,n),o(c,e,n)}}}},{match:function(e){return e.is("select")&&!C(e)?!0:!1},apply:function(e,n){var s,l,u,c;return n.selectAutoWidth&&k(e,function(){c=e.width()}),s=d(e,n,{divClass:n.selectClass,spanHtml:(e.find(":selected:first")||e.find("option:first")).html(),spanWrap:"before"}),l=s.div,u=s.span,n.selectAutoWidth?k(e,function(){g(t([u[0],l[0]]),{display:"block"},function(){var e;e=u.outerWidth()-u.width(),l.width(c+e),u.width(c)})}):l.addClass("fixedWidth"),r(e,l,n),a(e,n,{change:function(){u.html(e.find(":selected").html()),l.removeClass(n.activeClass)},"click touchend":function(){var t=e.find(":selected").html();u.html()!==t&&e.trigger("change")},keyup:function(){u.html(e.find(":selected").html())}}),y(u,n),{remove:function(){return u.remove(),e.unwrap().unbind(n.eventNamespace),e},update:function(){n.selectAutoWidth?(t.uniform.restore(e),e.uniform(n)):(i(l,n),u.html(e.find(":selected").html()),o(l,e,n))}}}},{match:function(e){return e.is("select")&&C(e)?!0:!1},apply:function(e,t){var n;return e.addClass(t.selectMultiClass),n=f(e,t),r(e,e,t),{remove:function(){e.removeClass(t.selectMultiClass),n&&e.unwrap()},update:b}}},{match:function(e){return e.is("textarea")},apply:function(e,t){var n;return e.addClass(t.textareaClass),n=f(e,t),r(e,e,t),{remove:function(){e.removeClass(t.textareaClass),n&&e.unwrap()},update:b}}}];v()&&!h()&&(x=!1),t.uniform={defaults:{activeClass:"active",autoHide:!0,buttonClass:"button",checkboxClass:"checker",checkedClass:"checked",disabledClass:"disabled",eventNamespace:".uniform",fileButtonClass:"action",fileButtonHtml:"Choose File",fileClass:"uploader",fileDefaultHtml:"No file selected",filenameClass:"filename",focusClass:"focus",hoverClass:"hover",idPrefix:"uniform",inputAddTypeAsClass:!0,inputClass:"uniform-input",radioClass:"radio",resetDefaultHtml:"Reset",resetSelector:!1,selectAutoWidth:!0,selectClass:"selector",selectMultiClass:"uniform-multiselect",submitDefaultHtml:"Submit",textareaClass:"uniform",useID:!0,wrapperClass:null},elements:[]},t.fn.uniform=function(n){var s=this;return n=t.extend({},t.uniform.defaults,n),A||(A=!0,p()&&(x=!1)),x?(n.resetSelector&&t(n.resetSelector).mouseup(function(){e.setTimeout(function(){t.uniform.update(s)},10)}),this.each(function(){var e,s,a,r=t(this);if(r.data("uniformed"))return t.uniform.update(r),void 0;for(e=0;e<W.length;e+=1)if(s=W[e],s.match(r,n))return a=s.apply(r,n),r.data("uniformed",a),t.uniform.elements.push(r.get(0)),void 0})):this},t.uniform.restore=t.fn.uniform.restore=function(e){e===n&&(e=t.uniform.elements),t(e).each(function(){var e,n,s=t(this);n=s.data("uniformed"),n&&(n.remove(),e=t.inArray(this,t.uniform.elements),e>=0&&t.uniform.elements.splice(e,1),s.removeData("uniformed"))})},t.uniform.update=t.fn.uniform.update=function(e){e===n&&(e=t.uniform.elements),t(e).each(function(){var e,n=t(this);e=n.data("uniformed"),e&&e.update(n,e.options)})}}(this,jQuery);
// sw 2.0.3
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.swal=e():t.swal=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="swal-button";e.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:o,CONFIRM_BUTTON:o+"--confirm",CANCEL_BUTTON:o+"--cancel",DANGER_BUTTON:o+"--danger",BUTTON_LOADING:o+"--loading",BUTTON_LOADER:o+"__loader"},e.default=e.CLASS_NAMES},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getNode=function(t){var e="."+t;return document.querySelector(e)},e.stringToNode=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.insertAfter=function(t,e){var n=e.nextSibling;e.parentNode.insertBefore(t,n)},e.removeNode=function(t){t.parentElement.removeChild(t)},e.throwErr=function(t){throw t=t.replace(/ +(?= )/g,""),"SweetAlert: "+(t=t.trim())},e.isPlainObject=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype},e.ordinalSuffixOf=function(t){var e=t%10,n=t%100;return 1===e&&11!==n?t+"st":2===e&&12!==n?t+"nd":3===e&&13!==n?t+"rd":t+"th"}},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(18));var r=n(19);e.overlayMarkup=r.default,o(n(20)),o(n(21)),o(n(22));var a=n(0),i=a.default.MODAL_TITLE,s=a.default.MODAL_TEXT,l=a.default.ICON,c=a.default.FOOTER;e.iconMarkup='\n  <div class="'+l+'"></div>',e.titleMarkup='\n  <div class="'+i+'"></div>\n',e.textMarkup='\n  <div class="'+s+'"></div>',e.footerMarkup='\n  <div class="'+c+'"></div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);e.CONFIRM_KEY="confirm",e.CANCEL_KEY="cancel";var r={visible:!0,text:null,value:null,className:"",closeModal:!0},a=Object.assign({},r,{visible:!1,text:"Cancel",value:null}),i=Object.assign({},r,{text:"OK",value:!0});e.defaultButtonList={cancel:a,confirm:i};var s=function(t){switch(t){case e.CONFIRM_KEY:return i;case e.CANCEL_KEY:return a;default:var n=t.charAt(0).toUpperCase()+t.slice(1);return Object.assign({},r,{text:n,value:t})}},l=function(t,e){var n=s(t);return!0===e?Object.assign({},n,{visible:!0}):"string"==typeof e?Object.assign({},n,{visible:!0,text:e}):o.isPlainObject(e)?Object.assign({visible:!0},n,e):Object.assign({},n,{visible:!1})},c=function(t){for(var e={},n=0,o=Object.keys(t);n<o.length;n++){var r=o[n],i=t[r],s=l(r,i);e[r]=s}return e.cancel||(e.cancel=a),e},u=function(t){var n={};switch(t.length){case 1:n[e.CANCEL_KEY]=Object.assign({},a,{visible:!1});break;case 2:n[e.CANCEL_KEY]=l(e.CANCEL_KEY,t[0]),n[e.CONFIRM_KEY]=l(e.CONFIRM_KEY,t[1]);break;default:o.throwErr("Invalid number of 'buttons' in array ("+t.length+").\n      If you want more than 2 buttons, you need to use an object!")}return n};e.getButtonListOpts=function(t){var n=e.defaultButtonList;return"string"==typeof t?n[e.CONFIRM_KEY]=l(e.CONFIRM_KEY,t):Array.isArray(t)?n=u(t):o.isPlainObject(t)?n=c(t):!0===t?n=u([!0,!0]):!1===t?n=u([!1,!1]):void 0===t&&(n=e.defaultButtonList),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),a=n(0),i=a.default.MODAL,s=a.default.OVERLAY,l=n(23),c=n(24),u=n(25),d=n(26);e.injectElIntoModal=function(t){var e=o.getNode(i),n=o.stringToNode(t);return e.appendChild(n),n};var f=function(t){t.className=i,t.textContent=""},p=function(t,e){f(t);var n=e.className;n&&t.classList.add(n)};e.initModalContent=function(t){var e=o.getNode(i);p(e,t),l.default(t.icon),c.initTitle(t.title),c.initText(t.text),d.default(t.content),u.default(t.buttons,t.dangerMode)};var b=function(){var t=o.getNode(s),e=o.stringToNode(r.modalMarkup);t.appendChild(e)};e.default=b},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r={isOpen:!1,promise:null,actions:{},timer:null},a=Object.assign({},r);e.resetState=function(){a=Object.assign({},r)},e.setActionValue=function(t){if("string"==typeof t)return i(o.CONFIRM_KEY,t);for(var e in t)i(e,t[e])};var i=function(t,e){a.actions[t]||(a.actions[t]={}),Object.assign(a.actions[t],{value:e})};e.setActionOptionsFor=function(t,e){var n=(void 0===e?{}:e).closeModal,o=void 0===n||n;Object.assign(a.actions[t],{closeModal:o})},e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),a=n(0),i=a.default.OVERLAY,s=a.default.SHOW_MODAL,l=a.default.BUTTON,c=a.default.BUTTON_LOADING,u=n(5);e.openModal=function(){o.getNode(i).classList.add(s),u.default.isOpen=!0};var d=function(){o.getNode(i).classList.remove(s),u.default.isOpen=!1};e.onAction=function(t){void 0===t&&(t=r.CANCEL_KEY);var e=u.default.actions[t],n=e.value;if(!1===e.closeModal){var a=l+"--"+t;o.getNode(a).classList.add(c)}else d();u.default.promise.resolve(n)},e.getState=function(){var t=Object.assign({},u.default);return delete t.promise,delete t.timer,t},e.stopLoading=function(){for(var t=document.querySelectorAll("."+l),e=0;e<t.length;e++){t[e].classList.remove(c)}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){t.exports=e.sweetAlert=n(9)}).call(e,n(7))},function(t,e,n){(function(e){t.exports=e.swal=n(10)}).call(e,n(7))},function(t,e,n){"undefined"!=typeof window&&n(11);const o=n(16).default;t.exports=o},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"top"};r.transform=void 0;n(14)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button[not:disabled]:hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel[not:disabled]:hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger[not:disabled]:hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;-webkit-transition:border-color .2s;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);-webkit-transition:background .2s;transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:scroll;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;-webkit-transition:opacity .3s;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;-webkit-transition:opacity .2s,-webkit-transform .3s;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var a=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([a]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<t.length;r++){var i=t[r];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=b[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(u(o.parts[a],e))}else{for(var i=[],a=0;a<o.parts.length;a++)i.push(u(o.parts[a],e));b[o.id]={id:o.id,refs:1,parts:i}}}}function r(t,e){for(var n=[],o={},r=0;r<t.length;r++){var a=t[r],i=e.base?a[0]+e.base:a[0],s=a[1],l=a[2],c=a[3],u={css:s,media:l,sourceMap:c};o[i]?o[i].parts.push(u):n.push(o[i]={id:i,parts:[u]})}return n}function a(t,e){var n=g(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=x[x.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),x.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function i(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=x.indexOf(t);e>=0&&x.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",c(e,t.attrs),a(t,e),e}function l(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",c(e,t.attrs),a(t,e),e}function c(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,r,a;if(e.transform&&t.css){if(!(a=e.transform(t.css)))return function(){};t.css=a}if(e.singleton){var c=w++;n=v||(v=s(e)),o=d.bind(null,n,c,!1),r=d.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(e),o=p.bind(null,n,e),r=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=f.bind(null,n),r=function(){i(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function d(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=y(e,r);else{var a=document.createTextNode(r),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function f(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,r=n.sourceMap,a=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||a)&&(o=h(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}var b={},m=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),g=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),v=null,w=0,x=[],h=n(15);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=m()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return o(n,e),function(t){for(var a=[],i=0;i<n.length;i++){var s=n[i],l=b[s.id];l.refs--,a.push(l)}if(t){o(r(t,e),e)}for(var i=0;i<a.length;i++){var l=a[i];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete b[l.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var a;return a=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(17),r=n(6),a=n(5),i=n(29),s=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if("undefined"!=typeof window){var n=i.getOpts.apply(void 0,t);return new Promise(function(t,e){a.default.promise={resolve:t,reject:e},o.default(n),setTimeout(function(){r.openModal()})})}};s.close=r.onAction,s.getState=r.getState,s.setActionValue=a.setActionValue,s.stopLoading=r.stopLoading,s.setDefaults=i.setDefaults,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0),a=r.default.MODAL,i=n(4),s=n(27),l=n(28),c=n(1);e.init=function(t){o.getNode(a)||(document.body||c.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),s.default(),i.default()),i.initModalContent(t),l.default(t)},e.default=e.init},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.MODAL;e.modalMarkup='\n  <div class="'+r+'"></div>',e.default=e.modalMarkup},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.OVERLAY,a='<div \n    class="'+r+'"\n    tabIndex="-1">\n  </div>';e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.ICON;e.errorIconMarkup=function(){var t=r+"--error",e=t+"__line";return'\n    <div class="'+t+'__x-mark">\n      <span class="'+e+" "+e+'--left"></span>\n      <span class="'+e+" "+e+'--right"></span>\n    </div>\n  '},e.warningIconMarkup=function(){var t=r+"--warning";return'\n    <span class="'+t+'__body">\n      <span class="'+t+'__dot"></span>\n    </span>\n  '},e.successIconMarkup=function(){var t=r+"--success";return'\n    <span class="'+t+"__line "+t+'__line--long"></span>\n    <span class="'+t+"__line "+t+'__line--tip"></span>\n\n    <div class="'+t+'__ring"></div>\n    <div class="'+t+'__hide-corners"></div>\n  '}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.CONTENT;e.contentMarkup='\n  <div class="'+r+'">\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.BUTTON_CONTAINER,a=o.default.BUTTON,i=o.default.BUTTON_LOADER;e.buttonMarkup='\n  <div class="'+r+'">\n\n    <button\n      class="'+a+'"\n    ></button>\n\n    <div class="'+i+'">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=n(2),a=n(0),i=a.default.ICON,s=a.default.ICON_CUSTOM,l=["error","warning","success","info"],c={error:r.errorIconMarkup(),warning:r.warningIconMarkup(),success:r.successIconMarkup()},u=function(t,e){var n=i+"--"+t;e.classList.add(n);var o=c[t];o&&(e.innerHTML=o)},d=function(t,e){e.classList.add(s);var n=document.createElement("img");n.src=t,e.appendChild(n)},f=function(t){if(t){var e=o.injectElIntoModal(r.iconMarkup);l.includes(t)?u(t,e):d(t,e)}};e.default=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=n(4),a=function(t){navigator.userAgent.includes("AppleWebKit")&&(t.style.display="none",t.offsetHeight,t.style.display="")};e.initTitle=function(t){if(t){var e=r.injectElIntoModal(o.titleMarkup);e.textContent=t,a(e)}},e.initText=function(t){if(t){var e=r.injectElIntoModal(o.textMarkup);e.textContent=t,a(e)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(4),a=n(0),i=a.default.BUTTON,s=a.default.DANGER_BUTTON,l=n(3),c=n(2),u=n(6),d=n(5),f=function(t,e,n){var r=e.text,a=e.value,f=e.className,p=e.closeModal,b=o.stringToNode(c.buttonMarkup),m=b.querySelector("."+i),g=i+"--"+t;m.classList.add(g),f&&m.classList.add(f),n&&t===l.CONFIRM_KEY&&m.classList.add(s),m.textContent=r;var v={};return v[t]=a,d.setActionValue(v),d.setActionOptionsFor(t,{closeModal:p}),m.addEventListener("click",function(){return u.onAction(t)}),b},p=function(t,e){var n=r.injectElIntoModal(c.footerMarkup);for(var o in t){var a=t[o],i=f(o,a,e);a.visible&&n.appendChild(i)}0===n.children.length&&n.remove()};e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n(4),a=n(2),i=n(5),s=n(6),l=n(0),c=l.default.CONTENT,u=function(t){t.addEventListener("input",function(t){var e=t.target,n=e.value;i.setActionValue(n)}),t.addEventListener("keyup",function(t){if("Enter"===t.key)return s.onAction(o.CONFIRM_KEY)}),setTimeout(function(){t.focus(),i.setActionValue("")},0)},d=function(t,e,n){var o=document.createElement(e),r=c+"__"+e;o.classList.add(r);for(var a in n){var i=n[a];o[a]=i}"input"===e&&u(o),t.appendChild(o)},f=function(t){if(t){var e=r.injectElIntoModal(a.contentMarkup),n=t.element,o=t.attributes;"string"==typeof n?d(e,n,o):e.appendChild(n)}};e.default=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),a=function(){var t=o.stringToNode(r.overlayMarkup);document.body.appendChild(t)};e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=n(6),a=n(1),i=n(3),s=n(0),l=s.default.MODAL,c=s.default.BUTTON,u=s.default.OVERLAY,d=function(t){t.preventDefault(),g()},f=function(t){t.preventDefault(),v()},p=function(t){if(o.default.isOpen)switch(t.key){case"Escape":return r.onAction(i.CANCEL_KEY)}},b=function(t){if(o.default.isOpen)switch(t.key){case"Tab":return d(t)}},m=function(t){if(o.default.isOpen)return"Tab"===t.key&&t.shiftKey?f(t):void 0},g=function(){var t=a.getNode(c);t&&(t.tabIndex=0,t.focus())},v=function(){var t=a.getNode(l),e=t.querySelectorAll("."+c),n=e.length-1,o=e[n];o&&o.focus()},w=function(t){t[t.length-1].addEventListener("keydown",b)},x=function(t){t[0].addEventListener("keydown",m)},h=function(){var t=a.getNode(l),e=t.querySelectorAll("."+c);e.length&&(w(e),x(e))},y=function(t){if(a.getNode(u)===t.target)return r.onAction(i.CANCEL_KEY)},k=function(t){var e=a.getNode(u);e.removeEventListener("click",y),t&&e.addEventListener("click",y)},O=function(t){o.default.timer&&clearTimeout(o.default.timer),t&&(o.default.timer=setTimeout(function(){return r.onAction(i.CANCEL_KEY)},t))},_=function(t){t.closeOnEsc?document.addEventListener("keyup",p):document.removeEventListener("keyup",p),t.dangerMode?g():v(),h(),k(t.closeOnClickOutside),O(t.timer)};e.default=_},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),a=n(30),i={title:null,text:null,icon:null,buttons:r.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},s=Object.assign({},i);e.setDefaults=function(t){s=Object.assign({},i,t)};var l=function(t){var e=t&&t.button,n=t&&t.buttons;return void 0!==e&&void 0!==n&&o.throwErr("Cannot set both 'button' and 'buttons' options!"),void 0!==e?{confirm:e}:n},c=function(t){return o.ordinalSuffixOf(t+1)},u=function(t,e){o.throwErr(c(e)+" argument ('"+t+"') is invalid")},d=function(t,e){var n=t+1,r=e[n];o.isPlainObject(r)||void 0===r||o.throwErr("Expected "+c(n)+" argument ('"+r+"') to be a plain object")},f=function(t,e){var n=t+1,r=e[n];void 0!==r&&o.throwErr("Unexpected "+c(n)+" argument ("+r+")")},p=function(t,e,n,r){var a=typeof e,i="string"===a,s=e instanceof Element;if(i){if(0===n)return{text:e};if(1===n)return{text:e,title:r[0]};if(2===n)return d(n,r),{icon:e};u(e,n)}else{if(s&&0===n)return d(n,r),{content:e};if(o.isPlainObject(e))return f(n,r),e;u(e,n)}};e.getOpts=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n={};t.forEach(function(e,o){var r=p(0,e,o,t);Object.assign(n,r)});var o=l(n);return n.buttons=r.getButtonListOpts(o),delete n.button,n.content=a.getContentOpts(n.content),Object.assign({},i,s,n)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r={element:"input",attributes:{placeholder:""}};e.getContentOpts=function(t){var e={};return o.isPlainObject(t)?Object.assign(e,t):t instanceof Element?{element:t}:"input"===t?r:null}}])});


MathJax.Hub.Config({
  jax: ["input/TeX", "output/SVG"],
  extensions: ["tex2jax.js"],
  tex2jax: {preview: ["Đang tải công thức..."],},
  showMathMenu: false,
  showProcessingMessages: false,
  messageStyle: "none",
  SVG: {useGlobalCache:false, font: "STIX-Web"},
  TeX: {extensions: ["AMSmath.js", "AMSsymbols.js", "autoload-all.js"]}
});

const uniform_options = { radioClass: 'choice', selectAutoWidth: false };

const templates_modal = (_class, title, body) => {
	return `
		<div class="${_class} modal fade" tabindex="-1" role="dialog">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<p class="modal-title">${title}</p>
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
					</div>
					<div class="modal-body">
						${body}
					</div>
				</div>
			</div>
		</div>`
};

const templates_notification = (type, msg) => {
	return `
		<div class="notify-wrapper">
			<span class="server-${type}">
				<span class="notify-msg">
					<span>${msg}</span>
				</span>
			</span>
		</div>`
}

const templates_test = (params) => {
	function index_by_letter(num) {
		num++;
	  var mod = num % 26, pow = num / 26 | 0, out = mod ? String.fromCharCode(64 + mod) : (--pow, 'Z');
	  return pow ? index_by_letter(pow) + out : out;
	}

	function find_break(string) {
	  return string.match(/@break@/)
	}

	function split_break(string) {
		return string.split('@break@')
	}

	function index_empty_space(index, string) {
		var tmp = string.split(/[_]+/), str = '';
		for(var i = 0; i < tmp.length - 1; i++) {
			str += tmp[i]+'<span class="text-primary"> ('+(i + index)+')</span>_____'
		}
		str += tmp[tmp.length-1]
		return '<p>'+str.replace(/(\n)+/g, '</p><p>')+'</p>';
	}

	function html_format(string) {
		let test, text;
		if(string && typeof string === 'string') {
			test = string.match(/\.jpeg|\.jpg|\.png|\.gif/gi);
			if (test) {
				text = string.split('@media@');
				return text[0]+'<img class="media-attachment" src="'+text[1]+'">'
			}
			test = string.match(/\.mp3/gi);
			if (test) {
				text = string.split('@media@');
				return text[0]+`<audio class="media-attachment" controls><source src="${text[1]}" type="audio/mpeg"></audio>`
			}

			if(find_break(string)) {
				text = split_break(string);
				if (text[0].length == 0) string = text[1]
				else string = text[0]+'<br>'+'<span class="sub-info">'+text[1].replace(/(\n)+/g, '</span><span class="sub-info">')+'</span>'
			}
			test = string.match(/<\/*[b|u|sub|br].*>/gi);
			if (test && test.length > 0) {
				text = string.replace(/&(lt|gt);/g, function (str, p1){
					return (p1 == "lt")? "<" : ">";
				});
				string = text.replace(/<\/?(?!b|u|sub|br)[^(?!b|u|sub|br)>]+(>|$)/gi, "")
			}
			return string.trim();
		} else return string;
	}

	let info = '', answers = '';
	if(params.info) {
		if(!find_break(params.info)) {
			info = '<span class="test-question-info">'+params.info+'</span>'
		} else { 
			let tmp = split_break(params.info);
			info = `
				<span class="test-question-info">${tmp[0]}</span>
				<span class="test-question-paragraph">${index_empty_space(params.index, tmp[1])}</span>
			`
		}
	}
	if(params.answers) {
		for(let i in params.answers) {
			answers += `
				<label class="${(params.question) ? params.type : params.type+'-inline'} check-primary">
					<input type="${params.type}" name="answer${params.id}" value="${params.answers[i]}" class="styled">
					<span class="text-700">${index_by_letter(i)}. </span>
					<span class="lbl">${html_format(params.answers[i])}</span>
				</label>
			`
		}
	} else {
		if(params.type === 'text') answers = `
			<textarea data-question="${params.id}" placeholder="Nhập câu trả lời..."></textarea>
		`
	}
	return `
		<div class="test-question ${(params.question) ? '' : 'inline'}" data-question="${params.id}">
			${info}
			<div class="test-question-title">
				<span class="text-700">${params.label+' '+params.index+'. '}</span>
				${(params.question) ? '<span>'+html_format(params.question)+'</span>' : ''}
			</div>
			${answers}
		</div>
	`
};

const test_init = (test_data) => {
	var $window = jQuery(window);
	var $test_content = jQuery('.test-content');
	var $test_content_child = jQuery('.test-content .content');
	var $test_control = jQuery('.test-control');
	var $test_action = jQuery('.test-action');
	var $test_submit = jQuery('.test-submit');

	let question_handle = _test_data_process(test_data);
	var _Test = {
		time: test_data.time || 3600,
		questions_number: question_handle.questions.length,
		questions_list: question_handle.questions,
		user_results: new Array(question_handle.questions.length),
		cheatsheet: question_handle.answers,
		questions_per_page: 10,
		current_page: 0,
		no_answer_mark: 'no_answer',
		time_start: null,
		time_interval: null,
		action: test_data.action
	};

	function _test_data_process(data) {
		let _q = [], _a = [];
		for(let question in data.questions) _q = _q.concat(data.questions[question]);
		for(let answer in data.answers) _a = _a.concat(data.answers[answer]);
		return {
			questions: _q,
			answers: _a.toString()
		};
	}

	function _test_load_content(x) {
		let from = x*_Test.questions_per_page, to = from+_Test.questions_per_page, html = '';
		for(let i = from; i < to; i++) {
			let item = _Test.questions_list[i];
			if(item) {
				item.index = i+1;
				html += templates_test(item)
			}
		}
		$test_content_child.html(html);
		for (let i = from, c = 0; i <= to; i++) {
			if(_Test.user_results[i] !== _Test.no_answer_mark) {
				jQuery('.test-question:eq('+c+') input:eq('+_Test.user_results[i]+')').prop('checked', true)
			}
			c++
		}
		jQuery('.styled').uniform(uniform_options);
		MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
	}
	_test_load_content(0);

	setTimeout(_test_set_start, 1000);

	if(_Test.questions_number>_Test.questions_per_page) {
		$test_content.find('ul').pagination({
			items: _Test.questions_number,
			itemsOnPage: _Test.questions_per_page,
			prevText: '',
			nextText: '',
			onPageClick: function(page_number, e) {
				if(e) {
					e.preventDefault();
					$test_content[0].scrollIntoView();
				}
				_Test.current_page = page_number-1;
				_test_load_content(_Test.current_page);
				if(_Test.cheatsheet && typeof _Test.cheatsheet !== 'string') 
					_test_display_result(_Test.cheatsheet);
			}
		})
	}

	var getTimeRemaining = function(end_time){
		var t = end_time - Date.parse(new Date());
		var seconds = Math.floor( (t/1000) % 60 );
		var minutes = Math.floor( (t/1000/60) % 60 );
		var hours = Math.floor( (t/(1000*60*60)) % 24 );
		var days = Math.floor( t/(1000*60*60*24) );
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}
	var _test_init_clock = function(id) {
		var $clock = document.getElementById(id);
		var hoursSpan = $clock.querySelector('.hours');
		var minutesSpan = $clock.querySelector('.minutes');
		var secondsSpan = $clock.querySelector('.seconds');
		var end_time = _Test.time_start +	_Test.time * 1000;

		function _test_update_clock() {
			let t = getTimeRemaining(end_time);
			if (t.total <= 0) {
				$test_action.remove();
				swal({
					title: 'Hết giờ!', 
					text: 'Kết quả sẽ được hiển thị sau vài giây.',
					icon:'warning',
					buttons: false,
					closeOnClickOutside: false,
					closeOnEsc: false
				});
				clearInterval(_Test.time_interval);
				setTimeout(function() { _test_finish(true) }, 2000)
			} else {
				hoursSpan.innerHTML = ('0' + t.hours).slice(-2)+' :';
				minutesSpan.innerHTML = ('0' + t.minutes).slice(-2)+' :';
				secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
			}
		}
		_test_update_clock();
		_Test.time_interval = setInterval(_test_update_clock, 1000);
	}

	function _test_set_start() {
		_Test.time_start = Date.now();
		jQuery('.scrollable').jScrollPane({
			autoReinitialise:true,
			autoReinitialiseDelay:300
		});
		for (var i = 0; i < _Test.questions_number; i++) {
			$test_control.find('.jspPane').append('<li data-point="'+i+'"><span>'+(i+1)+'</span></li>');
		}
		_test_init_clock('test-clock');
		_Test.user_results.fill(_Test.no_answer_mark);
		$test_content.on('click', '.test-question', function() {
			var that = jQuery(this);
			var inputs = that.find('input');
			var input_checked = that.find('input:checked');
			setTimeout(function() {
				var index = _Test.questions_list.findIndex((obj) => {
					return obj.id === that.data('question')
				}), answers = _Test.no_answer_mark;
				var control = $test_control.find('ul li:eq('+index+')');
				if(input_checked.length > 0) {
					var answers = inputs.index(input_checked);
					if(input_checked.attr('type') === 'checkbox') {
						if (_Test.user_results[index] === _Test.no_answer_mark)
							 _Test.user_results[index] = new Array()
						if(input_checked.length > 1) {
							answers = [];
							for (var i = 0; i < input_checked.length; i++) {
								answers.push(inputs.index(jQuery(input_checked[i])))
							}
						}
					}
					control.addClass('checked')
				} else control.removeClass('checked');
				_Test.user_results[index] = answers;
			},200)
		});
		jQuery('[data-point]').click(function() {
			var point = jQuery(this).data('point')+1;
			var page = Math.ceil(point/_Test.questions_per_page);
			var x = point - (Math.floor(point/_Test.questions_per_page)*_Test.questions_per_page);
			if(_Test.questions_number>_Test.questions_per_page)
				$test_content.find('ul').pagination('selectPage', page);
			window.scrollTo(0,jQuery('.test-question:eq('+(x-1)+')').position().top);
		});
		$test_submit.text('Nộp bài');
		$test_action.removeClass('inactive').find('.test-submit').unbind('click').bind('click', _test_confirm_finish);
	};

	var _test_confirm_finish = function() {
		swal({
			title: "Nộp bài?",
			text: "Bạn chắc chắn nộp bài chứ !",
			icon: "warning",
			buttons: ["Không, chưa làm xong", "Nộp bài"],
		}).then((ok) => {
			if (ok) _test_finish();
		})
	};

	var _test_result_text = function(score, pass, total) {
		let time = ms_to_time(Date.now() - _Test.time_start);
		return '<div class="score-board"><div><p>Điểm</p><p>Số câu đúng</p><p>Thời gian</p></div><div><p>'+score+'</p><p><span>'+pass+'</span>/'+total+'</p><p>'+time+'</p></div></div>'
	};

	var _test_finish = function(force) {
		let need_select = [];
		let $paragraph_answer = document.querySelectorAll('.editor-editor');
		for (let i in _Test.user_results) {
			if (_Test.user_results[i] === _Test.no_answer_mark) need_select.push(i)
		}
		if($paragraph_answer.length > 0) {
			for (let i in $paragraph_answer) {
				let item = $paragraph_answer[i];
				if(item.nextElementSibling) {
					let index = find_index_in_array(item.nextElementSibling.dataset.question, _Test.questions_list);
					if(_Test.user_results[i] === _Test.no_answer_mark) 
						_Test.user_results[index] = prepare_text_update(item.innerHTML)
				}
			}
		}
		if (force || need_select.length == 0) {
			_test_commit(_Test.user_results);
		} else {
			swal({
				title: 'Thông báo!',
				text: 'Bạn còn '+need_select.length+' câu chưa chọn đáp án',
				buttons: ['Vẫn nộp', 'Làm nốt'],
				icon: 'warning',
			}).then((ok) => {
				if (!ok) {
					clearInterval(_Test.time_interval);
					_test_commit(_Test.user_results)
				} else _test_go_to_question(need_select[0]);
			})
		}
	}

	function _test_go_to_question(q) {
		let that = jQuery('.test-question:eq('+q+')').position();
		window.scrollTo(0,that.top)
	};

	function _test_commit(user_answers) {
		let arr = [].concat.apply([], user_answers);
		let result = calculate_test_result(arr, _Test.cheatsheet.split(','));
		_test_action(result);
	};

	function _test_show_result(sheet) {
		$test_control.find('li').addClass('fail');
		$test_submit.text('Làm lại');
		$test_submit.unbind('click').bind('click', function(e) {
			e.preventDefault();
			location.reload()
		})
		_test_display_result(sheet)
	};

	function _test_display_result(sheet) {
		_Test.cheatsheet = sheet;
		let $question = jQuery('.test-question');
		$question.find('input').prop('disabled', true);
		for (let i = 0, len = sheet.length; i < len; i++) {
			let question_pos = i - _Test.current_page*_Test.questions_per_page;
			if(Array.isArray(sheet[i])) {
				for (let j = 0; j < sheet[i].length; j++) 
					_test_highlight_result(i, jQuery($question[question_pos]), sheet[i][j])
			} else _test_highlight_result(i, jQuery($question[question_pos]), sheet[i])
		}
	};

	function _test_highlight_result(x, question, index) {
		let obj = question.find('label:eq('+index+')');
		question.removeClass('text-danger').find('input:checked').parents('label').addClass('check-danger');
		if(obj.hasClass('check-danger')) $test_control.find('li:eq('+x+')').removeClass('fail');
		obj.addClass('check-success');
		obj.find('span:eq(0)').addClass('checked');
	};

	function _test_action(res) {
		let div = document.createElement('div');
		div.innerHTML = _test_result_text(res.score, res.pass, _Test.questions_number);
		let options = {
			title: 'Kết quả!',
			content: div,
			icon: (res.pass > (_Test.questions_number/2)) ? 'success' : 'warning',
			closeOnClickOutside: false,
			closeOnEsc: false,
		}, func = null, action = _Test.action;
		if(action) {
			if(action === 'srrw' || action === 'srrwsg') {
				Object.assign(options, {
					buttons: ['Xem đáp án', 'Làm lại'],
				});
				func = (ok) => {
					if (ok) location.reload()
					else _test_show_result(res.cheatsheet);
				}
			} else if(action === 'sr') {
				Object.assign(options, {
					buttons: [false, 'Xem đáp án'],
				});
				func = (ok) => {
					if(ok) _test_show_result(res.cheatsheet)
				}
			} else if(action === 'rw') {
				$test_action.remove();
				Object.assign(options, {
					buttons: [false, 'Làm lại'],
				});
				func = (ok) => {
					if(ok) location.reload()
				}
			}
		} else {
			options = {
				title: 'Đã nộp!',
				text: 'Bài của bạn đã được nộp',
				icon: 'success',
				buttons: false,
				closeOnClickOutside: false,
				closeOnEsc: false,
			}
			$test_action.remove()
		}
		swal(options).then(func)
	};

	function calculate_test_result(answers, cheatsheet) {
		let result = { score: 0, pass: 0, cheatsheet: cheatsheet };
		let score_avg = 10/cheatsheet.length;
		let checker = true;
		let marker = 0;
		for (let i = 0; i < cheatsheet.length; i++) {
			if(Array.isArray(cheatsheet[i])) {
				let tmp = cheatsheet[i].sort(function(a, b){return a-b});
				for (let j = 0; j < tmp.length; j++) {
					if (tmp[j] != answers[i+j]) checker = false;
					marker = j;
				}
				if(checker) {
					result.pass++;
					result.score += score_avg;
				}
			} else if (cheatsheet[i] == answers[i + marker]) {
				result.pass++;
				result.score += score_avg;
				marker = 0;
			}
		}
		result.score = result.score.toFixed(2)
		return result;
	};

	function prepare_question_for_test(questions, _shuffle, parent_label, parent_id, sub_question, sub_answer) {
		let res = { questions: [], answers: [] };
		questions.forEach(function(question, index) {
			if (typeof question._id == 'undefined') question._id = Math.random().toString(36).substring(7)+Date.now();
			if (!question.draft) {
				let list_answer = [], input_type = 'radio', tmp_answer,
				info, info_id = question.form+'-'+question.info,
				label = Titles.return_question_label(question.info);

				if(!parent_label) if (!Array.isArray(res.questions[info_id])) {
					info = Titles.return_question_title(question.form, question.info);
					res.questions[info_id] = [];
					res.answers[info_id] = []
				}
				if (question.form === 'true-false') {
					list_answer = ['Đúng','Sai'];
					if (question.answers[0] && question.answers[0].is_correct) {
						if(_shuffle.answer) tmp_answer = 'Đúng'
						else tmp_answer = 0
					} else tmp_answer = 1
				}

				if (question.form === 'one-answer') {
					for (let i = 0; i < question.answers.length; i++) {
						if(question.answers[i]) {
							if(question.answers[i].attachment) {
								question.answers[i].text += '@media@'+format_link_media(question.answers[i].attachment, question.creator)
							}
							if (question.answers[i].text != '') {
								list_answer.push(question.answers[i].text);
								if (question.answers[i].is_correct) 
									if(_shuffle.answer) tmp_answer = question.answers[i].text
									else tmp_answer = i
							}
						}
					}
				}

				if (question.form === 'multi-answer') {
					input_type = 'checkbox';
					tmp_answer = [];
					for (let i = 0; i < question.answers.length; i++) { 
						if (question.answers[i] && question.answers[i].text != '') {
							list_answer.push(question.answers[i].text);
							if (question.answers[i].is_correct) 
								if(_shuffle.answer) tmp_answer.push(question.answers[i].text)
								else tmp_answer.push(i)
						}
					}
				}

				if (question.form === 'writing') {
					input_type = 'text';
					list_answer = undefined;
				}

				if (question.form === 'reading' || question.form === 'fill-in') {
					delete res.questions[info_id];
					delete res.answers[info_id];
					let _id = info_id+'-'+index;
					res.questions[_id] = [];
					res.answers[_id] = [];
					prepare_question_for_test(question.child, _shuffle, label, question._id, res.questions[_id], res.answers[_id]);
					res.questions[_id][0].info = info+'@break@'+question.question
				} else {
					if(_shuffle.answer) {
						let tmp_list_answer = shuffle(list_answer);
						if (Array.isArray(tmp_answer)) {
							tmp_answer.forEach(function(v, index) {
								for (let i = 0; i < tmp_list_answer.length; i++) {
									if(tmp_list_answer[i] == v) tmp_answer[index] = i;
								}
							})
							tmp_answer.reverse();
						} else {
							for (let i = 0; i < tmp_list_answer.length; i++) {
								if(tmp_list_answer[i] == tmp_answer) tmp_answer = i;
							}
						}
						list_answer = tmp_list_answer;
					}
					if(sub_answer) sub_answer.push(tmp_answer)
					else res.answers[info_id].push(tmp_answer);
					let insert = {
						question: (question.attachment) ? question.question+'@media@'+format_link_media(question.attachment, question.creator) : question.question,
						info: (info) ? info : null,
						answers: list_answer,
						type: input_type
					}
					if(sub_question) {
						insert.id = parent_id+'-'+index;
						insert.label = parent_label;
						sub_question.push(insert)
					} else {
						insert.id = question._id;
						insert.label = label;
						res.questions[info_id].push(insert)
					}
				}
			}
		});

		if (_shuffle.question) {
			res.questions = remove_array_key(res.questions);
			res.answers = remove_array_key(res.answers);
			for (let i = 0; i < res.questions.length; i++) {
				let tmp_q = res.questions[i][0];
				let tmp_a = res.answers[i][0];
				res.questions[i].shift();
				res.answers[i].shift();
				shuffle2(res.questions[i],res.answers[i]);
				res.questions[i].unshift(tmp_q);
				res.answers[i].unshift(tmp_a)
			}
			shuffle2(res.questions,res.answers)
		}
		return res;
	}
}

$.get('https://build-exam.abysnart.workers.dev/', res => {
	console.log(res)
	test_init(res)
})