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

//data
function zero_a_esquerda(number){
    if(number >=0 && number <=9){
        var formatado_data = number.toString();
        formatado_data = "0"+ formatado_data;
    }else{
        var formatado_data = number.toString();
    }
    return formatado_data;
}
document.getElementById("mostrar_data").onclick = function(){

    var data_selecionada = document.getElementById("data_evento").value;
    var data_formatada = new Date(data_selecionada);
    var dia =zero_a_esquerda( data_formatada.getDate());
    var mes =zero_a_esquerda( data_formatada.getMonth());
    var ano =zero_a_esquerda( data_formatada.getFullYear());

    document.getElementById("resultado_data").innerHTML = dia + "/"+ mes + "/"+ ano
}

//box com onchange
document.getElementById("options_ensino").onchange = function(){
    var campoSelect = document.getElementById("options_ensino");
    var indiceSelecionado = campoSelect.options.selectedIndex;
    var valorSelecionado = campoSelect.options[indiceSelecionado].innerHTML;
    document.getElementById("ensino_selecionada").innerHTML = valorSelecionado;
    
}

//checkbox onchange



var check_onchange = document.getElementsByName("interesse2");

for(var ii=0;ii<check_onchange.length;ii++){
    check_onchange[ii].onchange = function(){
        document.getElementById("lista_compra").innerHTML="";
        for(var aa=0;aa<check_onchange.length;aa++){
            if(check_onchange[aa].checked){
                document.getElementById("lista_compra").innerHTML+="<li>"+ check_onchange[aa].value+"</li>" ;
            }
        }
    }
}
