(()=>{var fr=Object.create;var g=Object.defineProperty,pr=Object.defineProperties,xr=Object.getOwnPropertyDescriptor,br=Object.getOwnPropertyDescriptors,wr=Object.getOwnPropertyNames,R=Object.getOwnPropertySymbols,vr=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty,Tr=Object.prototype.propertyIsEnumerable;var S=(e,r,t)=>r in e?g(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))C.call(r,t)&&S(e,t,r[t]);if(R)for(var t of R(r))Tr.call(r,t)&&S(e,t,r[t]);return e},f=(e,r)=>pr(e,br(r)),yr=e=>g(e,"__esModule",{value:!0});var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Pr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of wr(r))!C.call(e,i)&&i!=="default"&&g(e,i,{get:()=>r[i],enumerable:!(t=xr(r,i))||t.enumerable});return e},Rr=e=>Pr(yr(g(e!=null?fr(vr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var w=(e,r,t)=>new Promise((i,n)=>{var o=u=>{try{s(t.next(u))}catch(c){n(c)}},l=u=>{try{s(t.throw(u))}catch(c){n(c)}},s=u=>u.done?i(u.value):Promise.resolve(u.value).then(o,l);s((t=t.apply(e,r)).next())});var M=a((nn,k)=>{function Cr(e,r,t,i){var n=-1,o=e==null?0:e.length;for(i&&o&&(t=e[++n]);++n<o;)t=r(t,e[n],n,e);return t}k.exports=Cr});var q=a((an,A)=>{function Sr(e){return function(r){return e==null?void 0:e[r]}}A.exports=Sr});var O=a((on,j)=>{var kr=q(),Mr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ar=kr(Mr);j.exports=Ar});var D=a((un,V)=>{var qr=typeof global=="object"&&global&&global.Object===Object&&global;V.exports=qr});var U=a((sn,N)=>{var jr=D(),Or=typeof self=="object"&&self&&self.Object===Object&&self,Vr=jr||Or||Function("return this")();N.exports=Vr});var p=a((ln,L)=>{var Dr=U(),Nr=Dr.Symbol;L.exports=Nr});var _=a((dn,I)=>{function Ur(e,r){for(var t=-1,i=e==null?0:e.length,n=Array(i);++t<i;)n[t]=r(e[t],t,e);return n}I.exports=Ur});var H=a((cn,E)=>{var Lr=Array.isArray;E.exports=Lr});var G=a((mn,F)=>{var z=p(),B=Object.prototype,Ir=B.hasOwnProperty,_r=B.toString,h=z?z.toStringTag:void 0;function Er(e){var r=Ir.call(e,h),t=e[h];try{e[h]=void 0;var i=!0}catch(o){}var n=_r.call(e);return i&&(r?e[h]=t:delete e[h]),n}F.exports=Er});var Z=a((hn,W)=>{var Hr=Object.prototype,zr=Hr.toString;function Br(e){return zr.call(e)}W.exports=Br});var K=a((gn,$)=>{var J=p(),Fr=G(),Gr=Z(),Wr="[object Null]",Zr="[object Undefined]",Y=J?J.toStringTag:void 0;function Jr(e){return e==null?e===void 0?Zr:Wr:Y&&Y in Object(e)?Fr(e):Gr(e)}$.exports=Jr});var X=a((fn,Q)=>{function Yr(e){return e!=null&&typeof e=="object"}Q.exports=Yr});var re=a((pn,ee)=>{var $r=K(),Kr=X(),Qr="[object Symbol]";function Xr(e){return typeof e=="symbol"||Kr(e)&&$r(e)==Qr}ee.exports=Xr});var ue=a((xn,oe)=>{var te=p(),et=_(),rt=H(),tt=re(),it=1/0,ie=te?te.prototype:void 0,ne=ie?ie.toString:void 0;function ae(e){if(typeof e=="string")return e;if(rt(e))return et(e,ae)+"";if(tt(e))return ne?ne.call(e):"";var r=e+"";return r=="0"&&1/e==-it?"-0":r}oe.exports=ae});var x=a((bn,se)=>{var nt=ue();function at(e){return e==null?"":nt(e)}se.exports=at});var de=a((wn,le)=>{var ot=O(),ut=x(),st=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,lt="\\u0300-\\u036f",dt="\\ufe20-\\ufe2f",ct="\\u20d0-\\u20ff",mt=lt+dt+ct,ht="["+mt+"]",gt=RegExp(ht,"g");function ft(e){return e=ut(e),e&&e.replace(st,ot).replace(gt,"")}le.exports=ft});var me=a((vn,ce)=>{var pt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function xt(e){return e.match(pt)||[]}ce.exports=xt});var ge=a((Tn,he)=>{var bt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function wt(e){return bt.test(e)}he.exports=wt});var Ve=a((yn,Oe)=>{var fe="\\ud800-\\udfff",vt="\\u0300-\\u036f",Tt="\\ufe20-\\ufe2f",yt="\\u20d0-\\u20ff",Pt=vt+Tt+yt,pe="\\u2700-\\u27bf",xe="a-z\\xdf-\\xf6\\xf8-\\xff",Rt="\\xac\\xb1\\xd7\\xf7",Ct="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",St="\\u2000-\\u206f",kt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",be="A-Z\\xc0-\\xd6\\xd8-\\xde",Mt="\\ufe0e\\ufe0f",we=Rt+Ct+St+kt,ve="['\u2019]",Te="["+we+"]",At="["+Pt+"]",ye="\\d+",qt="["+pe+"]",Pe="["+xe+"]",Re="[^"+fe+we+ye+pe+xe+be+"]",jt="\\ud83c[\\udffb-\\udfff]",Ot="(?:"+At+"|"+jt+")",Vt="[^"+fe+"]",Ce="(?:\\ud83c[\\udde6-\\uddff]){2}",Se="[\\ud800-\\udbff][\\udc00-\\udfff]",m="["+be+"]",Dt="\\u200d",ke="(?:"+Pe+"|"+Re+")",Nt="(?:"+m+"|"+Re+")",Me="(?:"+ve+"(?:d|ll|m|re|s|t|ve))?",Ae="(?:"+ve+"(?:D|LL|M|RE|S|T|VE))?",qe=Ot+"?",je="["+Mt+"]?",Ut="(?:"+Dt+"(?:"+[Vt,Ce,Se].join("|")+")"+je+qe+")*",Lt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",It="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",_t=je+qe+Ut,Et="(?:"+[qt,Ce,Se].join("|")+")"+_t,Ht=RegExp([m+"?"+Pe+"+"+Me+"(?="+[Te,m,"$"].join("|")+")",Nt+"+"+Ae+"(?="+[Te,m+ke,"$"].join("|")+")",m+"?"+ke+"+"+Me,m+"+"+Ae,It,Lt,ye,Et].join("|"),"g");function zt(e){return e.match(Ht)||[]}Oe.exports=zt});var Ne=a((Pn,De)=>{var Bt=me(),Ft=ge(),Gt=x(),Wt=Ve();function Zt(e,r,t){return e=Gt(e),r=t?void 0:r,r===void 0?Ft(e)?Wt(e):Bt(e):e.match(r)||[]}De.exports=Zt});var Le=a((Rn,Ue)=>{var Jt=M(),Yt=de(),$t=Ne(),Kt="['\u2019]",Qt=RegExp(Kt,"g");function Xt(e){return function(r){return Jt($t(Yt(r).replace(Qt,"")),e,"")}}Ue.exports=Xt});var _e=a((Cn,Ie)=>{function ei(e,r,t){var i=-1,n=e.length;r<0&&(r=-r>n?0:n+r),t=t>n?n:t,t<0&&(t+=n),n=r>t?0:t-r>>>0,r>>>=0;for(var o=Array(n);++i<n;)o[i]=e[i+r];return o}Ie.exports=ei});var He=a((Sn,Ee)=>{var ri=_e();function ti(e,r,t){var i=e.length;return t=t===void 0?i:t,!r&&t>=i?e:ri(e,r,t)}Ee.exports=ti});var v=a((kn,ze)=>{var ii="\\ud800-\\udfff",ni="\\u0300-\\u036f",ai="\\ufe20-\\ufe2f",oi="\\u20d0-\\u20ff",ui=ni+ai+oi,si="\\ufe0e\\ufe0f",li="\\u200d",di=RegExp("["+li+ii+ui+si+"]");function ci(e){return di.test(e)}ze.exports=ci});var Fe=a((Mn,Be)=>{function mi(e){return e.split("")}Be.exports=mi});var Qe=a((An,Ke)=>{var Ge="\\ud800-\\udfff",hi="\\u0300-\\u036f",gi="\\ufe20-\\ufe2f",fi="\\u20d0-\\u20ff",pi=hi+gi+fi,xi="\\ufe0e\\ufe0f",bi="["+Ge+"]",T="["+pi+"]",y="\\ud83c[\\udffb-\\udfff]",wi="(?:"+T+"|"+y+")",We="[^"+Ge+"]",Ze="(?:\\ud83c[\\udde6-\\uddff]){2}",Je="[\\ud800-\\udbff][\\udc00-\\udfff]",vi="\\u200d",Ye=wi+"?",$e="["+xi+"]?",Ti="(?:"+vi+"(?:"+[We,Ze,Je].join("|")+")"+$e+Ye+")*",yi=$e+Ye+Ti,Pi="(?:"+[We+T+"?",T,Ze,Je,bi].join("|")+")",Ri=RegExp(y+"(?="+y+")|"+Pi+yi,"g");function Ci(e){return e.match(Ri)||[]}Ke.exports=Ci});var er=a((qn,Xe)=>{var Si=Fe(),ki=v(),Mi=Qe();function Ai(e){return ki(e)?Mi(e):Si(e)}Xe.exports=Ai});var tr=a((jn,rr)=>{var qi=He(),ji=v(),Oi=er(),Vi=x();function Di(e){return function(r){r=Vi(r);var t=ji(r)?Oi(r):void 0,i=t?t[0]:r.charAt(0),n=t?qi(t,1).join(""):r.slice(1);return i[e]()+n}}rr.exports=Di});var nr=a((On,ir)=>{var Ni=tr(),Ui=Ni("toUpperCase");ir.exports=Ui});var or=a((Vn,ar)=>{var Li=Le(),Ii=nr(),_i=Li(function(e,r,t){return e+(t?" ":"")+Ii(r)});ar.exports=_i});var sr=Rr(or());var Ei=`
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
    `,Hi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,zi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,ur=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,Bi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,Fi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Gi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Wi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Zi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,Ji=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,Yi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,$i=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,Ki={Glide:Ei,"Machine Learning":Yi,General:ur,Array:Bi,Number:zi,Encoding:$i,Text:Ji,"Data & APIs":Zi,Image:Fi,Fun:Gi,"Date & Time":Wi,Code:Hi};function P({icon:e,category:r}){var t;return(t=e!=null?e:Ki[r])!=null?t:ur}function lr(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(lr):e}function Qi(e,r){return w(this,null,function*(){var s;let{data:{key:t,params:i}}=e,n,o;try{n=yield r(...i)}catch(u){n=void 0;try{o=u.toString()}catch(c){o="Exception can't be stringified."}}let l={key:t};n!==void 0&&(n=lr(n),l.result={type:"string",value:n}),o!==void 0&&(l.error=o),((s=e.source)==null?void 0:s.postMessage).call(s,l,"*")})}function Xi(e){return typeof window!="undefined"&&window.addEventListener("message",r=>Qi(r,e.run)),f(d({},e),{json:JSON.stringify(en(e),null,2)})}function en(e){let{name:r,category:t,released:i,description:n,author:o,result:l,params:s,about:u,video:c,deprecated:cr}=e,mr=P(e);return{name:r,category:t,released:i,description:n,author:o,result:l,about:u,icon:mr,video:c,deprecated:cr,params:Object.entries(s).map(([hr,gr])=>d({name:hr},gr))}}var rn={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:"https://www.loom.com/share/39ab84c058e14adea79ca4442f450351",tests:[],run(){return w(this,null,function*(){})}},b=class{constructor(r={},t=[]){this.definition=d(d({},rn),r),this.requiredParams=[...t]}with(r,t=[]){return new b(d(d({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withCategory(r){let{icon:t}=this.definition;return this.with({category:r,icon:P({icon:t,category:r})})}withReleased(r){return this.with({released:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withVideo(r){return this.with({video:r})}withIcon(r){return this.with({icon:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withTest(r,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:r,expectedResult:t}]})}withFailingTest(r,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:r,expectedResult:t,allowFailure:!0}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withDateResult(){return this.withResult("date-time")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(r,t,i){return i===void 0&&(i=(0,sr.default)(t)),this.with({params:f(d({},this.definition.params),{[t]:{type:r,displayName:i}})})}withRequiredParam(r,t,i){return this.withParam(r,t,i).with({},[t])}withPrimitiveParam(r,t){return this.withParam("primitive",r,t)}withBooleanParam(r,t){return this.withParam("boolean",r,t)}withStringParam(r,t){return this.withParam("string",r,t)}withDateParam(r,t){return this.withParam("date-time",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredPrimitiveParam(r,t){return this.withRequiredParam("primitive",r,t)}withRequiredURIParam(r,t){return this.withRequiredParam("uri",r,t)}withRequiredBooleanParam(r,t){return this.withRequiredParam("boolean",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredDateParam(r,t){return this.withRequiredParam("date-time",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}withStringArrayParam(r,t){return this.withParam({kind:"array",items:"string"},r,t)}withRequiredStringArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"string"},r,t)}withNumberArrayParam(r,t){return this.withParam({kind:"array",items:"number"},r,t)}withPrimitiveArrayParam(r,t){return this.withParam({kind:"array",items:"primitive"},r,t)}withRequiredPrimitiveArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"primitive"},r,t)}withExample(r){return this.with({example:r})}run(r){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function o(...l){let s={};if(l.forEach(({value:u},c)=>{s[n[c]]=u}),!i.some(u=>s[u]===void 0))return r(s)}return Xi(f(d({},this.definition),{run:o}))}};function dr(e){return new b({name:e})}var In=dr("Trim Whitespace").withCategory("Text").withReleased("direct").withDescription("Remove whitespace around text.").withRequiredStringParam("text").withStringResult().withTest({text:" hello "},"hello").run(({text:e})=>e.trim());})();
//# sourceMappingURL=index.js.map
