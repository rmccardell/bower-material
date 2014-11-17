/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.5.1-master-92e2ede
 */
!function(){"use strict";angular.module("material.components.tabs",["material.core"])}(),function(){"use strict";function e(e,t,n,a){function i(i,o,c,r){function s(){m(),a(m,100,!1)}function d(){var t=u.selected()&&u.selected().element;if(!t||u.count()<2)o.css({display:"none",width:"0px"});else{var n=t.prop("offsetWidth"),a=t.prop("offsetLeft")+(u.$$pagingOffset||0);o.css({display:n>0?"block":"none",width:n+"px"}),o.css(e.CSS.TRANSFORM,"translate3d("+a+"px,0,0)")}}var l=r[0],u=r[1];if(!l){var m=n.debounce(d);i.$watch(u.selected,d),i.$on("$mdTabsChanged",m),i.$on("$mdTabsPaginationChanged",m),angular.element(t).on("resize",s),i.$on("$destroy",function(){angular.element(t).off("resize",s)})}}return{restrict:"E",require:["^?mdNoBar","^mdTabs"],link:i}}angular.module("material.components.tabs").directive("mdTabsInkBar",e),e.$inject=["$mdConstant","$window","$$rAF","$timeout"]}(),function(){"use strict";function e(e,t,n,a,i){function o(o,s,d,l){function u(e){if(h.active){var t=angular.element(e.target).controller("mdTab"),n=v(t);n!==h.page&&(t.element.blur(),$(n).then(function(){t.element.focus()}))}}function m(e){if(e)if(h.active){var t=v(e);$(t)}else C()}function f(e){var t,n=h.page+e;if(!l.selected()||v(l.selected())!==n){var a;0>e?(a=(n+1)*h.itemsPerPage,t=l.previous(l.itemAt(a))):(a=n*h.itemsPerPage-1,t=l.next(l.itemAt(a)))}$(n).then(function(){t&&t.element.focus()}),t&&l.select(t)}function p(){var e=s.find("md-tab"),t=s.parent().prop("clientWidth")-r,n=t&&c*l.count()>t,a=n!==h.active;if(0>=t&&(n=!1,a=!0),h.active=n,n){h.pagesCount=Math.ceil(c*l.count()/t),h.itemsPerPage=Math.max(1,Math.floor(l.count()/h.pagesCount)),h.tabWidth=t/h.itemsPerPage,b.css("width",h.tabWidth*l.count()+"px"),e.css("width",h.tabWidth+"px");var o=v(l.selected());$(o)}else a&&i(function(){b.css("width",""),e.css("width",""),g(0),h.page=-1})}function g(t){function n(t){t.target===b[0]&&(b.off(e.CSS.TRANSITIONEND,n),i.resolve())}if(l.pagingOffset===t)return a.when();var i=a.defer();return l.$$pagingOffset=t,b.css(e.CSS.TRANSFORM,"translate3d("+t+"px,0,0)"),b.on(e.CSS.TRANSITIONEND,n),i.promise}function v(e){var t=l.indexOf(e);return-1===t?0:Math.floor(t/h.itemsPerPage)}function $(e){if(e!==h.page){var t=h.pagesCount;return 0>e&&(e=0),e>t&&(e=t),h.hasPrev=e>0,h.hasNext=(e+1)*h.itemsPerPage<l.count(),h.page=e,i(function(){o.$broadcast("$mdTabsPaginationChanged")}),g(-e*h.itemsPerPage*h.tabWidth)}}var b=s.children(),h=o.pagination={page:-1,active:!1,clickNext:function(){f(1)},clickPrevious:function(){f(-1)}};p();var C=n.debounce(p);o.$on("$mdTabsChanged",C),angular.element(t).on("resize",C),b.on("focusin",u),o.$on("$destroy",function(){angular.element(t).off("resize",C),b.off("focusin",u)}),o.$watch(l.selected,m)}var c=96,r=64;return{restrict:"A",require:"^mdTabs",link:o}}angular.module("material.components.tabs").directive("mdTabsPagination",e),e.$inject=["$mdConstant","$window","$$rAF","$$q","$timeout"]}(),function(){"use strict";function e(e,t,n,a,i,o,c){function r(){return f(e.$parent)}function s(t){m.content.length&&(m.contentContainer.append(m.content),m.contentScope=e.$parent.$new(),t.append(m.contentContainer),a(m.contentContainer)(m.contentScope),o.disconnectScope(m.contentScope))}function d(){m.hammertime.destroy(),i.leave(m.contentContainer).then(function(){m.contentScope&&m.contentScope.$destroy(),m.contentScope=null})}function l(){o.reconnectScope(m.contentScope),m.hammertime.on("swipeleft swiperight",e.onSwipe),t.addClass("active"),t.attr("aria-selected",!0),t.attr("tabIndex",0),i.removeClass(m.contentContainer,"ng-hide"),e.onSelect()}function u(){o.disconnectScope(m.contentScope),m.hammertime.off("swipeleft swiperight",e.onSwipe),t.removeClass("active"),t.attr("aria-selected",!1),t.attr("tabIndex",-1),i.addClass(m.contentContainer,"ng-hide"),e.onDeselect()}var m=this;m.contentContainer=angular.element('<div class="md-tab-content ng-hide">'),m.hammertime=new Hammer(m.contentContainer[0]),m.element=t,m.isDisabled=r,m.onAdd=s,m.onRemove=d,m.onSelect=l,m.onDeselect=u;var f=c(n.ngDisabled)}angular.module("material.components.tabs").controller("$mdTab",e),e.$inject=["$scope","$element","$attrs","$compile","$animate","$mdUtil","$parse"]}(),function(){"use strict";function e(e,t,n,a,i){function o(n,o){var c=n.find("md-tab-label");c.length?c.remove():c=angular.isDefined(o.label)?angular.element("<md-tab-label>").html(o.label):angular.element("<md-tab-label>").append(n.contents().remove());var r=n.contents().remove();return function(n,o,s,d){function l(){var e=c.clone();o.append(e),t(e)(n.$parent),b.content=r.clone()}function u(){n.$apply(function(){h.select(b),b.element.focus()})}function m(e){if(e.keyCode==i.KEY_CODE.SPACE||e.keyCode==i.KEY_CODE.ENTER)o.triggerHandler("click"),e.preventDefault();else if(e.keyCode===i.KEY_CODE.LEFT_ARROW){var t=h.previous(b);t&&t.element.focus()}else if(e.keyCode===i.KEY_CODE.RIGHT_ARROW){var n=h.next(b);n&&n.element.focus()}}function f(e){n.$apply(function(){"swipeleft"===e.type?h.select(h.next()):h.select(h.previous())})}function p(){n.$watch("$parent.$index",function(e){h.move(b,e)})}function g(){function e(e){var t=h.selected()===b;e&&!t?h.select(b):!e&&t&&h.deselect(b)}var t=n.$parent.$watch("!!("+s.mdActive+")",e);n.$on("$destroy",t)}function v(){function e(e){o.attr("aria-disabled",e);var t=h.selected()===b;t&&e&&h.select(h.next()||h.previous())}n.$watch(b.isDisabled,e)}function $(){var e=s.id||"tab_"+a.nextUid();if(o.attr({id:e,role:"tab",tabIndex:-1}),r.length){var t="content_"+e;o.attr("aria-controls")||o.attr("aria-controls",t),b.contentContainer.attr({id:t,role:"tabpanel","aria-labelledby":e})}}var b=d[0],h=d[1];l(),$();var C=e.attachButtonBehavior(o);h.add(b),n.$on("$destroy",function(){C(),h.remove(b)}),angular.isDefined(s.ngClick)||o.on("click",u),o.on("keydown",m),n.onSwipe=f,angular.isNumber(n.$parent.$index)&&p(),angular.isDefined(s.mdActive)&&g(),v()}}return{restrict:"E",require:["mdTab","^mdTabs"],controller:"$mdTab",scope:{onSelect:"&mdOnSelect",onDeselect:"&mdOnDeselect",label:"@"},compile:o}}angular.module("material.components.tabs").directive("mdTab",e),e.$inject=["$mdInkRipple","$compile","$mdAria","$mdUtil","$mdConstant"]}(),function(){"use strict";function e(e,t,n){function a(){return f.itemAt(e.selectedIndex)}function i(t,n){m.add(t,n),t.onAdd(f.contentArea),-1!==e.selectedIndex&&angular.isNumber(e.selectedIndex)&&e.selectedIndex!==f.indexOf(t)||f.select(t),e.$broadcast("$mdTabsChanged")}function o(t,n){m.contains(t)&&(n||f.selected()===t&&(m.count()>1?f.select(f.previous()||f.next()):f.deselect(t)),m.remove(t),t.onRemove(),e.$broadcast("$mdTabsChanged"))}function c(t,n){var a=f.selected()===t;m.remove(t),m.add(t,n),a&&f.select(t),e.$broadcast("$mdTabsChanged")}function r(t){!t||t.isSelected||t.isDisabled()||m.contains(t)&&(f.deselect(f.selected()),e.selectedIndex=f.indexOf(t),t.isSelected=!0,t.onSelect())}function s(t){t&&t.isSelected&&m.contains(t)&&(e.selectedIndex=-1,t.isSelected=!1,t.onDeselect())}function d(e,t){return m.next(e||f.selected(),t||u)}function l(e,t){return m.previous(e||f.selected(),t||u)}function u(e){return e&&!e.isDisabled()}var m=n.iterator([],!1),f=this;f.$element=t,f.contentArea=angular.element(t[0].querySelector(".md-tabs-content")),f.inRange=m.inRange,f.indexOf=m.indexOf,f.itemAt=m.itemAt,f.count=m.count,f.selected=a,f.add=i,f.remove=o,f.move=c,f.select=r,f.deselect=s,f.next=d,f.previous=l,e.$on("$destroy",function(){f.deselect(f.selected());for(var e=m.count()-1;e>=0;e--)f.remove(m[e],!0)})}angular.module("material.components.tabs").controller("$mdTabs",e),e.$inject=["$scope","$element","$mdUtil"]}(),function(){"use strict";function e(e,t){function n(e,n,a,i){function o(){n.attr({role:"tablist"})}function c(){e.$watch("selectedIndex",function(e,t){if(i.deselect(i.itemAt(t)),i.inRange(e)){var n=i.itemAt(e);n&&n.isDisabled()&&(n=e>t?i.next(n):i.previous(n)),i.select(n)}})}t(n),o(),c()}return{restrict:"E",controller:"$mdTabs",require:"mdTabs",transclude:!0,scope:{selectedIndex:"=?mdSelected"},template:'<section class="md-header" ng-class="{\'md-paginating\': pagination.active}"><button class="md-paginator md-prev" ng-if="pagination.active && pagination.hasPrev" ng-click="pagination.clickPrevious()" aria-hidden="true"></button><div class="md-header-items-container" md-tabs-pagination><div class="md-header-items" ng-transclude></div><md-tabs-ink-bar></md-tabs-ink-bar></div><button class="md-paginator md-next" ng-if="pagination.active && pagination.hasNext" ng-click="pagination.clickNext()" aria-hidden="true"></button></section><section class="md-tabs-content"></section>',link:n}}angular.module("material.components.tabs").directive("mdTabs",e),e.$inject=["$parse","$mdTheming"]}();