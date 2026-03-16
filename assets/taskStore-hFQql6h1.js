import{b9 as Fe,d as _,i as de,h as g,n as De,s as p,ba as je,q as M,z as Ae,t as Ne,af as Me,R as _e,r as I,bb as ce,B as Ke,C,v as b,D as ie,w as Ve,G as se,bc as We,bd as Ge,N as Ue,A as qe,u as Qe,L as Je,I as Le,J as ue,P as Ye,Q as Xe,c as P,U as Ze,be as eo,Y as t,bf as A,bg as oo}from"./index-CyYEXXJI.js";const K=typeof document<"u"&&typeof window<"u";function le(e){return e.replace(/#|\(|\)|,|\s|\./g,"_")}const fe=new WeakSet;function Mo(e){fe.add(e)}function _o(e){return!fe.has(e)}function ro(e,r,n){var i=-1,l=e.length;r<0&&(r=-r>l?0:l+r),n=n>l?l:n,n<0&&(n+=l),l=r>n?0:n-r>>>0,r>>>=0;for(var y=Array(l);++i<l;)y[i]=e[i+r];return y}function to(e,r,n){var i=e.length;return n=n===void 0?i:n,!r&&n>=i?e:ro(e,r,n)}var no="\\ud800-\\udfff",ao="\\u0300-\\u036f",io="\\ufe20-\\ufe2f",so="\\u20d0-\\u20ff",lo=ao+io+so,co="\\ufe0e\\ufe0f",uo="\\u200d",fo=RegExp("["+uo+no+lo+co+"]");function be(e){return fo.test(e)}function bo(e){return e.split("")}var ve="\\ud800-\\udfff",vo="\\u0300-\\u036f",ho="\\ufe20-\\ufe2f",po="\\u20d0-\\u20ff",mo=vo+ho+po,go="\\ufe0e\\ufe0f",yo="["+ve+"]",ee="["+mo+"]",oe="\\ud83c[\\udffb-\\udfff]",xo="(?:"+ee+"|"+oe+")",he="[^"+ve+"]",pe="(?:\\ud83c[\\udde6-\\uddff]){2}",me="[\\ud800-\\udbff][\\udc00-\\udfff]",Co="\\u200d",ge=xo+"?",ye="["+go+"]?",wo="(?:"+Co+"(?:"+[he,pe,me].join("|")+")"+ye+ge+")*",So=ye+ge+wo,ko="(?:"+[he+ee+"?",ee,pe,me,yo].join("|")+")",$o=RegExp(oe+"(?="+oe+")|"+ko+So,"g");function zo(e){return e.match($o)||[]}function To(e){return be(e)?zo(e):bo(e)}function Ro(e){return function(r){r=Fe(r);var n=be(r)?To(r):void 0,i=n?n[0]:r.charAt(0),l=n?to(n,1).join(""):r.slice(1);return i[e]()+l}}var Bo=Ro("toUpperCase");function Ko(e,r){const n=_({render(){return r()}});return _({name:Bo(e),setup(){var i;const l=(i=de(De,null))===null||i===void 0?void 0:i.mergedIconsRef;return()=>{var y;const k=(y=l?.value)===null||y===void 0?void 0:y[e];return k?k():g(n,null)}}})}const{cubicBezierEaseInOut:z}=je;function Po({duration:e=".2s",delay:r=".1s"}={}){return[p("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),p("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),p("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${z},
 max-width ${e} ${z} ${r},
 margin-left ${e} ${z} ${r},
 margin-right ${e} ${z} ${r};
 `),p("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${z} ${r},
 max-width ${e} ${z},
 margin-left ${e} ${z},
 margin-right ${e} ${z};
 `)]}const Io=M("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Eo=_({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){Ae("-base-wave",Io,Ne(e,"clsPrefix"));const r=I(null),n=I(!1);let i=null;return Me(()=>{i!==null&&window.clearTimeout(i)}),{active:n,selfRef:r,play(){i!==null&&(window.clearTimeout(i),n.value=!1,i=null),_e(()=>{var l;(l=r.value)===null||l===void 0||l.offsetHeight,n.value=!0,i=window.setTimeout(()=>{n.value=!1,i=null},1e3)})}}},render(){const{clsPrefix:e}=this;return g("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),Ho=K&&"chrome"in window;K&&navigator.userAgent.includes("Firefox");const Oo=K&&navigator.userAgent.includes("Safari")&&!Ho;function B(e){return ce(e,[255,255,255,.16])}function N(e){return ce(e,[0,0,0,.12])}const Fo=Ke("n-button-group"),Do=p([M("button",`
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
 `,[C("color",[b("border",{borderColor:"var(--n-border-color)"}),C("disabled",[b("border",{borderColor:"var(--n-border-color-disabled)"})]),ie("disabled",[p("&:focus",[b("state-border",{borderColor:"var(--n-border-color-focus)"})]),p("&:hover",[b("state-border",{borderColor:"var(--n-border-color-hover)"})]),p("&:active",[b("state-border",{borderColor:"var(--n-border-color-pressed)"})]),C("pressed",[b("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),C("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[b("border",{border:"var(--n-border-disabled)"})]),ie("disabled",[p("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[b("state-border",{border:"var(--n-border-focus)"})]),p("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[b("state-border",{border:"var(--n-border-hover)"})]),p("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[b("state-border",{border:"var(--n-border-pressed)"})]),C("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[b("state-border",{border:"var(--n-border-pressed)"})])]),C("loading","cursor: wait;"),M("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[C("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),K&&"MozBoxSizing"in document.createElement("div").style?p("&::moz-focus-inner",{border:0}):null,b("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),b("border",`
 border: var(--n-border);
 `),b("state-border",`
 border: var(--n-border);
 border-color: #0000;
 z-index: 1;
 `),b("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[M("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Ve({top:"50%",originalTransform:"translateY(-50%)"})]),Po()]),b("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[p("~",[b("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),C("block",`
 display: flex;
 width: 100%;
 `),C("dashed",[b("border, state-border",{borderStyle:"dashed !important"})]),C("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),p("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),p("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),jo=Object.assign(Object.assign({},ue.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!Oo}}),Ao=_({name:"Button",props:jo,slots:Object,setup(e){const r=I(null),n=I(null),i=I(!1),l=Qe(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),y=de(Fo,{}),{mergedSizeRef:k}=Je({},{defaultSize:"medium",mergedSize:a=>{const{size:v}=e;if(v)return v;const{size:S}=y;if(S)return S;const{mergedSize:o}=a||{};return o?o.value:"medium"}}),H=P(()=>e.focusable&&!e.disabled),V=a=>{var v;H.value||a.preventDefault(),!e.nativeFocusBehavior&&(a.preventDefault(),!e.disabled&&H.value&&((v=r.value)===null||v===void 0||v.focus({preventScroll:!0})))},W=a=>{var v;if(!e.disabled&&!e.loading){const{onClick:S}=e;S&&Ze(S,a),e.text||(v=n.value)===null||v===void 0||v.play()}},G=a=>{switch(a.key){case"Enter":if(!e.keyboard)return;i.value=!1}},d=a=>{switch(a.key){case"Enter":if(!e.keyboard||e.loading){a.preventDefault();return}i.value=!0}},m=()=>{i.value=!1},{inlineThemeDisabled:w,mergedClsPrefixRef:O,mergedRtlRef:xe}=Le(e),Ce=ue("Button","-button",Do,eo,e,O),we=Ye("Button",xe,O),re=P(()=>{const a=Ce.value,{common:{cubicBezierEaseInOut:v,cubicBezierEaseOut:S},self:o}=a,{rippleDuration:U,opacityDisabled:F,fontWeight:q,fontWeightStrong:Q}=o,x=k.value,{dashed:J,type:T,ghost:L,text:$,color:c,round:te,circle:Y,textColor:R,secondary:Se,tertiary:ne,quaternary:ke,strong:$e}=e,ze={"--n-font-weight":$e?Q:q};let u={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const D=T==="tertiary",ae=T==="default",s=D?"default":T;if($){const f=R||c;u={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":f||o[t("textColorText",s)],"--n-text-color-hover":f?B(f):o[t("textColorTextHover",s)],"--n-text-color-pressed":f?N(f):o[t("textColorTextPressed",s)],"--n-text-color-focus":f?B(f):o[t("textColorTextHover",s)],"--n-text-color-disabled":f||o[t("textColorTextDisabled",s)]}}else if(L||J){const f=R||c;u={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":c||o[t("rippleColor",s)],"--n-text-color":f||o[t("textColorGhost",s)],"--n-text-color-hover":f?B(f):o[t("textColorGhostHover",s)],"--n-text-color-pressed":f?N(f):o[t("textColorGhostPressed",s)],"--n-text-color-focus":f?B(f):o[t("textColorGhostHover",s)],"--n-text-color-disabled":f||o[t("textColorGhostDisabled",s)]}}else if(Se){const f=ae?o.textColor:D?o.textColorTertiary:o[t("color",s)],h=c||f,j=T!=="default"&&T!=="tertiary";u={"--n-color":j?A(h,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":j?A(h,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":j?A(h,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":j?A(h,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":h,"--n-text-color-hover":h,"--n-text-color-pressed":h,"--n-text-color-focus":h,"--n-text-color-disabled":h}}else if(ne||ke){const f=ae?o.textColor:D?o.textColorTertiary:o[t("color",s)],h=c||f;ne?(u["--n-color"]=o.colorTertiary,u["--n-color-hover"]=o.colorTertiaryHover,u["--n-color-pressed"]=o.colorTertiaryPressed,u["--n-color-focus"]=o.colorSecondaryHover,u["--n-color-disabled"]=o.colorTertiary):(u["--n-color"]=o.colorQuaternary,u["--n-color-hover"]=o.colorQuaternaryHover,u["--n-color-pressed"]=o.colorQuaternaryPressed,u["--n-color-focus"]=o.colorQuaternaryHover,u["--n-color-disabled"]=o.colorQuaternary),u["--n-ripple-color"]="#0000",u["--n-text-color"]=h,u["--n-text-color-hover"]=h,u["--n-text-color-pressed"]=h,u["--n-text-color-focus"]=h,u["--n-text-color-disabled"]=h}else u={"--n-color":c||o[t("color",s)],"--n-color-hover":c?B(c):o[t("colorHover",s)],"--n-color-pressed":c?N(c):o[t("colorPressed",s)],"--n-color-focus":c?B(c):o[t("colorFocus",s)],"--n-color-disabled":c||o[t("colorDisabled",s)],"--n-ripple-color":c||o[t("rippleColor",s)],"--n-text-color":R||(c?o.textColorPrimary:D?o.textColorTertiary:o[t("textColor",s)]),"--n-text-color-hover":R||(c?o.textColorHoverPrimary:o[t("textColorHover",s)]),"--n-text-color-pressed":R||(c?o.textColorPressedPrimary:o[t("textColorPressed",s)]),"--n-text-color-focus":R||(c?o.textColorFocusPrimary:o[t("textColorFocus",s)]),"--n-text-color-disabled":R||(c?o.textColorDisabledPrimary:o[t("textColorDisabled",s)])};let X={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};$?X={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:X={"--n-border":o[t("border",s)],"--n-border-hover":o[t("borderHover",s)],"--n-border-pressed":o[t("borderPressed",s)],"--n-border-focus":o[t("borderFocus",s)],"--n-border-disabled":o[t("borderDisabled",s)]};const{[t("height",x)]:Z,[t("fontSize",x)]:Te,[t("padding",x)]:Re,[t("paddingRound",x)]:Be,[t("iconSize",x)]:Pe,[t("borderRadius",x)]:Ie,[t("iconMargin",x)]:Ee,waveOpacity:He}=o,Oe={"--n-width":Y&&!$?Z:"initial","--n-height":$?"initial":Z,"--n-font-size":Te,"--n-padding":Y||$?"initial":te?Be:Re,"--n-icon-size":Pe,"--n-icon-margin":Ee,"--n-border-radius":$?"initial":Y||te?Z:Ie};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":v,"--n-bezier-ease-out":S,"--n-ripple-duration":U,"--n-opacity-disabled":F,"--n-wave-opacity":He},ze),u),X),Oe)}),E=w?Xe("button",P(()=>{let a="";const{dashed:v,type:S,ghost:o,text:U,color:F,round:q,circle:Q,textColor:x,secondary:J,tertiary:T,quaternary:L,strong:$}=e;v&&(a+="a"),o&&(a+="b"),U&&(a+="c"),q&&(a+="d"),Q&&(a+="e"),J&&(a+="f"),T&&(a+="g"),L&&(a+="h"),$&&(a+="i"),F&&(a+=`j${le(F)}`),x&&(a+=`k${le(x)}`);const{value:c}=k;return a+=`l${c[0]}`,a+=`m${S[0]}`,a}),re,e):void 0;return{selfElRef:r,waveElRef:n,mergedClsPrefix:O,mergedFocusable:H,mergedSize:k,showBorder:l,enterPressed:i,rtlEnabled:we,handleMousedown:V,handleKeydown:d,handleBlur:m,handleKeyup:G,handleClick:W,customColorCssVars:P(()=>{const{color:a}=e;if(!a)return null;const v=B(a);return{"--n-border-color":a,"--n-border-color-hover":v,"--n-border-color-pressed":N(a),"--n-border-color-focus":v,"--n-border-color-disabled":a}}),cssVars:w?void 0:re,themeClass:E?.themeClass,onRender:E?.onRender}},render(){const{mergedClsPrefix:e,tag:r,onRender:n}=this;n?.();const i=se(this.$slots.default,l=>l&&g("span",{class:`${e}-button__content`},l));return g(r,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&i,g(We,{width:!0},{default:()=>se(this.$slots.icon,l=>(this.loading||this.renderIcon||l)&&g("span",{class:`${e}-button__icon`,style:{margin:Ge(this.$slots.default)?"0":""}},g(Ue,null,{default:()=>this.loading?g(qe,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):g("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():l)})))}),this.iconPlacement==="left"&&i,this.text?null:g(Eo,{ref:"waveElRef",clsPrefix:e}),this.showBorder?g("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?g("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),Vo=Ao,Wo=oo("task",()=>{const e=I([]),r=I("all"),n=P(()=>{switch(r.value){case"all":return e.value;case"completed":return e.value.filter(d=>d.completed===!0);case"not-completed":return e.value.filter(d=>d.completed===!1);default:return e.value=[{id:"null",text:"The task list is empty, add the first one!",completed:!1,createdAt:"null"}]}}),i=P(()=>{switch(r.value){case"all":return"All";case"completed":return"Completed";case"not-completed":return"Not Completed";default:return"All"}}),l=P(()=>{switch(r.value){case"all":return e.value.length;case"completed":return e.value.filter(d=>d.completed===!0).length;case"not-completed":return e.value.filter(d=>d.completed===!1).length;default:return e.value.length}});function y(d){if(!d)return;const m={id:crypto.randomUUID(),text:d,completed:!1,createdAt:new Date().toISOString()};e.value?.push(m)}function k(d,m){const w=e.value?.find(O=>O.id===d);w&&(w.text=m)}function H(d){const m=e.value?.find(w=>w.id===d);m&&(m.completed=!0)}function V(d){const m=e.value?.find(w=>w.id===d);m&&(m.completed=!1)}function W(d){e.value=e.value?.filter(m=>m.id!==d)}function G(d){r.value=d}return{tasks:e,currentFilter:r,filteredTasks:n,filterTasksName:i,filteredTasksCount:l,addTask:y,editTask:k,taskDone:H,taskNotDone:V,removeTask:W,setFilter:G}},{persist:{key:"user-tasks",pick:["tasks"]}});export{Ao as B,Vo as X,K as a,_o as e,Oo as i,Mo as m,Ko as r,Wo as u};
