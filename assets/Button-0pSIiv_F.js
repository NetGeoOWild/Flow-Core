import{ba as je,d as F,i as ne,h as p,n as Fe,s as h,bb as Me,q as j,z as De,t as Ne,af as _e,R as Ae,r as P,bc as ie,B as Ke,C as m,v as f,D as oe,w as Ve,G as re,bd as We,be as Ge,N as qe,A as Qe,u as Ue,L as Je,I as Le,J as ae,P as Ye,Q as Xe,c as H,U as Ze,bf as eo,Y as r,bg as I}from"./index-BU8WA5Ep.js";const M=typeof document<"u"&&typeof window<"u";function te(e){return e.replace(/#|\(|\)|,|\s|\./g,"_")}const se=new WeakSet;function No(e){se.add(e)}function _o(e){return!se.has(e)}function oo(e,n,i){var s=-1,l=e.length;n<0&&(n=-n>l?0:l+n),i=i>l?l:i,i<0&&(i+=l),l=n>i?0:i-n>>>0,n>>>=0;for(var x=Array(l);++s<l;)x[s]=e[s+n];return x}function ro(e,n,i){var s=e.length;return i=i===void 0?s:i,!n&&i>=s?e:oo(e,n,i)}var to="\\ud800-\\udfff",no="\\u0300-\\u036f",io="\\ufe20-\\ufe2f",ao="\\u20d0-\\u20ff",so=no+io+ao,lo="\\ufe0e\\ufe0f",co="\\u200d",uo=RegExp("["+co+to+so+lo+"]");function le(e){return uo.test(e)}function fo(e){return e.split("")}var de="\\ud800-\\udfff",bo="\\u0300-\\u036f",vo="\\ufe20-\\ufe2f",ho="\\u20d0-\\u20ff",po=bo+vo+ho,go="\\ufe0e\\ufe0f",mo="["+de+"]",U="["+po+"]",J="\\ud83c[\\udffb-\\udfff]",yo="(?:"+U+"|"+J+")",ce="[^"+de+"]",ue="(?:\\ud83c[\\udde6-\\uddff]){2}",fe="[\\ud800-\\udbff][\\udc00-\\udfff]",xo="\\u200d",be=yo+"?",ve="["+go+"]?",Co="(?:"+xo+"(?:"+[ce,ue,fe].join("|")+")"+ve+be+")*",wo=ve+be+Co,$o="(?:"+[ce+U+"?",U,ue,fe,mo].join("|")+")",So=RegExp(J+"(?="+J+")|"+$o+wo,"g");function zo(e){return e.match(So)||[]}function Ro(e){return le(e)?zo(e):fo(e)}function Bo(e){return function(n){n=je(n);var i=le(n)?Ro(n):void 0,s=i?i[0]:n.charAt(0),l=i?ro(i,1).join(""):n.slice(1);return s[e]()+l}}var Po=Bo("toUpperCase");function Ao(e,n){const i=F({render(){return n()}});return F({name:Po(e),setup(){var s;const l=(s=ne(Fe,null))===null||s===void 0?void 0:s.mergedIconsRef;return()=>{var x;const R=(x=l?.value)===null||x===void 0?void 0:x[e];return R?R():p(i,null)}}})}const{cubicBezierEaseInOut:w}=Me;function To({duration:e=".2s",delay:n=".1s"}={}){return[h("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),h("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),h("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${w},
 max-width ${e} ${w} ${n},
 margin-left ${e} ${w} ${n},
 margin-right ${e} ${w} ${n};
 `),h("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${w} ${n},
 max-width ${e} ${w},
 margin-left ${e} ${w},
 margin-right ${e} ${w};
 `)]}const ko=j("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Eo=F({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){De("-base-wave",ko,Ne(e,"clsPrefix"));const n=P(null),i=P(!1);let s=null;return _e(()=>{s!==null&&window.clearTimeout(s)}),{active:i,selfRef:n,play(){s!==null&&(window.clearTimeout(s),i.value=!1,s=null),Ae(()=>{var l;(l=n.value)===null||l===void 0||l.offsetHeight,i.value=!0,s=window.setTimeout(()=>{i.value=!1,s=null},1e3)})}}},render(){const{clsPrefix:e}=this;return p("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),Ho=M&&"chrome"in window;M&&navigator.userAgent.includes("Firefox");const Io=M&&navigator.userAgent.includes("Safari")&&!Ho;function z(e){return ie(e,[255,255,255,.16])}function O(e){return ie(e,[0,0,0,.12])}const Oo=Ke("n-button-group"),jo=h([j("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[m("color",[f("border",{borderColor:"var(--n-border-color)"}),m("disabled",[f("border",{borderColor:"var(--n-border-color-disabled)"})]),oe("disabled",[h("&:focus",[f("state-border",{borderColor:"var(--n-border-color-focus)"})]),h("&:hover",[f("state-border",{borderColor:"var(--n-border-color-hover)"})]),h("&:active",[f("state-border",{borderColor:"var(--n-border-color-pressed)"})]),m("pressed",[f("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),m("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[f("border",{border:"var(--n-border-disabled)"})]),oe("disabled",[h("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[f("state-border",{border:"var(--n-border-focus)"})]),h("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[f("state-border",{border:"var(--n-border-hover)"})]),h("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[f("state-border",{border:"var(--n-border-pressed)"})]),m("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[f("state-border",{border:"var(--n-border-pressed)"})])]),m("loading","cursor: wait;"),j("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[m("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),M&&"MozBoxSizing"in document.createElement("div").style?h("&::moz-focus-inner",{border:0}):null,f("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),f("border",`
 border: var(--n-border);
 `),f("state-border",`
 border: var(--n-border);
 border-color: #0000;
 z-index: 1;
 `),f("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[j("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Ve({top:"50%",originalTransform:"translateY(-50%)"})]),To()]),f("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[h("~",[f("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),m("block",`
 display: flex;
 width: 100%;
 `),m("dashed",[f("border, state-border",{borderStyle:"dashed !important"})]),m("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),h("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),h("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),Fo=Object.assign(Object.assign({},ae.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!Io}}),Mo=F({name:"Button",props:Fo,slots:Object,setup(e){const n=P(null),i=P(null),s=P(!1),l=Ue(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),x=ne(Oo,{}),{mergedSizeRef:R}=Je({},{defaultSize:"medium",mergedSize:t=>{const{size:b}=e;if(b)return b;const{size:y}=x;if(y)return y;const{mergedSize:o}=t||{};return o?o.value:"medium"}}),D=H(()=>e.focusable&&!e.disabled),he=t=>{var b;D.value||t.preventDefault(),!e.nativeFocusBehavior&&(t.preventDefault(),!e.disabled&&D.value&&((b=n.value)===null||b===void 0||b.focus({preventScroll:!0})))},pe=t=>{var b;if(!e.disabled&&!e.loading){const{onClick:y}=e;y&&Ze(y,t),e.text||(b=i.value)===null||b===void 0||b.play()}},ge=t=>{switch(t.key){case"Enter":if(!e.keyboard)return;s.value=!1}},me=t=>{switch(t.key){case"Enter":if(!e.keyboard||e.loading){t.preventDefault();return}s.value=!0}},ye=()=>{s.value=!1},{inlineThemeDisabled:L,mergedClsPrefixRef:N,mergedRtlRef:xe}=Le(e),Ce=ae("Button","-button",jo,eo,e,N),we=Ye("Button",xe,N),Y=H(()=>{const t=Ce.value,{common:{cubicBezierEaseInOut:b,cubicBezierEaseOut:y},self:o}=t,{rippleDuration:_,opacityDisabled:T,fontWeight:A,fontWeightStrong:K}=o,g=R.value,{dashed:V,type:$,ghost:W,text:C,color:d,round:X,circle:G,textColor:S,secondary:$e,tertiary:Z,quaternary:Se,strong:ze}=e,Re={"--n-font-weight":ze?K:A};let c={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const k=$==="tertiary",ee=$==="default",a=k?"default":$;if(C){const u=S||d;c={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":u||o[r("textColorText",a)],"--n-text-color-hover":u?z(u):o[r("textColorTextHover",a)],"--n-text-color-pressed":u?O(u):o[r("textColorTextPressed",a)],"--n-text-color-focus":u?z(u):o[r("textColorTextHover",a)],"--n-text-color-disabled":u||o[r("textColorTextDisabled",a)]}}else if(W||V){const u=S||d;c={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":d||o[r("rippleColor",a)],"--n-text-color":u||o[r("textColorGhost",a)],"--n-text-color-hover":u?z(u):o[r("textColorGhostHover",a)],"--n-text-color-pressed":u?O(u):o[r("textColorGhostPressed",a)],"--n-text-color-focus":u?z(u):o[r("textColorGhostHover",a)],"--n-text-color-disabled":u||o[r("textColorGhostDisabled",a)]}}else if($e){const u=ee?o.textColor:k?o.textColorTertiary:o[r("color",a)],v=d||u,E=$!=="default"&&$!=="tertiary";c={"--n-color":E?I(v,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":E?I(v,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":E?I(v,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":E?I(v,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":v,"--n-text-color-hover":v,"--n-text-color-pressed":v,"--n-text-color-focus":v,"--n-text-color-disabled":v}}else if(Z||Se){const u=ee?o.textColor:k?o.textColorTertiary:o[r("color",a)],v=d||u;Z?(c["--n-color"]=o.colorTertiary,c["--n-color-hover"]=o.colorTertiaryHover,c["--n-color-pressed"]=o.colorTertiaryPressed,c["--n-color-focus"]=o.colorSecondaryHover,c["--n-color-disabled"]=o.colorTertiary):(c["--n-color"]=o.colorQuaternary,c["--n-color-hover"]=o.colorQuaternaryHover,c["--n-color-pressed"]=o.colorQuaternaryPressed,c["--n-color-focus"]=o.colorQuaternaryHover,c["--n-color-disabled"]=o.colorQuaternary),c["--n-ripple-color"]="#0000",c["--n-text-color"]=v,c["--n-text-color-hover"]=v,c["--n-text-color-pressed"]=v,c["--n-text-color-focus"]=v,c["--n-text-color-disabled"]=v}else c={"--n-color":d||o[r("color",a)],"--n-color-hover":d?z(d):o[r("colorHover",a)],"--n-color-pressed":d?O(d):o[r("colorPressed",a)],"--n-color-focus":d?z(d):o[r("colorFocus",a)],"--n-color-disabled":d||o[r("colorDisabled",a)],"--n-ripple-color":d||o[r("rippleColor",a)],"--n-text-color":S||(d?o.textColorPrimary:k?o.textColorTertiary:o[r("textColor",a)]),"--n-text-color-hover":S||(d?o.textColorHoverPrimary:o[r("textColorHover",a)]),"--n-text-color-pressed":S||(d?o.textColorPressedPrimary:o[r("textColorPressed",a)]),"--n-text-color-focus":S||(d?o.textColorFocusPrimary:o[r("textColorFocus",a)]),"--n-text-color-disabled":S||(d?o.textColorDisabledPrimary:o[r("textColorDisabled",a)])};let q={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};C?q={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:q={"--n-border":o[r("border",a)],"--n-border-hover":o[r("borderHover",a)],"--n-border-pressed":o[r("borderPressed",a)],"--n-border-focus":o[r("borderFocus",a)],"--n-border-disabled":o[r("borderDisabled",a)]};const{[r("height",g)]:Q,[r("fontSize",g)]:Be,[r("padding",g)]:Pe,[r("paddingRound",g)]:Te,[r("iconSize",g)]:ke,[r("borderRadius",g)]:Ee,[r("iconMargin",g)]:He,waveOpacity:Ie}=o,Oe={"--n-width":G&&!C?Q:"initial","--n-height":C?"initial":Q,"--n-font-size":Be,"--n-padding":G||C?"initial":X?Te:Pe,"--n-icon-size":ke,"--n-icon-margin":He,"--n-border-radius":C?"initial":G||X?Q:Ee};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":b,"--n-bezier-ease-out":y,"--n-ripple-duration":_,"--n-opacity-disabled":T,"--n-wave-opacity":Ie},Re),c),q),Oe)}),B=L?Xe("button",H(()=>{let t="";const{dashed:b,type:y,ghost:o,text:_,color:T,round:A,circle:K,textColor:g,secondary:V,tertiary:$,quaternary:W,strong:C}=e;b&&(t+="a"),o&&(t+="b"),_&&(t+="c"),A&&(t+="d"),K&&(t+="e"),V&&(t+="f"),$&&(t+="g"),W&&(t+="h"),C&&(t+="i"),T&&(t+=`j${te(T)}`),g&&(t+=`k${te(g)}`);const{value:d}=R;return t+=`l${d[0]}`,t+=`m${y[0]}`,t}),Y,e):void 0;return{selfElRef:n,waveElRef:i,mergedClsPrefix:N,mergedFocusable:D,mergedSize:R,showBorder:l,enterPressed:s,rtlEnabled:we,handleMousedown:he,handleKeydown:me,handleBlur:ye,handleKeyup:ge,handleClick:pe,customColorCssVars:H(()=>{const{color:t}=e;if(!t)return null;const b=z(t);return{"--n-border-color":t,"--n-border-color-hover":b,"--n-border-color-pressed":O(t),"--n-border-color-focus":b,"--n-border-color-disabled":t}}),cssVars:L?void 0:Y,themeClass:B?.themeClass,onRender:B?.onRender}},render(){const{mergedClsPrefix:e,tag:n,onRender:i}=this;i?.();const s=re(this.$slots.default,l=>l&&p("span",{class:`${e}-button__content`},l));return p(n,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&s,p(We,{width:!0},{default:()=>re(this.$slots.icon,l=>(this.loading||this.renderIcon||l)&&p("span",{class:`${e}-button__icon`,style:{margin:Ge(this.$slots.default)?"0":""}},p(qe,null,{default:()=>this.loading?p(Qe,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):p("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():l)})))}),this.iconPlacement==="left"&&s,this.text?null:p(Eo,{ref:"waveElRef",clsPrefix:e}),this.showBorder?p("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?p("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),Ko=Mo;export{Mo as B,Ko as X,M as a,_o as e,Io as i,No as m,Ao as r};
