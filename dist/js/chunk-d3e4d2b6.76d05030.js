(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d3e4d2b6"],{"160b":function(t,r,e){"use strict";e.r(r);var c=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("Wrapper",t._l(t.products,(function(t){return e("ProductCard",{key:t.id,attrs:{id:t.id,type:t.type,brand:t.brand,model:t.model,color:t.color,capacity:t.capacity,imgSrc:t.imgSrc,price:t.price}})})),1)},i=[],a=(e("4de4"),e("d3b7"),e("caad"),e("2532"),e("e915")),n=e("8c3d"),s={components:{ProductCard:a["a"],Wrapper:n["a"]},computed:{products:function(){return this.$store.getters["products"].filter((function(t){return t.type.includes("Tablet")}))}}},o=s,d=e("2877"),u=Object(d["a"])(o,c,i,!1,null,null,null);r["default"]=u.exports},2532:function(t,r,e){"use strict";var c=e("23e7"),i=e("e330"),a=e("5a34"),n=e("1d80"),s=e("577e"),o=e("ab13"),d=i("".indexOf);c({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~d(s(n(this)),s(a(t)),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,r,e){var c=e("861d"),i=e("c6b6"),a=e("b622"),n=a("match");t.exports=function(t){var r;return c(t)&&(void 0!==(r=t[n])?!!r:"RegExp"==i(t))}},"464c":function(t,r,e){"use strict";e("d8b9")},"4de4":function(t,r,e){"use strict";var c=e("23e7"),i=e("b727").filter,a=e("1dde"),n=a("filter");c({target:"Array",proto:!0,forced:!n},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5535:function(t,r,e){},"5a34":function(t,r,e){var c=e("da84"),i=e("44e7"),a=c.TypeError;t.exports=function(t){if(i(t))throw a("The method doesn't accept regular expressions");return t}},"8c3d":function(t,r,e){"use strict";var c=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"product-container"},[t._t("default")],2)])},i=[],a={name:"Wrapper"},n=a,s=(e("c832"),e("2877")),o=Object(s["a"])(n,c,i,!1,null,null,null);r["a"]=o.exports},ab13:function(t,r,e){var c=e("b622"),i=c("match");t.exports=function(t){var r=/./;try{"/./"[t](r)}catch(e){try{return r[i]=!1,"/./"[t](r)}catch(c){}}return!1}},c832:function(t,r,e){"use strict";e("5535")},caad:function(t,r,e){"use strict";var c=e("23e7"),i=e("4d64").includes,a=e("44d2");c({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},d8b9:function(t,r,e){},e915:function(t,r,e){"use strict";var c=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"product-card"},[e("div",{staticClass:"image-container"},[e("img",{staticClass:"img-style",attrs:{src:t.imgSrc,alt:t.brand+t.model}})]),e("p",{staticClass:"price-label"},[t._v("$ "+t._s(t.price.toFixed(2)))]),e("button",{staticClass:"btn_add",on:{click:t.addToCart}},[e("span",{staticClass:"add_text"},[t._v("Add to Cart")])]),e("span",{staticClass:"product-title"},[t._v(" "+t._s(t.brand)+" "+t._s(t.model)+" "+t._s(t.color)+" "+t._s(t.capacity)+" ")])])},i=[],a={name:"ProductCard",props:["id","type","brand","model","color","capacity","imgSrc","price"],methods:{addToCart:function(){this.$store.commit("addProductToCart",{id:this.id,type:this.type,brand:this.brand,model:this.model,color:this.color,capacity:this.capacity,imgSrc:this.imgSrc,price:this.price})}}},n=a,s=(e("464c"),e("2877")),o=Object(s["a"])(n,c,i,!1,null,"41d7aedf",null);r["a"]=o.exports}}]);
//# sourceMappingURL=chunk-d3e4d2b6.76d05030.js.map