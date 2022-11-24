// FUNCTION DECLARATION
function nomeDaFuncao() {
    console.log('Entrou na função');
}

//nomeDaFuncao();

// FUNCTION EXPRESSION
const expressao = function () {
    console.log('Entrou na expressão');
}
//expressao();

// FUNCTION ARROW

const flecha = () =>
    console.log('Entrou na arrow'); {
}
//flecha()

//Function Generation

function* nomeGerador(){
    console.log('Entrou na Generation');
}
//nomeGerador()

//FUNCTION CONSTRUCTOR
const construcao = new Function('param1', 'param2', 'return param1 + param2');

console.log(construcao(10, 10));

obj = {
    nome: "Luciano",
    sobrenome: "Kratzer",
    cpf: "087.545.658-85"
}
function testeObj(objeto){
    console.log(objeto.nome);
}

testeObj(obj)