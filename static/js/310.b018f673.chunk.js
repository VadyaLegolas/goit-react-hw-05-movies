"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{970:(e,n,a)=>{a.d(n,{L3:()=>o,OO:()=>c,Op:()=>l,Rw:()=>i,xF:()=>s});const t="https://api.themoviedb.org/3/",r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTE1MDIzZDViOWQ3ZWRjMWE4NDhhY2YxODc2YjQ0NSIsInN1YiI6IjY2MGU1N2E5NmRjNTA3MDE2NDU2NGYzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7g5_S73d_kmCsOujpak_TASQ3OBWAJbyGG52uGpicY8"}},s=async()=>{const e=await fetch("".concat(t,"trending/movie/day"),r);return await e.json()},c=async e=>{const n=await fetch("".concat(t,"search/movie?include_adult=true&query=").concat(e),r);return await n.json()},i=async e=>{const n=await fetch("".concat(t,"movie/").concat(e),r);return await n.json()},o=async e=>{const n=await fetch("".concat(t,"movie/").concat(e,"/credits"),r);return await n.json()},l=async e=>{const n=await fetch("".concat(t,"movie/").concat(e,"/reviews"),r);return await n.json()}},617:(e,n,a)=>{a.r(n),a.d(n,{default:()=>w});var t,r,s,c=a(43),i=a(216),o=a(475),l=a(508),d=a(970),h=a(528),p=a(197);const j=p.Ay.div(t||(t=(0,h.A)(["\n  display: flex;\n"]))),x=p.Ay.img(r||(r=(0,h.A)(["\n  margin-right: 20px;\n"]))),u=(0,p.Ay)(o.N_)(s||(s=(0,h.A)(["\n  margin-bottom: 10px;\n  text-decoration: none;\n  border: none;\n  border-radius: 10px;\n  padding: 0 10px 2px 10px;\n  color: black;\n  background-color: aqua;\n  font-weight: 700;\n  &:hover,\n  &:focus {\n    background-color: orange;\n  }\n"]))),g=a.p+"static/media/No-Image-Placeholder.svg.baba1a7394e8054d69cf.png";var v=a(579);const m=()=>{var e,n;const{movieId:a}=(0,i.g)(),t=(0,i.zy)(),r=(0,c.useRef)(null!==(e=null===(n=t.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/"),[s,h]=(0,c.useState)(null),[p,w]=(0,c.useState)(!1),[b,f]=(0,c.useState)(!1);return(0,c.useEffect)((()=>{(async()=>{try{w(!0);const e=await(0,d.Rw)(a);h(e)}catch(b){f(b)}finally{w(!1)}})()}),[a]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h1",{children:"Movie details"}),(0,v.jsx)("p",{children:(0,v.jsx)(u,{to:r.current,children:"\u21a9 Go back"})}),p&&(0,v.jsx)("h2",{children:(0,v.jsx)(l.ul,{visible:!0,height:"80",width:"80",ariaLabel:"color-ring-loading",wrapperStyle:{},wrapperClass:"color-ring-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}),b&&(0,v.jsx)("h2",{children:b.message}),s&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(j,{children:[(0,v.jsx)(x,{src:s.poster_path?"https://image.tmdb.org/t/p/w500".concat(s.poster_path):g,width:"300",alt:m.title}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("h2",{children:[s.original_title," ",s.release_date?" (".concat(s.release_date.slice(0,4),")"):""]}),(0,v.jsxs)("p",{children:["User score: ",Math.round(10*s.vote_average),"%"]}),(0,v.jsx)("h3",{children:"Overview:"}),(0,v.jsx)("p",{children:""!==s.overview?s.overview:"No description"}),(0,v.jsx)("h3",{children:"Genres:"}),(0,v.jsx)("p",{children:0===s.genres.length?"No genres":s.genres.map((e=>e.name+" "))})]})]}),(0,v.jsx)("hr",{}),(0,v.jsx)("h3",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(o.N_,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(o.N_,{to:"reviews",children:"Reviews"})})]}),(0,v.jsx)("hr",{}),(0,v.jsx)(c.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:(0,v.jsx)(i.sv,{})})]})]})},w=m}}]);
//# sourceMappingURL=310.b018f673.chunk.js.map