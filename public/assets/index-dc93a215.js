import{v as n,x as e}from"./index-1c270e42.js";const o=async()=>{try{const a=n(),{data:t}=await e.get("/maintenance/farm",{headers:{token:a}});return t}catch(a){return a}},c=async a=>{try{const t=n(),{data:r}=await e.post("/maintenance/farm/register",{name:a.name,address:a.address,owner:a.owner},{headers:{token:t}});return r}catch(t){return t}},i=async a=>{try{const t=n(),{data:r}=await e.put(`/maintenance/farm/update/${a.id}`,{name:a.name,address:a.address,owner:a.owner},{headers:{token:t}});return r}catch(t){return t}},d=async a=>{try{const t=n(),{data:r}=await e.put(`/maintenance/farm/inactive/${a}`,{},{headers:{token:t}});return r}catch(t){return t}},m=async a=>{try{const t=n(),{data:r}=await e.put(`/maintenance/farm/active/${a}`,{},{headers:{token:t}});return r}catch(t){return t}},u=async a=>{try{const t=n(),{data:r}=await e.get(`/maintenance/farm/${a}`,{headers:{token:t}});return r}catch(t){return t}};export{m as a,u as b,o as g,d as i,c as p,i as u};