"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[7],{804:(n,t,e)=>{e.d(t,{A:()=>m});var a,i,r,o,c=e(528),s=e(475),l=e(197);const u=l.Ay.ul(a||(a=(0,c.A)(["\n  list-style: none;\n"]))),h=(0,l.Ay)(s.N_)(i||(i=(0,c.A)(["\n  text-decoration: none;\n  font-size: 18px;\n  color: black;\n  &:hover,\n  &:focus {\n    color: blue;\n  }\n"]))),d=l.Ay.li(r||(r=(0,c.A)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),p=l.Ay.img(o||(o=(0,c.A)(["\n  margin-right: 10px;\n"])));var y=e(579);const m=function(n){let{list:t,location:e,path:a=""}=n;return(0,y.jsx)(u,{children:t.map((n=>(0,y.jsx)(h,{to:"".concat(a).concat(n.id),state:{from:e},children:(0,y.jsxs)(d,{children:[(0,y.jsx)(p,{src:"../../images/no_image.jpg",width:"100",alt:n.title}),n.title,"(",n.release_date.slice(0,4),")"]},n.id)})))})}},970:(n,t,e)=>{e.d(t,{L3:()=>s,OO:()=>o,Op:()=>l,Rw:()=>c,xF:()=>r});const a="https://api.themoviedb.org/3/",i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTE1MDIzZDViOWQ3ZWRjMWE4NDhhY2YxODc2YjQ0NSIsInN1YiI6IjY2MGU1N2E5NmRjNTA3MDE2NDU2NGYzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7g5_S73d_kmCsOujpak_TASQ3OBWAJbyGG52uGpicY8"}},r=async()=>{const n=await fetch("".concat(a,"trending/movie/day"),i);return await n.json()},o=async n=>{const t=await fetch("".concat(a,"search/movie?include_adult=true&query=").concat(n),i);return await t.json()},c=async n=>{const t=await fetch("".concat(a,"movie/").concat(n),i);return await t.json()},s=async n=>{const t=await fetch("".concat(a,"movie/").concat(n,"/credits"),i);return await t.json()},l=async n=>{const t=await fetch("".concat(a,"movie/").concat(n,"/reviews"),i);return await t.json()}},7:(n,t,e)=>{e.r(t),e.d(t,{default:()=>j});var a,i,r,o=e(43),c=e(216),s=e(475),l=e(508),u=e(970),h=e(528),d=e(197);const p=d.Ay.form(a||(a=(0,h.A)(["\n  position: relative;\n  width: 300px; /* \u0428\u0438\u0440\u0438\u043d\u0430 \u043f\u043e\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 */\n  margin: 20px auto; /* \u041e\u0442\u0441\u0442\u0443\u043f\u044b \u043f\u043e \u043a\u0440\u0430\u044f\u043c */\n"]))),y=d.Ay.input(i||(i=(0,h.A)(["\n   width: calc(100% - 20px); /* \u0428\u0438\u0440\u0438\u043d\u0430 \u043f\u043e\u043b\u044f \u043c\u0438\u043d\u0443\u0441 \u0448\u0438\u0440\u0438\u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0438 */\n  padding: 10px;\n  font: inherit;\n  font-size: 18px;\n  border: 1px solid #ccc;\n  border-radius: 20px; /* \u0420\u0430\u0434\u0438\u0443\u0441 \u0437\u0430\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f */\n  outline: none;\n  &::placeholder {\n    font: inherit;\n    font-size: 16px;\n  }\n"]))),m=d.Ay.button(r||(r=(0,h.A)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40px; /* \u0428\u0438\u0440\u0438\u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0438 */\n  height: 100%;\n  background-color: transparent;\n  border: none;\n  border-left: 2px solid #ccc;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  outline: none;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 1;\n  }\n"])));var x=e(926),f=e(579);const g=n=>{let{onSubmit:t}=n;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(p,{onSubmit:t,children:[(0,f.jsx)(y,{type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a...",name:"query"}),(0,f.jsx)(m,{type:"submit",children:(0,f.jsx)(x.o0Z,{size:"20px"})})]})})};var b=e(804);const j=()=>{var n;const[t,e]=(0,o.useState)(null),[a,i]=(0,o.useState)(!1),[r,h]=(0,o.useState)(!1),d=(0,c.zy)(),[p,y]=(0,s.ok)(),m=null!==(n=p.get("query"))&&void 0!==n?n:"";(0,o.useEffect)((()=>{if(""===m)return;(async()=>{i(!0),e(null),h(null);try{const{results:n}=await(0,u.OO)(m);if(0===n.length)throw new Error("We don't have any movies for this query \"".concat(m,'"'));e(n)}catch(r){h(r)}finally{i(!1)}})()}),[m]);return(0,f.jsxs)("div",{children:[(0,f.jsx)(g,{onSubmit:n=>{n.preventDefault();let t=n.target.query.value;if(""===t.trim())return y({}),e(null),void h({message:"Enter a search query"});y({query:t}),n.target.reset()}}),a&&(0,f.jsx)(l.eS,{visible:!0,height:"80",width:"80",ariaLabel:"magnifying-glass-loading",wrapperStyle:{},wrapperClass:"magnifying-glass-wrapper",glassColor:"#c0efff",color:"#e15b64"}),r&&(0,f.jsx)("h2",{children:r.message}),t&&(0,f.jsx)(b.A,{list:t,location:d})]})}}}]);
//# sourceMappingURL=7.1640637e.chunk.js.map