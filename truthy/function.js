var gr=Object.create;var f=Object.defineProperty,pr=Object.defineProperties,wr=Object.getOwnPropertyDescriptor,br=Object.getOwnPropertyDescriptors,xr=Object.getOwnPropertyNames,C=Object.getOwnPropertySymbols,vr=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty,Tr=Object.prototype.propertyIsEnumerable;var S=(e,r,t)=>r in e?f(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,l=(e,r)=>{for(var t in r||(r={}))k.call(r,t)&&S(e,t,r[t]);if(C)for(var t of C(r))Tr.call(r,t)&&S(e,t,r[t]);return e},g=(e,r)=>pr(e,br(r)),yr=e=>f(e,"__esModule",{value:!0});var n=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Pr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of xr(r))!k.call(e,i)&&i!=="default"&&f(e,i,{get:()=>r[i],enumerable:!(t=wr(r,i))||t.enumerable});return e},Rr=e=>Pr(yr(f(e!=null?gr(vr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var M=(e,r,t)=>new Promise((i,a)=>{var u=s=>{try{o(t.next(s))}catch(d){a(d)}},c=s=>{try{o(t.throw(s))}catch(d){a(d)}},o=s=>s.done?i(s.value):Promise.resolve(s.value).then(u,c);o((t=t.apply(e,r)).next())});var q=n((tn,A)=>{function Cr(e,r,t,i){var a=-1,u=e==null?0:e.length;for(i&&u&&(t=e[++a]);++a<u;)t=r(t,e[a],a,e);return t}A.exports=Cr});var O=n((nn,j)=>{function kr(e){return function(r){return e==null?void 0:e[r]}}j.exports=kr});var V=n((an,N)=>{var Sr=O(),Mr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ar=Sr(Mr);N.exports=Ar});var L=n((sn,D)=>{var qr=typeof global=="object"&&global&&global.Object===Object&&global;D.exports=qr});var I=n((un,U)=>{var jr=L(),Or=typeof self=="object"&&self&&self.Object===Object&&self,Nr=jr||Or||Function("return this")();U.exports=Nr});var p=n((on,E)=>{var Vr=I(),Dr=Vr.Symbol;E.exports=Dr});var H=n((ln,_)=>{function Lr(e,r){for(var t=-1,i=e==null?0:e.length,a=Array(i);++t<i;)a[t]=r(e[t],t,e);return a}_.exports=Lr});var z=n((dn,F)=>{var Ur=Array.isArray;F.exports=Ur});var Z=n((hn,W)=>{var B=p(),G=Object.prototype,Ir=G.hasOwnProperty,Er=G.toString,m=B?B.toStringTag:void 0;function _r(e){var r=Ir.call(e,m),t=e[m];try{e[m]=void 0;var i=!0}catch(u){}var a=Er.call(e);return i&&(r?e[m]=t:delete e[m]),a}W.exports=_r});var Y=n((cn,J)=>{var Hr=Object.prototype,Fr=Hr.toString;function zr(e){return Fr.call(e)}J.exports=zr});var X=n((mn,Q)=>{var $=p(),Br=Z(),Gr=Y(),Wr="[object Null]",Zr="[object Undefined]",K=$?$.toStringTag:void 0;function Jr(e){return e==null?e===void 0?Zr:Wr:K&&K in Object(e)?Br(e):Gr(e)}Q.exports=Jr});var re=n((fn,ee)=>{function Yr(e){return e!=null&&typeof e=="object"}ee.exports=Yr});var ie=n((gn,te)=>{var $r=X(),Kr=re(),Qr="[object Symbol]";function Xr(e){return typeof e=="symbol"||Kr(e)&&$r(e)==Qr}te.exports=Xr});var le=n((pn,oe)=>{var ne=p(),et=H(),rt=z(),tt=ie(),it=1/0,ae=ne?ne.prototype:void 0,se=ae?ae.toString:void 0;function ue(e){if(typeof e=="string")return e;if(rt(e))return et(e,ue)+"";if(tt(e))return se?se.call(e):"";var r=e+"";return r=="0"&&1/e==-it?"-0":r}oe.exports=ue});var w=n((wn,de)=>{var nt=le();function at(e){return e==null?"":nt(e)}de.exports=at});var ce=n((bn,he)=>{var st=V(),ut=w(),ot=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,lt="\\u0300-\\u036f",dt="\\ufe20-\\ufe2f",ht="\\u20d0-\\u20ff",ct=lt+dt+ht,mt="["+ct+"]",ft=RegExp(mt,"g");function gt(e){return e=ut(e),e&&e.replace(ot,st).replace(ft,"")}he.exports=gt});var fe=n((xn,me)=>{var pt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function wt(e){return e.match(pt)||[]}me.exports=wt});var pe=n((vn,ge)=>{var bt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function xt(e){return bt.test(e)}ge.exports=xt});var De=n((Tn,Ve)=>{var we="\\ud800-\\udfff",vt="\\u0300-\\u036f",Tt="\\ufe20-\\ufe2f",yt="\\u20d0-\\u20ff",Pt=vt+Tt+yt,be="\\u2700-\\u27bf",xe="a-z\\xdf-\\xf6\\xf8-\\xff",Rt="\\xac\\xb1\\xd7\\xf7",Ct="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",kt="\\u2000-\\u206f",St=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ve="A-Z\\xc0-\\xd6\\xd8-\\xde",Mt="\\ufe0e\\ufe0f",Te=Rt+Ct+kt+St,ye="['\u2019]",Pe="["+Te+"]",At="["+Pt+"]",Re="\\d+",qt="["+be+"]",Ce="["+xe+"]",ke="[^"+we+Te+Re+be+xe+ve+"]",jt="\\ud83c[\\udffb-\\udfff]",Ot="(?:"+At+"|"+jt+")",Nt="[^"+we+"]",Se="(?:\\ud83c[\\udde6-\\uddff]){2}",Me="[\\ud800-\\udbff][\\udc00-\\udfff]",h="["+ve+"]",Vt="\\u200d",Ae="(?:"+Ce+"|"+ke+")",Dt="(?:"+h+"|"+ke+")",qe="(?:"+ye+"(?:d|ll|m|re|s|t|ve))?",je="(?:"+ye+"(?:D|LL|M|RE|S|T|VE))?",Oe=Ot+"?",Ne="["+Mt+"]?",Lt="(?:"+Vt+"(?:"+[Nt,Se,Me].join("|")+")"+Ne+Oe+")*",Ut="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",It="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Et=Ne+Oe+Lt,_t="(?:"+[qt,Se,Me].join("|")+")"+Et,Ht=RegExp([h+"?"+Ce+"+"+qe+"(?="+[Pe,h,"$"].join("|")+")",Dt+"+"+je+"(?="+[Pe,h+Ae,"$"].join("|")+")",h+"?"+Ae+"+"+qe,h+"+"+je,It,Ut,Re,_t].join("|"),"g");function Ft(e){return e.match(Ht)||[]}Ve.exports=Ft});var Ue=n((yn,Le)=>{var zt=fe(),Bt=pe(),Gt=w(),Wt=De();function Zt(e,r,t){return e=Gt(e),r=t?void 0:r,r===void 0?Bt(e)?Wt(e):zt(e):e.match(r)||[]}Le.exports=Zt});var Ee=n((Pn,Ie)=>{var Jt=q(),Yt=ce(),$t=Ue(),Kt="['\u2019]",Qt=RegExp(Kt,"g");function Xt(e){return function(r){return Jt($t(Yt(r).replace(Qt,"")),e,"")}}Ie.exports=Xt});var He=n((Rn,_e)=>{function ei(e,r,t){var i=-1,a=e.length;r<0&&(r=-r>a?0:a+r),t=t>a?a:t,t<0&&(t+=a),a=r>t?0:t-r>>>0,r>>>=0;for(var u=Array(a);++i<a;)u[i]=e[i+r];return u}_e.exports=ei});var ze=n((Cn,Fe)=>{var ri=He();function ti(e,r,t){var i=e.length;return t=t===void 0?i:t,!r&&t>=i?e:ri(e,r,t)}Fe.exports=ti});var v=n((kn,Be)=>{var ii="\\ud800-\\udfff",ni="\\u0300-\\u036f",ai="\\ufe20-\\ufe2f",si="\\u20d0-\\u20ff",ui=ni+ai+si,oi="\\ufe0e\\ufe0f",li="\\u200d",di=RegExp("["+li+ii+ui+oi+"]");function hi(e){return di.test(e)}Be.exports=hi});var We=n((Sn,Ge)=>{function ci(e){return e.split("")}Ge.exports=ci});var er=n((Mn,Xe)=>{var Ze="\\ud800-\\udfff",mi="\\u0300-\\u036f",fi="\\ufe20-\\ufe2f",gi="\\u20d0-\\u20ff",pi=mi+fi+gi,wi="\\ufe0e\\ufe0f",bi="["+Ze+"]",T="["+pi+"]",y="\\ud83c[\\udffb-\\udfff]",xi="(?:"+T+"|"+y+")",Je="[^"+Ze+"]",Ye="(?:\\ud83c[\\udde6-\\uddff]){2}",$e="[\\ud800-\\udbff][\\udc00-\\udfff]",vi="\\u200d",Ke=xi+"?",Qe="["+wi+"]?",Ti="(?:"+vi+"(?:"+[Je,Ye,$e].join("|")+")"+Qe+Ke+")*",yi=Qe+Ke+Ti,Pi="(?:"+[Je+T+"?",T,Ye,$e,bi].join("|")+")",Ri=RegExp(y+"(?="+y+")|"+Pi+yi,"g");function Ci(e){return e.match(Ri)||[]}Xe.exports=Ci});var tr=n((An,rr)=>{var ki=We(),Si=v(),Mi=er();function Ai(e){return Si(e)?Mi(e):ki(e)}rr.exports=Ai});var nr=n((qn,ir)=>{var qi=ze(),ji=v(),Oi=tr(),Ni=w();function Vi(e){return function(r){r=Ni(r);var t=ji(r)?Oi(r):void 0,i=t?t[0]:r.charAt(0),a=t?qi(t,1).join(""):r.slice(1);return i[e]()+a}}ir.exports=Vi});var sr=n((jn,ar)=>{var Di=nr(),Li=Di("toUpperCase");ar.exports=Li});var or=n((On,ur)=>{var Ui=Ee(),Ii=sr(),Ei=Ui(function(e,r,t){return e+(t?" ":"")+Ii(r)});ur.exports=Ei});var dr=Rr(or());var _i=`
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
    `,Fi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,lr=`
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
`,Ki={Glide:_i,"Machine Learning":Yi,General:lr,Array:zi,Number:Fi,Encoding:$i,Text:Ji,"Data & APIs":Zi,Image:Bi,Fun:Gi,"Date & Time":Wi,Code:Hi};function P({icon:e,category:r}){var t;return(t=e!=null?e:Ki[r])!=null?t:lr}function Qi(e){return g(l({},e),{json:JSON.stringify(Xi(e),null,2)})}function Xi(e){let{name:r,category:t,released:i,description:a,author:u,result:c,params:o,about:s,video:d,deprecated:hr}=e,cr=P(e);return{name:r,category:t,released:i,description:a,author:u,result:c,about:s,icon:cr,video:d,deprecated:hr,params:Object.entries(o).map(([mr,fr])=>l({name:mr},fr))}}var en={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:"https://www.loom.com/share/39ab84c058e14adea79ca4442f450351",tests:[],run(){return M(this,null,function*(){})}},b=class{constructor(r={},t=[]){this.definition=l(l({},en),r),this.requiredParams=[...t]}with(r,t=[]){return new b(l(l({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withCategory(r){let{icon:t}=this.definition;return this.with({category:r,icon:P({icon:t,category:r})})}withReleased(r){return this.with({released:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withVideo(r){return this.with({video:r})}withIcon(r){return this.with({icon:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withTest(r,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:r,expectedResult:t}]})}withFailingTest(r,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:r,expectedResult:t,allowFailure:!0}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withDateResult(){return this.withResult("date-time")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(r,t,i){return i===void 0&&(i=(0,dr.default)(t)),this.with({params:g(l({},this.definition.params),{[t]:{type:r,displayName:i}})})}withRequiredParam(r,t,i){return this.withParam(r,t,i).with({},[t])}withPrimitiveParam(r,t){return this.withParam("primitive",r,t)}withBooleanParam(r,t){return this.withParam("boolean",r,t)}withStringParam(r,t){return this.withParam("string",r,t)}withDateParam(r,t){return this.withParam("date-time",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredPrimitiveParam(r,t){return this.withRequiredParam("primitive",r,t)}withRequiredURIParam(r,t){return this.withRequiredParam("uri",r,t)}withRequiredBooleanParam(r,t){return this.withRequiredParam("boolean",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredDateParam(r,t){return this.withRequiredParam("date-time",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}withStringArrayParam(r,t){return this.withParam({kind:"array",items:"string"},r,t)}withRequiredStringArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"string"},r,t)}withNumberArrayParam(r,t){return this.withParam({kind:"array",items:"number"},r,t)}withPrimitiveArrayParam(r,t){return this.withParam({kind:"array",items:"primitive"},r,t)}withRequiredPrimitiveArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"primitive"},r,t)}withExample(r){return this.with({example:r})}run(r){let{params:t}=this.definition,i=this.requiredParams,a=Object.keys(t);function u(...c){let o={};if(c.forEach(({value:s},d)=>{o[a[d]]=s}),!i.some(s=>o[s]===void 0))return r(o)}return Qi(g(l({},this.definition),{run:u}))}};function x(e){return new b({name:e})}function R(e){if(typeof e=="string"){let r=parseFloat(e);return isNaN(r)?["","no","false"].includes(e.trim().toLowerCase()):r===0}return Array.isArray(e)?e.length===0:Boolean(e)===!1}var Un=x("Is Falsey").withCategory("General").withReleased("direct").withDescription("True if value is false or false-like, otherwise false.").withPrimitiveParam("value").withBooleanResult().withTest({value:!0},!1).withTest({value:"true"},!1).withTest({value:"TRUE"},!1).withTest({value:"yes"},!1).withTest({value:""},!0).withTest({value:[]},!0).withTest({value:0},!0).withTest({value:"0"},!0).withTest({value:"false"},!0).withTest({value:"FALSE"},!0).withTest({value:"no"},!0).withTest({value:void 0},!0).withTest({value:null},!0).run(({value:e})=>R(e));var Hn=x("Is Truthy").withCategory("General").withReleased("direct").withDescription("True if value is true or true-like, otherwise false.").withPrimitiveParam("value").withBooleanResult().withTest({value:!0},!0).withTest({value:"true"},!0).withTest({value:"TRUE"},!0).withTest({value:"yes"},!0).withTest({value:""},!1).withTest({value:[]},!1).withTest({value:0},!1).withTest({value:"0"},!1).withTest({value:"false"},!1).withTest({value:"FALSE"},!1).withTest({value:"no"},!1).withTest({value:void 0},!1).withTest({value:null},!1).run(({value:e})=>!R(e));export{Hn as default};
//# sourceMappingURL=function.js.map
