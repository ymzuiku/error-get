var l=(a,o,e)=>new Promise((t,y)=>{var n=r=>{try{s(e.next(r))}catch(i){y(i)}},c=r=>{try{s(e.throw(r))}catch(i){y(i)}},s=r=>r.done?t(r.value):Promise.resolve(r.value).then(n,c);s((e=e.apply(a,o)).next())});var m=(a,o)=>l(void 0,null,function*(){let e;try{typeof a=="function"?o?e=yield Promise.resolve(a(...o)):e=yield Promise.resolve(a()):e=yield Promise.resolve(a)}catch(t){e=t}return e}),p=m;export{p as default,m as errorGet};
