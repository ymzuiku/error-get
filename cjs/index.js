var l=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var w=(r,a)=>{for(var e in a)l(r,e,{get:a[e],enumerable:!0})},f=(r,a,e,s)=>{if(a&&typeof a=="object"||typeof a=="function")for(let o of u(a))!v.call(r,o)&&o!==e&&l(r,o,{get:()=>a[o],enumerable:!(s=p(a,o))||s.enumerable});return r};var x=r=>f(l({},"__esModule",{value:!0}),r);var n=(r,a,e)=>new Promise((s,o)=>{var m=t=>{try{i(e.next(t))}catch(y){o(y)}},P=t=>{try{i(e.throw(t))}catch(y){o(y)}},i=t=>t.done?s(t.value):Promise.resolve(t.value).then(m,P);i((e=e.apply(r,a)).next())});var h={};w(h,{default:()=>d,errorGet:()=>c});module.exports=x(h);var c=(r,a)=>n(void 0,null,function*(){let e;try{typeof r=="function"?a?e=yield Promise.resolve(r(...a)):e=yield Promise.resolve(r()):e=yield Promise.resolve(r)}catch(s){e=s}return e}),d=c;
