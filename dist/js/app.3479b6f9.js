(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],d=0,m=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(m.length)m.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},i=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"27b9":function(t,e,a){"use strict";var r=a("ad10"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a(t.layout,{tag:"component"},[a("router-view",{attrs:{layout:t.layout},on:{"update:layout":function(e){t.layout=e}}})],1)],1)},i=[],o=a("d415"),s={name:"App",data:function(){return{layout:"div"}},mounted:function(){localStorage.sws_cart?this.$store.dispatch("setCartItems",JSON.parse(localStorage.sws_cart)):(this.$store.dispatch("setCartItems",o),localStorage.sws_cart=JSON.stringify(this.$store.state.cartItems))}},c=s,u=a("2877"),l=Object(u["a"])(c,n,i,!1,null,null,null),d=l.exports,m=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Home"},[a("div",{staticClass:"items-div"},t._l(t.products,(function(e){return a("b-card",{key:e.itemid,staticClass:"m-1 store-item"},[a("b-img",{staticClass:"thumbnail fluid store-item-img",attrs:{center:"",src:e.image}}),a("b-card-text",{staticClass:"mt-2"},[a("h5",[t._v(t._s(e.manufacturer)+t._s(" ")+t._s(e.productName))]),a("p",[t._v(t._s(e.description))])]),a("b-button",{staticStyle:{"background-color":"#4e8410"},on:{click:function(a){return t.addToCart(e)}}},[t._v(" Add to Cart")])],1)})),1)])},f=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"LayoutDefault"},[a("Header"),a("main",{staticClass:"LayoutDefault__main container"},[t._t("default")],2)],1)},v=[],b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",[a("b-navbar",{attrs:{toggleable:"xl",type:"light",variant:"Light"}},[a("b-navbar-brand",{on:{click:t.navToHome}},[a("img",{attrs:{src:"https://media.sweetwater.com/api/i/f-webp__w-190__q-90__ha-f4546d53fe7e2931__hmac-a688b52eda3ea82987d2f7ba7fdad6cc81f97f4f/header/logo/sweetwater-logo.png.auto.webp",alt:"Sweetwater"}})]),a("b-icon",{staticClass:"ml-auto mr-3",staticStyle:{color:"#4e8410"},attrs:{icon:"cart3","font-scale":"2"},on:{click:t.navToCart}})],1)],1)])},y=[],_={name:"Header",methods:{navToCart:function(){this.$router.push("/cart").catch((function(){}))},navToHome:function(){this.$router.push("/").catch((function(){}))}}},g=_,w=Object(u["a"])(g,b,y,!1,null,null,null),C=w.exports,S={name:"LayoutDefault",components:{Header:C}},T=S,O=Object(u["a"])(T,h,v,!1,null,null,null),I=O.exports,$={name:"Home",data:function(){return{products:this.$store.state.inventory}},created:function(){this.$emit("update:layout",I)},updated:function(){localStorage.sws_cart=JSON.stringify(this.$store.state.cartItems)},methods:{addToCart:function(t){this.$store.dispatch("addToCart",t),localStorage.sws_cart=JSON.stringify(this.$store.state.cartItems)},testThis:function(t){t.quantity=1,console.log(t)}}},M=$,R=(a("27b9"),Object(u["a"])(M,p,f,!1,null,"874f10e2",null)),E=R.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.cartItems.length?a("div",{staticClass:"Cart"},[a("div",{staticClass:"items-div"},t._l(t.cartItems,(function(e){return a("b-card",{key:e.itemid,staticClass:"m-1 store-item"},[a("b-row",[a("b-col",[a("b-img",{staticClass:"thumbnail fluid store-item-img",attrs:{center:"",src:e.image}})],1),a("b-col",{attrs:{cols:"8",md:"6"}},[a("b-card-text",{staticClass:"mt-2"},[a("h5",[t._v(t._s(e.manufacturer)+t._s(" ")+t._s(e.productName))]),a("p",[t._v(t._s(e.description))]),a("p",[t._v("Price: $"+t._s(e.price.toFixed(2)))])])],1),a("b-col",{attrs:{cols:"6",md:"2"}},[a("p",[t._v("Quantity:")]),a("input",{attrs:{type:"number",min:"1",max:e.available},domProps:{value:e.quantity},on:{input:function(a){return t.updateQty(e,a.target.value)}}}),a("br"),a("b-button",{staticClass:"mt-2",staticStyle:{"background-color":"#0072ba"},attrs:{size:"sm"},on:{click:function(a){return t.removeFromCart(e)}}},[t._v(" Remove")])],1),a("b-col",{attrs:{cols:"6",md:"2"}},[a("strong",[t._v("$"+t._s((e.price*e.quantity).toFixed(2)))])])],1)],1)})),1),a("b-container",{staticClass:"subtotal m-5",attrs:{fluid:""}},[a("div",[a("strong",{staticClass:"mr-3"},[t._v("SUBTOTAL:")]),a("strong",[t._v(" $"+t._s(t.cartItems.reduce((function(t,e){return t+e.price*e.quantity}),0).toFixed(2))+" ")])])])],1):a("div",{staticClass:"noCart"},[t._v("There are no items in your cart.")])},j=[],x={name:"Cart",computed:{cartTotal:function(){return this.$store.cartItems}},data:function(){return{cartItems:this.$store.state.cartItems}},created:function(){this.$emit("update:layout",I)},updated:function(){localStorage.sws_cart=JSON.stringify(this.$store.state.cartItems)},methods:{removeFromCart:function(t){this.$store.dispatch("removeFromCart",t)},updateQty:function(t,e){this.$store.dispatch("updateQty",{item:t,value:e})},testThis:function(t){t.quantity=1,console.log(t)}}},A=x,H=(a("5d52"),Object(u["a"])(A,P,j,!1,null,"ca8acd96",null)),k=H.exports,D=[{path:"/",component:E},{path:"/cart",component:k}],N=(a("7db0"),a("c740"),a("fb6a"),a("a434"),a("5530")),q=a("2f62");r["default"].use(q["a"]);var F=new q["a"].Store({state:{inventory:[],cartItems:[]},mutations:{SET_INVENTORY:function(t,e){t.inventory=e},SET_CART_ITEMS:function(t,e){t.cartItems=e},ADD_TO_CART:function(t,e){console.log("PAYLOAD=>",e);var a=t.inventory.find((function(t){return t.itemid===e.itemid})),r=t.cartItems.find((function(t){return t.itemid===e.itemid}));console.log("PRODUCT=>",a),console.log("CARTPRODUCT=>",r),r?r.quantity++:t.cartItems.push(Object(N["a"])(Object(N["a"])({},a),{},{quantity:1}))},REMOVE_FROM_CART:function(t,e){var a=t.cartItems.findIndex((function(t){return t.itemid===e.itemid}));t.cartItems.splice(a,1)},UPDATE_QTY:function(t,e){var a=e.item,r=e.value,n=t.cartItems.find((function(t){return t.itemid===a.itemid}));n&&(n.quantity=r)}},actions:{setCartItems:function(t,e){var a=t.commit;a("SET_CART_ITEMS",e)},addToCart:function(t,e){var a=t.commit;a("ADD_TO_CART",e)},removeFromCart:function(t,e){var a=t.commit;a("REMOVE_FROM_CART",e)},updateQty:function(t,e){var a=t.commit;a("UPDATE_QTY",e)}}});(function(){F.commit("SET_INVENTORY",o.slice())})();var J=a("5f5b"),B=a("b1e0");a("f9e3"),a("2dd8");r["default"].use(J["a"]),r["default"].use(B["a"]),r["default"].config.productionTip=!1,r["default"].use(m["a"]);var G=new m["a"]({routes:D,mode:"history"});new r["default"]({render:function(t){return t(d)},router:G,store:F}).$mount("#app")},"5d52":function(t,e,a){"use strict";var r=a("d854"),n=a.n(r);n.a},ad10:function(t,e,a){},d415:function(t){t.exports=JSON.parse('[{"image":"https://media.sweetwater.com/images/items/120/SM57-medium.jpg","url":"https://www.sweetwater.com/store/detail/SM57","manufacturer":"Shure","productName":"Sm57","itemid":"SM57","quantity":1,"price":99,"description":"Dynamic Microphone with Cardioid Pickup Pattern, 40Hz-15kHz Frequency Response, Low Impedance, Includes Stand Adapter, and Zippered Carrying Case","available":9},{"image":"https://media.sweetwater.com/images/guitars/SGS17HCCH/170099523/170099523-body-small.jpg","url":"https://www.sweetwater.com/store/detail/SGS17HCCH/sn170099523","manufacturer":"Gibson","productName":"SG Standard 2017 T - Heritage Cherry","itemid":"SGS17HCCH","quantity":1,"price":1169,"serial":170099523,"description":"Solidbody Electric Guitar with Mahogany Body, Mahogany Neck, Rosewood Fingerboard, and 2 Humbucking Pickups - Heritage Cherry","available":1},{"image":"https://media.sweetwater.com/images/items/120/SM58-medium.jpg","url":"https://www.sweetwater.com/store/detail/SM58","manufacturer":"Shure","productName":"SM58","itemid":"SM58","quantity":3,"price":99,"description":"Dynamic Vocal Microphone with Cardioid Pickup Pattern and 50Hz-15kHz Frequency Response, Includes Stand Adapter, and Zippered Carrying Case","available":6},{"image":"https://media.sweetwater.com/images/items/120/R16-medium.jpg","url":"https://www.sweetwater.com/store/detail/R16","manufacturer":"Zoom","productName":"R16","itemid":"R16","quantity":1,"price":399.99,"description":"16-track Portable SD Recorder, USB Audio Interface, and DAW Control Surface with 8 Microphone Inputs, Built-in Stereo Condenser Microphones, Built-in Effects, 1GB SD Card, and USB - Mac/PC","available":14}]')},d854:function(t,e,a){}});
//# sourceMappingURL=app.3479b6f9.js.map