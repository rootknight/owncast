(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2885],{11382:function(e,t,n){"use strict";var r=n(87462),i=n(4942),a=n(97685),o=n(94184),l=n.n(o),s=n(23279),c=n.n(s),u=n(98423),d=n(67294),p=n(53124),f=n(96159),h=n(93355),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};(0,h.b)("small","default","large");var v=null,y=function(e){var t=e.spinPrefixCls,n=e.spinning,o=void 0===n||n,s=e.delay,h=e.className,y=e.size,g=void 0===y?"default":y,x=e.tip,w=e.wrapperClassName,b=e.style,j=e.children,Z=m(e,["spinPrefixCls","spinning","delay","className","size","tip","wrapperClassName","style","children"]),F=d.useState(function(){return o&&(!o||!s||!!isNaN(Number(s)))}),C=(0,a.Z)(F,2),k=C[0],N=C[1];return d.useEffect(function(){var e=c()(function(){N(o)},s);return e(),function(){var t;null===(t=null==e?void 0:e.cancel)||void 0===t||t.call(e)}},[s,o]),d.createElement(p.C,null,function(n){var a,o,s,c=n.direction,p=l()(t,(s={},(0,i.Z)(s,"".concat(t,"-sm"),"small"===g),(0,i.Z)(s,"".concat(t,"-lg"),"large"===g),(0,i.Z)(s,"".concat(t,"-spinning"),k),(0,i.Z)(s,"".concat(t,"-show-text"),!!x),(0,i.Z)(s,"".concat(t,"-rtl"),"rtl"===c),s),h),m=(0,u.Z)(Z,["indicator","prefixCls"]),y=d.createElement("div",(0,r.Z)({},m,{style:b,className:p,"aria-live":"polite","aria-busy":k}),(a=e.indicator,o="".concat(t,"-dot"),null===a?null:(0,f.l$)(a)?(0,f.Tm)(a,{className:l()(a.props.className,o)}):(0,f.l$)(v)?(0,f.Tm)(v,{className:l()(v.props.className,o)}):d.createElement("span",{className:l()(o,"".concat(t,"-dot-spin"))},d.createElement("i",{className:"".concat(t,"-dot-item")}),d.createElement("i",{className:"".concat(t,"-dot-item")}),d.createElement("i",{className:"".concat(t,"-dot-item")}),d.createElement("i",{className:"".concat(t,"-dot-item")}))),x?d.createElement("div",{className:"".concat(t,"-text")},x):null);if(void 0!==j){var F=l()("".concat(t,"-container"),(0,i.Z)({},"".concat(t,"-blur"),k));return d.createElement("div",(0,r.Z)({},m,{className:l()("".concat(t,"-nested-loading"),w)}),k&&d.createElement("div",{key:"loading"},y),d.createElement("div",{className:F,key:"container"},j))}return y})},g=function(e){var t=e.prefixCls,n=(0,d.useContext(p.E_).getPrefixCls)("spin",t),i=(0,r.Z)((0,r.Z)({},e),{spinPrefixCls:n});return d.createElement(y,(0,r.Z)({},i))};g.setDefaultIndicator=function(e){v=e},t.Z=g},93645:function(e,t,n){"use strict";n.d(t,{u:function(){return i}});var r={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function i(e){return e?r[e]:r.trunc}},59910:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(19013),i=n(13882);function a(e,t){return(0,i.Z)(2,arguments),(0,r.Z)(e).getTime()-(0,r.Z)(t).getTime()}},11699:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(59910),i=n(13882),a=n(93645);function o(e,t,n){(0,i.Z)(2,arguments);var o=(0,r.Z)(e,t)/1e3;return(0,a.u)(null==n?void 0:n.roundingMethod)(o)}},23279:function(e,t,n){var r=n(13218),i=n(7771),a=n(14841),o=Math.max,l=Math.min;e.exports=function(e,t,n){var s,c,u,d,p,f,h=0,m=!1,v=!1,y=!0;if("function"!=typeof e)throw TypeError("Expected a function");function g(t){var n=s,r=c;return s=c=void 0,h=t,d=e.apply(r,n)}function x(e){var n=e-f,r=e-h;return void 0===f||n>=t||n<0||v&&r>=u}function w(){var e,n,r,a=i();if(x(a))return b(a);p=setTimeout(w,(e=a-f,n=a-h,r=t-e,v?l(r,u-n):r))}function b(e){return(p=void 0,y&&s)?g(e):(s=c=void 0,d)}function j(){var e,n=i(),r=x(n);if(s=arguments,c=this,f=n,r){if(void 0===p)return h=e=f,p=setTimeout(w,t),m?g(e):d;if(v)return clearTimeout(p),p=setTimeout(w,t),g(f)}return void 0===p&&(p=setTimeout(w,t)),d}return t=a(t)||0,r(n)&&(m=!!n.leading,u=(v="maxWait"in n)?o(a(n.maxWait)||0,t):u,y="trailing"in n?!!n.trailing:y),j.cancel=function(){void 0!==p&&clearTimeout(p),h=0,s=f=c=p=void 0},j.flush=function(){return void 0===p?d:b(i())},j}},1469:function(e){var t=Array.isArray;e.exports=t},7771:function(e,t,n){var r=n(55639);e.exports=function(){return r.Date.now()}},16791:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/stream-health",function(){return n(61407)}])},54615:function(e,t,n){"use strict";n.d(t,{k:function(){return s}});var r=n(85893),i=n(58091),a=n(23148),o=n(26495);function l(e){let t={};return e.forEach(e=>{let n=new Date(e.time),r=(0,i.Z)(n,"H:mma");t[r]=e.value}),t}a.kL.register(a.uw,a.WV,a.f$,a.od,a.jn,a.Dx,a.u,a.De);let s=e=>{let{data:t,title:n,color:i,unit:a,dataCollections:s,yFlipped:c,yLogarithmic:u}=e,d=[];return t&&t.length>0&&d.push({id:n,label:n,backgroundColor:i,borderColor:i,borderWidth:3,data:l(t)}),s.forEach(e=>{d.push({id:e.name,label:e.name,data:l(e.data),backgroundColor:e.color,borderColor:e.color,borderWidth:3,pointStyle:e.pointStyle||"circle",radius:e.pointRadius||1})}),(0,r.jsx)("div",{className:"line-chart-container",children:(0,r.jsx)(o.x1,{data:{datasets:d},options:{responsive:!0,scales:{y:{type:u?"logarithmic":"linear",reverse:c,title:{display:!0,text:a}}}},height:"70vh"})})};s.defaultProps={dataCollections:[],data:[],title:"",yFlipped:!1,yLogarithmic:!1}},53920:function(e,t,n){"use strict";n.d(t,{j:function(){return g}});var r=n(85893),i=n(71230),a=n(15746),o=n(74763),l=n(85818),s=n(14670),c=n(71577),u=n(5152),d=n.n(u),p=n(41664),f=n.n(p),h=n(67294),m=n(38631);let v=d()(()=>Promise.all([n.e(2074),n.e(7996)]).then(n.t.bind(n,67996,23)),{loadableGenerated:{webpack:()=>[67996]},ssr:!1}),y=d()(()=>Promise.all([n.e(2074),n.e(7039)]).then(n.t.bind(n,67039,23)),{loadableGenerated:{webpack:()=>[67039]},ssr:!1}),g=e=>{let{showTroubleshootButton:t}=e,n=(0,h.useContext)(m.aC),{health:u}=n;if(!u)return null;let{healthy:d,healthPercentage:p,message:g,representation:x}=u,w="#3f8600",b="info";return p<80?(w="#cf000f",b="error"):p<30&&(w="#f0ad4e",b="error"),(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.Z,{gutter:8,children:[(0,r.jsx)(a.Z,{span:12,children:(0,r.jsx)(o.Z,{title:"Healthy Stream",value:d?"Yes":"No",valueStyle:{color:w},prefix:d?(0,r.jsx)(v,{}):(0,r.jsx)(y,{})})}),(0,r.jsx)(a.Z,{span:12,children:(0,r.jsx)(o.Z,{title:"Playback Health",value:p,valueStyle:{color:w},suffix:"%"})})]}),(0,r.jsx)(i.Z,{style:{display:x<100&&0!==x?"grid":"none"},children:(0,r.jsxs)(l.Z.Text,{type:"secondary",style:{textAlign:"center",fontSize:"0.7em",opacity:"0.3"},children:["Stream health represents ",x,"% of all known players. Other player status is unknown."]})}),(0,r.jsx)(i.Z,{gutter:16,style:{width:"100%",display:g?"grid":"none",marginTop:"10px"},children:(0,r.jsx)(a.Z,{span:24,children:(0,r.jsx)(s.Z,{message:g,type:b,showIcon:!0,action:t&&(0,r.jsx)(f(),{passHref:!0,href:"/stream-health",children:(0,r.jsx)(c.Z,{size:"small",type:"text",style:{color:"black"},children:"TROUBLESHOOT"})})})})})]})};g.defaultProps={showTroubleshootButton:!0}},61407:function(e,t,n){"use strict";n.r(t);var r=n(85893),i=n(85818),a=n(14670),o=n(11382),l=n(26713),s=n(71230),c=n(15746),u=n(59652),d=n(74763),p=n(67294),f=n(5152),h=n.n(f),m=n(81453),v=n(54615),y=n(53920),g=n(34261);let x=h()(()=>Promise.all([n.e(2074),n.e(9095)]).then(n.t.bind(n,69095,23)),{loadableGenerated:{webpack:()=>[69095]},ssr:!1}),w=h()(()=>Promise.all([n.e(2074),n.e(7282)]).then(n.t.bind(n,97282,23)),{loadableGenerated:{webpack:()=>[97282]},ssr:!1}),b=h()(()=>Promise.all([n.e(2074),n.e(4103)]).then(n.t.bind(n,74103,23)),{loadableGenerated:{webpack:()=>[74103]},ssr:!1}),j=e=>{let{title:t,description:n}=e;return(0,r.jsxs)("div",{className:"description-box",children:[(0,r.jsx)(i.Z.Title,{children:t}),(0,r.jsx)(i.Z.Paragraph,{children:n})]})},Z=()=>{var e,t,n,f,h,g,Z;let[F,C]=(0,p.useState)([]),[k,N]=(0,p.useState)([]),[P,S]=(0,p.useState)(),[E,T]=(0,p.useState)(),[O,L]=(0,p.useState)([]),[D,M]=(0,p.useState)([]),[R,A]=(0,p.useState)([]),[V,I]=(0,p.useState)([]),[B,_]=(0,p.useState)([]),[q,H]=(0,p.useState)([]),[W,z]=(0,p.useState)([]),[G,Q]=(0,p.useState)([]),[Y,$]=(0,p.useState)(0),X=async()=>{try{let e=await (0,m.rQ)(m.N$);C(e.errors),N(e.qualityVariantChanges),T(e.highestLatency),S(e.lowestLatency),L(e.medianLatency),M(e.medianSegmentDownloadDuration),A(e.maximumSegmentDownloadDuration),I(e.minimumSegmentDownloadDuration),_(e.minPlayerBitrate),H(e.medianPlayerBitrate),z(e.maxPlayerBitrate),Q(e.availableBitrates),$(e.segmentLength-.3)}catch(e){console.error(e)}};(0,p.useEffect)(()=>{let e=null;return X(),e=setInterval(X,m.NE),()=>{clearInterval(e)}},[]);let U=(0,r.jsxs)("div",{children:[(0,r.jsx)(i.Z.Title,{children:"Stream Performance"}),(0,r.jsx)(a.Z,{type:"info",message:" Data has not yet been collected. Once a stream has begun and viewers are watching this page will be available."}),(0,r.jsx)(o.Z,{size:"large",children:(0,r.jsx)("div",{style:{marginTop:"50px",height:"100px"}})})]});if(!(null==F?void 0:F.length)||!(null==O?void 0:O.length)||!(null==D?void 0:D.length))return U;let J=[{name:"Errors",color:"#B63FFF",data:F,pointStyle:"crossRot",pointRadius:7},{name:"Quality changes",color:"#2087E2",data:k}],K=[{name:"Max download duration",color:"#B63FFF",options:{radius:2},data:R},{name:"Median download duration",color:"#00FFFF",options:{radius:2},data:D},{name:"Min download duration",color:"#02FD0D",options:{radius:2},data:V},{name:"Approximate limit",color:"#003FFF",data:D.map(e=>({time:e.time,value:Y})),pointStyle:"dash",options:{radius:0}}],ee=[{name:"Lowest player speed",color:"#B63FFF",data:B,options:{radius:2}},{name:"Median player speed",color:"#00FFFF",data:q,options:{radius:2}},{name:"Maximum player speed",color:"#02FD0D",data:W,options:{radius:2}}];G.forEach(e=>{ee.push({name:"Available bitrate",color:"#003FFF",data:B.map(t=>({time:t.time,value:e})),options:{radius:0}})});let et=null===(e=null===(t=ee[0])||void 0===t?void 0:t.data[ee[0].data.length-1])||void 0===e?void 0:e.value,en=null===(n=D[D.length-1])||void 0===n?void 0:n.value,er=G.reduce((e,t)=>e.valueOf()<t.valueOf()?e:t),ei=(null===(f=O[O.length-1])||void 0===f?void 0:f.value)||0,ea=(null===(h=E[E.length-1])||void 0===h?void 0:h.value)||0,eo=(null===(g=P[P.length-1])||void 0===g?void 0:g.value)||0,el=(Number(ea)+Number(eo)+Number(ei))/3,es=0,ec=(null===(Z=J[0])||void 0===Z?void 0:Z.data.length)||0;if(ec>5){let e=J[0].data.slice(-5);es=e.reduce((e,t)=>e+Number(t.value),0)}else es=J[0].data.reduce((e,t)=>e+Number(t.value),0);let eu=et>0||en>0||es>0,ed=null,ep=null;0!==et&&et<er&&(ed="One of your viewers is playing your stream at ".concat(et,"kbps, slower than ").concat(er,"kbps, the lowest quality you made available. Consider adding a lower quality with a lower bitrate if the errors over time warrant this.")),en>Y&&(ep="Your viewers may be consuming your video slower than required. This may be due to slow networks or your latency configuration. You need to decrease the amount of time viewers are taking to consume your video. Consider adding a lower quality with a lower bitrate or experiment with increasing the latency buffer setting.");let ef=es>0?"#B63FFF":"unset",eh={display:"flex",alignItems:"center",justifyContent:"center",height:"80px"};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z.Title,{children:"Stream Performance"}),(0,r.jsx)(i.Z.Paragraph,{children:"This tool hopes to help you identify and troubleshoot problems you may be experiencing with your stream. It aims to aggregate experiences across your viewers, meaning one viewer with an exceptionally bad experience may throw off numbers for the whole, especially with a low number of viewers."}),(0,r.jsx)(i.Z.Paragraph,{children:"The data is only collected by those using the Owncast web interface and is unable to gain insight into external players people may be using such as VLC, MPV, QuickTime, etc."}),(0,r.jsxs)(l.Z,{direction:"vertical",size:"middle",children:[(0,r.jsx)(s.Z,{justify:"space-around",children:(0,r.jsx)(c.Z,{style:{width:"100%"},children:(0,r.jsx)(u.Z,{type:"inner",children:(0,r.jsx)(y.j,{showTroubleshootButton:!1})})})}),(0,r.jsxs)(s.Z,{gutter:[16,16],justify:"space-around",style:{display:eu?"flex":"none"},children:[(0,r.jsx)(c.Z,{children:(0,r.jsx)(u.Z,{type:"inner",children:(0,r.jsx)("div",{style:eh,children:(0,r.jsx)(d.Z,{title:"Viewer Playback Speed",value:"".concat(et),prefix:(0,r.jsx)(b,{style:{marginRight:"5px"}}),precision:0,suffix:"kbps"})})})}),(0,r.jsx)(c.Z,{children:(0,r.jsx)(u.Z,{type:"inner",children:(0,r.jsx)("div",{style:eh,children:(0,r.jsx)(d.Z,{title:"Viewer Latency",value:"".concat(el),prefix:(0,r.jsx)(x,{style:{marginRight:"5px"}}),precision:0,suffix:"seconds"})})})}),(0,r.jsx)(c.Z,{children:(0,r.jsx)(u.Z,{type:"inner",children:(0,r.jsx)("div",{style:eh,children:(0,r.jsx)(d.Z,{title:"Recent Playback Errors",value:"".concat(es||0),valueStyle:{color:ef},prefix:(0,r.jsx)(w,{style:{marginRight:"5px"}}),suffix:""})})})})]}),(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(j,{title:"Video Segment Download",description:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z.Paragraph,{children:"Once a video segment takes too long to download a viewer will experience buffering. If you see slow downloads you should offer a lower quality for your viewers, or find other ways, possibly an external storage provider, a CDN or a faster network, to improve your stream quality. Increasing your latency buffer can also help for some viewers."}),(0,r.jsx)(i.Z.Paragraph,{children:"In short, once the pink line consistently gets near the blue line, your stream is likely experiencing problems for viewers."})]})}),ep&&(0,r.jsx)(a.Z,{message:"Slow downloads",description:ep,type:"error",showIcon:!0}),(0,r.jsx)(v.k,{title:"Seconds",dataCollections:K,color:"#FF7700",unit:"seconds",yLogarithmic:!0})]}),(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(j,{title:"Player Network Speed",description:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z.Paragraph,{children:"The playback bitrate of your viewers. Once somebody's bitrate drops below the lowest video variant bitrate they will experience buffering. If you see viewers with slow connections trying to play your video you should consider offering an additional, lower quality."}),(0,r.jsx)(i.Z.Paragraph,{children:"In short, once the pink line gets near the lowest blue line, your stream is likely experiencing problems for at least one of your viewers."})]})}),ed&&(0,r.jsx)(a.Z,{message:"Low bandwidth viewers",description:ed,type:"error",showIcon:!0}),(0,r.jsx)(v.k,{title:"Lowest Player Bitrate",dataCollections:ee,color:"#FF7700",unit:"kbps",yLogarithmic:!0})]}),(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(j,{title:"Errors and Quality Changes",description:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z.Paragraph,{children:"Recent number of errors, including buffering, and quality changes from across all your viewers. Errors can occur for many reasons, including browser issues, plugins, wifi problems, and they don't all represent fatal issues or something you have control over."}),"A quality change is not necessarily a negative thing, but if it's excessive and coinciding with errors you should consider adding another quality variant.",(0,r.jsx)(i.Z.Paragraph,{})]})}),(0,r.jsx)(v.k,{title:"#",dataCollections:J,color:"#FF7700",unit:""})]}),(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(j,{title:"Viewer Latency",description:"An approximate number of seconds that your viewers are behind your live video. The largest cause of latency spikes is buffering. High latency itself is not a problem, and optimizing for low latency can result in buffering, resulting in even higher latency."}),(0,r.jsx)(v.k,{title:"Seconds",dataCollections:[{name:"Median stream latency",color:"#00FFFF",data:O},{name:"Lowest stream latency",color:"#02FD0D",data:P},{name:"Highest stream latency",color:"#B63FFF",data:E}],color:"#FF7700",unit:"seconds"})]})]})]})};Z.getLayout=function(e){return(0,r.jsx)(g.l,{page:e})},t.default=Z},60057:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(4942),i=n(1413),a=n(97685),o=n(45987),l=n(67294),s=n(81263),c=n(94184),u=n.n(c),d={adjustX:1,adjustY:1},p=[0,0],f={topLeft:{points:["bl","tl"],overflow:d,offset:[0,-4],targetOffset:p},topCenter:{points:["bc","tc"],overflow:d,offset:[0,-4],targetOffset:p},topRight:{points:["br","tr"],overflow:d,offset:[0,-4],targetOffset:p},bottomLeft:{points:["tl","bl"],overflow:d,offset:[0,4],targetOffset:p},bottomCenter:{points:["tc","bc"],overflow:d,offset:[0,4],targetOffset:p},bottomRight:{points:["tr","br"],overflow:d,offset:[0,4],targetOffset:p}},h=n(15105),m=n(75164),v=n(88603),y=h.Z.ESC,g=h.Z.TAB,x=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"],w=l.forwardRef(function(e,t){var n,c,d,p,h,w,b,j,Z,F,C,k,N,P,S,E,T=e.arrow,O=void 0!==T&&T,L=e.prefixCls,D=void 0===L?"rc-dropdown":L,M=e.transitionName,R=e.animation,A=e.align,V=e.placement,I=e.placements,B=e.getPopupContainer,_=e.showAction,q=e.hideAction,H=e.overlayClassName,W=e.overlayStyle,z=e.visible,G=e.trigger,Q=void 0===G?["hover"]:G,Y=e.autoFocus,$=(0,o.Z)(e,x),X=l.useState(),U=(0,a.Z)(X,2),J=U[0],K=U[1],ee="visible"in e?z:J,et=l.useRef(null);l.useImperativeHandle(t,function(){return et.current}),d=(c={visible:ee,setTriggerVisible:K,triggerRef:et,onVisibleChange:e.onVisibleChange,autoFocus:Y}).visible,p=c.setTriggerVisible,h=c.triggerRef,w=c.onVisibleChange,b=c.autoFocus,j=l.useRef(!1),Z=function(){if(d&&h.current){var e,t,n,r;null===(e=h.current)||void 0===e||null===(t=e.triggerRef)||void 0===t||null===(n=t.current)||void 0===n||null===(r=n.focus)||void 0===r||r.call(n),p(!1),"function"==typeof w&&w(!1)}},F=function(){var e,t,n,r,i=(0,v.tS)(null===(e=h.current)||void 0===e?void 0:null===(t=e.popupRef)||void 0===t?void 0:null===(n=t.current)||void 0===n?void 0:null===(r=n.getElement)||void 0===r?void 0:r.call(n))[0];return null!=i&&!!i.focus&&(i.focus(),j.current=!0,!0)},C=function(e){switch(e.keyCode){case y:Z();break;case g:var t=!1;j.current||(t=F()),t?e.preventDefault():Z()}},l.useEffect(function(){return d?(window.addEventListener("keydown",C),b&&(0,m.Z)(F,3),function(){window.removeEventListener("keydown",C),j.current=!1}):function(){j.current=!1}},[d]);var en=function(){var t=e.overlay;return"function"==typeof t?t():t},er=function(){var e=en();return l.createElement(l.Fragment,null,O&&l.createElement("div",{className:"".concat(D,"-arrow")}),e)},ei=q;return ei||-1===Q.indexOf("contextMenu")||(ei=["click"]),l.createElement(s.Z,(0,i.Z)((0,i.Z)({builtinPlacements:void 0===I?f:I},$),{},{prefixCls:D,ref:et,popupClassName:u()(H,(0,r.Z)({},"".concat(D,"-show-arrow"),O)),popupStyle:W,action:Q,showAction:_,hideAction:ei||[],popupPlacement:void 0===V?"bottomLeft":V,popupAlign:A,popupTransitionName:M,popupAnimation:R,popupVisible:ee,stretch:(k=e.minOverlayWidthMatchTrigger,N=e.alignPoint,"minOverlayWidthMatchTrigger"in e?k:!N)?"minWidth":"",popup:"function"==typeof e.overlay?er:er(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;K(t),"function"==typeof n&&n(t)},onPopupClick:function(t){var n=e.onOverlayClick;K(!1),n&&n(t)},getPopupContainer:B}),(S=(P=e.children).props?P.props:{},E=u()(S.className,void 0!==(n=e.openClassName)?n:"".concat(D,"-open")),ee&&P?l.cloneElement(P,{className:E}):P))})}},function(e){e.O(0,[2196,173,5874,2184,2364,4931,5402,5257,5818,1664,8014,9915,8091,4526,7162,4293,8035,4261,9774,2888,179],function(){return e(e.s=16791)}),_N_E=e.O()}]);