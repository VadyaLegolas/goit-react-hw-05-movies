"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[242],{242:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});var c=a(43),n=a(216),s=a(508),o=a(970),r=a(579);const i=()=>{const{movieId:t}=(0,n.g)(),[e,a]=(0,c.useState)(null),[i,h]=(0,c.useState)(!1),[l,u]=(0,c.useState)(null);return(0,c.useEffect)((()=>{(async()=>{try{h(!0);const e=await(0,o.Op)(t);if(0===e.results.length)throw new Error("We don't have any reviews for this movie");a(e)}catch(l){u(l)}finally{h(!1)}})()}),[t]),(0,r.jsxs)(r.Fragment,{children:[i&&(0,r.jsx)("h2",{children:(0,r.jsx)(s.Mw,{visible:!0,height:"80",width:"80",ariaLabel:"comment-loading",wrapperStyle:{},wrapperClass:"comment-wrapper",color:"#fff",backgroundColor:"#F4442E"})}),l&&(0,r.jsx)("p",{children:l.message}),e&&(0,r.jsxs)("ul",{children:[" ",e.results.map((t=>(0,r.jsxs)("li",{children:[(0,r.jsxs)("b",{children:["Author: ",t.author]}),(0,r.jsx)("p",{children:t.content})]},t.id)))]})]})}},970:(t,e,a)=>{a.d(e,{L3:()=>i,OO:()=>o,Op:()=>h,Rw:()=>r,xF:()=>s});const c="https://api.themoviedb.org/3/",n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTE1MDIzZDViOWQ3ZWRjMWE4NDhhY2YxODc2YjQ0NSIsInN1YiI6IjY2MGU1N2E5NmRjNTA3MDE2NDU2NGYzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7g5_S73d_kmCsOujpak_TASQ3OBWAJbyGG52uGpicY8"}},s=async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"day";const e=await fetch("".concat(c,"trending/movie/").concat(t," "),n);return await e.json()},o=async t=>{const e=await fetch("".concat(c,"search/movie?include_adult=true&query=").concat(t),n);return await e.json()},r=async t=>{const e=await fetch("".concat(c,"movie/").concat(t),n);return await e.json()},i=async t=>{const e=await fetch("".concat(c,"movie/").concat(t,"/credits"),n);return await e.json()},h=async t=>{const e=await fetch("".concat(c,"movie/").concat(t,"/reviews"),n);return await e.json()}}}]);
//# sourceMappingURL=242.c474f2d3.chunk.js.map