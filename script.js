let sliderElement=document.querySelector("#slider");
let buttonElement=document.querySelector("#button");

let sizePassword=document.querySelector("#valor");
let password=document.querySelector("#password");

let containerPassword=document.querySelector("#container.password");

let charset="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ0123456789@!"
let novasenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}
function generatePassword(){
    let pass="";
    
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i){
      pass += charset.charAt(Math.floor(Math.random() * n));
    }
    
    password.innerHTML = pass;
    novasenha=pass;
    containerPassword.classList.remove("hide")
    
  
}
function copypassword(){
  navigator.clipboard.writeText(novasenha);
  alert("Senha copiada com sucesso!")
}

