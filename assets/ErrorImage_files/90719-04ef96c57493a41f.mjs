(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[90719],{874261:(e,t,n)=>{n.d(t,{Z:()=>r});n(441143);var i=n(785893);class o{static factory(e){return e instanceof o?e:new o(String(e))}constructor(e){this._private_safe_value=e.trim().replace(">",">").replace("<","<").replace("&","&").replace('"','"').replace("'","'")}toString(){return this._private_safe_value}}function r(e){const{css:t,unsafeCSS:n,...r}=e,a=String(t||"")||n||"";return!!a?(0,i.jsx)("style",{...r,dangerouslySetInnerHTML:{__html:String(o.factory(a))}}):null}},767874:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(536042),o=n(785893);function r({fillColor:e,size:t,noCircle:n}){const r=(0,i.ZP)();return(0,o.jsxs)("svg",{height:t,style:{display:"block"},viewBox:n?"3 3 70 70":"-3 -3 82 82",width:t,children:[(0,o.jsx)("title",{children:r._('Pinterest logo', 'Accessibility label for Pinterest icon', 'Accessibility label for Pinterest icon')}),n?null:(0,o.jsx)("circle",{cx:"38",cy:"38",fill:e?"transparent":"white",r:"40"}),(0,o.jsx)("path",{d:"M27.5 71c3.3 1 6.7 1.6 10.3 1.6C57 72.6 72.6 57 72.6 37.8 72.6 18.6 57 3 37.8 3 18.6 3 3 18.6 3 37.8c0 14.8 9.3 27.5 22.4 32.5-.3-2.7-.6-7.2 0-10.3l4-17.2s-1-2-1-5.2c0-4.8 3-8.4 6.4-8.4 3 0 4.4 2.2 4.4 5 0 3-2 7.3-3 11.4C35.6 49 38 52 41.5 52c6.2 0 11-6.6 11-16 0-8.3-6-14-14.6-14-9.8 0-15.6 7.3-15.6 15 0 3 1 6 2.6 8 .3.2.3.5.2 1l-1 3.8c0 .6-.4.8-1 .4-4.4-2-7-8.3-7-13.4 0-11 7.8-21 22.8-21 12 0 21.3 8.6 21.3 20 0 12-7.4 21.6-18 21.6-3.4 0-6.7-1.8-7.8-4L32 61.7c-.8 3-3 7-4.5 9.4z",fill:null!=e?e:"#e60023",fillRule:"evenodd"})]})}},387977:(e,t,n)=>{function i(e){return"undefined"!=typeof window&&Object.prototype.hasOwnProperty.call(window,"requestAnimationFrame")||e&&e(),window.requestAnimationFrame((()=>{window.requestAnimationFrame((()=>{e&&e()}))}))}n.d(t,{Z:()=>i})},798198:(e,t,n)=>{n.d(t,{CC:()=>i,Ll:()=>r,XF:()=>o});const i=(e,t)=>((e,t,n)=>({x:Math.floor(e*Math.cos(n)),y:Math.floor(t*Math.sin(n))}))(t/2,e/2,2*Math.random()*Math.PI),o=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,r=e=>["@-webkit-keyframes","@keyframes"].map((t=>e.map((e=>t+" "+e)).join("\n"))).join("\n")},865173:(e,t,n)=>{n.d(t,{Z:()=>o,v:()=>i});const i=()=>"undefined"!=typeof navigator&&"getInstalledRelatedApps"in navigator;async function o(){if(!i())return[];try{return await navigator.getInstalledRelatedApps()}catch(e){return[]}}},14100:(e,t,n)=>{n.d(t,{$:()=>o,d:()=>i});const i=e=>/instagram/i.test(e||""),o=e=>(e||"").includes("[Pinterest/iOS]")||(e||"").includes("[Pinterest/Android]")},402833:(e,t,n)=>{n.d(t,{g:()=>a,t:()=>r});var i=n(667294);const o=(0,i.createContext)(null),r=o.Provider,a=()=>(0,i.useContext)(o)},894121:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var i=n(667294),o=n(883119),r=n(387977),a=n(467105),l=n(536042),s=n(906215),d=n(282802),c=n(455788),u=n(98736),p=n(549201),m=n(886365),h=n(785893);const f=()=>{if(document.body){const{body:{style:e}}=document;e.overflow="hidden",e.touchAction="none"}},v=()=>{if(document.body){const{body:{style:e}}=document;e.overflow="visible",e.touchAction="auto"}};function _({accessibilityModalLabel:e,align:t="center",allowScroll:n=!1,children:_,closeOnOutsideClick:g=!0,footer:w,heading:y,mobileAccessibilityCloseIconLabel:b,mobileHideCloseIcon:x,mobileIsFullscreen:S,isOpen:k,mobileIsSlideUp:C,mobileIsFooter:T,onDismiss:P,zIndex:A,subHeading:Z,type:I}){const j=(0,l.ZP)(),{isRTL:O}=(0,d.B)(),L=(0,i.useRef)(!1),[U,E]=(0,i.useState)(!1),{setAppFocusState:F}=(0,m.I)(),M=(0,p.ZP)();(0,i.useEffect)((()=>{(0,u.My)(`mweb_unauth.mobile_modal.${I||"unknown_type"}.did_mount.is_open.${String(!!k)}`)}),[k,I]),(0,i.useEffect)((()=>(L.current=(0,r.Z)((()=>{L.current&&E(!0)})),()=>{"undefined"!=typeof window&&Object.prototype.hasOwnProperty.call(window,"cancelAnimationFrame")&&L.current&&(window.cancelAnimationFrame(L.current),L.current=null)})),[]),(0,i.useEffect)((()=>(k?(s.Z.pause(),F(!1)):(s.Z.resume(),F(!0)),()=>{k&&(s.Z.resume(),F(!0))})),[F,k]),(0,i.useEffect)((()=>{const e=k&&!n;return e&&f(),()=>{e&&v()}}),[k,n]);return k?(0,h.jsx)(c.Z,{children:(0,h.jsx)(o.mh,{children:(0,h.jsxs)(o.xu,{"aria-label":e,display:"inlineBlock",zIndex:A||a.ZM,position:"relative",role:"dialog",children:[(0,h.jsx)(o.iP,{accessibilityLabel:j._('Mobile Signup Modal Mask', 'mweb.signup_modal.mask', 'The acessibility label for the mask of mobile signup modal'),onTap:({event:e})=>{e.clientX&&e.clientY&&(0,u.tj)(`mweb_unauth.mobile_modal.wash_tap.${I||"unknown_type"}.with_dismissal`,{x:e.clientX,y:e.clientY}),g&&P()},tapStyle:"none",children:(0,h.jsx)(o.xu,{height:"100%",left:!0,position:"fixed",top:!0,width:"100%",zIndex:new o.Ry(1),dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(0, 0, 0, .5)",touchAction:"none",transitionProperty:"opacity",transitionTimingFunction:"ease-out"}}})}),(0,h.jsxs)(o.xu,{position:"fixed",color:"default","data-test-id":"mobile-signup-mask",dangerouslySetInlineStyle:C?(0,a.Vf)({isFullscreen:S,isTablet:"tablet"===M,isShowing:U,isRelatedInterestsModal:"related_interests_modal"===I}):(0,a.JN)({variant:S?"fullscreen":"tablet"===M?"tablet":T?"footer":"signup"===I?"signup":void 0}),children:[(0,h.jsxs)(o.kC,{alignItems:"center",justifyContent:"start",width:"100%",gap:{row:2,column:0},children:[b&&!x?(0,h.jsx)(o.xu,{padding:2,"data-test-id":"mobile-modal-cancel-button",children:(0,h.jsx)(o.hU,{accessibilityLabel:b,iconColor:"darkGray",icon:"cancel",onClick:P,padding:4,size:"sm"})}):null,y?(0,h.jsx)(o.kC.Item,{flex:"grow",children:(0,h.jsx)(o.kC,{direction:"column",alignItems:"center",justifyContent:"center",children:(0,h.jsxs)(o.xu,{dangerouslySetInlineStyle:{__style:b&&!x?{marginRight:O?-10:50,marginLeft:O?50:-10}:{}},children:[S?y:(0,h.jsx)(o.xv,{align:t,weight:"bold",size:"400",children:y}),Z?(0,h.jsx)(o.xv,{align:t,children:Z}):null]})})}):null]}),(0,h.jsxs)(o.xu,{overflow:"auto",children:[_,w]})]})]})})}):null}},550140:(e,t,n)=>{n.d(t,{UZ:()=>c,Vg:()=>d,ZP:()=>u});var i=n(667294),o=n(883119),r=n(549201),a=n(272109),l=n(785893);const s=2e3,d=200,c=({deviceType:e,hiding:t,visible:n})=>{const i="desktop"===e;let o=0,r=i?"translateY(200px)":"translateY(-200px)",a="opacity 0.1s ease-in-out",l="hidden";return n&&!t&&(o=1,r="translateY(0)",a="all 0.7s cubic-bezier(.19, 1.15, .48, 1)",l="visible"),n&&t&&(r="scale(1.1)",a="opacity transform 0.2s"),{opacity:o,pointerEvents:"auto",position:"relative",marginTop:i?10:0,transform:r,transition:a,visibility:l}};function u({_dangerouslySetThumbnail:e,_dangerouslySetPrimaryAction:t,text:n,primaryAction:u,dismissButton:p,helperLink:m,thumbnail:h,type:f,dataTestId:v,duration:_=s,onHide:g,href:w,onClick:y,openNewPage:b,imageUrl:x}){var S;const k=(0,r.ZP)(),[C,T]=(0,i.useState)(!1),[P,A]=(0,i.useState)(!1),Z=(0,i.useRef)(),I=()=>{T(!0),Z.current=setTimeout(g,d)},j=()=>{Z.current=setTimeout(I,_)},O=()=>{Z.current&&clearTimeout(Z.current)};let L;(0,a.Z)((()=>(setTimeout((()=>A(!0)),100),j(),O))),x&&(L={image:(0,l.jsx)(o.Ee,{alt:"string"==typeof n?n:`${n[0]} ${n[1]}`,fit:"cover",naturalHeight:1,naturalWidth:1,src:x})});const U=(0,l.jsx)(o.FN,{_dangerouslySetThumbnail:e,_dangerouslySetPrimaryAction:t,primaryAction:u,text:n,thumbnail:null!==(S=L)&&void 0!==S?S:h,type:f,dismissButton:p,helperLink:m}),{marginTop:E,opacity:F,pointerEvents:M,position:N,transform:D,transition:H,visibility:R}=c({deviceType:k,hiding:C,visible:P});return(0,l.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{transform:D,transition:H,visibility:R,pointerEvents:M}},"data-test-id":null!=v?v:"toast",onMouseEnter:O,onMouseLeave:j,opacity:F,position:N,marginTop:E,display:"flex",children:w?(0,l.jsx)(o.iP,{role:"link",href:w,onTap:({event:e})=>null==y?void 0:y(e),target:b?"blank":null,rounding:"pill",children:U}):U})}},870243:(e,t,n)=>{n.d(t,{qE:()=>l,u_:()=>s.ZP});var i=n(883119),o=n(785893);const r=(e,t)=>{const n=null==e?void 0:e.includes("images/user/default");return Boolean(n&&t)};function a({accessibilityLabel:e,name:t,outline:n,size:a,src:l,verified:s}){return(0,o.jsx)(i.qE,{accessibilityLabel:e,name:t,outline:n,size:a,src:r(l,t)?void 0:l,verified:s})}a.displayName="Avatar";const l=a;var s=n(88622);n(550140)},24286:(e,t,n)=>{n.d(t,{$H:()=>a,$q:()=>w,D6:()=>d,KN:()=>b,Lo:()=>o,OS:()=>m,P2:()=>v,Wv:()=>y,ZZ:()=>u,g5:()=>p,jC:()=>l,lX:()=>f,nW:()=>h,oX:()=>_,qG:()=>g,tG:()=>r,yF:()=>i,yc:()=>c,yt:()=>s});const i=236,o=2*i/3,r=175,a=24,l=4,s=8,d=2,c=2,u=14,p=16,m=5,h=12,f=16,v=24,_=16,g=-1,w=(e=!1,t=!1)=>e?t?f:h:v,y=({contentVisibleItemCount:e,gap:t,width:n})=>e||n?(n-(e-1)*t)/e:i,b=(e,t,n,i,o=u)=>{const r=e+o;return`\n@media (min-width: ${t*r}px) and (max-width: ${(n+1)*r-1}px) {\n  ${i}\n}\n`}},943795:(e,t,n)=>{n.r(t),n.d(t,{DEFAULT_HEIGHT:()=>c,DEFAULT_PADDING_Y:()=>u,FixedFooter:()=>g,FixedHeader:()=>_});var i=n(667294),o=n(883119),r=n(377234),a=n(906215),l=n(107577),s=n(245410),d=n(785893);const c=64,u=3,p=100,m=44,h="0px 0px 8px rgba(0, 0, 0, 0.1)",f="1px solid #efefef";function v({children:e,footerConfig:t,headerConfig:n,height:l,hideOnScroll:m,hideOnScrollState:{isHidden:v,updateHiddenState:_},noPadding:g,paddingY:w=u,type:y,zIndex:b}){const{headerLimitedOverflow:x,ignoreObstructions:S,zIndexForGestaltBug:k}=n||{},{appUpsellFooterConfig:C,footerInLego:T,navFooterConfig:P}=t||{},A=!!C,Z="header"===y?"top":"bottom",{anyEnabled:I}=(0,s.F)().checkExperiment("hfp_hf_ssr_mweb",{dangerouslySkipActivation:!0}),j=(0,r.vs)(),O=I?j:(0,r.Yc)(),L=(0,i.useRef)(null),U=(0,i.useRef)(null);(0,i.useEffect)((()=>{try{if(!S){const e=L.current;U.current=x&&e&&Array.isArray(e.children)?e.children[0]:e,U.current instanceof HTMLElement&&a.Z.addObstruction(Z,U.current)}}catch(e){window.console.error(e),window.console.error('Can only register impression obstructions for type "HTMLElement"')}return()=>{S||U.current instanceof HTMLElement&&a.Z.removeObstruction(Z,U.current)}}),[S,x,Z,O]);const E="top"===Z?"relative":"fixed",F=g?0:w,M=(null!=l?l:c)+((null==n?void 0:n.overrideTop)||0),N=m||P?{transition:T?"transform 300ms ease-in-out, opacity 300ms ease-in-out":"transform 200ms linear",...v?{transform:`translateY(${"top"===Z?-M:M}px)`,opacity:T?0:1}:Object.freeze({})}:{},D="relative"!==E||null!=n&&n.noGutter?0:2,H=D?-D:0,R=O?"rgba(0,0,0,.95)":"rgba(255,255,255,.95)";let B,z;return O&&("header"===y?B=-1:z=-1),(0,d.jsx)(o.xu,{ref:L,dangerouslySetInlineStyle:{__style:{top:B,bottomStyle:z,...!b||k?{zIndex:k||1}:Object.freeze({}),...x?{background:"transparent",overflow:"hidden",paddingBottom:p,marginBottom:-p,pointerEvents:"none"}:Object.freeze({}),...null!=n&&n.hasBorder?{borderBottom:f}:Object.freeze({}),...null!=t&&t.hasTopShadow?{boxShadow:"0 -2px 4px 1px rgba(0, 0, 0, 0.08)"}:Object.freeze({}),...N}},zIndex:k?void 0:b,"data-test-id":y,display:A?"flex":void 0,height:l&&!T?l:void 0,position:E,bottom:"footer"===y,top:"header"===y,left:!0,right:!0,marginStart:T?"auto":H,marginEnd:T?"auto":H,onTransitionEnd:()=>{(m||P)&&U.current&&(v?a.Z.removeObstruction(Z,U.current):a.Z.addObstruction(Z,U.current))},width:T||"fixed"!==E?void 0:"100%",children:(0,d.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:(null==n?void 0:n.isTranslucent)&&R||(null==n?void 0:n.isTransparentBackground)&&"transparent"||"var(--color-background-default)",height:T?A?void 0:null!=l?l:c:"100%",boxShadow:T?h:void 0,marginBottom:!T||null!=P&&P.docked?void 0:16,...x?{pointerEvents:"auto"}:Object.freeze({}),...null!=n&&n.useRoundedCorners?{zIndex:5,borderTopRightRadius:17,borderTopLeftRadius:17,borderBottomRightRadius:0,borderBottomLeftRadius:0}:Object.freeze({})}},paddingX:("footer"!==y||g?0:4)+D,paddingY:F,position:"relative",width:P?P.footerWidth:A?void 0:"100%",rounding:!T||null!=P&&P.docked?void 0:"pill",display:T||null!=t&&t.alignCenter?"flex":void 0,marginStart:T?"auto":void 0,marginEnd:T?"auto":void 0,alignItems:null!=t&&t.alignCenter?"center":void 0,children:"function"==typeof e?e({updateHiddenState:_}):e})})}function _({hasBorder:e,headerLimitedOverflow:t,ignoreObstructions:n,isTranslucent:i,isTransparentBackground:r,noGutter:a,overrideTop:s,useRoundedCorners:c,zIndexForGestaltBug:p,...h}){const{noPadding:f,paddingY:_=u,zIndex:g}=h,w=f?0:_;return(0,d.jsx)(o.Le,{top:s||0,height:t?m+2*w*4:void 0,zIndex:g||void 0,children:(0,d.jsx)(l.Z,{hideOnScroll:h.hideOnScroll,children:o=>(0,d.jsx)(v,{...h,hideOnScrollState:o,type:"header",headerConfig:{isTranslucent:i,isTransparentBackground:r,headerLimitedOverflow:t,hasBorder:e,ignoreObstructions:n,noGutter:a,overrideTop:s,zIndexForGestaltBug:p,useRoundedCorners:c}})})})}function g({alignCenter:e,appUpsellFooterConfig:t,footerInLego:n,hasTopShadow:i,navFooterConfig:o,...r}){return(0,d.jsx)(l.Z,{appUpsellFooterConfig:t,hideOnScroll:r.hideOnScroll,navFooterConfig:null==o?void 0:o.scrollConfig,children:a=>(0,d.jsx)(v,{...r,hideOnScrollState:a,type:"footer",footerConfig:{alignCenter:e,appUpsellFooterConfig:t,footerInLego:n,hasTopShadow:i,navFooterConfig:o}})})}},107577:(e,t,n)=>{n.d(t,{Z:()=>l,m:()=>a});var i=n(667294),o=n(552369);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const a=20;class l extends i.Component{constructor(...e){var t;super(...e),r(this,"state",{isHidden:!!this.props.appUpsellFooterConfig||!(null===(t=this.props.navFooterConfig)||void 0===t||!t.isDockedNavOnPlp)}),r(this,"lastScrollPos",0),r(this,"updateHiddenState",(e=>{this.reqAnimationId=window.requestAnimationFrame((()=>{this.setState({isHidden:e})}))})),r(this,"handleScroll",(0,o.Z)((()=>{var e;const{appUpsellFooterConfig:t,navFooterConfig:n}=this.props,{isHidden:i}=this.state,o=window.scrollY,r=o-this.lastScrollPos;let l="none";const{scrollHeight:s,clientHeight:d}=document.documentElement||{};if(!Number.isNaN(s)&&!Number.isNaN(d))if(r<0){const e=window.scrollMinY||0;l=o<=Math.abs(e+Math.max(r,a))?"start":"none"}else{l=o>=(window.scrollMaxY||s-d)-Math.max(r,a)?"end":"none"}const c=null!=n&&n.isModal?0:55;if(t)if(r>a&&i&&o>=500){t.shouldShowAfterScroll()&&(this.updateHiddenState(!1),null==n||n.onScroll(!1))}else(r<-a&&!i||o<=c)&&(this.updateHiddenState(!0),null==n||n.onScroll(!0));else null!==(e=this.props.navFooterConfig)&&void 0!==e&&e.isDockedNavOnPlp?"start"===l&&!i||o<=c?(this.updateHiddenState(!0),null==n||n.onScroll(!0)):(o>c||"end"===l)&&i&&(this.updateHiddenState(!1),null==n||n.onScroll(!1)):(r<-a||"start"===l)&&i||o<=c?(this.updateHiddenState(!1),null==n||n.onScroll(!1)):(r>a||"end"===l)&&!i&&(this.updateHiddenState(!0),null==n||n.onScroll(!0));this.lastScrollPos=o}),30))}componentDidMount(){try{var e;(this.props.hideOnScroll||null!==(e=this.props.navFooterConfig)&&void 0!==e&&e.isDockedNavOnPlp)&&window.addEventListener("scroll",this.handleScroll)}catch(t){window.console.error(t),window.console.error('Can only register impression obstructions for type "HTMLElement"')}}componentWillUnmount(){var e;(this.props.hideOnScroll||null!==(e=this.props.navFooterConfig)&&void 0!==e&&e.isDockedNavOnPlp)&&window.removeEventListener("scroll",this.handleScroll),this.reqAnimationId&&(window.cancelAnimationFrame(this.reqAnimationId),this.reqAnimationId=null)}componentDidUpdate(e){var t,n,i,o;!e.hideOnScroll&&this.props.hideOnScroll||(null===(t=e.navFooterConfig)||void 0===t||!t.isDockedNavOnPlp)&&null!==(n=this.props.navFooterConfig)&&void 0!==n&&n.isDockedNavOnPlp?(this.updateHiddenState(!0),window.addEventListener("scroll",this.handleScroll)):(e.hideOnScroll&&!this.props.hideOnScroll||null!==(i=e.navFooterConfig)&&void 0!==i&&i.isDockedNavOnPlp&&(null===(o=this.props.navFooterConfig)||void 0===o||!o.isDockedNavOnPlp))&&(this.updateHiddenState(!1),window.removeEventListener("scroll",this.handleScroll))}render(){const{children:e,navFooterConfig:t}=this.props,{isHidden:n}=this.state;return e({isHidden:!(null!=t&&t.forceShow)&&n,updateHiddenState:this.updateHiddenState})}}},319689:(e,t,n)=>{n.d(t,{C:()=>r,V:()=>a});var i=n(667294);const o=(0,i.createContext)(!1),r=o.Provider,a=()=>(0,i.useContext)(o)},624417:(e,t,n)=>{function i({embedSrc:e,embedType:t,imagesUrls:n,preferredResolution:i,excludeOriginals:o}){if(!e&&!t&&!n)return"";if("gif"===t)return e||"";if(!n)return"";if(i){const e="474x"===i&&n["474x"]||"236x"===i&&n["236x"]||n["736x"];if(e)return e}const r=Object.keys(n).reduce(((e,t)=>{try{const i=t.split("x")[0];return Number.isNaN(Number(i))?{...e,[t]:n[t]}:{...e,[i]:n[t]}}catch(i){return e}}),{}),a=Object.keys(r);o&&"orig"===a[a.length-1]&&a.pop();return r[a.pop()]||""}n.d(t,{Z:()=>i})},465991:(e,t,n)=>{n.d(t,{eg:()=>a,kt:()=>h,rw:()=>p,fs:()=>d,eK:()=>c,Ly:()=>u,BY:()=>m,bN:()=>f,RC:()=>l,EU:()=>s});const i=/\s\s+/g,o=e=>e.replace(i," ");var r=n(371362);const a=Object.freeze(new Set(["sensitive_raw_pin_text","is_sensitive_rich_pin_description","is_sensitive_rich_pin_title","is_sensitive_board_title"])),l=({storyPinDataMetadataPinTitle:e,pinTitle:t})=>e||t,s=(e,t)=>e?e.trim().length>t?(0,r.ZP)(e.trim(),t).trim():e.trim():"",d=({pinTitle:e,gridTitle:t,richSummaryDisplayName:n,richMetadataTitle:i,storyPinDataId:o,storyPinDataMetadataPinTitle:r})=>{const a=r||e,l=s(t,200);return l||(n||(i||(o&&a?a:null)))},c=e=>{const{richSummaryDisplayName:t}=e,n=e.pinJoinVisualAnnotation||[],i=e.pinJoinAnnotationsWithLinks||{},a=e.richMetadataDescription||"",l=e.closeupUnifiedDescription||"",s=n.map((e=>(i||{})[e]||{name:e,url:""}));let d="";const c=(t||"").toLocaleLowerCase().trim(),u=a.toLocaleLowerCase().trim(),p=l.toLocaleLowerCase().trim();return l&&l.length>3&&p!==c?d=l:a&&a.length>3&&u!==c&&(d=a),d&&(d=o((0,r.ZP)(d,496)).trim()),{description:d,annotationsWithLinks:s}},u=({pinTitle:e,gridTitle:t,richSummaryDisplayName:n,richMetadataTitle:i,storyPinDataId:o,storyPinDataMetadataPinTitle:r,pinJoinVisualAnnotation:l,seoNoindexReason:s,seoTitle:c})=>a.has(null!=s?s:"")?c:d({pinTitle:e,gridTitle:t,richSummaryDisplayName:n,richMetadataTitle:i,storyPinDataId:o,storyPinDataMetadataPinTitle:r})||(null==l?void 0:l[0])||e,p=(e,t,n,i,o)=>{const r=(a=e,"string"==typeof a?a:"").trim();var a;let l="";const s=(e,t)=>t&&t.length>0?`${e} ${t.join(", ")}`:e;return l=i&&i.trim().length?s(i.trim(),n):o&&o.trim().length?o.trim():r?s(r,n):n?n.join(", "):"",l},m=e=>`/pin/${e}/`,h=(e,t)=>{const n=`Pinterest video from ${t}: `.concat(e);return""===t?e:n},f=({pinId:e,seoUrl:t})=>t&&"string"==typeof t?t:m(e)},643183:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n(497088).Z},649715:(e,t,n)=>{function i(e){return(e||"").trim().replace(/\s+/g," ")}n.d(t,{Z:()=>i})},466946:(e,t,n)=>{n.d(t,{l:()=>r,r:()=>a});var i=n(667294);const o=(0,i.createContext)(null),r=()=>(0,i.useContext)(o),a=o.Provider},371362:(e,t,n)=>{n.d(t,{ZP:()=>a});const i=80,o="…",r=!1;function a(e,t=i,n=o,a=r){let l;if(!e)return"";if(e.length<=t)return e;if(" "!==e[t-1]&&" "===e[t]||a)l=e.substring(0,t);else{const n=e.lastIndexOf(" ",t);l=e.substring(0,n)}return l=l.replace(/[\- _,.<>:;+=*&@~\/\|!]*$/,""),l+n}},706874:(e,t,n)=>{n.d(t,{A:()=>u,Z:()=>c});var i=n(667294),o=n(563962),r=n(788241),a=n(402833),l=n(466946),s=n(860438),d=n(619277);function c(){const{trackConversionUpsellForContext:e}=(0,a.g)()||{},{trackConversionUpsellForContext:t}=(0,l.l)()||{},{viewType:n,viewParameter:i}=(0,r.SU)();return{trackConversionUpsell:({eventType:o,viewType:r,viewParameter:a,element:l,component:s,upsellReason:d,incrementUpsellReasonCounter:c})=>{const u=e||t;u&&u({eventType:o,viewType:r||n||202,viewParameter:a||i,element:l,component:s,upsellReason:d,incrementUpsellReasonCounter:c})}}}function u(){const e=(0,o.Z)(),t=(0,i.useRef)(""),n=(0,i.useRef)(null),r=()=>s.Z.getItem(d.w0)||0;return{trackConversionUpsellForContext:({eventType:i,viewType:o,viewParameter:a,element:l,component:c,upsellReason:u,incrementUpsellReasonCounter:p})=>{14688===i&&(t.current=u,n.current=c,!1!==p&&s.Z.setItem(d.w0,r()+1)),e({event_type:i,view_type:o,view_parameter:a,element:l,component:n.current,aux_data:{upsell_reason:t.current,upsell_view_count:r()}})}}}},951599:(e,t,n)=>{n.d(t,{Z:()=>p});var i=n(388011),o=n(245410),r=n(282802),a=n(868489),l=n(352865),s=n(185803),d=n(785893);function c({children:e,invite_code:t}){const{isAuthenticated:n,isBot:a,unauthId:d,userAgent:{platform:c,raw:u}}=(0,r.B)(),{logContextEvent:p}=(0,i.v)(),{checkExperiment:m}=(0,o.F)();return e((async(e,i,o)=>{p({component:14347,element:13582,event_type:700,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:i}}),(0,s.Z)({isAuthenticated:n,checkExperiment:m,deeplinkUri:e,fallbackUrl:o,invite_code:t,logContextEvent:p,platform:c,redirectToLite:(0,l.Rp)({isBot:a,platform:c,userAgent:u}),unauthId:d,userAgent:u,within:i})}))}const u=e=>(0,d.jsx)(a.ty,{children:t=>(0,d.jsx)(c,{...e,invite_code:t})});u.displayName="DeepLinkNavigator";const p=u},460914:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(883119),o=n(785893);function r({children:e,onMouseEnter:t,onMouseLeave:n,onTouch:r,rounding:a,fullWidth:l=!1,pressState:s="none",accessibilityLabel:d,role:c}){const u=(Array.isArray(s)?s:[s]).includes("compress");return(0,o.jsx)(i.iP,{fullWidth:l,onMouseEnter:t&&(({event:e})=>t(e)),onMouseLeave:n&&(({event:e})=>n(e)),onTap:r&&(({event:e})=>r(e)),rounding:a,tapStyle:u?"compress":"none",accessibilityLabel:d,role:c,children:e})}},199999:(e,t,n)=>{n.d(t,{D:()=>o,a:()=>r});var i=n(583592);const{Provider:o,useMaybeHook:r}=(0,i.Z)("unauthPageWrapperContext")},306123:(e,t,n)=>{n.d(t,{Z:()=>f});var i=n(667294),o=n(702664),r=n(616550),a=n(988014),l=n(245410),s=n(282802),d=n(802071),c=n(799006),u=n(352865),p=n(169492),m=n(199999),h=n(785893);function f({children:e}){const{isAuth:t}=(0,d.Z)(),{isBot:n}=(0,s.B)(),f=(0,r.useLocation)(),v=(0,r.useRouteMatch)(),[_,g]=(0,i.useState)((0,a.uM)(f)?{isStoryPin:"unknown"}:null);(0,i.useEffect)((()=>{g((0,a.uM)(f)?{isStoryPin:"unknown"}:null)}),[f]);const w=(0,i.useCallback)((e=>g({isStoryPin:e})),[]),{userAgent:y,userAgentPlatform:b}=(0,o.useSelector)((({session:e})=>({userAgent:e.userAgent,userAgentPlatform:e.userAgentPlatform})),o.shallowEqual),x=(0,c.Z)()||(0,u.Rp)({isBot:n,platform:b,userAgent:y}),{checkExperiment:S}=(0,l.F)(),[k,C]=(0,i.useState)(!1),[T,P]=(0,i.useState)(!1),[A,Z]=(0,i.useState)(!1),[I,j]=(0,i.useState)(!1),[O,L]=(0,i.useState)(!1),U=(0,p.Z)();let E;if(!t){E={appInstallBannerIsEnabled:x&&((0,a.uM)(f)||(0,a.am)(f)||(0,a.$Y)(f)||(0,a.E0)(f)||(0,a.Zz)(f)||(0,a.dr)(f)||(0,a.tZ)(f)||(0,a.Q0)(f)||(0,a.f1)(f)||(0,a.OX)(f)||(0,a.gT)(f)||(0,a.bW)(f)||(0,a.En)(f)||(0,a.wg)(f)||"/unauth-profile"===v.path||"/:username"===v.path||"/:username/:slug/:section_slug"===v.path||(0,a.Xn)(f)||("/:username/_created"===v.path||"/:username/_saved"===v.path)&&"enabled_add_tabs"===S("pcons_header_on_created_and_saved_tab").group),hasScrolledPastMainContent:k,setHasScrolledPastMainContent:C,hasDraggedDrawerToFullScreen:T,setHasDraggedDrawerToFullScreen:P,shouldShowVisualSearchAppUpsell:A,setShouldShowVisualSearchAppUpsell:Z,pinPageGlobalContext:_,onPinTypeLoad:w,shouldShowLearningUpsell:I,setShouldShowLearningUpsell:j,shouldShowHomepageAppUpsellSheet:O,setShouldShowHomepageAppUpsellSheet:L,unauthSavedPinsStore:U}}return(0,h.jsx)(m.D,{value:E,children:e})}},266769:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(667294),o=n(563962),r=n(98736);const a=({viewType:e,viewParameter:t,viewData:n,auxData:i,objectIdStr:o,component:a,clientTrackingParams:l,element:s},d)=>{const c=(u={event_type:13,view_type:e,view_parameter:t,view_data:n,aux_data:i,object_id_str:o,component:a,clientTrackingParams:l,element:s},Object.keys(u).reduce(((e,t)=>(void 0===u[t]&&delete e[t],e)),{...u}));var u;-1===Object.keys(c).indexOf("view_type")&&(0,r.My)("mweb.logging.null_view_type"),d(c)};function l(e){const{auxData:t,clientTrackingParams:n,children:r,component:l,element:s,objectIdStr:d,viewData:c,viewParameter:u,viewType:p}=e,m=(0,o.Z)(),h=JSON.stringify(t),f=JSON.stringify(c);return(0,i.useEffect)((()=>{a(e,m)}),[m,h,n,l,s,d,f,u,p]),i.Children.only(r)}},700453:(e,t,n)=>{n.d(t,{B:()=>h,Z:()=>f});var i=n(667294),o=n(616550),r=n(40660),a=n(388011),l=n(788241),s=n(988014),d=n(98736),c=n(618569),u=n(799006),p=n(951599),m=n(785893);const h=e=>"/"===e.pathname?"/":(0,s.am)(e)?`board/${e.pathname.substr(1)}`:e.pathname.substr(1);function f({children:e,componentType:t,within:n}){const s=(0,o.useLocation)(),{flushContextEvents:f,logContextEvent:v}=(0,a.v)(),{viewType:_,viewParameter:g}=(0,l.SU)(),w=(0,c.Z)();(0,i.useEffect)((()=>{w({action:"view",item:"download-button",within:n})}),[s,n,w]);const y=(0,i.useRef)(!1);(0,i.useEffect)((()=>{_&&202!==_?(v({component:t||13106,element:10308,event_type:9976,view_type:_,view_parameter:g,aux_data:{app_upsell_type:n,app_upsell_is_dupe:y.current}}),y.current=!0):r.Z.increment("webapp.track_app_upsell_viewed_invalid_parameters",1,{component:t,view_type:_,view_parameter:g,app_upsell_type:n,app_upsell_is_dupe:y.current})}),[t,v,g,_,n]);const b=(0,u.Z)();return(0,i.useEffect)((()=>{b||(0,d.My)(`mweb.app_upsell.forbidden_upsell.${n}`)}),[b,n]),(0,m.jsx)(p.Z,{children:i=>e({handleOpenApp:e=>{var o;(w({action:"click",item:"download-button",within:n}),(0,d.NC)("press_open_app",!0),v({component:t||13106,element:10308,event_type:102,view_type:_||202,view_parameter:g,aux_data:{app_upsell_type:n}}),v({component:t||13106,element:10308,event_type:9977,view_type:_||202,view_parameter:g,aux_data:{app_upsell_type:n}}),f(!0),i)&&(v({component:t||13106,element:10308,event_type:1701,view_type:_||202,view_parameter:g,aux_data:{app_upsell_type:n}}),i(null!==(o=null==e?void 0:e.deepLinkUri)&&void 0!==o?o:h(s),n))}})})}},115771:(e,t,n)=>{n.d(t,{Z:()=>u,y:()=>c});var i=n(667294),o=n(500797),r=n(611756),a=n(173085),l=n(567648),s=n(266769),d=n(785893);const c=()=>{(0,r.Nh)("appUpsell",Date.now()),(0,r.qn)("firstUpsellTime")||(0,r.Nh)("firstUpsellTime",Date.now()),(0,a.Nh)("showedAppUpsellCurrentSession",!0)};function u({children:e,clientTrackingParams:t,viewParameter:n,viewType:r}){return(0,l.Z)()||(0,o.FP)(window)?null:(0,d.jsx)(s.Z,{viewType:r,viewParameter:n,component:13106,clientTrackingParams:t,children:(0,d.jsx)(i.Fragment,{children:e})})}},799006:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(702664);const o=()=>(0,i.useSelector)((({session:{canUseNativeApp:e}})=>e))},726425:(e,t,n)=>{n.d(t,{N:()=>s,h:()=>d});var i=n(667294),o=n(865173),r=n(583592),a=n(785893);const{Provider:l,useHook:s}=(0,r.Z)("NativeAppInstalled");function d({children:e}){const[t,n]=(0,i.useState)(!1),r=(0,i.useCallback)((e=>{n(e)}),[]);(0,i.useEffect)((()=>{!async function(){(await(0,o.Z)()).length>0&&n(!0)}()}),[]);const s=(0,i.useMemo)((()=>({isNativeAppInstalled:t,setIsNativeAppInstalledVal:r})),[t,r]);return(0,a.jsx)(l,{value:s,children:e})}},536540:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(785893);function o({size:e,noCircle:t}){return(0,i.jsxs)("svg",{height:e,style:{display:"block"},viewBox:t?"3 3 70 70":"-3 -3 82 82",width:e,children:[t?null:(0,i.jsx)("circle",{cx:"38",cy:"38",fill:"white",r:"40"}),(0,i.jsx)("path",{d:"M27.5 71c3.3 1 6.7 1.6 10.3 1.6C57 72.6 72.6 57 72.6 37.8 72.6 18.6 57 3 37.8 3 18.6 3 3 18.6 3 37.8c0 14.8 9.3 27.5 22.4 32.5-.3-2.7-.6-7.2 0-10.3l4-17.2s-1-2-1-5.2c0-4.8 3-8.4 6.4-8.4 3 0 4.4 2.2 4.4 5 0 3-2 7.3-3 11.4C35.6 49 38 52 41.5 52c6.2 0 11-6.6 11-16 0-8.3-6-14-14.6-14-9.8 0-15.6 7.3-15.6 15 0 3 1 6 2.6 8 .3.2.3.5.2 1l-1 3.8c0 .6-.4.8-1 .4-4.4-2-7-8.3-7-13.4 0-11 7.8-21 22.8-21 12 0 21.3 8.6 21.3 20 0 12-7.4 21.6-18 21.6-3.4 0-6.7-1.8-7.8-4L32 61.7c-.8 3-3 7-4.5 9.4z",fill:"#fb7072",fillRule:"evenodd"})]})}},352865:(e,t,n)=>{n.d(t,{G3:()=>c,Rp:()=>d,kp:()=>s});var i=n(736409),o=n(611756),r=n(173085);const a=14*i.F4;function l(e,t,n){return e-t>n}const s=e=>{const t=function(){const e=Date.now(),t=Number((0,o.qn)("appUpsell"));return{currentTime:e,firstUpsellTime:Number((0,o.qn)("firstUpsellTime")),lastUpsellTime:t,showedAppUpsellCurrentSession:Boolean((0,r.qn)("showedAppUpsellCurrentSession"))}}();return e?function(e,t,n){const{currentTime:i,firstUpsellTime:r,lastUpsellTime:s,showedAppUpsellCurrentSession:d}=e;return n=n||a,!r||function(e,t,n){return e<t+n}(i,r,t)?!d:!!l(i,s,n)&&((0,o.L_)("firstUpsellTime"),!0)}(t,i.F4):function(e,t){const{currentTime:n,lastUpsellTime:i}=e;return t=t||a,!i||l(n,i,t)}(t)},d=({isBot:e,platform:t,userAgent:n})=>{try{return!e&&"android"===t&&parseFloat((e=>{const t=(e=e.toLowerCase()).match(/android\s([0-9\.]*)/i);return t?t[1]:void 0})(n))<7}catch(i){return!1}},c=e=>(e.startsWith("zh")||e.startsWith("ar")?e:e.slice(0,2)).toUpperCase()},185803:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(40660),o=n(865173),r=n(739425);const a="http://play.google.com/store/apps/details?id=com.pinterest",l=["access_token","new_password","new_password_confirm","password","next"],s=(e,t)=>t?(0,r.ru)(e,{invite_code:t}):e,d=(e,t,n)=>{if("ios"===t&&"string"==typeof e&&e.startsWith("discover/article/")){const t=e.split("/")[2];e=`discover_article/${t}/?is_deeplink=1`}return"string"==typeof e&&"shopping/"===e&&(e="?is_deeplink=1"),"string"==typeof e?s(e,n):"ios"===t||"ipad"===t?s(e.iOS,n):"android"===t?s(e.android,n):null},c=({isAuthenticated:e,checkExperiment:t,deeplinkUri:n,fallbackUrl:s,invite_code:c,logContextEvent:u,platform:p,redirectToLite:m,unauthId:h,userAgent:f,within:v})=>{null==u||u({component:14347,element:13582,event_type:702,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:v}});let _="https://pinterest.onelink.me/TVSr/21e04bfd";switch(null==t?void 0:t(e?"mweb_auth_apple_app_store_custom_page_referral":"mweb_unauth_apple_app_store_custom_page_referral").group){case"enabled_1":_="https://pinterest.onelink.me/TVSr/d47vxerq";break;case"enabled_2":_="https://pinterest.onelink.me/TVSr/hhstj28i";break;case"enabled_3":_="https://pinterest.onelink.me/TVSr/b16kbfgq";break;case"enabled_4":_="https://pinterest.onelink.me/TVSr/nfh3eyy2";break;case"enabled_5":_="https://pinterest.onelink.me/TVSr/elsthgd7"}if(n){const t=(({deeplinkUri:e,invite_code:t,platform:n,fallbackUrl:i,unauthId:o})=>({deeplink_path:d(e,n,t),current_page_url:(0,r.Gw)("undefined"!=typeof window?window.location.href:"",l),install_id:o,utm_source:140,utm_medium:2152,...i?{af_r:i}:null}))({isAuthenticated:e,deeplinkUri:n,fallbackUrl:s,invite_code:c,platform:p,unauthId:h,userAgent:f});if(i.Z.increment("mweb.deeplink",1,{platform:p}),c&&i.Z.increment("mweb.deeplink.invite_code",1),i.Z.increment("mweb.deeplink.unauthId",1,{withUnauthId:Boolean(h)}),m){i.Z.increment("mweb.deeplink.lite_link",1),null==u||u({component:14347,element:13582,event_type:14540,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:v}});const e=(({unauthId:e})=>{const t=(0,r.XP)({utm_source:"mweb",utm_medium:"upsell",utm_campaign:"twa",utm_content:e});return{referrer:encodeURI(t)}})({unauthId:h});window.location.href=(0,r.ru)("http://play.google.com/store/apps/details?id=com.pinterest.twa",e)}else if("android"===p){null==u||u({component:14347,element:13582,event_type:703,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:v}});const e=(({deeplinkUri:e,invite_code:t,platform:n,unauthId:i})=>{const o=JSON.stringify({deeplink_path:d(e,n,t),current_page_url:(0,r.Gw)("undefined"!=typeof window?window.location.href:"",l),install_id:i});return{referrer:(0,r.XP)({utm_source:"mweb",utm_medium:"upsell",utm_content:o})}})({deeplinkUri:n,invite_code:c,platform:p,unauthId:h});(0,o.v)()?(0,o.Z)().then((n=>{if(n.length>0){const e=(0,r.ru)(window.location.href,t);window.open(e)}else null==u||u({component:14347,element:13582,event_type:14538,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:v}}),window.location.href=(0,r.ru)(a,e)})).catch((()=>{i.Z.increment("mweb_android.deeplink.playStore.error",1)})):(null==u||u({component:14347,element:13582,event_type:14538,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:v}}),window.location.href=(0,r.ru)(a,e))}else{if(i.Z.increment("mweb.deeplink.appsflyer_link",1),"ios"===p&&"undefined"!=typeof window&&window.location.href.includes("show_yip_modal"))return void(window.location.href=(0,r.ru)("https://pinterest.com/pinterest-predicts",t));null==u||u({component:14347,element:13582,event_type:14539,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:v}}),window.location.href=(0,r.ru)(_,t)}}}},684288:(e,t,n)=>{n.d(t,{C:()=>s,P:()=>l});var i=n(40660),o=n(988014),r=n(173085);const a="msmrsfda",l=()=>!!(0,r.qn)(a),s=e=>{(0,o.LM)(e)&&!l()&&((0,r.Nh)(a,"1"),i.Z.incrementNow("mobile_signup_modal.rules.suppress_for_discover_article",1))}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/90719-04ef96c57493a41f.mjs.map