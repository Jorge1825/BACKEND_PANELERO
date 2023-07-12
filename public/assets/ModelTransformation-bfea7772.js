import{_ as me,f as pe,y as _e,g as n,z as ge,h as K,A as be,C as qe,r as i,o as V,c as P,a as s,d as e,w as l,i as r,q as N,M as ye,l as X,F as he,ai as we,j as q,m as k,t as Me,k as U,B as Y,p as Ve,e as ke,at as Te,au as xe,av as Se,aw as Ie}from"./index-1c270e42.js";import{B as Oe}from"./ButtonAdd-bb17596b.js";const E=T=>(Ve("data-v-a3576a1d"),T=T(),ke(),T),Ae={class:"q-py-sm table-container"},Ce={class:"row"},ze=E(()=>s("h6",{class:"title q-my-lg"},"Modelos de transformacion",-1)),De={class:"container-content"},Be={class:"container-table q-mt-md q-pa-md",rounded:""},Ne={class:"accions-td"},Ue={class:"accions-td"},Ee=E(()=>s("i",{class:"icon icon-check"},null,-1)),Re={class:"modal-activity"},Fe={class:"q-my-md text-center"},je={class:"row q-px-xl"},Le={class:"col-12"},We=E(()=>s("span",{class:"text-required q-pb-sm"},[k("Todos los campos con "),s("span",{class:"text-red"},"*"),k(" son obligatorios")],-1)),Ge={class:"row justify-center"},Qe={key:0,class:"spinner"},He={__name:"ModelTransformation",setup(T){const Z=pe(),w=_e(),S=n(""),u=n(!1),I=n(!0),b=n([]),M=n([]),R=n(),$=ge(),_=n(!1),F=K(()=>c.value==""||d.value==""||v.value==""?!0:_.value==!0),O=[o=>!!o||"Este campo es requerido"];let f=n(""),g=n("active"),c=n(""),d=n(""),v=n(""),A=n(""),C=n(""),z=n("");const j=n([{name:"id",label:"#",field:"id",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"name",label:"Nombre",field:"name",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"description",label:"Descripción",field:"description",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"unitvalue",label:"Valor unitario",field:"unitvalue",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"Acciones",label:"Acciones",field:"acciones",align:"center",sortable:!0,headerStyle:"font-size: var(--font-medium); font-weight: bold;",style:"font-size: var(--font-medium);"}]),ee=o=>{c.value=o},ae=o=>{d.value=o},oe=o=>{v.value=o},te=()=>{S.value="REGISTRAR MODELO",le(),I.value=!0,w.toggleModal()},le=()=>{A.value="",C.value="",z.value="",c.value="",d.value="",v.value=""},ne=o=>{S.value="EDITAR MODELO",I.value=!1,R.value=o._id,A.value=o.name,C.value=o.description,z.value=o.unitvalue,c.value=o.name,d.value=o.description,v.value=o.unitvalue,w.toggleModal()},p=(o,t)=>{Z.notify({type:o,message:t,position:"top"})},y=async()=>{b.value=[],M.value=[],u.value=!0;try{const{models:o}=await we(h.value);let t=1,x=1;o.forEach(m=>{m.status=m.status?"Inactivo":"Activo",m.status=="Activo"?(m.id=t++,b.value.push(m)):(m.id=x++,M.value.push(m))}),u.value=!1}catch{u.value=!1,p("negative","Ocurrió un error")}};async function se(){_.value=!0;try{await Te({name:c.value,description:d.value,unitvalue:v.value},h.value),_.value=!1,p("positive","Modelo de transformación registrado correctamente"),w.toggleModal(),b.value=[],y()}catch{_.value=!1,p("negative","Ocurrió un error, por favor verifique los datos")}}async function re(){_.value=!0;try{await xe({id:R.value,name:c.value,description:d.value,unitvalue:v.value},h.value),_.value=!1,p("positive","Modelo de transformación actualizado correctamente"),w.toggleModal(),b.value=[],y()}catch{_.value=!1,p("negative","Ocurrió un error, por favor verifique los datos")}c.value="",d.value="",v.value=""}async function ie(o){u.value=!0;try{await Se(o,h.value),p("positive","Modelo de transformación activado correctamente"),u.value=!1,b.value=[],M.value=[],y()}catch{u.value=!1,p("negative","Ocurrió un error")}}async function ue(o){u.value=!1;try{await Ie(o,h.value),u.value=!1,p("positive","Modelo de transformación desactivado correctamente"),b.value=[],M.value=[],y()}catch{u.value=!1,p("negative","Ocurrió un error")}}const h=K(()=>$.idSelected);return be(h,()=>{y()}),qe(()=>{y()}),(o,t)=>{const x=i("q-separator"),m=i("q-tab"),ce=i("q-tabs"),L=i("q-icon"),W=i("q-input"),D=i("q-tooltip"),B=i("q-btn"),G=i("q-btn-group"),Q=i("q-table"),H=i("q-tab-panel"),de=i("q-tab-panels"),ve=i("q-card"),fe=i("q-spinner-ios");return V(),P(he,null,[s("div",Ae,[s("div",Ce,[s("i",{class:"icon icon-backRoute q-pt-lg",onClick:t[0]||(t[0]=a=>o.$router.back())}),ze]),e(x,{class:"separator"}),s("div",De,[e(Oe,{onOnClick:te,label:"Registrar nuevo modelo"}),s("div",Be,[e(ve,null,{default:l(()=>[e(ce,{modelValue:r(g),"onUpdate:modelValue":t[1]||(t[1]=a=>q(g)?g.value=a:g=a),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:l(()=>[e(m,{name:"active",label:"Activos"}),e(m,{name:"inactive",label:"Inactivos"})]),_:1},8,["modelValue"]),e(x),e(de,{modelValue:r(g),"onUpdate:modelValue":t[4]||(t[4]=a=>q(g)?g.value=a:g=a),animated:""},{default:l(()=>[e(H,{name:"active"},{default:l(()=>[e(Q,{flat:"",bordered:"",title:"Modelos de transformación","row-key":"name",rows:b.value,columns:j.value,filter:r(f),loading:u.value,"rows-per-page-options":[5,10,20]},{"top-right":l(()=>[e(W,{borderless:"",dense:"",debounce:"300",modelValue:r(f),"onUpdate:modelValue":t[2]||(t[2]=a=>q(f)?f.value=a:f=a),placeholder:"Search"},{append:l(()=>[e(L,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-Acciones":l(a=>[s("td",Ne,[e(G,{class:"full-width full-height",outline:"",square:""},{default:l(()=>[e(B,{icon:"edit_note","text-color":"blue-10",class:"col text-bold q-pa-none icon-table",onClick:J=>ne(a.row)},{default:l(()=>[e(D,{class:"bg-indigo",offset:[10,10]},{default:l(()=>[k(" Editar ")]),_:1})]),_:2},1032,["onClick"]),e(B,{icon:"highlight_off","text-color":"blue-10",class:"col text-bold q-pa-none icon-table",onClick:J=>ue(a.row._id)},{default:l(()=>[e(D,{class:"bg-indigo",offset:[10,10]},{default:l(()=>[k(" Desactivar ")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)])]),_:1},8,["rows","columns","filter","loading"])]),_:1}),e(H,{name:"inactive"},{default:l(()=>[e(Q,{flat:"",bordered:"",title:"Modelos","row-key":"name",rows:M.value,columns:j.value,filter:r(f),loading:u.value,"rows-per-page-options":[5,10,20]},{"top-right":l(()=>[e(W,{borderless:"",dense:"",debounce:"300",modelValue:r(f),"onUpdate:modelValue":t[3]||(t[3]=a=>q(f)?f.value=a:f=a),placeholder:"Search"},{append:l(()=>[e(L,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-Acciones":l(a=>[s("td",Ue,[e(G,{class:"full-width full-height",outline:"",square:""},{default:l(()=>[e(B,{"text-color":"blue-10",class:"col q-pa-none",onClick:J=>ie(a.row._id)},{default:l(()=>[Ee,e(D,{class:"bg-indigo",offset:[10,10]},{default:l(()=>[k(" Activar ")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)])]),_:1},8,["rows","columns","filter","loading"])]),_:1})]),_:1},8,["modelValue"])]),_:1})])])]),r(w).modalIsOpen?(V(),N(ye,{key:0,class:"modal"},{default:l(()=>[s("div",Re,[s("h6",Fe,Me(S.value),1),s("div",je,[s("div",Le,[e(U,{label:"Nombre",required:!0,type:"text",ruless:O,value:r(A),modelValue:r(c),"onUpdate:modelValue":t[5]||(t[5]=a=>q(c)?c.value=a:c=a),onOnWrite:ee},null,8,["value","modelValue"]),e(U,{label:"Descripción",required:!0,type:"text",ruless:O,value:r(C),modelValue:r(d),"onUpdate:modelValue":t[6]||(t[6]=a=>q(d)?d.value=a:d=a),onOnWrite:ae},null,8,["value","modelValue"]),e(U,{class:"q-pb-xs",label:"Valor",required:!0,type:"text",ruless:O,value:r(z),modelValue:r(v),"onUpdate:modelValue":t[7]||(t[7]=a=>q(v)?v.value=a:v=a),onOnWrite:oe},null,8,["value","modelValue"]),We,s("div",Ge,[I.value?(V(),N(Y,{key:0,disable:r(F),onOnClick:se},null,8,["disable"])):(V(),N(Y,{key:1,disable:r(F),onOnClick:re},null,8,["disable"]))]),_.value?(V(),P("div",Qe,[e(fe,{color:"primary",size:"2.5em"})])):X("",!0)])])])]),_:1})):X("",!0)],64)}}},Pe=me(He,[["__scopeId","data-v-a3576a1d"]]);export{Pe as default};
