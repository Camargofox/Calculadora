function inserir(num) {
    document.querySelector(".tela").innerHTML += num;
}

function clean () {
    document.querySelector(".tela").innerHTML ="";
}

function back() {
    let tela = document.querySelector(".tela").innerHTML;
    document.querySelector("").innerHTML = tela.substring(0, tela.length - 1);
}

