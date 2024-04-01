 let toggle=document.getElementById("toggle");
 let pw = document.getElementById("password");
 
 toggle.addEventListener("click",(e)=>{
   const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
   password.setAttribute('type', type);
   
   if (type==="password"){
     toggle.setAttribute("class","fa fa-eye");
   }else{
     toggle.setAttribute("class","fa fa-eye-slash");
   }
 });
 
let login=document.getElementById("login");
let signup=document.getElementById("signup");

login.addEventListener("click",(e)=>{
  login.setAttribute("class","clicked");
  signup.removeAttribute("class","clicked");
  login.style.borderRadius="2.5vh";
  signup.borderRadius="0 2.5vh 2.5vh 0";
  login.style.boxShadow=" 0.3vw 0.3vh 0.2vh 0 rgba(0,0,0,0.5)";
  signup.style.boxShadow="none";
 
})
signup.addEventListener("click",(e)=>{
  login.removeAttribute("class","clicked");
  signup.setAttribute("class","clicked");
  signup.style.borderRadius="2.5vh";
  login.style.borderRadius="2.5vh 0 0 2.5vh";
  login.style.boxShadow="none";
  signup.style.boxShadow=" -0.3vw 0.3vh 0.2vh 0 rgba(0,0,0,0.5)"
})