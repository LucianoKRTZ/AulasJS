/*console.log(`
###############-MENU-##################

1 - CADASTRA NOTA
2 - CADASTRA MEDIA 
3 - SAIR

`)

let menu = parseInt(prompt("Escolha uma opçao do menu"));

switch (menu) {
    case 1:
        cadastraNota()
        break;
    case 2:
        cadastraMedia()
        break;
    case 3:
        console.log("Obrigado por usar esta aplicação!");
    break;
    default:
        console.log("Opção Inválida");
        break;
}

function cadastraNota(){
    console.log("Cadastro de Notas");
}
function cadastraMedia(){
    console.log("Cadastro de Media");
}
*/

let num = parseInt(prompt("Digite um numero para dia da semana"));

switch (num) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda');
        break;
    case 3:
        console.log('Terça');
        break;
    case 4:
        console.log('Quarta');
        break;
    case 5:
        console.log('Quinta');
        break;
    case 6:
        console.log('Sexta');
        break;
    case 7:
        console.log('Sábado');
        break;

    default:
        console.log('Dia invalido')
        break;
}