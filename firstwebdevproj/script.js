var settingsmenu=document.querySelector(".setting-menu")
var darkmode=document.getElementById("dark-mode")

function settingsMenuToggle()
{
    settingsmenu.classList.toggle("setting-menu-height")
}
darkmode.onclick=function(){
    document.classList.toggle("dark-mode-on");
}