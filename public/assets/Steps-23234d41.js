import{_ as B,f as O,u as k,g as d,h as F,r as C,o as f,c as q,a as u,d as n,i as p,j as m,k as v,B as U,l as W,p as j,e as E,m as b}from"./index-1c270e42.js";import{p as R}from"./index-dc93a215.js";const V=i=>(j("data-v-1e213d3a"),i=i(),E(),i),T={class:"q-pa-md"},z={class:"container-steps"},A=V(()=>u("span",{class:"title-steps"},"Crea tu primera finca",-1)),D=V(()=>u("span",{class:"text-required q-pb-sm"},[b("Todos los campos con "),u("span",{class:"text-red"},"*"),b(" son obligatorios")],-1)),L={class:"row justify-center q-mt-md"},P={key:0,class:"spinner"},Q={__name:"Steps",setup(i){const x=O(),g=k(),r=d(!1);let s=d(""),a=d(""),t=d("");const c=[e=>!!e||"Este campo es requerido"],y=F(()=>s.value==""||a.value==""||t.value==""?!0:r.value==!0),h=e=>{s.value=e},w=e=>{a.value=e},I=e=>{t.value=e};async function N(){console.log(s.value,a.value,t.value),r.value=!0;try{await R({name:s.value,address:a.value,owner:t.value}),r.value=!1,_("positive","Bienvenido"),g.push({name:"home"})}catch(e){console.log(e),r.value=!1,_("negative","Ocurrió un error")}}const _=(e,o)=>{x.notify({type:e,message:o,position:"top"})};return(e,o)=>{const S=C("q-spinner-ios");return f(),q("div",T,[u("div",z,[A,n(v,{class:"q-pb-xs",label:"Nombre",required:!0,type:"text",ruless:c,modelValue:p(s),"onUpdate:modelValue":o[0]||(o[0]=l=>m(s)?s.value=l:s=l),onOnWrite:h},null,8,["modelValue"]),n(v,{class:"q-pb-xs",label:"Ubicación",type:"text",required:!0,ruless:c,modelValue:p(a),"onUpdate:modelValue":o[1]||(o[1]=l=>m(a)?a.value=l:a=l),onOnWrite:w},null,8,["modelValue"]),n(v,{class:"q-pb-xs",label:"Propietario",required:!0,type:"text",ruless:c,modelValue:p(t),"onUpdate:modelValue":o[2]||(o[2]=l=>m(t)?t.value=l:t=l),onOnWrite:I},null,8,["modelValue"]),D,u("div",L,[n(U,{disable:p(y),onOnClick:N},null,8,["disable"])]),r.value?(f(),q("div",P,[n(S,{color:"primary",size:"2.5em"})])):W("",!0)])])}}},J=B(Q,[["__scopeId","data-v-1e213d3a"]]);export{J as default};