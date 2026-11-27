const menu=document.querySelector(".menu");
const nav=document.querySelector(".header nav");
if(menu&&nav){
  const setMenu=(open)=>{nav.classList.toggle("open",open);menu.setAttribute("aria-expanded",String(open));menu.setAttribute("aria-label",open?"Close menu":"Open menu");};
  menu.addEventListener("click",()=>setMenu(!nav.classList.contains("open")));
  nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>setMenu(false)));
  document.addEventListener("keydown",event=>{if(event.key==="Escape")setMenu(false);});
}
const params=new URLSearchParams(location.search);
const select=document.querySelector("#service");
if(select&&params.has("service")){
  const wanted=params.get("service").toLowerCase();
  const option=[...select.options].find(item=>item.text.toLowerCase()===wanted);
  if(option)select.value=option.value;
}
const form=document.querySelector("#lead-form");
if(form){
  form.addEventListener("submit",event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    const status=document.querySelector("#success");
    if(status)status.textContent="Thanks — your details look complete. This demo is not connected to a booking system, so no enquiry has been sent.";
    form.reset();
  });
}