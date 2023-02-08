//formulario Box
document.getElementById("mostrar_opcao").onclick = function(){
    var campoSelect = document.getElementById("options");
    var indiceSelecionado = campoSelect.options.selectedIndex;
    var valorSelecionado = campoSelect.options[indiceSelecionado].innerHTML;
    document.getElementById("opcao_selecionada").innerHTML = valorSelecionado;
}

document.getElementById("mostrar_opcao2").onclick = function(){
    var valorSelecionado = document.getElementById("options2").value;
    document.getElementById("opcao_selecionada2").innerHTML = valorSelecionado;
    
}

//formulario Radio

document.getElementById("mostrar_radio").onclick = function(){
    var selecaoDeValor ;
    var Radio = document.getElementsByName("genero");

    for(var i = 0;i < Radio.length; i++){
        if(Radio[i].checked ){
            selecaoDeValor = Radio[i].value;
            break;
        }
    }
    document.getElementById("radio_selecionado").innerHTML= selecaoDeValor;
}

//check boxers

document.getElementById("mostrar_check").onclick = function(){

    document.getElementById("lista_selecionada").innerHTML ="";

    var check = document.getElementsByName("interesse");
    for(var y = 0; y < check.length; y++){

        if(check[y].checked){
            document.getElementById("lista_selecionada").innerHTML += "<li>"+ check[y].value + "</li>";
        }

    }

}