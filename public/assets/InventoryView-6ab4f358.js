import{h as c,g as i,r as l,o as e,c as m,i as n,q as t,l as r,F as u,s as p}from"./index-1c270e42.js";import{L as d}from"./ListModules-aea5ee1c.js";const g={__name:"InventoryView",setup(v){const o=c(()=>p().name),a=i([{label:"Bodegas",icon:"icon icon-home",name:"inventory-cellars"},{label:"Marcas",icon:"icon icon-brands",name:"inventory-brands"},{label:"Categorias",icon:"icon icon-categories",name:"inventory-categories"},{label:"Productos",icon:"icon icon-inventory",name:"inventory-products"}]);return(y,_)=>{const s=l("RouterView");return e(),m(u,null,[n(o)=="inventory"?(e(),t(d,{key:0,title:"INVENTARIO",items:a.value},null,8,["items"])):r("",!0),n(o)!="inventory"?(e(),t(s,{key:1})):r("",!0)],64)}}};export{g as default};