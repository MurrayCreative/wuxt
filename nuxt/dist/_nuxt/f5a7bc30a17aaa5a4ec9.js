(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{377:function(e,t,n){"use strict";n.r(t);n(44);var r=n(5),o={props:{page:{type:Object,required:!0}}},c=n(1),l=Object(c.a)(o,function(){var e=this.$createElement,t=this._self._c||e;return t("main",[t("h1",{staticClass:"wp__title",domProps:{innerHTML:this._s(this.page.title.rendered)}}),this._v(" "),t("div",{staticClass:"wp__content",domProps:{innerHTML:this._s(this.page.content.rendered)}})])},[],!1,null,"b7d25226",null).exports,h={props:{post:{type:Object,required:!0}}},d=Object(c.a)(h,function(){var e=this.$createElement,t=this._self._c||e;return t("main",[t("h1",{staticClass:"wp__title",domProps:{innerHTML:this._s(this.post.title.rendered)}}),this._v(" "),t("div",{staticClass:"wp__content",domProps:{innerHTML:this._s(this.post.content.rendered)}})])},[],!1,null,null,null).exports,_=n(122),f={fetch:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(t){var n,r,o,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,r=t.error,o=t.app,c=t.route,e.prev=1,e.next=4,n.dispatch("page/fetchPage",{app:o,route:c,error:r});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0.message);case 9:case"end":return e.stop()}},e,null,[[1,6]])}));return function(t){return e.apply(this,arguments)}}(),computed:Object(_.b)({single:function(e){return e.page.single}}),components:{Page:l,Post:d}},m=Object(c.a)(f,function(){var e=this.$createElement,t=this._self._c||e;return"page"===this.single.type?t("Page",{attrs:{page:this.single}}):t("Post",{attrs:{post:this.single}})},[],!1,null,null,null);t.default=m.exports}}]);