function inserir(num){
    tela = document.querySelector(".tela")

    // verifica se valor existente na tela é 0 para evitar que o zero fique à esquerda
    if(tela.innerHTML == 0) {
        tela.innerHTML = num;
    } else {
        tela.innerHTML += num;
    }
}

function clean () {
    document.querySelector(".tela").innerHTML ="";
}

function back() {
    let tela = document.querySelector(".tela").innerHTML;
    document.querySelector(".tela").innerHTML = tela.substring(0, tela.length - 1);
}

function somar() {
    let tela = document.querySelector(".tela").innerHTML;
    if(tela){
        document.querySelector(".tela").innerHTML = eval(tela);
    }else{
        document.querySelector(".tela").innerHTML = "Nenhum Comando..."
    }
}
