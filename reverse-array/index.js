(()=>{var fe=Object.create;var g=Object.defineProperty,pe=Object.defineProperties,be=Object.getOwnPropertyDescriptor,xe=Object.getOwnPropertyDescriptors,we=Object.getOwnPropertyNames,R=Object.getOwnPropertySymbols,ve=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable;var k=(r,e,t)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))C.call(e,t)&&k(r,t,e[t]);if(R)for(var t of R(e))Te.call(e,t)&&k(r,t,e[t]);return r},f=(r,e)=>pe(r,xe(e)),ye=r=>g(r,"__esModule",{value:!0});var a=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Pe=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of we(e))!C.call(r,i)&&i!=="default"&&g(r,i,{get:()=>e[i],enumerable:!(t=be(e,i))||t.enumerable});return r},Re=r=>Pe(ye(g(r!=null?fe(ve(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var w=(r,e,t)=>new Promise((i,n)=>{var o=u=>{try{s(t.next(u))}catch(c){n(c)}},l=u=>{try{s(t.throw(u))}catch(c){n(c)}},s=u=>u.done?i(u.value):Promise.resolve(u.value).then(o,l);s((t=t.apply(r,e)).next())});var M=a((nn,S)=>{function Ce(r,e,t,i){var n=-1,o=r==null?0:r.length;for(i&&o&&(t=r[++n]);++n<o;)t=e(t,r[n],n,r);return t}S.exports=Ce});var q=a((an,A)=>{function ke(r){return function(e){return r==null?void 0:r[e]}}A.exports=ke});var O=a((on,j)=>{var Se=q(),Me={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ae=Se(Me);j.exports=Ae});var D=a((un,V)=>{var qe=typeof global=="object"&&global&&global.Object===Object&&global;V.exports=qe});var U=a((sn,N)=>{var je=D(),Oe=typeof self=="object"&&self&&self.Object===Object&&self,Ve=je||Oe||Function("return this")();N.exports=Ve});var p=a((ln,L)=>{var De=U(),Ne=De.Symbol;L.exports=Ne});var _=a((dn,I)=>{function Ue(r,e){for(var t=-1,i=r==null?0:r.length,n=Array(i);++t<i;)n[t]=e(r[t],t,r);return n}I.exports=Ue});var H=a((cn,E)=>{var Le=Array.isArray;E.exports=Le});var G=a((mn,F)=>{var z=p(),B=Object.prototype,Ie=B.hasOwnProperty,_e=B.toString,h=z?z.toStringTag:void 0;function Ee(r){var e=Ie.call(r,h),t=r[h];try{r[h]=void 0;var i=!0}catch(o){}var n=_e.call(r);return i&&(e?r[h]=t:delete r[h]),n}F.exports=Ee});var Z=a((hn,W)=>{var He=Object.prototype,ze=He.toString;function Be(r){return ze.call(r)}W.exports=Be});var K=a((gn,$)=>{var J=p(),Fe=G(),Ge=Z(),We="[object Null]",Ze="[object Undefined]",Y=J?J.toStringTag:void 0;function Je(r){return r==null?r===void 0?Ze:We:Y&&Y in Object(r)?Fe(r):Ge(r)}$.exports=Je});var X=a((fn,Q)=>{function Ye(r){return r!=null&&typeof r=="object"}Q.exports=Ye});var er=a((pn,rr)=>{var $e=K(),Ke=X(),Qe="[object Symbol]";function Xe(r){return typeof r=="symbol"||Ke(r)&&$e(r)==Qe}rr.exports=Xe});var ur=a((bn,or)=>{var tr=p(),rt=_(),et=H(),tt=er(),it=1/0,ir=tr?tr.prototype:void 0,nr=ir?ir.toString:void 0;function ar(r){if(typeof r=="string")return r;if(et(r))return rt(r,ar)+"";if(tt(r))return nr?nr.call(r):"";var e=r+"";return e=="0"&&1/r==-it?"-0":e}or.exports=ar});var b=a((xn,sr)=>{var nt=ur();function at(r){return r==null?"":nt(r)}sr.exports=at});var dr=a((wn,lr)=>{var ot=O(),ut=b(),st=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,lt="\\u0300-\\u036f",dt="\\ufe20-\\ufe2f",ct="\\u20d0-\\u20ff",mt=lt+dt+ct,ht="["+mt+"]",gt=RegExp(ht,"g");function ft(r){return r=ut(r),r&&r.replace(st,ot).replace(gt,"")}lr.exports=ft});var mr=a((vn,cr)=>{var pt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function bt(r){return r.match(pt)||[]}cr.exports=bt});var gr=a((Tn,hr)=>{var xt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function wt(r){return xt.test(r)}hr.exports=wt});var Vr=a((yn,Or)=>{var fr="\\ud800-\\udfff",vt="\\u0300-\\u036f",Tt="\\ufe20-\\ufe2f",yt="\\u20d0-\\u20ff",Pt=vt+Tt+yt,pr="\\u2700-\\u27bf",br="a-z\\xdf-\\xf6\\xf8-\\xff",Rt="\\xac\\xb1\\xd7\\xf7",Ct="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",kt="\\u2000-\\u206f",St=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xr="A-Z\\xc0-\\xd6\\xd8-\\xde",Mt="\\ufe0e\\ufe0f",wr=Rt+Ct+kt+St,vr="['\u2019]",Tr="["+wr+"]",At="["+Pt+"]",yr="\\d+",qt="["+pr+"]",Pr="["+br+"]",Rr="[^"+fr+wr+yr+pr+br+xr+"]",jt="\\ud83c[\\udffb-\\udfff]",Ot="(?:"+At+"|"+jt+")",Vt="[^"+fr+"]",Cr="(?:\\ud83c[\\udde6-\\uddff]){2}",kr="[\\ud800-\\udbff][\\udc00-\\udfff]",m="["+xr+"]",Dt="\\u200d",Sr="(?:"+Pr+"|"+Rr+")",Nt="(?:"+m+"|"+Rr+")",Mr="(?:"+vr+"(?:d|ll|m|re|s|t|ve))?",Ar="(?:"+vr+"(?:D|LL|M|RE|S|T|VE))?",qr=Ot+"?",jr="["+Mt+"]?",Ut="(?:"+Dt+"(?:"+[Vt,Cr,kr].join("|")+")"+jr+qr+")*",Lt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",It="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",_t=jr+qr+Ut,Et="(?:"+[qt,Cr,kr].join("|")+")"+_t,Ht=RegExp([m+"?"+Pr+"+"+Mr+"(?="+[Tr,m,"$"].join("|")+")",Nt+"+"+Ar+"(?="+[Tr,m+Sr,"$"].join("|")+")",m+"?"+Sr+"+"+Mr,m+"+"+Ar,It,Lt,yr,Et].join("|"),"g");function zt(r){return r.match(Ht)||[]}Or.exports=zt});var Nr=a((Pn,Dr)=>{var Bt=mr(),Ft=gr(),Gt=b(),Wt=Vr();function Zt(r,e,t){return r=Gt(r),e=t?void 0:e,e===void 0?Ft(r)?Wt(r):Bt(r):r.match(e)||[]}Dr.exports=Zt});var Lr=a((Rn,Ur)=>{var Jt=M(),Yt=dr(),$t=Nr(),Kt="['\u2019]",Qt=RegExp(Kt,"g");function Xt(r){return function(e){return Jt($t(Yt(e).replace(Qt,"")),r,"")}}Ur.exports=Xt});var _r=a((Cn,Ir)=>{function ri(r,e,t){var i=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(n);++i<n;)o[i]=r[i+e];return o}Ir.exports=ri});var Hr=a((kn,Er)=>{var ei=_r();function ti(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:ei(r,e,t)}Er.exports=ti});var v=a((Sn,zr)=>{var ii="\\ud800-\\udfff",ni="\\u0300-\\u036f",ai="\\ufe20-\\ufe2f",oi="\\u20d0-\\u20ff",ui=ni+ai+oi,si="\\ufe0e\\ufe0f",li="\\u200d",di=RegExp("["+li+ii+ui+si+"]");function ci(r){return di.test(r)}zr.exports=ci});var Fr=a((Mn,Br)=>{function mi(r){return r.split("")}Br.exports=mi});var Qr=a((An,Kr)=>{var Gr="\\ud800-\\udfff",hi="\\u0300-\\u036f",gi="\\ufe20-\\ufe2f",fi="\\u20d0-\\u20ff",pi=hi+gi+fi,bi="\\ufe0e\\ufe0f",xi="["+Gr+"]",T="["+pi+"]",y="\\ud83c[\\udffb-\\udfff]",wi="(?:"+T+"|"+y+")",Wr="[^"+Gr+"]",Zr="(?:\\ud83c[\\udde6-\\uddff]){2}",Jr="[\\ud800-\\udbff][\\udc00-\\udfff]",vi="\\u200d",Yr=wi+"?",$r="["+bi+"]?",Ti="(?:"+vi+"(?:"+[Wr,Zr,Jr].join("|")+")"+$r+Yr+")*",yi=$r+Yr+Ti,Pi="(?:"+[Wr+T+"?",T,Zr,Jr,xi].join("|")+")",Ri=RegExp(y+"(?="+y+")|"+Pi+yi,"g");function Ci(r){return r.match(Ri)||[]}Kr.exports=Ci});var re=a((qn,Xr)=>{var ki=Fr(),Si=v(),Mi=Qr();function Ai(r){return Si(r)?Mi(r):ki(r)}Xr.exports=Ai});var te=a((jn,ee)=>{var qi=Hr(),ji=v(),Oi=re(),Vi=b();function Di(r){return function(e){e=Vi(e);var t=ji(e)?Oi(e):void 0,i=t?t[0]:e.charAt(0),n=t?qi(t,1).join(""):e.slice(1);return i[r]()+n}}ee.exports=Di});var ne=a((On,ie)=>{var Ni=te(),Ui=Ni("toUpperCase");ie.exports=Ui});var oe=a((Vn,ae)=>{var Li=Lr(),Ii=ne(),_i=Li(function(r,e,t){return r+(t?" ":"")+Ii(e)});ae.exports=_i});var se=Re(oe());var Ei=`
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
`,ue=`
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
`,Ki={Glide:Ei,"Machine Learning":Yi,General:ue,Array:Bi,Number:zi,Encoding:$i,Text:Ji,"Data & APIs":Zi,Image:Fi,Fun:Gi,"Date & Time":Wi,Code:Hi};function P({icon:r,category:e}){var t;return(t=r!=null?r:Ki[e])!=null?t:ue}function le(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(le):r}function Qi(r,e){return w(this,null,function*(){var s;let{data:{key:t,params:i}}=r,n,o;try{n=yield e(...i)}catch(u){n=void 0;try{o=u.toString()}catch(c){o="Exception can't be stringified."}}let l={key:t};n!==void 0&&(n=le(n),l.result={type:"string",value:n}),o!==void 0&&(l.error=o),((s=r.source)==null?void 0:s.postMessage).call(s,l,"*")})}function Xi(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Qi(e,r.run)),f(d({},r),{json:JSON.stringify(rn(r),null,2)})}function rn(r){let{name:e,category:t,released:i,description:n,author:o,result:l,params:s,about:u,video:c,deprecated:ce}=r,me=P(r);return{name:e,category:t,released:i,description:n,author:o,result:l,about:u,icon:me,video:c,deprecated:ce,params:Object.entries(s).map(([he,ge])=>d({name:he},ge))}}var en={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:"https://www.loom.com/share/39ab84c058e14adea79ca4442f450351",tests:[],run(){return w(this,null,function*(){})}},x=class{constructor(e={},t=[]){this.definition=d(d({},en),e),this.requiredParams=[...t]}with(e,t=[]){return new x(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){let{icon:t}=this.definition;return this.with({category:e,icon:P({icon:t,category:e})})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withFailingTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withDateResult(){return this.withResult("date-time")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,se.default)(t)),this.with({params:f(d({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withBooleanParam(e,t){return this.withParam("boolean",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredURIParam(e,t){return this.withRequiredParam("uri",e,t)}withRequiredBooleanParam(e,t){return this.withRequiredParam("boolean",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function o(...l){let s={};if(l.forEach(({value:u},c)=>{s[n[c]]=u}),!i.some(u=>s[u]===void 0))return e(s)}return Xi(f(d({},this.definition),{run:o}))}};function de(r){return new x({name:r})}var In=de("Reverse Array").withCategory("Array").withDescription("Reverses the order of items in an array").withReleased("direct").withPrimitiveArrayResult().withRequiredPrimitiveArrayParam("array").run(({array:r})=>[...r].reverse());})();
//# sourceMappingURL=index.js.map
