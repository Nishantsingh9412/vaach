

document.querySelector("#menu-btn").addEventListener("click",wclick);
function wclick()
{
       document.querySelector("aside").style.display = 'block';
}
document.querySelector("#close-btn").addEventListener("click",hclick);
function hclick()
{
       document.querySelector("aside").style.display = 'none';
}
document.querySelector(".theme-toggler").addEventListener("click",() => {
       document.body.classList.toggle('dark-theme-variables');
      
})

