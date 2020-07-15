(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{117:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(2),a=r(6),o=(r(0),r(157)),c={id:"handler-force",title:"ForceTouchGestureHandler (iOS only)",sidebar_label:"ForceTouchGestureHandler"},i={id:"version-1.6.1/handler-force",title:"ForceTouchGestureHandler (iOS only)",description:"A continuous gesture handler that recognizes force of a touch. It allows for tracking pressure of touch on some iOS devices.",source:"@site/versioned_docs/version-1.6.1/handler-force.md",permalink:"/react-native-gesture-handler/docs/handler-force",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/versioned_docs/version-1.6.1/handler-force.md",version:"1.6.1",sidebar_label:"ForceTouchGestureHandler",sidebar:"version-1.6.1/docs",previous:{title:"PinchGestureHandler",permalink:"/react-native-gesture-handler/docs/handler-pinch"},next:{title:"Buttons",permalink:"/react-native-gesture-handler/docs/component-buttons"}},l=[{value:"<code>minForce</code>",id:"minforce",children:[]},{value:"<code>maxForce</code>",id:"maxforce",children:[]},{value:"<code>feedbackOnActivation</code>",id:"feedbackonactivation",children:[]},{value:"Event data",id:"event-data",children:[{value:"<code>force</code>",id:"force",children:[]}]},{value:"Static method",id:"static-method",children:[{value:"<code>forceTouchAvailable</code>",id:"forcetouchavailable",children:[]}]},{value:"Example",id:"example",children:[]}],s={rightToc:l};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A continuous gesture handler that recognizes force of a touch. It allows for tracking pressure of touch on some iOS devices.\nThe handler ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#active"}),"activates")," when pressure of touch if greater or equal than ",Object(o.b)("inlineCode",{parentName:"p"},"minForce"),". It fails if pressure is greater than ",Object(o.b)("inlineCode",{parentName:"p"},"maxForce"),"\nGesture callback can be used for continuous tracking of the touch pressure. It provides information for one finger (the first one)."),Object(o.b)("p",null,"At the beginning of the gesture, the pressure factor is 0.0. As the pressure increases, the pressure factor increases proportionally. The maximum pressure is 1.0."),Object(o.b)("p",null,"The handler is implemented using custom ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/uigesturerecognizer"}),"UIGestureRecognizer")," on iOS. There's no implementation provided on Android and it simply render children without any wrappers.\nSince this behaviour is only provided on some iOS devices, this handler should not be used for defining any crucial behaviors. Use it only as an additional improvement and make all features to be accessed without this handler as well."),Object(o.b)("h1",{id:"properties"},"Properties"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/handler-common#properties"}),"set of properties inherited from base handler class"),". Below is a list of properties specific to ",Object(o.b)("inlineCode",{parentName:"p"},"ForceTouchGestureHandler")," component:"),Object(o.b)("h3",{id:"minforce"},Object(o.b)("inlineCode",{parentName:"h3"},"minForce")),Object(o.b)("p",null,"A minimal pressure that is required before handler can ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#active"}),"activate"),". Should be a value from range ",Object(o.b)("inlineCode",{parentName:"p"},"[0.0, 1.0]"),". Default is ",Object(o.b)("inlineCode",{parentName:"p"},"0.2"),"."),Object(o.b)("h3",{id:"maxforce"},Object(o.b)("inlineCode",{parentName:"h3"},"maxForce")),Object(o.b)("p",null,"A maximal pressure that could be applied for handler. If the pressure is greater, handler ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#failed"}),"fails"),". Should be a value from range ",Object(o.b)("inlineCode",{parentName:"p"},"[0.0, 1.0]"),"."),Object(o.b)("h3",{id:"feedbackonactivation"},Object(o.b)("inlineCode",{parentName:"h3"},"feedbackOnActivation")),Object(o.b)("p",null,"Boolean value defining if haptic feedback has to be performed on activation."),Object(o.b)("h2",{id:"event-data"},"Event data"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/handler-common#event-data"}),"set of event attributes from base handler class"),". Below is a list of gesture event attributes specific to ",Object(o.b)("inlineCode",{parentName:"p"},"ForceTouchGestureHandler"),":"),Object(o.b)("h3",{id:"force"},Object(o.b)("inlineCode",{parentName:"h3"},"force")),Object(o.b)("p",null,"The pressure of a touch."),Object(o.b)("h2",{id:"static-method"},"Static method"),Object(o.b)("h3",{id:"forcetouchavailable"},Object(o.b)("inlineCode",{parentName:"h3"},"forceTouchAvailable")),Object(o.b)("p",null,"You may check if it's possible to use ",Object(o.b)("inlineCode",{parentName:"p"},"ForceTouchGestureHandler")," with ",Object(o.b)("inlineCode",{parentName:"p"},"ForceTouchGestureHandler.forceTouchAvailable")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/master/Example/forcetouch/index.js"}),"force touch handler example")," from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"example"}),"GestureHandler Example App")," or view it directly on your phone by visiting ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://expo.io/@sauzy3450/react-native-gesture-handler-demo"}),"our expo demo"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"<ForceTouchGestureHandler\n  minForce={0}\n  onGestureEvent={this._onGestureEvent}\n  onHandlerStateChange={this._onHandlerStateChange}>\n  <Animated.View\n    style={[\n      styles.box,\n      { transform: [{ scale: Animated.add(1, this.force) }] },\n    ]}\n  />\n</ForceTouchGestureHandler>\n")))}d.isMDXComponent=!0},157:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(r),b=n,h=u["".concat(c,".").concat(b)]||u[b]||p[b]||o;return r?a.a.createElement(h,i(i({ref:t},s),{},{components:r})):a.a.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);