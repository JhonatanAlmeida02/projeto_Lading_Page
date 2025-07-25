var SetaEsquerda = window.document.getElementById("setaesquerda")
var SetaDireita = window.document.getElementById("setadireita")
var bruna = window.document.getElementById("bruna")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")

function RolarParaDireita(){
    bruna.style = "display:none"
    samantha.style = "display:flex"
    leonardo.style = "display:flex"
    SetaEsquerda.style = "display:flex"
    SetaDireita.style = "display:none"
}

function RolarParaEsquerda(){
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    SetaEsquerda.style = "display:none"
    SetaDireita.style = "display:flex"
}



