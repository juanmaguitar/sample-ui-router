webpackJsonp([0],[function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}n(1),n(2);var i=n(3),u=a(i),c=n(5),o=a(c),l=n(6),r=a(l),s=n(8),d=a(s),f=n(11),v=a(f),p=n(15),m=a(p),h=n(36),_=a(h),$=n(37),b=a($);u["default"].module("uiRouterSample",[d["default"],v["default"],m["default"],o["default"],r["default"]]).run(_["default"]).config(b["default"])},function(t,e){},1,,,,,,function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),u=a(i),c=n(5),o=a(c),l=n(9),r=a(l);u["default"].module("uiRouterSample.home",[o["default"]]).config(r["default"]),e["default"]="uiRouterSample.home"},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function i(t){t.state("home",{url:o,template:c["default"]})}Object.defineProperty(e,"__esModule",{value:!0});var u=n(10),c=a(u),o="/";i.$inject=["$stateProvider"],e["default"]=i},function(t,e){t.exports='<p class="lead">Welcome to the UI-Router Demo (HOME)</p>\n<p>Use the menu above to navigate. Pay attention to the <code>$state</code> and <code>$stateParams</code> values below.</p>\n<p>Click these links—<a href="#/c?id=1">Alice</a> or <a href="#/user/42">Bob</a>—to see a url redirect in action.</p>\n'},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),u=a(i),c=n(5),o=a(c),l=n(12),r=a(l);u["default"].module("uiRouterSample.about",[o["default"]]).config(r["default"]),e["default"]="uiRouterSample.about"},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function i(t){t.state("about",{url:o,templateProvider:c["default"]})}Object.defineProperty(e,"__esModule",{value:!0});var u=n(13),c=a(u),o="/about";i.$inject=["$stateProvider"],e["default"]=i},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function i(t){return t(function(){return c["default"]},100)}Object.defineProperty(e,"__esModule",{value:!0});var u=n(14),c=a(u);i.$inject=["$timeout"],e["default"]=i},function(t,e){t.exports='<p class="lead">UI-Router Resources</p>\n<ul>\n\t<li><a href="https://github.com/angular-ui/ui-router/tree/gh-pages/sample">Source for this Sample</a></li>\n\t<li><a href="https://github.com/angular-ui/ui-router">GitHub Main Page</a></li>\n\t<li><a href="https://github.com/angular-ui/ui-router#quick-start">Quick Start</a></li>\n\t<li><a href="https://github.com/angular-ui/ui-router/wiki">In-Depth Guide</a></li>\n\t<li><a href="https://github.com/angular-ui/ui-router/wiki/Quick-Reference">API Reference</a></li>\n</ul>\n'},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),u=a(i),c=n(5),o=a(c),l=n(16),r=a(l),s=n(19),d=a(s),f=n(23),v=a(f),p=n(25),m=a(p),h=n(30),_=a(h),$=n(33),b=a($);u["default"].module("uiRouterSample.contacts",[o["default"],r["default"]]).config(d["default"]).config(v["default"]).config(m["default"]).config(_["default"]).config(b["default"]),e["default"]="uiRouterSample.contacts"},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),u=a(i),c=n(17),o=a(c),l=n(18),r=a(l);u["default"].module("uiRouterSample.services",[]).factory("utilsService",o["default"]).factory("contactsService",r["default"]),e["default"]="uiRouterSample.services"},function(t,e){"use strict";function n(){function t(t,e){for(var n=0;n<t.length;n++)if(t[n].id==e)return t[n];return null}function e(t,e,n){var a;do a=t[Math.floor(t.length*Math.random())][e];while(a==n);return a}return{findById:t,newRandomKey:e}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n},function(t,e){"use strict";function n(t,e){var n="data/contacts.json",a=function(t){return t.data.contacts},i=t.get(n).then(a),u={};return u.all=function(){return i},u.get=function(t){console.log("b --- get..."),console.log(t),console.log(i),console.log("e ---- get...");var n=function(){return e.findById(i,t)};return i.then(n)},u}Object.defineProperty(e,"__esModule",{value:!0}),n.$inject=["$http","utilsService"],e["default"]=n},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function i(t){t.state("contacts",{"abstract":!0,url:d,template:l["default"],resolve:{contactsList:s["default"]},controller:c["default"],controllerAs:"$ctrl"})}Object.defineProperty(e,"__esModule",{value:!0});var u=n(20),c=a(u),o=n(21),l=a(o),r=n(22),s=a(r),d="/contacts";i.$inject=["$stateProvider"],e["default"]=i},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function i(t,e,a){n(this,i),this.contacts=a,this.goToRandom=function(){var n=e.newRandomKey(this.contacts,"id",t.params.contactId);t.go("contacts.detail",{contactId:n})}};a.$inject=["$state","utilsService","contactsList"],e["default"]=a},function(t,e){t.exports='<div class="row">\n  <div class="col-md-3">\n    <div class="pa-sidebar well well-small">\n      <ul class="nav nav-pills nav-stacked">\n        <li ng-class="{ active: $state.includes(\'contacts.list\') }"><a ui-sref="contacts.list">All Contacts</a></li>\n\n        <li class="navbar-brand text-uppercase">Top Contacts</li>\n\n        <!-- This <li> will only add the \'active\' class if \'contacts.detail\' or its descendants are active\n             AND if it is the link for the active contact (aka contactId) -->\n        <li ng-repeat="contact in $ctrl.contacts | limitTo:2" ui-sref-active="active">\n\n          <!-- Here\'s a ui-sref that is also providing necessary parameters -->\n          <a ui-sref="contacts.detail({contactId:contact.id})">{{contact.name}}</a>\n        </li>\n      </ul>\n      <hr>\n      <button class="btn" ng-click="$ctrl.goToRandom()">Show random contact</button>\n\n      <!-- Another named view -->\n      <div ui-view="menuTip" class="slide"></div>\n    </div>\n  </div>\n\n  <!-- Our unnamed main ui-view for this template -->\n  <div ui-view class="col-md-3 slide"></div>\n</div>\n'},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t.all()};n.$inject=["contactsService"],e["default"]=n},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function i(t){t.state("contacts.list",{url:o,template:c["default"]})}Object.defineProperty(e,"__esModule",{value:!0});var u=n(24),c=a(u),o="";i.$inject=["$stateProvider"],e["default"]=i},function(t,e){t.exports='<h2>All Contacts</h2>\n<ul>\n  <li ng-repeat="contact in $ctrl.contacts">\n    <a ui-sref="contacts.detail({contactId:contact.id})">{{ contact.name }}</a>\n  </li>\n</ul>\n'},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function i(t){t.state("contacts.detail",{url:"/{contactId:[0-9]{1,4}}",resolve:{contact:s["default"]},views:{"":{template:c["default"],controller:l["default"],controllerAs:"$ctrl"},"hint@":{template:v},menuTip:{templateProvider:f["default"]}}})}Object.defineProperty(e,"__esModule",{value:!0});var u=n(26),c=a(u),o=n(27),l=a(o),r=n(28),s=a(r),d=n(29),f=a(d),v='This is contacts.detail populating the "hint" ui-view';i.$inject=["$stateProvider"],e["default"]=i},function(t,e){t.exports='<div>\n  <h2>{{ $ctrl.contact.name}}</h2>\n  <ul>\n    <li ng-repeat="item in $ctrl.contact.items">\n\n      <!-- Here\'s another ui-sref except THIS time we are passing parameters\n           AND inheriting parameters from active ancestor states. So we don\'t\n           need to resupply the contactId parameter. -->\n      <a ui-sref="contacts.detail.item({itemId:item.id})">{{item.type}}</a>\n    </li>\n  </ul>\n  <div ui-view class="slide">\n    <!-- Example of default content. This content will be replace as soon as\n         this ui-view is populate with a template -->\n    <small class="muted">Click on a contact item to view and/or edit it.</small>\n  </div>\n</div>\n'},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function i(t,e,a){n(this,i),this.contact=a};a.$inject=["$stateParams","utilsService","contact"],e["default"]=a},function(t,e){"use strict";function n(t,e,n){return t.findById(e,n.contactId)}Object.defineProperty(e,"__esModule",{value:!0}),n.$inject=["utilsService","contactsList","$stateParams"],e["default"]=n},function(t,e){"use strict";function n(t){return'<hr><small class="muted">Contact ID: '+t.contactId+"</small>"}Object.defineProperty(e,"__esModule",{value:!0}),n.$inject=["$stateParams"],e["default"]=n},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function i(t){t.state("contacts.detail.item",{url:"/item/:itemId",views:{"":{template:c["default"],controller:l["default"],controllerAs:"$ctrl"},"hint@":{template:r}}})}Object.defineProperty(e,"__esModule",{value:!0});var u=n(31),c=a(u),o=n(32),l=a(o),r=' This is contacts.detail.item overriding the "hint" ui-view';i.$inject=["$stateProvider"],e["default"]=i},function(t,e){t.exports='<hr>\n<h4>{{ $ctrl.item.type }} <button class="btn" ng-click="$ctrl.edit()">Edit</button></h4>\n<div>{{ $ctrl.item.value }}</div>\n'},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function i(t,e,a,u){n(this,i),this.item=a.findById(u.items,t.itemId),this.edit=function(){return e.go(".edit",t)}};a.$inject=["$stateParams","$state","utilsService","contact"],e["default"]=a},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function i(t){t.state("contacts.detail.item.edit",{url:"/item/:itemId",views:{"@contacts.detail":{template:c["default"],controller:l["default"],controllerAs:"$ctrl"}}})}Object.defineProperty(e,"__esModule",{value:!0});var u=n(34),c=a(u),o=n(35),l=a(o);i.$inject=["$stateProvider"],e["default"]=i},function(t,e){t.exports='<hr>\n<h4>{{ $ctrl.item.type }} <button class="btn" ng-click="$ctrl.done()">Done</button></h4>\n<div><input type="text" ng-model="$ctrl.item.value" /></div>\n'},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function i(t,e,a,u){n(this,i),this.item=a.findById(u.items,t.itemId),this.done=function(){return e.go("^",t)}};a.$inject=["$stateParams","$state","utilsService","contact"],e["default"]=a},function(t,e){"use strict";function n(t,e,n){t.$state=e,t.$stateParams=n}Object.defineProperty(e,"__esModule",{value:!0}),n.$inject=["$rootScope","$state","$stateParams"],e["default"]=n},function(t,e){"use strict";function n(t){t.when("/c?id","/contacts/:id").when("/user/:id","/contacts/:id").otherwise("/")}Object.defineProperty(e,"__esModule",{value:!0}),n.$inject=["$urlRouterProvider"],e["default"]=n}]);
//# sourceMappingURL=app.36ec4494688236227a86.js.map