(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{dRtE:function(n,l,o){"use strict";o.r(l);var t=o("CcnG"),u=o("ZZ/e"),e=o("I0WS"),i=o("JdLd"),r=o("Rdf6"),c=function(n,l,o,t){return new(o||(o=Promise))(function(u,e){function i(n){try{c(t.next(n))}catch(l){e(l)}}function r(n){try{c(t.throw(n))}catch(l){e(l)}}function c(n){n.done?u(n.value):new o(function(l){l(n.value)}).then(i,r)}c((t=t.apply(n,l||[])).next())})},s=function(n,l){var o,t,u,e,i={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return e={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function r(e){return function(r){return function(e){if(o)throw new TypeError("Generator is already executing.");for(;i;)try{if(o=1,t&&(u=2&e[0]?t.return:e[0]?t.throw||((u=t.return)&&u.call(t),0):t.next)&&!(u=u.call(t,e[1])).done)return u;switch(t=0,u&&(e=[2&e[0],u.value]),e[0]){case 0:case 1:u=e;break;case 4:return i.label++,{value:e[1],done:!1};case 5:i.label++,t=e[1],e=[0];continue;case 7:e=i.ops.pop(),i.trys.pop();continue;default:if(!(u=(u=i.trys).length>0&&u[u.length-1])&&(6===e[0]||2===e[0])){i=0;continue}if(3===e[0]&&(!u||e[1]>u[0]&&e[1]<u[3])){i.label=e[1];break}if(6===e[0]&&i.label<u[1]){i.label=u[1],u=e;break}if(u&&i.label<u[2]){i.label=u[2],i.ops.push(e);break}u[2]&&i.ops.pop(),i.trys.pop();continue}e=l.call(n,i)}catch(r){e=[6,r],t=0}finally{o=u=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,r])}}},a=function(){function n(n,l,o,t,u,e){this.navCtrl=n,this.menuCtrl=l,this.popoverCtrl=o,this.alertCtrl=t,this.modalCtrl=u,this.toastCtrl=e,this.searchKey="",this.yourLocation="Chennai 600 072",this.vehicles=[{img:"assets/svg/car.svg",num:45},{img:"assets/svg/car1.svg",num:23},{img:"assets/svg/van.svg",num:32},{img:"assets/svg/bus.svg",num:13},{img:"assets/svg/auto.svg",num:27},{img:"assets/svg/load_vehicle.svg",num:0}],this.ads=[{img:"assets/img/ad1.jpg"},{img:"assets/img/ad2.jpg"}],this.slideOptions={initialSlide:1,speed:400}}return n.prototype.ionViewWillEnter=function(){this.menuCtrl.enable(!0)},n.prototype.slidesDidLoad=function(n){n.startAutoplay()},n.prototype.settings=function(){this.navCtrl.navigateForward("settings")},n.prototype.alertLocation=function(){return c(this,void 0,void 0,function(){var n=this;return s(this,function(l){switch(l.label){case 0:return[4,this.alertCtrl.create({header:"Change Location",inputs:[{name:"location",placeholder:"Enter your new Location",type:"text"}],buttons:[{text:"Cancel",handler:function(n){console.log("Cancel clicked")}},{text:"Change",handler:function(l){return c(n,void 0,void 0,function(){return s(this,function(n){switch(n.label){case 0:return console.log("Change clicked",l),this.yourLocation=l.location,[4,this.toastCtrl.create({message:"Location was change successfully",duration:3e3,position:"top",closeButtonText:"OK",showCloseButton:!0})];case 1:return n.sent().present(),[2]}})})}}]})];case 1:return l.sent().present(),[2]}})})},n.prototype.searchFilter=function(){return c(this,void 0,void 0,function(){return s(this,function(n){switch(n.label){case 0:return[4,this.modalCtrl.create({component:e.a})];case 1:return[4,n.sent().present()];case 2:return[2,n.sent()]}})})},n.prototype.presentImage=function(n){return c(this,void 0,void 0,function(){return s(this,function(l){switch(l.label){case 0:return[4,this.modalCtrl.create({component:i.a,componentProps:{value:n}})];case 1:return[4,l.sent().present()];case 2:return[2,l.sent()]}})})},n.prototype.notifications=function(n){return c(this,void 0,void 0,function(){return s(this,function(l){switch(l.label){case 0:return[4,this.popoverCtrl.create({component:r.a,event:n,animated:!0,showBackdrop:!0})];case 1:return[4,l.sent().present()];case 2:return[2,l.sent()]}})})},n}(),b=function(){return function(){}}(),p=o("pMnS"),h=o("oBZk"),d=o("ZYCi"),g=o("Ip0R"),m=t.nb({encapsulation:0,styles:[["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-light)}[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]{border-radius:0}[_nghost-%COMP%]   ion-card.no-radius[_ngcontent-%COMP%]{border-radius:0}[_nghost-%COMP%]   .vehicle-card[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{border:1px solid #662d91}[_nghost-%COMP%]   .vehicle-card[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-text.count-text[_ngcontent-%COMP%]{font-size:25px;font-weight:600}[_nghost-%COMP%]   .vehicle-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{border-bottom:.4px solid #662d91}[_nghost-%COMP%]   .location-text[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .slide-container[_ngcontent-%COMP%]{height:100px;background:#fff;padding-bottom:5px;border-bottom:1px dashed #c2c1c1}[_nghost-%COMP%]   ion-slides[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:2.8rem}[_nghost-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:98%;margin:10px 0;pointer-events:none}"]],data:{}});function f(n){return t.Fb(0,[(n()(),t.pb(0,0,null,null,2,"ion-slide",[],null,null,null,h.qb,h.E)),t.ob(1,49152,null,0,u.rb,[t.h,t.k,t.z],null,null),(n()(),t.pb(2,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null))],null,function(n,l){n(l,2,0,l.context.$implicit.img)})}function k(n){return t.Fb(0,[(n()(),t.pb(0,0,null,null,11,"ion-col",[["size","4"]],null,null,null,h.V,h.j)),t.ob(1,49152,null,0,u.u,[t.h,t.k,t.z],{size:[0,"size"]},null),(n()(),t.pb(2,0,null,0,9,"div",[["class","vehicle-card "],["routerLink","/cars"]],null,[[null,"click"]],function(n,l,o){var u=!0;return"click"===l&&(u=!1!==t.zb(n,3).onClick()&&u),"click"===l&&(u=!1!==t.zb(n,4).onClick(o)&&u),u},null,null)),t.ob(3,16384,null,0,d.n,[d.m,d.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.ob(4,737280,null,0,u.Pb,[g.g,u.Kb,t.k,d.m,[2,d.n]],null,null),(n()(),t.pb(5,0,null,null,6,"ion-card",[["class","bg-white ion-text-center "]],null,null,null,h.T,h.g)),t.ob(6,49152,null,0,u.n,[t.h,t.k,t.z],null,null),(n()(),t.pb(7,0,null,0,1,"ion-img",[],null,null,null,h.bb,h.p)),t.ob(8,49152,null,0,u.E,[t.h,t.k,t.z],{src:[0,"src"]},null),(n()(),t.pb(9,0,null,0,2,"ion-text",[["class","count-text"],["color","primary"]],null,null,null,h.tb,h.H)),t.ob(10,49152,null,0,u.yb,[t.h,t.k,t.z],{color:[0,"color"]},null),(n()(),t.Eb(11,0,[" "," "]))],function(n,l){n(l,1,0,"4"),n(l,3,0,"/cars"),n(l,4,0),n(l,8,0,l.context.$implicit.img),n(l,10,0,"primary")},function(n,l){n(l,11,0,l.context.$implicit.num)})}function v(n){return t.Fb(0,[(n()(),t.pb(0,0,null,null,23,"ion-header",[],null,null,null,h.Z,h.n)),t.ob(1,49152,null,0,u.C,[t.h,t.k,t.z],null,null),(n()(),t.pb(2,0,null,0,21,"ion-toolbar",[["color","primary"]],null,null,null,h.xb,h.L)),t.ob(3,49152,null,0,u.Db,[t.h,t.k,t.z],{color:[0,"color"]},null),(n()(),t.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,h.R,h.f)),t.ob(5,49152,null,0,u.m,[t.h,t.k,t.z],null,null),(n()(),t.pb(6,0,null,0,1,"ion-menu-button",[["color","light"]],null,null,null,h.hb,h.w)),t.ob(7,49152,null,0,u.S,[t.h,t.k,t.z],{color:[0,"color"]},null),(n()(),t.pb(8,0,null,0,6,"ion-title",[],null,null,null,h.vb,h.J)),t.ob(9,49152,null,0,u.Bb,[t.h,t.k,t.z],null,null),(n()(),t.pb(10,0,null,0,4,"ion-text",[["color","light"]],null,null,null,h.tb,h.H)),t.ob(11,49152,null,0,u.yb,[t.h,t.k,t.z],{color:[0,"color"]},null),(n()(),t.pb(12,0,null,0,2,"ion-text",[["class","fw700"],["color","light"]],null,null,null,h.tb,h.H)),t.ob(13,49152,null,0,u.yb,[t.h,t.k,t.z],{color:[0,"color"]},null),(n()(),t.Eb(-1,0,["Home"])),(n()(),t.pb(15,0,null,0,8,"ion-buttons",[["slot","end"]],null,null,null,h.R,h.f)),t.ob(16,49152,null,0,u.m,[t.h,t.k,t.z],null,null),(n()(),t.pb(17,0,null,0,6,"ion-button",[["color","medium"],["shape","round"],["size","small"]],null,[[null,"click"]],function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.notifications(o)&&t),t},h.Q,h.e)),t.ob(18,49152,null,0,u.l,[t.h,t.k,t.z],{color:[0,"color"],shape:[1,"shape"],size:[2,"size"]},null),(n()(),t.pb(19,0,null,0,1,"ion-icon",[["name","notifications"]],null,null,null,h.ab,h.o)),t.ob(20,49152,null,0,u.D,[t.h,t.k,t.z],{name:[0,"name"]},null),(n()(),t.pb(21,0,null,0,2,"ion-badge",[["color","dark"],["slot","end"]],null,null,null,h.P,h.d)),t.ob(22,49152,null,0,u.k,[t.h,t.k,t.z],{color:[0,"color"]},null),(n()(),t.Eb(-1,0,["2"])),(n()(),t.pb(24,0,null,null,19,"ion-card",[["class","no-radius"],["no-margin",""],["slot","fixed"]],null,null,null,h.T,h.g)),t.ob(25,49152,null,0,u.n,[t.h,t.k,t.z],null,null),t.ob(26,16384,null,0,u.e,[t.k],null,null),(n()(),t.pb(27,0,null,0,16,"ion-item",[["color","secondary"],["lines","none"]],null,null,null,h.db,h.r)),t.ob(28,49152,null,0,u.I,[t.h,t.k,t.z],{color:[0,"color"],lines:[1,"lines"]},null),(n()(),t.pb(29,0,null,0,9,"ion-label",[],null,null,null,h.eb,h.s)),t.ob(30,49152,null,0,u.O,[t.h,t.k,t.z],null,null),(n()(),t.pb(31,0,null,0,7,"h2",[["class","fw500 no-margin"],["no-margin",""]],null,null,null,null,null)),t.ob(32,16384,null,0,u.e,[t.k],null,null),(n()(),t.pb(33,0,null,null,2,"ion-text",[["color","medium"]],null,null,null,h.tb,h.H)),t.ob(34,49152,null,0,u.yb,[t.h,t.k,t.z],{color:[0,"color"]},null),(n()(),t.Eb(-1,0,["Location : "])),(n()(),t.pb(36,0,null,null,2,"ion-text",[["class","location-text"],["color","medium"]],null,null,null,h.tb,h.H)),t.ob(37,49152,null,0,u.yb,[t.h,t.k,t.z],{color:[0,"color"]},null),(n()(),t.Eb(38,0,["",""])),(n()(),t.pb(39,0,null,0,4,"ion-button",[["color","medium"],["fill","outline"],["shape","round"],["size","small"]],null,[[null,"click"]],function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.alertLocation()&&t),t},h.Q,h.e)),t.ob(40,49152,null,0,u.l,[t.h,t.k,t.z],{color:[0,"color"],fill:[1,"fill"],shape:[2,"shape"],size:[3,"size"]},null),(n()(),t.Eb(-1,0,[" Change "])),(n()(),t.pb(42,0,null,0,1,"ion-icon",[["name","locate"]],null,null,null,h.ab,h.o)),t.ob(43,49152,null,0,u.D,[t.h,t.k,t.z],{name:[0,"name"]},null),(n()(),t.pb(44,0,null,null,17,"ion-content",[],null,null,null,h.W,h.k)),t.ob(45,49152,null,0,u.v,[t.h,t.k,t.z],null,null),(n()(),t.pb(46,0,null,0,4,"div",[["class","slide-container"]],null,null,null,null,null)),(n()(),t.pb(47,0,null,null,3,"ion-slides",[["pager","true"]],null,[[null,"ionSlidesDidLoad"]],function(n,l,o){var u=!0;return"ionSlidesDidLoad"===l&&(u=!1!==n.component.slidesDidLoad(t.zb(n,48))&&u),u},h.rb,h.F)),t.ob(48,49152,[["slider",4]],0,u.sb,[t.h,t.k,t.z],{options:[0,"options"],pager:[1,"pager"]},null),(n()(),t.gb(16777216,null,0,1,null,f)),t.ob(50,278528,null,0,g.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(n()(),t.pb(51,0,null,0,4,"ion-title",[["class","ion-text-center ion-padding-top"]],null,null,null,h.vb,h.J)),t.ob(52,49152,null,0,u.Bb,[t.h,t.k,t.z],null,null),(n()(),t.pb(53,0,null,0,2,"ion-text",[["class","fw700 "],["color","primary"]],null,null,null,h.tb,h.H)),t.ob(54,49152,null,0,u.yb,[t.h,t.k,t.z],{color:[0,"color"]},null),(n()(),t.Eb(-1,0,["Vehicle Availability"])),(n()(),t.pb(56,0,null,0,5,"ion-grid",[],null,null,null,h.Y,h.m)),t.ob(57,49152,null,0,u.B,[t.h,t.k,t.z],null,null),(n()(),t.pb(58,0,null,0,3,"ion-row",[],null,null,null,h.nb,h.B)),t.ob(59,49152,null,0,u.kb,[t.h,t.k,t.z],null,null),(n()(),t.gb(16777216,null,0,1,null,k)),t.ob(61,278528,null,0,g.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var o=l.component;n(l,3,0,"primary"),n(l,7,0,"light"),n(l,11,0,"light"),n(l,13,0,"light"),n(l,18,0,"medium","round","small"),n(l,20,0,"notifications"),n(l,22,0,"dark"),n(l,28,0,"secondary","none"),n(l,34,0,"medium"),n(l,37,0,"medium"),n(l,40,0,"medium","outline","round","small"),n(l,43,0,"locate"),n(l,48,0,o.slideOptions,"true"),n(l,50,0,o.ads),n(l,54,0,"primary"),n(l,61,0,o.vehicles)},function(n,l){n(l,38,0,l.component.yourLocation)})}function C(n){return t.Fb(0,[(n()(),t.pb(0,0,null,null,1,"app-home-results",[],null,null,null,v,m)),t.ob(1,49152,null,0,a,[u.Kb,u.Ib,u.Nb,u.a,u.Jb,u.Sb],null,null)],null,null)}var x=t.lb("app-home-results",a,C,{},{},[]),y=o("gIcY");o.d(l,"HomeResultsPageModuleNgFactory",function(){return z});var z=t.mb(b,[],function(n){return t.wb([t.xb(512,t.j,t.bb,[[8,[p.a,x]],[3,t.j],t.x]),t.xb(4608,g.k,g.j,[t.u,[2,g.q]]),t.xb(4608,y.o,y.o,[]),t.xb(4608,y.b,y.b,[]),t.xb(4608,u.b,u.b,[t.z,t.g]),t.xb(4608,u.Jb,u.Jb,[u.b,t.j,t.q]),t.xb(4608,u.Nb,u.Nb,[u.b,t.j,t.q]),t.xb(1073742336,g.b,g.b,[]),t.xb(1073742336,y.m,y.m,[]),t.xb(1073742336,y.e,y.e,[]),t.xb(1073742336,y.k,y.k,[]),t.xb(1073742336,u.Fb,u.Fb,[]),t.xb(1073742336,d.o,d.o,[[2,d.u],[2,d.m]]),t.xb(1073742336,b,b,[]),t.xb(1024,d.k,function(){return[[{path:"",component:a}]]},[])])})}}]);