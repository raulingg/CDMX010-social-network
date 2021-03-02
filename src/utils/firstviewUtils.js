

const button = document.getElementById("btnMenu");

function showMenu() {
  const menu = document.getElementById("menuOption");

  if (menu.classList.contains("disable-menu")) {
      menu.classList.remove('disable-menu');
      menu.classList.add('enable-menu');
  }
  else{
 
}

}


button.addEventListener("click", showMenu);
