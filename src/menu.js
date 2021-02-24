var button = document.getElementById("btn-menu");
function showMenu(){ 
    var menu = document.getElementById("nav");
    if (menu.classList.contains("disable-menu")){
        menu.classList.remove("disable-menu");
        menu.classList.add("enable-menu")
    } else {
        menu.classList.remove("enable-menu");
        menu.classList.add("disable-menu")
    };
}
button.addEventListener("click", showMenu);