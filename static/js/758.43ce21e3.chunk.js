"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[758],{78:(t,n,e)=>{e.d(n,{A:()=>f});var a,o,r,i,c=e(528),s=e(475),l=e(197);const u=l.Ay.ul(a||(a=(0,c.A)(["\n  list-style: none;\n"]))),h=(0,l.Ay)(s.N_)(o||(o=(0,c.A)(["\n  text-decoration: none;\n  font-size: 18px;\n  color: black;\n  &:hover,\n  &:focus {\n    color: blue;\n  }\n"]))),p=l.Ay.li(r||(r=(0,c.A)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),d=l.Ay.img(i||(i=(0,c.A)(["\n  margin-right: 10px;\n"]))),m=e.p+"static/media/no_image.0a66a305ec309c0c0ae0.jpg";var y=e(579);const f=function(t){let{list:n,location:e,path:a=""}=t;return(0,y.jsx)(u,{children:n.map((t=>(0,y.jsx)(h,{to:"".concat(a).concat(t.id),state:{from:e},children:(0,y.jsxs)(p,{children:[(0,y.jsx)(d,{src:t.backdrop_path?"https://image.tmdb.org/t/p/w500".concat(t.backdrop_path):m,width:"100",alt:"Poster for ".concat(t.title)}),t.title,t.release_date&&" (".concat(t.release_date.slice(0,4),")")]})},t.id)))})}},970:(t,n,e)=>{e.d(n,{L3:()=>s,OO:()=>i,Op:()=>l,Rw:()=>c,xF:()=>r});const a="https://api.themoviedb.org/3/",o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTE1MDIzZDViOWQ3ZWRjMWE4NDhhY2YxODc2YjQ0NSIsInN1YiI6IjY2MGU1N2E5NmRjNTA3MDE2NDU2NGYzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7g5_S73d_kmCsOujpak_TASQ3OBWAJbyGG52uGpicY8"}},r=async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"day";const n=await fetch("".concat(a,"trending/movie/").concat(t," "),o);return await n.json()},i=async t=>{const n=await fetch("".concat(a,"search/movie?include_adult=true&query=").concat(t),o);return await n.json()},c=async t=>{const n=await fetch("".concat(a,"movie/").concat(t),o);return await n.json()},s=async t=>{const n=await fetch("".concat(a,"movie/").concat(t,"/credits"),o);return await n.json()},l=async t=>{const n=await fetch("".concat(a,"movie/").concat(t,"/reviews"),o);return await n.json()}},7:(t,n,e)=>{e.r(n),e.d(n,{default:()=>j});var a,o,r,i=e(43),c=e(216),s=e(475),l=e(508),u=e(970),h=e(528),p=e(197);const d=p.Ay.form(a||(a=(0,h.A)(["\n  position: relative;\n  width: 300px; /* \u0428\u0438\u0440\u0438\u043d\u0430 \u043f\u043e\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 */\n  margin: 20px auto; /* \u041e\u0442\u0441\u0442\u0443\u043f\u044b \u043f\u043e \u043a\u0440\u0430\u044f\u043c */\n"]))),m=p.Ay.input(o||(o=(0,h.A)(["\n   width: calc(100% - 20px); /* \u0428\u0438\u0440\u0438\u043d\u0430 \u043f\u043e\u043b\u044f \u043c\u0438\u043d\u0443\u0441 \u0448\u0438\u0440\u0438\u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0438 */\n  padding: 10px;\n  font: inherit;\n  font-size: 18px;\n  border: 1px solid #ccc;\n  border-radius: 20px; /* \u0420\u0430\u0434\u0438\u0443\u0441 \u0437\u0430\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f */\n  outline: none;\n  &::placeholder {\n    font: inherit;\n    font-size: 16px;\n  }\n"]))),y=p.Ay.button(r||(r=(0,h.A)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40px; /* \u0428\u0438\u0440\u0438\u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0438 */\n  height: 100%;\n  background-color: transparent;\n  border: none;\n  border-left: 2px solid #ccc;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  outline: none;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 1;\n  }\n"])));var f=e(926),g=e(579);const x=t=>{let{onSubmit:n}=t;return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(d,{onSubmit:n,children:[(0,g.jsx)(m,{type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a...",name:"query"}),(0,g.jsx)(y,{type:"submit",children:(0,g.jsx)(f.o0Z,{size:"20px"})})]})})};var b=e(78);const j=()=>{var t;const[n,e]=(0,i.useState)(null),[a,o]=(0,i.useState)(!1),[r,h]=(0,i.useState)(!1),p=(0,c.zy)(),[d,m]=(0,s.ok)(),y=null!==(t=d.get("query"))&&void 0!==t?t:"";(0,i.useEffect)((()=>{if(""===y)return;(async()=>{o(!0),e(null),h(null);try{const{results:t}=await(0,u.OO)(y);if(0===t.length)throw new Error("We don't have any movies for this query \"".concat(y,'"'));e(t)}catch(r){h(r)}finally{o(!1)}})()}),[y]);return(0,g.jsxs)("div",{children:[(0,g.jsx)(x,{onSubmit:t=>{t.preventDefault();let n=t.target.query.value;if(""===n.trim())return m({}),e(null),void h({message:"Enter a search query"});m({query:n}),t.target.reset()}}),a&&(0,g.jsx)(l.eS,{visible:!0,height:"80",width:"80",ariaLabel:"magnifying-glass-loading",wrapperStyle:{},wrapperClass:"magnifying-glass-wrapper",glassColor:"#c0efff",color:"#e15b64"}),r&&(0,g.jsx)("h2",{children:r.message}),n&&(0,g.jsx)(b.A,{list:n,location:p})]})}}}]);
//# sourceMappingURL=758.43ce21e3.chunk.js.map