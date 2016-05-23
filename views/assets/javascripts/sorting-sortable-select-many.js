!function(t){"use strict";"function"==typeof define&&define.amd?define(t):"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=t():"undefined"!=typeof Package?Sortable=t():window.Sortable=t()}(function(){"use strict";function t(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(t);this.el=t,this.options=e=m({},e),t[X]=this;var n={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(t.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",ignore:"a, img",filter:null,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1};for(var i in n)!(i in e)&&(e[i]=n[i]);z(e);for(var a in this)"_"===a.charAt(0)&&(this[a]=this[a].bind(this));this.nativeDraggable=e.forceFallback?!1:H,o(t,"mousedown",this._onTapStart),o(t,"touchstart",this._onTapStart),this.nativeDraggable&&(o(t,"dragover",this),o(t,"dragenter",this)),F.push(this._onDragOver),e.store&&this.sort(e.store.get(this))}function e(t){D&&D.state!==t&&(s(D,"display",t?"none":""),!t&&D.state&&w.insertBefore(D,b),D.state=t)}function n(t,e,n){if(t){n=n||q,e=e.split(".");var i=e.shift().toUpperCase(),o=new RegExp("\\s("+e.join("|")+")(?=\\s)","g");do if(">*"===i&&t.parentNode===n||(""===i||t.nodeName.toUpperCase()==i)&&(!e.length||((" "+t.className+" ").match(o)||[]).length==e.length))return t;while(t!==n&&(t=t.parentNode))}return null}function i(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.preventDefault()}function o(t,e,n){t.addEventListener(e,n,!1)}function a(t,e,n){t.removeEventListener(e,n,!1)}function r(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(k," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace(k," ")}}function s(t,e,n){var i=t&&t.style;if(i){if(void 0===n)return q.defaultView&&q.defaultView.getComputedStyle?n=q.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in i||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px")}}function l(t,e,n){if(t){var i=t.getElementsByTagName(e),o=0,a=i.length;if(n)for(;a>o;o++)n(i[o],o);return i}return[]}function d(t,e,n,i,o,a,r){var s=q.createEvent("Event"),l=(t||e[X]).options,d="on"+n.charAt(0).toUpperCase()+n.substr(1);s.initEvent(n,!0,!0),s.to=e,s.from=o||e,s.item=i||e,s.clone=D,s.oldIndex=a,s.newIndex=r,e.dispatchEvent(s),l[d]&&l[d].call(t,s)}function c(t,e,n,i,o,a){var r,s,l=t[X],d=l.options.onMove;return r=q.createEvent("Event"),r.initEvent("move",!0,!0),r.to=e,r.from=t,r.dragged=n,r.draggedRect=i,r.related=o||e,r.relatedRect=a||e.getBoundingClientRect(),t.dispatchEvent(r),d&&(s=d.call(l,r)),s}function h(t){t.draggable=!1}function u(){j=!1}function f(t,e){var n=t.lastElementChild,i=n.getBoundingClientRect();return(e.clientY-(i.top+i.height)>5||e.clientX-(i.right+i.width)>5)&&n}function p(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n);return i.toString(36)}function g(t){var e=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"!==t.nodeName.toUpperCase()&&e++;return e}function v(t,e){var n,i;return function(){void 0===n&&(n=arguments,i=this,setTimeout(function(){1===n.length?t.call(i,n[0]):t.apply(i,n),n=void 0},e))}}function m(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}var b,_,y,D,w,T,S,x,C,E,N,O,I,B,A,L,M,$={},k=/\s+/g,X="Sortable"+(new Date).getTime(),Y=window,q=Y.document,R=Y.parseInt,H=!!("draggable"in q.createElement("div")),U=function(t){return t=q.createElement("x"),t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}(),j=!1,P=Math.abs,F=([].slice,[]),W=v(function(t,e,n){if(n&&e.scroll){var i,o,a,r,s=e.scrollSensitivity,l=e.scrollSpeed,d=t.clientX,c=t.clientY,h=window.innerWidth,u=window.innerHeight;if(x!==n&&(S=e.scroll,x=n,S===!0)){S=n;do if(S.offsetWidth<S.scrollWidth||S.offsetHeight<S.scrollHeight)break;while(S=S.parentNode)}S&&(i=S,o=S.getBoundingClientRect(),a=(P(o.right-d)<=s)-(P(o.left-d)<=s),r=(P(o.bottom-c)<=s)-(P(o.top-c)<=s)),a||r||(a=(s>=h-d)-(s>=d),r=(s>=u-c)-(s>=c),(a||r)&&(i=Y)),$.vx===a&&$.vy===r&&$.el===i||($.el=i,$.vx=a,$.vy=r,clearInterval($.pid),i&&($.pid=setInterval(function(){i===Y?Y.scrollTo(Y.pageXOffset+a*l,Y.pageYOffset+r*l):(r&&(i.scrollTop+=r*l),a&&(i.scrollLeft+=a*l))},24)))}},30),z=function(t){var e=t.group;e&&"object"==typeof e||(e=t.group={name:e}),["pull","put"].forEach(function(t){t in e||(e[t]=!0)}),t.groups=" "+e.name+(e.put.join?" "+e.put.join(" "):"")+" "};return t.prototype={constructor:t,_onTapStart:function(t){var e=this,i=this.el,o=this.options,a=t.type,r=t.touches&&t.touches[0],s=(r||t).target,l=s,c=o.filter;if(!("mousedown"===a&&0!==t.button||o.disabled)&&(s=n(s,o.draggable,i))){if(O=g(s),"function"==typeof c){if(c.call(this,t,s,this))return d(e,l,"filter",s,i,O),void t.preventDefault()}else if(c&&(c=c.split(",").some(function(t){return t=n(l,t.trim(),i),t?(d(e,t,"filter",s,i,O),!0):void 0})))return void t.preventDefault();o.handle&&!n(l,o.handle,i)||this._prepareDragStart(t,r,s)}},_prepareDragStart:function(t,e,n){var i,a=this,s=a.el,d=a.options,c=s.ownerDocument;n&&!b&&n.parentNode===s&&(A=t,w=s,b=n,_=b.parentNode,T=b.nextSibling,B=d.group,i=function(){a._disableDelayedDrag(),b.draggable=!0,r(b,a.options.chosenClass,!0),a._triggerDragStart(e)},d.ignore.split(",").forEach(function(t){l(b,t.trim(),h)}),o(c,"mouseup",a._onDrop),o(c,"touchend",a._onDrop),o(c,"touchcancel",a._onDrop),d.delay?(o(c,"mouseup",a._disableDelayedDrag),o(c,"touchend",a._disableDelayedDrag),o(c,"touchcancel",a._disableDelayedDrag),o(c,"mousemove",a._disableDelayedDrag),o(c,"touchmove",a._disableDelayedDrag),a._dragStartTimer=setTimeout(i,d.delay)):i())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),a(t,"mouseup",this._disableDelayedDrag),a(t,"touchend",this._disableDelayedDrag),a(t,"touchcancel",this._disableDelayedDrag),a(t,"mousemove",this._disableDelayedDrag),a(t,"touchmove",this._disableDelayedDrag)},_triggerDragStart:function(t){t?(A={target:b,clientX:t.clientX,clientY:t.clientY},this._onDragStart(A,"touch")):this.nativeDraggable?(o(b,"dragend",this),o(w,"dragstart",this._onDragStart)):this._onDragStart(A,!0);try{q.selection?q.selection.empty():window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(){w&&b&&(r(b,this.options.ghostClass,!0),t.active=this,d(this,w,"start",b,w,O))},_emulateDragOver:function(){if(L){if(this._lastX===L.clientX&&this._lastY===L.clientY)return;this._lastX=L.clientX,this._lastY=L.clientY,U||s(y,"display","none");var t=q.elementFromPoint(L.clientX,L.clientY),e=t,n=" "+this.options.group.name,i=F.length;if(e)do{if(e[X]&&e[X].options.groups.indexOf(n)>-1){for(;i--;)F[i]({clientX:L.clientX,clientY:L.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);U||s(y,"display","")}},_onTouchMove:function(e){if(A){t.active||this._dragStarted(),this._appendGhost();var n=e.touches?e.touches[0]:e,i=n.clientX-A.clientX,o=n.clientY-A.clientY,a=e.touches?"translate3d("+i+"px,"+o+"px,0)":"translate("+i+"px,"+o+"px)";M=!0,L=n,s(y,"webkitTransform",a),s(y,"mozTransform",a),s(y,"msTransform",a),s(y,"transform",a),e.preventDefault()}},_appendGhost:function(){if(!y){var t,e=b.getBoundingClientRect(),n=s(b),i=this.options;y=b.cloneNode(!0),r(y,i.ghostClass,!1),r(y,i.fallbackClass,!0),s(y,"top",e.top-R(n.marginTop,10)),s(y,"left",e.left-R(n.marginLeft,10)),s(y,"width",e.width),s(y,"height",e.height),s(y,"opacity","0.8"),s(y,"position","fixed"),s(y,"zIndex","100000"),s(y,"pointerEvents","none"),i.fallbackOnBody&&q.body.appendChild(y)||w.appendChild(y),t=y.getBoundingClientRect(),s(y,"width",2*e.width-t.width),s(y,"height",2*e.height-t.height)}},_onDragStart:function(t,e){var n=t.dataTransfer,i=this.options;this._offUpEvents(),"clone"==B.pull&&(D=b.cloneNode(!0),s(D,"display","none"),w.insertBefore(D,b)),e?("touch"===e?(o(q,"touchmove",this._onTouchMove),o(q,"touchend",this._onDrop),o(q,"touchcancel",this._onDrop)):(o(q,"mousemove",this._onTouchMove),o(q,"mouseup",this._onDrop)),this._loopId=setInterval(this._emulateDragOver,50)):(n&&(n.effectAllowed="move",i.setData&&i.setData.call(this,n,b)),o(q,"drop",this),setTimeout(this._dragStarted,0))},_onDragOver:function(t){var i,o,a,r=this.el,l=this.options,d=l.group,h=d.put,p=B===d,g=l.sort;if(void 0!==t.preventDefault&&(t.preventDefault(),!l.dragoverBubble&&t.stopPropagation()),M=!0,B&&!l.disabled&&(p?g||(a=!w.contains(b)):B.pull&&h&&(B.name===d.name||h.indexOf&&~h.indexOf(B.name)))&&(void 0===t.rootEl||t.rootEl===this.el)){if(W(t,l,this.el),j)return;if(i=n(t.target,l.draggable,r),o=b.getBoundingClientRect(),a)return e(!0),void(D||T?w.insertBefore(b,D||T):g||w.appendChild(b));if(0===r.children.length||r.children[0]===y||r===t.target&&(i=f(r,t))){if(i){if(i.animated)return;m=i.getBoundingClientRect()}e(p),c(w,r,b,o,i,m)!==!1&&(b.contains(r)||(r.appendChild(b),_=r),this._animate(o,b),i&&this._animate(m,i))}else if(i&&!i.animated&&i!==b&&void 0!==i.parentNode[X]){C!==i&&(C=i,E=s(i),N=s(i.parentNode));var v,m=i.getBoundingClientRect(),S=m.right-m.left,x=m.bottom-m.top,O=/left|right|inline/.test(E.cssFloat+E.display)||"flex"==N.display&&0===N["flex-direction"].indexOf("row"),I=i.offsetWidth>b.offsetWidth,A=i.offsetHeight>b.offsetHeight,L=(O?(t.clientX-m.left)/S:(t.clientY-m.top)/x)>.5,$=i.nextElementSibling,k=c(w,r,b,o,i,m);if(k!==!1){if(j=!0,setTimeout(u,30),e(p),1===k||-1===k)v=1===k;else if(O){var Y=b.offsetTop,q=i.offsetTop;v=Y===q?i.previousElementSibling===b&&!I||L&&I:q>Y}else v=$!==b&&!A||L&&A;b.contains(r)||(v&&!$?r.appendChild(b):i.parentNode.insertBefore(b,v?$:i)),_=b.parentNode,this._animate(o,b),this._animate(m,i)}}}},_animate:function(t,e){var n=this.options.animation;if(n){var i=e.getBoundingClientRect();s(e,"transition","none"),s(e,"transform","translate3d("+(t.left-i.left)+"px,"+(t.top-i.top)+"px,0)"),e.offsetWidth,s(e,"transition","all "+n+"ms"),s(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=setTimeout(function(){s(e,"transition",""),s(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;a(q,"touchmove",this._onTouchMove),a(t,"mouseup",this._onDrop),a(t,"touchend",this._onDrop),a(t,"touchcancel",this._onDrop)},_onDrop:function(e){var n=this.el,i=this.options;clearInterval(this._loopId),clearInterval($.pid),clearTimeout(this._dragStartTimer),a(q,"mousemove",this._onTouchMove),this.nativeDraggable&&(a(q,"drop",this),a(n,"dragstart",this._onDragStart)),this._offUpEvents(),e&&(M&&(e.preventDefault(),!i.dropBubble&&e.stopPropagation()),y&&y.parentNode.removeChild(y),b&&(this.nativeDraggable&&a(b,"dragend",this),h(b),r(b,this.options.ghostClass,!1),r(b,this.options.chosenClass,!1),w!==_?(I=g(b),I>=0&&(d(null,_,"sort",b,w,O,I),d(this,w,"sort",b,w,O,I),d(null,_,"add",b,w,O,I),d(this,w,"remove",b,w,O,I))):(D&&D.parentNode.removeChild(D),b.nextSibling!==T&&(I=g(b),I>=0&&(d(this,w,"update",b,w,O,I),d(this,w,"sort",b,w,O,I)))),t.active&&(null!==I&&-1!==I||(I=O),d(this,w,"end",b,w,O,I),this.save())),w=b=_=y=T=D=S=x=A=L=M=I=C=E=B=t.active=null)},handleEvent:function(t){var e=t.type;"dragover"===e||"dragenter"===e?b&&(this._onDragOver(t),i(t)):"drop"!==e&&"dragend"!==e||this._onDrop(t)},toArray:function(){for(var t,e=[],i=this.el.children,o=0,a=i.length,r=this.options;a>o;o++)t=i[o],n(t,r.draggable,this.el)&&e.push(t.getAttribute(r.dataIdAttr)||p(t));return e},sort:function(t){var e={},i=this.el;this.toArray().forEach(function(t,o){var a=i.children[o];n(a,this.options.draggable,i)&&(e[t]=a)},this),t.forEach(function(t){e[t]&&(i.removeChild(e[t]),i.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return n(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;return void 0===e?n[t]:(n[t]=e,void("group"===t&&z(n)))},destroy:function(){var t=this.el;t[X]=null,a(t,"mousedown",this._onTapStart),a(t,"touchstart",this._onTapStart),this.nativeDraggable&&(a(t,"dragover",this),a(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),F.splice(F.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},t.utils={on:o,off:a,css:s,find:l,is:function(t,e){return!!n(t,e,t)},extend:m,throttle:v,closest:n,toggleClass:r,index:g},t.create=function(e,n){return new t(e,n)},t.version="1.4.2",t}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function(t){"use strict";function e(n,i){this.$element=t(n),this.options=t.extend({},e.DEFAULTS,t.isPlainObject(i)&&i),this.init()}var n="qor.chooser.sortable",i="enable."+n,o="click."+n,a="disable."+n,r=".chosen-container-multi",s=".search-choice",l=".chosen-container",d=".qor-dragable",c=".qor-dragable__list",h=".qor-dragable__list-handle",u=".qor-dragable__list-delete",f=".qor-dragable__list-data",p=".qor-dragable__button-add",g="sortable-select-many-loaded";return e.prototype={constructor:e,init:function(){var e=this.$element,n=e.parents(d),i=this;this.$selector=n.find(f),this.$sortableList=n.find(c),this.$parent=n;var o=n.find(c)[0];this.sortable=window.Sortable.create(o,{animation:150,handle:h,filter:u,dataIdAttr:"data-index",onFilter:function(e){var n=t(e.item),o=n.data("index");n.remove(),i.removeItems(o)},onUpdate:function(){i.renderOption()}}),e.prop("multiple")||(e.children("[selected]").length?e.prepend('<option value=""></option>'):e.prepend('<option value="" selected></option>')),e.on("chosen:ready",function(e,i){t(i.chosen.search_field).attr("placeholder",this.$element.data("placeholder")),n.find(s).hide(),n.find(l).hide()}.bind(this)),e.chosen({allow_single_deselect:!0,search_contains:!0,disable_search_threshold:10,width:"100%",display_selected_options:!1}).on("change",function(e,i){var o=t(e.target),a=o.next(r),l=i.selected;a.size()&&(n.find(s).hide(),l&&this.addItems(l))}.bind(this)),this.bind()},bind:function(){this.$parent.on(o,p,this.show.bind(this))},unbind:function(){this.$parent.off(o,p,this.show)},show:function(){this.$parent.find(l).show().find(".search-field input").click(),this.$parent.find(p).hide()},renderItem:function(t){return window.Mustache.render(e.LIST_HTML,t)},renderOption:function(){var t=this.sortable.toArray(),n=this.$selector;n.empty(),window._.each(t,function(t){n.append(window.Mustache.render(e.OPTION_HTML,{value:t}))})},removeItems:function(t){var e=this.$element,n=e.find('[data-index="'+t+'"]'),i=e.find("option").index(n);this.$parent.find(s).find('[data-option-array-index="'+i+'"]').click(),this.renderOption()},addItems:function(t){var e=this.$element,n=e.find('option[value="'+t+'"]').data();this.$sortableList.append(this.renderItem(n)),this.renderOption()},destroy:function(){this.sortable.destroy(),this.unbind(),this.$element.chosen("destroy").removeData(n)}},e.DEFAULTS={},e.LIST_HTML='<li data-index=[[index]] data-value=[[value]]><span>[[value]]</span><i class="material-icons qor-dragable__list-delete">clear</i><i class="material-icons qor-dragable__list-handle">drag_handle</i></li>',e.OPTION_HTML="<option selected value=[[value]]></option>",e.plugin=function(i){return this.each(function(){var o,a=t(this),r=a.data(n);if(!r){if(!t.fn.chosen)return;if(/destroy/.test(i))return;a.data(n,r=new e(this,i))}"string"==typeof i&&t.isFunction(o=r[i])&&o.apply(r)})},t(function(){var n='select[data-toggle="qor.chooser.sortable"]';t("body").data(g)||(t("body").data(g,!0),t(document).on(a,function(i){e.plugin.call(t(n,i.target),"destroy")}).on(i,function(i){e.plugin.call(t(n,i.target))}).triggerHandler(i))}),e});
//# sourceMappingURL=sorting-sortable-select-many.js.map
