var appElement = document.querySelector("#app");

var buttonElement = document.createElement('button');
var inputElement = document.createElement('input');
var listElement = document.createElement('ul');

//texto dentro do botão.
buttonElement.appendChild(document.createTextNode('ADICIONAR'));

appElement.appendChild(inputElement);
appElement.appendChild(buttonElement);
appElement.appendChild(listElement);


inputElement.setAttribute('id', 'nome');
inputElement.setAttribute('type', 'text');
listElement.setAttribute('id', 'lista');

function add() { //esta função adicionará o nome na lista, depois de ser clicado no botão "Adicionar".

    var nomeNovo = inputElement.value; // recebe o valor digitado na Input
    var itemLista = document.createElement('li')

    itemLista.appendChild(document.createTextNode(nomeNovo));

    listElement.appendChild(itemLista);
    inputElement.value = ""; // limpa o conteudo da input.

    
}

buttonElement.onclick = function(){ // executa função do botão quando clicar.

    add();


}