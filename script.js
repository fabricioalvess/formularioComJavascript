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