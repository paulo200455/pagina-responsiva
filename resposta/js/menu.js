var button = document.querySelector(".menu-button")
var menu = document.querySelector(".menu")
var fechar = document.querySelector("#fechar")
var comentario = document.querySelector(".Comentario")


button.addEventListener("click", function() {
     if(menu.style.display === "none"){
         menu.style.display = "flex"
         comentario.style.display = 'none'
     }else{
         menu.style.display = "none"
         comentario.style.display = 'flex'
     }
});


fechar.addEventListener("click", function() {
    if(menu.style.display === "none"){
        menu.style.display = "flex"
        comentario.style.display = 'none'
    }else{
        menu.style.display = "none"
        comentario.style.display = 'flex'
    }
});