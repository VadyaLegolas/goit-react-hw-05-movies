"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[264],{804:(t,e,a)=>{a.d(e,{A:()=>y});var n,c,i,o,s=a(528),r=a(475),l=a(197);const h=l.Ay.ul(n||(n=(0,s.A)(["\n  list-style: none;\n"]))),d=(0,l.Ay)(r.N_)(c||(c=(0,s.A)(["\n  text-decoration: none;\n  font-size: 18px;\n  color: black;\n  &:hover,\n  &:focus {\n    color: blue;\n  }\n"]))),u=l.Ay.li(i||(i=(0,s.A)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),p=l.Ay.img(o||(o=(0,s.A)(["\n  margin-right: 10px;\n"])));var m=a(579);const y=function(t){let{list:e,location:a,path:n=""}=t;return(0,m.jsx)(h,{children:e.map((t=>(0,m.jsx)(d,{to:"".concat(n).concat(t.id),state:{from:a},children:(0,m.jsxs)(u,{children:[(0,m.jsx)(p,{src:"../../images/no_image.jpg",width:"100",alt:t.title}),t.title,"(",t.release_date.slice(0,4),")"]},t.id)})))})}},970:(t,e,a)=>{a.d(e,{L3:()=>r,OO:()=>o,Op:()=>l,Rw:()=>s,xF:()=>i});const n="https://api.themoviedb.org/3/",c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTE1MDIzZDViOWQ3ZWRjMWE4NDhhY2YxODc2YjQ0NSIsInN1YiI6IjY2MGU1N2E5NmRjNTA3MDE2NDU2NGYzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7g5_S73d_kmCsOujpak_TASQ3OBWAJbyGG52uGpicY8"}},i=async()=>{const t=await fetch("".concat(n,"trending/movie/day"),c);return await t.json()},o=async t=>{const e=await fetch("".concat(n,"search/movie?include_adult=true&query=").concat(t),c);return await e.json()},s=async t=>{const e=await fetch("".concat(n,"movie/").concat(t),c);return await e.json()},r=async t=>{const e=await fetch("".concat(n,"movie/").concat(t,"/credits"),c);return await e.json()},l=async t=>{const e=await fetch("".concat(n,"movie/").concat(t,"/reviews"),c);return await e.json()}},264:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});var n=a(43),c=a(216),i=a(508),o=a(970),s=a(804),r=a(579);const l=()=>{const[t,e]=(0,n.useState)(null),[a,l]=(0,n.useState)(!1),[h,d]=(0,n.useState)(!1),u=(0,c.zy)();return(0,n.useEffect)((()=>{(async()=>{try{l(!0);const t=await(0,o.xF)();e(t.results)}catch(h){d(h)}finally{l(!1)}})()}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{children:"Trending today"}),a&&(0,r.jsx)("h2",{children:(0,r.jsx)(i.ul,{visible:!0,height:"80",width:"80",ariaLabel:"color-ring-loading",wrapperStyle:{},wrapperClass:"color-ring-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}),h&&(0,r.jsx)("h2",{children:h.message}),t&&(0,r.jsx)(s.A,{list:t,location:u,path:"movies/"})]})}}}]);
//# sourceMappingURL=264.25c156ca.chunk.js.map