var ge=Object.create;var g=Object.defineProperty,fe=Object.defineProperties,pe=Object.getOwnPropertyDescriptor,be=Object.getOwnPropertyDescriptors,xe=Object.getOwnPropertyNames,P=Object.getOwnPropertySymbols,we=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var C=(e,r,t)=>r in e?g(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,l=(e,r)=>{for(var t in r||(r={}))R.call(r,t)&&C(e,t,r[t]);if(P)for(var t of P(r))ve.call(r,t)&&C(e,t,r[t]);return e},f=(e,r)=>fe(e,be(r)),Te=e=>g(e,"__esModule",{value:!0});var n=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var ye=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of xe(r))!R.call(e,i)&&i!=="default"&&g(e,i,{get:()=>r[i],enumerable:!(t=pe(r,i))||t.enumerable});return e},Pe=e=>ye(Te(g(e!=null?ge(we(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var k=(e,r,t)=>new Promise((i,a)=>{var s=o=>{try{u(t.next(o))}catch(d){a(d)}},m=o=>{try{u(t.throw(o))}catch(d){a(d)}},u=o=>o.done?i(o.value):Promise.resolve(o.value).then(s,m);u((t=t.apply(e,r)).next())});var M=n((en,S)=>{function Re(e,r,t,i){var a=-1,s=e==null?0:e.length;for(i&&s&&(t=e[++a]);++a<s;)t=r(t,e[a],a,e);return t}S.exports=Re});var q=n((tn,A)=>{function Ce(e){return function(r){return e==null?void 0:e[r]}}A.exports=Ce});var O=n((nn,j)=>{var ke=q(),Se={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Me=ke(Se);j.exports=Me});var D=n((an,V)=>{var Ae=typeof global=="object"&&global&&global.Object===Object&&global;V.exports=Ae});var U=n((on,N)=>{var qe=D(),je=typeof self=="object"&&self&&self.Object===Object&&self,Oe=qe||je||Function("return this")();N.exports=Oe});var p=n((sn,L)=>{var Ve=U(),De=Ve.Symbol;L.exports=De});var _=n((un,I)=>{function Ne(e,r){for(var t=-1,i=e==null?0:e.length,a=Array(i);++t<i;)a[t]=r(e[t],t,e);return a}I.exports=Ne});var H=n((ln,E)=>{var Ue=Array.isArray;E.exports=Ue});var G=n((dn,F)=>{var z=p(),B=Object.prototype,Le=B.hasOwnProperty,Ie=B.toString,h=z?z.toStringTag:void 0;function _e(e){var r=Le.call(e,h),t=e[h];try{e[h]=void 0;var i=!0}catch(s){}var a=Ie.call(e);return i&&(r?e[h]=t:delete e[h]),a}F.exports=_e});var Z=n((cn,W)=>{var Ee=Object.prototype,He=Ee.toString;function ze(e){return He.call(e)}W.exports=ze});var K=n((mn,$)=>{var J=p(),Be=G(),Fe=Z(),Ge="[object Null]",We="[object Undefined]",Y=J?J.toStringTag:void 0;function Ze(e){return e==null?e===void 0?We:Ge:Y&&Y in Object(e)?Be(e):Fe(e)}$.exports=Ze});var X=n((hn,Q)=>{function Je(e){return e!=null&&typeof e=="object"}Q.exports=Je});var er=n((gn,rr)=>{var Ye=K(),$e=X(),Ke="[object Symbol]";function Qe(e){return typeof e=="symbol"||$e(e)&&Ye(e)==Ke}rr.exports=Qe});var sr=n((fn,or)=>{var tr=p(),Xe=_(),rt=H(),et=er(),tt=1/0,ir=tr?tr.prototype:void 0,nr=ir?ir.toString:void 0;function ar(e){if(typeof e=="string")return e;if(rt(e))return Xe(e,ar)+"";if(et(e))return nr?nr.call(e):"";var r=e+"";return r=="0"&&1/e==-tt?"-0":r}or.exports=ar});var b=n((pn,ur)=>{var it=sr();function nt(e){return e==null?"":it(e)}ur.exports=nt});var dr=n((bn,lr)=>{var at=O(),ot=b(),st=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ut="\\u0300-\\u036f",lt="\\ufe20-\\ufe2f",dt="\\u20d0-\\u20ff",ct=ut+lt+dt,mt="["+ct+"]",ht=RegExp(mt,"g");function gt(e){return e=ot(e),e&&e.replace(st,at).replace(ht,"")}lr.exports=gt});var mr=n((xn,cr)=>{var ft=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function pt(e){return e.match(ft)||[]}cr.exports=pt});var gr=n((wn,hr)=>{var bt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function xt(e){return bt.test(e)}hr.exports=xt});var Vr=n((vn,Or)=>{var fr="\\ud800-\\udfff",wt="\\u0300-\\u036f",vt="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",yt=wt+vt+Tt,pr="\\u2700-\\u27bf",br="a-z\\xdf-\\xf6\\xf8-\\xff",Pt="\\xac\\xb1\\xd7\\xf7",Rt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ct="\\u2000-\\u206f",kt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xr="A-Z\\xc0-\\xd6\\xd8-\\xde",St="\\ufe0e\\ufe0f",wr=Pt+Rt+Ct+kt,vr="['\u2019]",Tr="["+wr+"]",Mt="["+yt+"]",yr="\\d+",At="["+pr+"]",Pr="["+br+"]",Rr="[^"+fr+wr+yr+pr+br+xr+"]",qt="\\ud83c[\\udffb-\\udfff]",jt="(?:"+Mt+"|"+qt+")",Ot="[^"+fr+"]",Cr="(?:\\ud83c[\\udde6-\\uddff]){2}",kr="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+xr+"]",Vt="\\u200d",Sr="(?:"+Pr+"|"+Rr+")",Dt="(?:"+c+"|"+Rr+")",Mr="(?:"+vr+"(?:d|ll|m|re|s|t|ve))?",Ar="(?:"+vr+"(?:D|LL|M|RE|S|T|VE))?",qr=jt+"?",jr="["+St+"]?",Nt="(?:"+Vt+"(?:"+[Ot,Cr,kr].join("|")+")"+jr+qr+")*",Ut="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Lt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",It=jr+qr+Nt,_t="(?:"+[At,Cr,kr].join("|")+")"+It,Et=RegExp([c+"?"+Pr+"+"+Mr+"(?="+[Tr,c,"$"].join("|")+")",Dt+"+"+Ar+"(?="+[Tr,c+Sr,"$"].join("|")+")",c+"?"+Sr+"+"+Mr,c+"+"+Ar,Lt,Ut,yr,_t].join("|"),"g");function Ht(e){return e.match(Et)||[]}Or.exports=Ht});var Nr=n((Tn,Dr)=>{var zt=mr(),Bt=gr(),Ft=b(),Gt=Vr();function Wt(e,r,t){return e=Ft(e),r=t?void 0:r,r===void 0?Bt(e)?Gt(e):zt(e):e.match(r)||[]}Dr.exports=Wt});var Lr=n((yn,Ur)=>{var Zt=M(),Jt=dr(),Yt=Nr(),$t="['\u2019]",Kt=RegExp($t,"g");function Qt(e){return function(r){return Zt(Yt(Jt(r).replace(Kt,"")),e,"")}}Ur.exports=Qt});var _r=n((Pn,Ir)=>{function Xt(e,r,t){var i=-1,a=e.length;r<0&&(r=-r>a?0:a+r),t=t>a?a:t,t<0&&(t+=a),a=r>t?0:t-r>>>0,r>>>=0;for(var s=Array(a);++i<a;)s[i]=e[i+r];return s}Ir.exports=Xt});var Hr=n((Rn,Er)=>{var ri=_r();function ei(e,r,t){var i=e.length;return t=t===void 0?i:t,!r&&t>=i?e:ri(e,r,t)}Er.exports=ei});var w=n((Cn,zr)=>{var ti="\\ud800-\\udfff",ii="\\u0300-\\u036f",ni="\\ufe20-\\ufe2f",ai="\\u20d0-\\u20ff",oi=ii+ni+ai,si="\\ufe0e\\ufe0f",ui="\\u200d",li=RegExp("["+ui+ti+oi+si+"]");function di(e){return li.test(e)}zr.exports=di});var Fr=n((kn,Br)=>{function ci(e){return e.split("")}Br.exports=ci});var Qr=n((Sn,Kr)=>{var Gr="\\ud800-\\udfff",mi="\\u0300-\\u036f",hi="\\ufe20-\\ufe2f",gi="\\u20d0-\\u20ff",fi=mi+hi+gi,pi="\\ufe0e\\ufe0f",bi="["+Gr+"]",v="["+fi+"]",T="\\ud83c[\\udffb-\\udfff]",xi="(?:"+v+"|"+T+")",Wr="[^"+Gr+"]",Zr="(?:\\ud83c[\\udde6-\\uddff]){2}",Jr="[\\ud800-\\udbff][\\udc00-\\udfff]",wi="\\u200d",Yr=xi+"?",$r="["+pi+"]?",vi="(?:"+wi+"(?:"+[Wr,Zr,Jr].join("|")+")"+$r+Yr+")*",Ti=$r+Yr+vi,yi="(?:"+[Wr+v+"?",v,Zr,Jr,bi].join("|")+")",Pi=RegExp(T+"(?="+T+")|"+yi+Ti,"g");function Ri(e){return e.match(Pi)||[]}Kr.exports=Ri});var re=n((Mn,Xr)=>{var Ci=Fr(),ki=w(),Si=Qr();function Mi(e){return ki(e)?Si(e):Ci(e)}Xr.exports=Mi});var te=n((An,ee)=>{var Ai=Hr(),qi=w(),ji=re(),Oi=b();function Vi(e){return function(r){r=Oi(r);var t=qi(r)?ji(r):void 0,i=t?t[0]:r.charAt(0),a=t?Ai(t,1).join(""):r.slice(1);return i[e]()+a}}ee.exports=Vi});var ne=n((qn,ie)=>{var Di=te(),Ni=Di("toUpperCase");ie.exports=Ni});var oe=n((jn,ae)=>{var Ui=Lr(),Li=ne(),Ii=Ui(function(e,r,t){return e+(t?" ":"")+Li(r)});ae.exports=Ii});var ue=Pe(oe());var _i=`
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
    `,Ei=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,Hi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,se=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,zi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,Bi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Fi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Gi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Wi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,Zi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,Ji=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,Yi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,$i={Glide:_i,"Machine Learning":Ji,General:se,Array:zi,Number:Hi,Encoding:Yi,Text:Zi,"Data & APIs":Wi,Image:Bi,Fun:Fi,"Date & Time":Gi,Code:Ei};function y({icon:e,category:r}){var t;return(t=e!=null?e:$i[r])!=null?t:se}function Ki(e){return f(l({},e),{json:JSON.stringify(Qi(e),null,2)})}function Qi(e){let{name:r,category:t,released:i,description:a,author:s,result:m,params:u,about:o,video:d,deprecated:de}=e,ce=y(e);return{name:r,category:t,released:i,description:a,author:s,result:m,about:o,icon:ce,video:d,deprecated:de,params:Object.entries(u).map(([me,he])=>l({name:me},he))}}var Xi={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:"https://www.loom.com/share/39ab84c058e14adea79ca4442f450351",tests:[],run(){return k(this,null,function*(){})}},x=class{constructor(r={},t=[]){this.definition=l(l({},Xi),r),this.requiredParams=[...t]}with(r,t=[]){return new x(l(l({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withCategory(r){let{icon:t}=this.definition;return this.with({category:r,icon:y({icon:t,category:r})})}withReleased(r){return this.with({released:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withVideo(r){return this.with({video:r})}withIcon(r){return this.with({icon:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withTest(r,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:r,expectedResult:t}]})}withFailingTest(r,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:r,expectedResult:t,allowFailure:!0}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withDateResult(){return this.withResult("date-time")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(r,t,i){return i===void 0&&(i=(0,ue.default)(t)),this.with({params:f(l({},this.definition.params),{[t]:{type:r,displayName:i}})})}withRequiredParam(r,t,i){return this.withParam(r,t,i).with({},[t])}withPrimitiveParam(r,t){return this.withParam("primitive",r,t)}withBooleanParam(r,t){return this.withParam("boolean",r,t)}withStringParam(r,t){return this.withParam("string",r,t)}withDateParam(r,t){return this.withParam("date-time",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredPrimitiveParam(r,t){return this.withRequiredParam("primitive",r,t)}withRequiredURIParam(r,t){return this.withRequiredParam("uri",r,t)}withRequiredBooleanParam(r,t){return this.withRequiredParam("boolean",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredDateParam(r,t){return this.withRequiredParam("date-time",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}withStringArrayParam(r,t){return this.withParam({kind:"array",items:"string"},r,t)}withRequiredStringArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"string"},r,t)}withNumberArrayParam(r,t){return this.withParam({kind:"array",items:"number"},r,t)}withPrimitiveArrayParam(r,t){return this.withParam({kind:"array",items:"primitive"},r,t)}withRequiredPrimitiveArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"primitive"},r,t)}withExample(r){return this.with({example:r})}run(r){let{params:t}=this.definition,i=this.requiredParams,a=Object.keys(t);function s(...m){let u={};if(m.forEach(({value:o},d)=>{u[a[d]]=o}),!i.some(o=>u[o]===void 0))return r(u)}return Ki(f(l({},this.definition),{run:s}))}};function le(e){return new x({name:e})}var Un=le("Reverse Array").withCategory("Array").withDescription("Reverses the order of items in an array").withReleased("direct").withPrimitiveArrayResult().withRequiredPrimitiveArrayParam("array").run(({array:e})=>[...e].reverse());export{Un as default};
//# sourceMappingURL=function.js.map
