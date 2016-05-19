!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){"use strict";function t(i,n){this.$element=e(i),this.options=e.extend({},t.DEFAULTS,e.isPlainObject(n)&&n),this.init()}var i=window.Mustache,n="qor.collection.sortable",o="enable."+n,s="disable."+n,r="click."+n,d=".qor-sortable__item",a=".qor-sortable__button-change",l=".qor-sortable__button-done",c=".qor-sortable__button-add",f=".qor-sortable__button-delete",u=".qor-sortable__button-move",h=".qor-sortable__action",m=".qor-sortable__action-position",b=".is-delete",p="load-sortable-collection";return t.prototype={constructor:t,init:function(){this.bind(),this.initItemOrder()},bind:function(){this.$element.on(r,e.proxy(this.click,this))},unbind:function(){this.$element.off(r,this.click)},initItemOrder:function(n){var o=this.$element.find(d).filter(":visible").not(b);if(o.size()){var s,r,a=o.find(h).find(m),l={},c=o.size(),f=o.first().html();a.size()&&a.remove(),r||(s=f.match(/(\w+)\="(\S*\[\d+\]\S*)"/),s.length&&(s=s[2],r=s.match(/^(\S*)\[(\d+)\]([^\[\]]*)$/),r.length&&(r=r[1]))),o.each(function(o){var s=e(this),d=s.find(h);l.isSelected=!1,l.itemTotal=c,l.itemIndex=o+1,d.prepend('<select class="qor-sortable__action-position"></select>');for(var a=1;c>=a;a++)l.index=a,l.itemIndex==a?l.isSelected=!0:l.isSelected=!1,d.find("select").append(i.render(t.OPTION_HTML,l));if(n){var f,u,m=e(this).find('[name^="'+r+'"]');m.size()&&m.each(function(){f=e(this).prop("name"),u="["+l.itemIndex+"]",f=f.replace(/\[\d+\]/,u),e(this).prop("name",f)})}s.data(l)})}},moveItem:function(t){var i,n,o=t.closest(d),s=o.data().itemIndex,r=o.find(m).val();r!=s&&(i=1==r?1:s>r?r-1:r,n=e(d).filter(function(){return e(this).data().itemIndex==i}),1==r?n.before(o.fadeOut("slow").fadeIn("slow")):n.after(o.fadeOut("slow").fadeIn("slow")),this.initItemOrder(!0))},click:function(t){var i=e(t.target),n=this.$element,o=n.find(d).filter(":visible").not(b);i.is(u)&&this.moveItem(i),i.is(l)&&(i.hide(),n.find(h).hide(),n.find(a).show(),n.find(c).show(),n.find(f).show()),i.is(a)&&o.size()&&(i.hide(),n.find(l).show(),n.find(h).show(),n.find(c).hide(),n.find(f).hide(),this.initItemOrder())},destroy:function(){this.unbind(),this.$element.removeData(n)}},t.DEFAULTS={},t.OPTION_HTML='<option value="[[index]]" [[#isSelected]]selected[[/isSelected]]>[[index]] of [[itemTotal]]</option>',t.plugin=function(i){return this.each(function(){var o,s=e(this),r=s.data(n);if(!r){if(/destroy/.test(i))return;s.data(n,r=new t(this,i))}"string"==typeof i&&e.isFunction(o=r[i])&&o.apply(r)})},e(function(){var i='[data-toggle="qor.collection.sortable"]';e("body").data(p)||(e("body").data(p,"true"),e(document).on(s,function(n){t.plugin.call(e(i,n.target),"destroy")}).on(o,function(n){t.plugin.call(e(i,n.target))}).triggerHandler(o))}),t});
//# sourceMappingURL=sorting-sortable-collection-edit.js.map