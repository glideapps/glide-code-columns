(()=>{var Tt=Object.create;var P=Object.defineProperty,Pt=Object.defineProperties,yt=Object.getOwnPropertyDescriptor,Rt=Object.getOwnPropertyDescriptors,_t=Object.getOwnPropertyNames,ne=Object.getOwnPropertySymbols,St=Object.getPrototypeOf,ie=Object.prototype.hasOwnProperty,At=Object.prototype.propertyIsEnumerable;var ae=(r,e,t)=>e in r?P(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,f=(r,e)=>{for(var t in e||(e={}))ie.call(e,t)&&ae(r,t,e[t]);if(ne)for(var t of ne(e))At.call(e,t)&&ae(r,t,e[t]);return r},y=(r,e)=>Pt(r,Rt(e)),Ot=r=>P(r,"__esModule",{value:!0});var a=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Ct=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of _t(e))!ie.call(r,n)&&n!=="default"&&P(r,n,{get:()=>e[n],enumerable:!(t=yt(e,n))||t.enumerable});return r},ue=r=>Ct(Ot(P(r!=null?Tt(St(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var B=(r,e,t)=>new Promise((n,i)=>{var u=o=>{try{s(t.next(o))}catch(c){i(c)}},d=o=>{try{s(t.throw(o))}catch(c){i(c)}},s=o=>o.done?n(o.value):Promise.resolve(o.value).then(u,d);s((t=t.apply(r,e)).next())});var se=a((Ya,oe)=>{function Nt(r,e,t,n){var i=-1,u=r==null?0:r.length;for(n&&u&&(t=r[++i]);++i<u;)t=e(t,r[i],i,r);return t}oe.exports=Nt});var le=a((Xa,de)=>{function Mt(r){return function(e){return r==null?void 0:r[e]}}de.exports=Mt});var fe=a((Ka,ce)=>{var kt=le(),It={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},qt=kt(It);ce.exports=qt});var ge=a((Qa,me)=>{var Et=typeof global=="object"&&global&&global.Object===Object&&global;me.exports=Et});var pe=a((eu,he)=>{var Lt=ge(),Ut=typeof self=="object"&&self&&self.Object===Object&&self,jt=Lt||Ut||Function("return this")();he.exports=jt});var R=a((ru,ve)=>{var Dt=pe(),Wt=Dt.Symbol;ve.exports=Wt});var be=a((tu,we)=>{function Ht(r,e){for(var t=-1,n=r==null?0:r.length,i=Array(n);++t<n;)i[t]=e(r[t],t,r);return i}we.exports=Ht});var Te=a((nu,xe)=>{var Ft=Array.isArray;xe.exports=Ft});var _e=a((iu,Re)=>{var Pe=R(),ye=Object.prototype,Vt=ye.hasOwnProperty,Gt=ye.toString,w=Pe?Pe.toStringTag:void 0;function Bt(r){var e=Vt.call(r,w),t=r[w];try{r[w]=void 0;var n=!0}catch(u){}var i=Gt.call(r);return n&&(e?r[w]=t:delete r[w]),i}Re.exports=Bt});var Ae=a((au,Se)=>{var zt=Object.prototype,$t=zt.toString;function Zt(r){return $t.call(r)}Se.exports=Zt});var Me=a((uu,Ne)=>{var Oe=R(),Jt=_e(),Yt=Ae(),Xt="[object Null]",Kt="[object Undefined]",Ce=Oe?Oe.toStringTag:void 0;function Qt(r){return r==null?r===void 0?Kt:Xt:Ce&&Ce in Object(r)?Jt(r):Yt(r)}Ne.exports=Qt});var Ie=a((ou,ke)=>{function en(r){return r!=null&&typeof r=="object"}ke.exports=en});var Ee=a((su,qe)=>{var rn=Me(),tn=Ie(),nn="[object Symbol]";function an(r){return typeof r=="symbol"||tn(r)&&rn(r)==nn}qe.exports=an});var He=a((du,We)=>{var Le=R(),un=be(),on=Te(),sn=Ee(),dn=1/0,Ue=Le?Le.prototype:void 0,je=Ue?Ue.toString:void 0;function De(r){if(typeof r=="string")return r;if(on(r))return un(r,De)+"";if(sn(r))return je?je.call(r):"";var e=r+"";return e=="0"&&1/r==-dn?"-0":e}We.exports=De});var _=a((lu,Fe)=>{var ln=He();function cn(r){return r==null?"":ln(r)}Fe.exports=cn});var Ge=a((cu,Ve)=>{var fn=fe(),mn=_(),gn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,hn="\\u0300-\\u036f",pn="\\ufe20-\\ufe2f",vn="\\u20d0-\\u20ff",wn=hn+pn+vn,bn="["+wn+"]",xn=RegExp(bn,"g");function Tn(r){return r=mn(r),r&&r.replace(gn,fn).replace(xn,"")}Ve.exports=Tn});var ze=a((fu,Be)=>{var Pn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function yn(r){return r.match(Pn)||[]}Be.exports=yn});var Ze=a((mu,$e)=>{var Rn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function _n(r){return Rn.test(r)}$e.exports=_n});var mr=a((gu,fr)=>{var Je="\\ud800-\\udfff",Sn="\\u0300-\\u036f",An="\\ufe20-\\ufe2f",On="\\u20d0-\\u20ff",Cn=Sn+An+On,Ye="\\u2700-\\u27bf",Xe="a-z\\xdf-\\xf6\\xf8-\\xff",Nn="\\xac\\xb1\\xd7\\xf7",Mn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",kn="\\u2000-\\u206f",In=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ke="A-Z\\xc0-\\xd6\\xd8-\\xde",qn="\\ufe0e\\ufe0f",Qe=Nn+Mn+kn+In,er="['\u2019]",rr="["+Qe+"]",En="["+Cn+"]",tr="\\d+",Ln="["+Ye+"]",nr="["+Xe+"]",ir="[^"+Je+Qe+tr+Ye+Xe+Ke+"]",Un="\\ud83c[\\udffb-\\udfff]",jn="(?:"+En+"|"+Un+")",Dn="[^"+Je+"]",ar="(?:\\ud83c[\\udde6-\\uddff]){2}",ur="[\\ud800-\\udbff][\\udc00-\\udfff]",p="["+Ke+"]",Wn="\\u200d",or="(?:"+nr+"|"+ir+")",Hn="(?:"+p+"|"+ir+")",sr="(?:"+er+"(?:d|ll|m|re|s|t|ve))?",dr="(?:"+er+"(?:D|LL|M|RE|S|T|VE))?",lr=jn+"?",cr="["+qn+"]?",Fn="(?:"+Wn+"(?:"+[Dn,ar,ur].join("|")+")"+cr+lr+")*",Vn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Gn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Bn=cr+lr+Fn,zn="(?:"+[Ln,ar,ur].join("|")+")"+Bn,$n=RegExp([p+"?"+nr+"+"+sr+"(?="+[rr,p,"$"].join("|")+")",Hn+"+"+dr+"(?="+[rr,p+or,"$"].join("|")+")",p+"?"+or+"+"+sr,p+"+"+dr,Gn,Vn,tr,zn].join("|"),"g");function Zn(r){return r.match($n)||[]}fr.exports=Zn});var hr=a((hu,gr)=>{var Jn=ze(),Yn=Ze(),Xn=_(),Kn=mr();function Qn(r,e,t){return r=Xn(r),e=t?void 0:e,e===void 0?Yn(r)?Kn(r):Jn(r):r.match(e)||[]}gr.exports=Qn});var vr=a((pu,pr)=>{var ei=se(),ri=Ge(),ti=hr(),ni="['\u2019]",ii=RegExp(ni,"g");function ai(r){return function(e){return ei(ti(ri(e).replace(ii,"")),r,"")}}pr.exports=ai});var br=a((vu,wr)=>{function ui(r,e,t){var n=-1,i=r.length;e<0&&(e=-e>i?0:i+e),t=t>i?i:t,t<0&&(t+=i),i=e>t?0:t-e>>>0,e>>>=0;for(var u=Array(i);++n<i;)u[n]=r[n+e];return u}wr.exports=ui});var Tr=a((wu,xr)=>{var oi=br();function si(r,e,t){var n=r.length;return t=t===void 0?n:t,!e&&t>=n?r:oi(r,e,t)}xr.exports=si});var z=a((bu,Pr)=>{var di="\\ud800-\\udfff",li="\\u0300-\\u036f",ci="\\ufe20-\\ufe2f",fi="\\u20d0-\\u20ff",mi=li+ci+fi,gi="\\ufe0e\\ufe0f",hi="\\u200d",pi=RegExp("["+hi+di+mi+gi+"]");function vi(r){return pi.test(r)}Pr.exports=vi});var Rr=a((xu,yr)=>{function wi(r){return r.split("")}yr.exports=wi});var kr=a((Tu,Mr)=>{var _r="\\ud800-\\udfff",bi="\\u0300-\\u036f",xi="\\ufe20-\\ufe2f",Ti="\\u20d0-\\u20ff",Pi=bi+xi+Ti,yi="\\ufe0e\\ufe0f",Ri="["+_r+"]",$="["+Pi+"]",Z="\\ud83c[\\udffb-\\udfff]",_i="(?:"+$+"|"+Z+")",Sr="[^"+_r+"]",Ar="(?:\\ud83c[\\udde6-\\uddff]){2}",Or="[\\ud800-\\udbff][\\udc00-\\udfff]",Si="\\u200d",Cr=_i+"?",Nr="["+yi+"]?",Ai="(?:"+Si+"(?:"+[Sr,Ar,Or].join("|")+")"+Nr+Cr+")*",Oi=Nr+Cr+Ai,Ci="(?:"+[Sr+$+"?",$,Ar,Or,Ri].join("|")+")",Ni=RegExp(Z+"(?="+Z+")|"+Ci+Oi,"g");function Mi(r){return r.match(Ni)||[]}Mr.exports=Mi});var qr=a((Pu,Ir)=>{var ki=Rr(),Ii=z(),qi=kr();function Ei(r){return Ii(r)?qi(r):ki(r)}Ir.exports=Ei});var Lr=a((yu,Er)=>{var Li=Tr(),Ui=z(),ji=qr(),Di=_();function Wi(r){return function(e){e=Di(e);var t=Ui(e)?ji(e):void 0,n=t?t[0]:e.charAt(0),i=t?Li(t,1).join(""):e.slice(1);return n[r]()+i}}Er.exports=Wi});var jr=a((Ru,Ur)=>{var Hi=Lr(),Fi=Hi("toUpperCase");Ur.exports=Fi});var Wr=a((_u,Dr)=>{var Vi=vr(),Gi=jr(),Bi=Vi(function(r,e,t){return r+(t?" ":"")+Gi(e)});Dr.exports=Bi});var Y=a(m=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});m.FORMATS=m.FORMAT_PLAIN=m.FORMAT_HTML=void 0;var Br="html";m.FORMAT_HTML=Br;var zr="plain";m.FORMAT_PLAIN=zr;var sa=[Br,zr];m.FORMATS=sa});var Qr=a(l=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0});l.UNITS=l.UNIT_PARAGRAPH=l.UNIT_PARAGRAPHS=l.UNIT_SENTENCE=l.UNIT_SENTENCES=l.UNIT_WORD=l.UNIT_WORDS=void 0;var $r="words";l.UNIT_WORDS=$r;var Zr="word";l.UNIT_WORD=Zr;var Jr="sentences";l.UNIT_SENTENCES=Jr;var Yr="sentence";l.UNIT_SENTENCE=Yr;var Xr="paragraphs";l.UNIT_PARAGRAPHS=Xr;var Kr="paragraph";l.UNIT_PARAGRAPH=Kr;var da=[$r,Zr,Jr,Yr,Xr,Kr];l.UNITS=da});var X=a(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});A.WORDS=void 0;var la=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"];A.WORDS=la});var et=a(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});O.LINE_ENDINGS=void 0;var ca={POSIX:`
`,WIN32:`\r
`};O.LINE_ENDINGS=ca});var rt=a(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.default=void 0;var fa=function(e){var t=e.trim();return t.charAt(0).toUpperCase()+t.slice(1)},ma=fa;C.default=ma});var tt=a((N,K)=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});N.default=void 0;var ga=function(){return typeof K!="undefined"&&!!K.exports},ha=ga;N.default=ha});var nt=a(M=>{"use strict";Object.defineProperty(M,"__esModule",{value:!0});M.default=void 0;var pa=function(){var e=!1;try{e=navigator.product==="ReactNative"}catch(t){e=!1}return e},va=pa;M.default=va});var it=a(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});k.SUPPORTED_PLATFORMS=void 0;var wa={DARWIN:"darwin",LINUX:"linux",WIN32:"win32"};k.SUPPORTED_PLATFORMS=wa});var at=a(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});I.default=void 0;var ba=it(),xa=function(){var e=!1;try{e=process.platform===ba.SUPPORTED_PLATFORMS.WIN32}catch(t){e=!1}return e},Ta=xa;I.default=Ta});var ut=a(q=>{"use strict";Object.defineProperty(q,"__esModule",{value:!0});q.default=void 0;var Pa=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Array.apply(null,Array(e)).map(function(t,n){return n})},ya=Pa;q.default=ya});var ot=a(E=>{"use strict";Object.defineProperty(E,"__esModule",{value:!0});E.default=void 0;var Ra=L(),_a=function(e,t){var n=(0,Ra.makeArrayOfLength)(e);return n.map(function(){return t()})},Sa=_a;E.default=Sa});var L=a(g=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0});Object.defineProperty(g,"capitalize",{enumerable:!0,get:function(){return Aa.default}});Object.defineProperty(g,"isNode",{enumerable:!0,get:function(){return Oa.default}});Object.defineProperty(g,"isReactNative",{enumerable:!0,get:function(){return Ca.default}});Object.defineProperty(g,"isWindows",{enumerable:!0,get:function(){return Na.default}});Object.defineProperty(g,"makeArrayOfLength",{enumerable:!0,get:function(){return Ma.default}});Object.defineProperty(g,"makeArrayOfStrings",{enumerable:!0,get:function(){return ka.default}});var Aa=v(rt()),Oa=v(tt()),Ca=v(nt()),Na=v(at()),Ma=v(ut()),ka=v(ot());function v(r){return r&&r.__esModule?r:{default:r}}});var dt=a(j=>{"use strict";Object.defineProperty(j,"__esModule",{value:!0});j.default=void 0;var Ia=X(),Q=L();function qa(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function st(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Ea(r,e,t){return e&&st(r.prototype,e),t&&st(r,t),r}function U(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var La=function(){function r(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.sentencesPerParagraph,n=t===void 0?{max:7,min:3}:t,i=e.wordsPerSentence,u=i===void 0?{max:15,min:5}:i,d=e.random,s=e.seed,o=e.words,c=o===void 0?Ia.WORDS:o;if(qa(this,r),U(this,"sentencesPerParagraph",void 0),U(this,"wordsPerSentence",void 0),U(this,"random",void 0),U(this,"words",void 0),n.min>n.max)throw new Error("Minimum number of sentences per paragraph (".concat(n.min,") cannot exceed maximum (").concat(n.max,")."));if(u.min>u.max)throw new Error("Minimum number of words per sentence (".concat(u.min,") cannot exceed maximum (").concat(u.max,")."));this.sentencesPerParagraph=n,this.words=c,this.wordsPerSentence=u,this.random=d||Math.random}return Ea(r,[{key:"generateRandomInteger",value:function(t,n){return Math.floor(this.random()*(n-t+1)+t)}},{key:"generateRandomWords",value:function(t){var n=this,i=this.wordsPerSentence,u=i.min,d=i.max,s=t||this.generateRandomInteger(u,d);return(0,Q.makeArrayOfLength)(s).reduce(function(o,c){return"".concat(n.pluckRandomWord()," ").concat(o)},"").trim()}},{key:"generateRandomSentence",value:function(t){return"".concat((0,Q.capitalize)(this.generateRandomWords(t)),".")}},{key:"generateRandomParagraph",value:function(t){var n=this,i=this.sentencesPerParagraph,u=i.min,d=i.max,s=t||this.generateRandomInteger(u,d);return(0,Q.makeArrayOfLength)(s).reduce(function(o,c){return"".concat(n.generateRandomSentence()," ").concat(o)},"").trim()}},{key:"pluckRandomWord",value:function(){var t=0,n=this.words.length-1,i=this.generateRandomInteger(t,n);return this.words[i]}}]),r}(),Ua=La;j.default=Ua});var ft=a(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});H.default=void 0;var D=Y(),lt=et(),ja=Da(dt()),W=L();function Da(r){return r&&r.__esModule?r:{default:r}}function Wa(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ct(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Ha(r,e,t){return e&&ct(r.prototype,e),t&&ct(r,t),r}function Fa(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Va=function(){function r(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:D.FORMAT_PLAIN,n=arguments.length>2?arguments[2]:void 0;if(Wa(this,r),this.format=t,this.suffix=n,Fa(this,"generator",void 0),D.FORMATS.indexOf(t.toLowerCase())===-1)throw new Error("".concat(t," is an invalid format. Please use ").concat(D.FORMATS.join(" or "),"."));this.generator=new ja.default(e)}return Ha(r,[{key:"getLineEnding",value:function(){return this.suffix?this.suffix:!(0,W.isReactNative)()&&(0,W.isNode)()&&(0,W.isWindows)()?lt.LINE_ENDINGS.WIN32:lt.LINE_ENDINGS.POSIX}},{key:"formatString",value:function(t){return this.format===D.FORMAT_HTML?"<p>".concat(t,"</p>"):t}},{key:"formatStrings",value:function(t){var n=this;return t.map(function(i){return n.formatString(i)})}},{key:"generateWords",value:function(t){return this.formatString(this.generator.generateRandomWords(t))}},{key:"generateSentences",value:function(t){return this.formatString(this.generator.generateRandomParagraph(t))}},{key:"generateParagraphs",value:function(t){var n=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,W.makeArrayOfStrings)(t,n)).join(this.getLineEnding())}}]),r}(),Ga=Va;H.default=Ga});var gt=a(b=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0});Object.defineProperty(b,"LoremIpsum",{enumerable:!0,get:function(){return mt.default}});b.loremIpsum=void 0;var Ba=Y(),h=Qr(),za=X(),mt=$a(ft());function $a(r){return r&&r.__esModule?r:{default:r}}var Za=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.count,n=t===void 0?1:t,i=e.format,u=i===void 0?Ba.FORMAT_PLAIN:i,d=e.paragraphLowerBound,s=d===void 0?3:d,o=e.paragraphUpperBound,c=o===void 0?7:o,F=e.random,x=e.sentenceLowerBound,V=x===void 0?5:x,T=e.sentenceUpperBound,pt=T===void 0?15:T,ee=e.units,vt=ee===void 0?h.UNIT_SENTENCES:ee,re=e.words,wt=re===void 0?za.WORDS:re,te=e.suffix,bt=te===void 0?"":te,xt={random:F,sentencesPerParagraph:{max:c,min:s},words:wt,wordsPerSentence:{max:pt,min:V}},G=new mt.default(xt,u,bt);switch(vt){case h.UNIT_PARAGRAPHS:case h.UNIT_PARAGRAPH:return G.generateParagraphs(n);case h.UNIT_SENTENCES:case h.UNIT_SENTENCE:return G.generateSentences(n);case h.UNIT_WORDS:case h.UNIT_WORD:return G.generateWords(n);default:return""}};b.loremIpsum=Za});var Fr=ue(Wr());var zi=`
        <svg
          width="48"
          height="48"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 14.85L14.3 0V7.29C14.3 11.4653 11.0406 14.85 7.02 14.85H0Z"
            fill="currentColor"
          />
          <path
            d="M11.7 19.71C11.7 15.5347 14.9594 12.15 18.98 12.15H26L11.7 27V19.71Z"
            fill="currentColor"
          />
        </svg>
    `,$i=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,Zi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,Hr=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,Ji=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,Yi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Xi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Ki=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Qi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,ea=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,ra=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,ta=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,na={Glide:zi,"Machine Learning":ra,General:Hr,Array:Ji,Number:Zi,Encoding:ta,Text:ea,"Data & APIs":Qi,Image:Yi,Fun:Xi,"Date & Time":Ki,Code:$i};function J({icon:r,category:e}){var t;return(t=r!=null?r:na[e])!=null?t:Hr}function Vr(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(Vr):r}function ia(r,e){return B(this,null,function*(){var s;let{data:{key:t,params:n}}=r,i,u;try{i=yield e(...n)}catch(o){i=void 0;try{u=o.toString()}catch(c){u="Exception can't be stringified."}}let d={key:t};i!==void 0&&(i=Vr(i),d.result={type:"string",value:i}),u!==void 0&&(d.error=u),((s=r.source)==null?void 0:s.postMessage).call(s,d,"*")})}function aa(r){return typeof window!="undefined"&&window.addEventListener("message",e=>ia(e,r.run)),y(f({},r),{json:JSON.stringify(ua(r),null,2)})}function ua(r){let{name:e,category:t,released:n,description:i,author:u,result:d,params:s,about:o,video:c,deprecated:F}=r,x=J(r);return{name:e,category:t,released:n,description:i,author:u,result:d,about:o,icon:x,video:c,deprecated:F,params:Object.entries(s).map(([V,T])=>f({name:V},T))}}var oa={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:"https://www.loom.com/share/39ab84c058e14adea79ca4442f450351",tests:[],run(){return B(this,null,function*(){})}},S=class{constructor(e={},t=[]){this.definition=f(f({},oa),e),this.requiredParams=[...t]}with(e,t=[]){return new S(f(f({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){let{icon:t}=this.definition;return this.with({category:e,icon:J({icon:t,category:e})})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:n=[]}=this.definition;return this.with({tests:[...n,{params:e,expectedResult:t}]})}withFailingTest(e,t){let{tests:n=[]}=this.definition;return this.with({tests:[...n,{params:e,expectedResult:t,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withDateResult(){return this.withResult("date-time")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,n){return n===void 0&&(n=(0,Fr.default)(t)),this.with({params:y(f({},this.definition.params),{[t]:{type:e,displayName:n}})})}withRequiredParam(e,t,n){return this.withParam(e,t,n).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withBooleanParam(e,t){return this.withParam("boolean",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredURIParam(e,t){return this.withRequiredParam("uri",e,t)}withRequiredBooleanParam(e,t){return this.withRequiredParam("boolean",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,n=this.requiredParams,i=Object.keys(t);function u(...d){let s={};if(d.forEach(({value:o},c)=>{s[i[c]]=o}),!n.some(o=>s[o]===void 0))return e(s)}return aa(y(f({},this.definition),{run:u}))}};function Gr(r){return new S({name:r})}var ht=ue(gt()),Gu=Gr("Lorem Ipsum").withCategory("Text").withReleased("direct").withDescription("Produces a 'lorem ipsum' style string").withAuthor("knicklabs","github.com/knicklabs/lorem-ipsum.js").withRequiredNumberParam("numberOfSentences","Number of Sentences").withStringResult().run(({numberOfSentences:r})=>new ht.LoremIpsum({wordsPerSentence:{min:2,max:10}}).generateSentences(r));})();
//# sourceMappingURL=index.js.map
