const btn = document.querySelector('#btn');

btn.addEventListener("click", (e)=> {
    if(btn.checked == true) {
        document.body.setAttribute("data-theme", "dark");
    }else{
        document.body.setAttribute("data-theme", "");
    }
})

function cambiar(){
    document.getElementById("who").innerHTML = "Hecho con JS"
}
document.getElementById("boton").onclick = function () {
    cambiar();
}