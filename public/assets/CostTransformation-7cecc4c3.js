import{v as I,x as z,_ as he,f as qe,y as we,g as r,z as Ce,h as te,A as ke,C as xe,r as d,o as O,c as ae,a as c,d as t,w as n,i,q as W,M as Ve,l as oe,F as Te,H as G,j as x,m as E,t as Se,k as H,G as Ae,B as se,p as Oe,e as Ee}from"./index-1c270e42.js";import{B as Ie}from"./ButtonAdd-bb17596b.js";const ze=async l=>{try{const u=I(),{data:s}=await z.get("/transformation/costtrans",{headers:{token:u,farm:l}});return s}catch(u){return u}},De=async(l,u)=>{try{const s=I(),{data:v}=await z.post("/transformation/costtrans/register",{name:l.name,description:l.description,lot:l.lot,cost:l.cost},{headers:{token:s,farm:u}});return v}catch(s){return s}},Be=async(l,u)=>{try{const s=I(),{data:v}=await z.put(`/transformation/costtrans/update/${l.id}`,{name:l.name,description:l.description,lot:l.lot,cost:l.cost},{headers:{token:s,farm:u}});return v}catch(s){return s}},Ne=async(l,u)=>{try{const s=I(),{data:v}=await z.put(`/transformation/costtrans/inactive/${l}`,{},{headers:{token:s,farm:u}});return v}catch(s){return s}},Me=async(l,u)=>{try{const s=I(),{data:v}=await z.put(`/transformation/costtrans/active/${l}`,{},{headers:{token:s,farm:u}});return v}catch(s){return s}};const Q=l=>(Oe("data-v-38cc9a33"),l=l(),Ee(),l),Re={class:"q-py-sm table-container"},Ue={class:"row"},Le=Q(()=>c("h6",{class:"title q-my-lg"},"Costos de transformación",-1)),Fe={class:"container-content"},$e={class:"container-table q-mt-md q-pa-md",rounded:""},je={class:"accions-td"},We={class:"accions-td"},Ge=Q(()=>c("i",{class:"icon icon-check"},null,-1)),He={class:"modal-transformation"},Qe={class:"q-my-md text-center"},Je={class:"row q-px-xl"},Ke={class:"col-12"},Pe=Q(()=>c("span",{class:"text-required q-pb-sm"},[E("Todos los campos con "),c("span",{class:"text-red"},"*"),E(" son obligatorios")],-1)),Xe={class:"row justify-center"},Ye={key:0,class:"spinner"},Ze={__name:"CostTransformation",setup(l){const u=qe(),s=we(),v=r(""),f=r(!1),M=r(!0),k=r([]),S=r([]),J=r(),le=Ce(),w=r(!1),K=te(()=>m.value==""||_.value==""||p.value==""?!0:w.value==!0),D=[e=>!!e||"Este campo es requerido"];let y=r(""),C=r("active"),m=r(""),p=r(""),_=r(""),g=r(""),R=r(""),U=r(""),L=r(""),F=r("");const P=r([{name:"id",label:"#",field:"id",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"name",label:"Nombre",field:"name",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"lot",label:"Lote",field:"lot",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"description",label:"Descripción",field:"description",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"cost",label:"Costo",field:"cost",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"Acciones",label:"Acciones",field:"acciones",align:"center",sortable:!0,headerStyle:"font-size: var(--font-medium); font-weight: bold;",style:"font-size: var(--font-medium);"}]),ne=e=>{m.value=e},re=e=>{p.value=e},ie=e=>{_.value=e},ce=e=>{g.value=e},ue=()=>{v.value="REGISTRAR COSTO",de(),M.value=!0,s.toggleModal()},de=()=>{R.value="",U.value="",L.value="",F.value="",m.value="",p.value="",_.value="",g.value=""},ve=e=>{v.value="EDITAR COSTO",M.value=!1,J.value=e._id,R.value=e.name,U.value=e.description,L.value=e.cost,m.value=e.name,p.value=e.description,_.value=e.cost,F.value=e.lot,g.value=e.lot,s.toggleModal()},h=(e,a)=>{u.notify({type:e,message:a,position:"top"})},V=async()=>{k.value=[],S.value=[],f.value=!0;try{const{costs:e}=await ze(q.value),{lots:a}=await G(q.value);let B=1,N=1;e.forEach(b=>{b.status=b.status?"Inactivo":"Activo";let T=b.lot;a.forEach(A=>{A._id==T&&(T=A.name)}),b.lot=T,b.status=="Activo"?(b.id=B++,k.value.push(b)):(b.id=N++,S.value.push(b))}),f.value=!1}catch{f.value=!1,h("negative","Ocurrió un error")}};async function fe(){const{lots:e}=await G(q.value);e.forEach(a=>{a.name==g.value&&(g.value=a._id)}),w.value=!0;try{await De({name:m.value,description:p.value,lot:g.value,cost:_.value},q.value),w.value=!1,h("positive","Costo de transformación registrado correctamente"),s.toggleModal(),k.value=[],V()}catch{w.value=!1,h("negative","Ocurrió un error, por favor verifique los datos")}}async function me(){const{lots:e}=await G(q.value);e.forEach(a=>{a.name==g.value&&(g.value=a._id)}),w.value=!0;try{await Be({id:J.value,name:m.value,description:p.value,lot:g.value,cost:_.value},q.value),w.value=!1,h("positive","Costo de transformación actualizado correctamente"),s.toggleModal(),k.value=[],V()}catch{w.value=!1,h("negative","Ocurrió un error, por favor verifique los datos")}m.value="",p.value="",g.value="",_.value=""}async function pe(e){f.value=!0;try{await Me(e,q.value),h("positive","Costo de transformación activado correctamente"),f.value=!1,k.value=[],S.value=[],V()}catch{f.value=!1,h("negative","Ocurrió un error")}}async function _e(e){f.value=!1;try{await Ne(e,q.value),f.value=!1,h("positive","Costo de transformación desactivado correctamente"),k.value=[],S.value=[],V()}catch{f.value=!1,h("negative","Ocurrió un error")}}const q=te(()=>le.idSelected);return ke(q,()=>{V()}),xe(()=>{V()}),(e,a)=>{const B=d("q-separator"),N=d("q-tab"),b=d("q-tabs"),T=d("q-icon"),A=d("q-input"),$=d("q-tooltip"),j=d("q-btn"),X=d("q-btn-group"),Y=d("q-table"),Z=d("q-tab-panel"),ge=d("q-tab-panels"),be=d("q-card"),ye=d("q-spinner-ios");return O(),ae(Te,null,[c("div",Re,[c("div",Ue,[c("i",{class:"icon icon-backRoute q-pt-lg",onClick:a[0]||(a[0]=o=>e.$router.back())}),Le]),t(B,{class:"separator"}),c("div",Fe,[t(Ie,{onOnClick:ue,label:"Registar costo de transformación"}),c("div",$e,[t(be,null,{default:n(()=>[t(b,{modelValue:i(C),"onUpdate:modelValue":a[1]||(a[1]=o=>x(C)?C.value=o:C=o),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:n(()=>[t(N,{name:"active",label:"Activos"}),t(N,{name:"inactive",label:"Inactivos"})]),_:1},8,["modelValue"]),t(B),t(ge,{modelValue:i(C),"onUpdate:modelValue":a[4]||(a[4]=o=>x(C)?C.value=o:C=o),animated:""},{default:n(()=>[t(Z,{name:"active"},{default:n(()=>[t(Y,{flat:"",bordered:"",title:"Costos de transformación","row-key":"name",rows:k.value,columns:P.value,filter:i(y),loading:f.value,"rows-per-page-options":[5,10,20]},{"top-right":n(()=>[t(A,{borderless:"",dense:"",debounce:"300",modelValue:i(y),"onUpdate:modelValue":a[2]||(a[2]=o=>x(y)?y.value=o:y=o),placeholder:"Search"},{append:n(()=>[t(T,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-Acciones":n(o=>[c("td",je,[t(X,{class:"full-width full-height",outline:"",square:""},{default:n(()=>[t(j,{icon:"edit_note","text-color":"blue-10",class:"col text-bold q-pa-none icon-table",onClick:ee=>ve(o.row)},{default:n(()=>[t($,{class:"bg-indigo",offset:[10,10]},{default:n(()=>[E(" Editar ")]),_:1})]),_:2},1032,["onClick"]),t(j,{icon:"highlight_off","text-color":"blue-10",class:"col text-bold q-pa-none icon-table",onClick:ee=>_e(o.row._id)},{default:n(()=>[t($,{class:"bg-indigo",offset:[10,10]},{default:n(()=>[E(" Desactivar ")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)])]),_:1},8,["rows","columns","filter","loading"])]),_:1}),t(Z,{name:"inactive"},{default:n(()=>[t(Y,{flat:"",bordered:"",title:"Costos de transformación","row-key":"name",rows:S.value,columns:P.value,filter:i(y),loading:f.value,"rows-per-page-options":[5,10,20]},{"top-right":n(()=>[t(A,{borderless:"",dense:"",debounce:"300",modelValue:i(y),"onUpdate:modelValue":a[3]||(a[3]=o=>x(y)?y.value=o:y=o),placeholder:"Search"},{append:n(()=>[t(T,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-Acciones":n(o=>[c("td",We,[t(X,{class:"full-width full-height",outline:"",square:""},{default:n(()=>[t(j,{"text-color":"blue-10",class:"col q-pa-none",onClick:ee=>pe(o.row._id)},{default:n(()=>[Ge,t($,{class:"bg-indigo",offset:[10,10]},{default:n(()=>[E(" Activar ")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)])]),_:1},8,["rows","columns","filter","loading"])]),_:1})]),_:1},8,["modelValue"])]),_:1})])])]),i(s).modalIsOpen?(O(),W(Ve,{key:0,class:"modal"},{default:n(()=>[c("div",He,[c("h6",Qe,Se(v.value),1),c("div",Je,[c("div",Ke,[t(H,{label:"Nombre",required:!0,type:"text",ruless:D,value:i(R),modelValue:i(m),"onUpdate:modelValue":a[5]||(a[5]=o=>x(m)?m.value=o:m=o),onOnWrite:ne},null,8,["value","modelValue"]),t(Ae,{class:"q-pb-lg",type:"lots",label:"Lote","v-model":i(g),required:!0,ruless:D,value:i(F),onOnSelect:ce},null,8,["v-model","value"]),t(H,{class:"q-mb-md",label:"Descripción",required:!0,type:"text",ruless:D,value:i(U),modelValue:i(p),"onUpdate:modelValue":a[6]||(a[6]=o=>x(p)?p.value=o:p=o),onOnWrite:re},null,8,["value","modelValue"]),t(H,{class:"q-pb-xs",label:"Costo",required:!0,type:"text",ruless:D,value:i(L),modelValue:i(_),"onUpdate:modelValue":a[7]||(a[7]=o=>x(_)?_.value=o:_=o),onOnWrite:ie},null,8,["value","modelValue"]),Pe,c("div",Xe,[M.value?(O(),W(se,{key:0,disable:i(K),onOnClick:fe},null,8,["disable"])):(O(),W(se,{key:1,disable:i(K),onOnClick:me},null,8,["disable"]))]),w.value?(O(),ae("div",Ye,[t(ye,{color:"primary",size:"2.5em"})])):oe("",!0)])])])]),_:1})):oe("",!0)],64)}}},at=he(Ze,[["__scopeId","data-v-38cc9a33"]]);export{at as default};
