const dias = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
]

/* for(let index = 0; index < dias.length; index++){
    console.log(dias[index]);
} */

/* for(const key in dias){
    console.log(dias[key]);
} */

/* dias.forEach(function(dia, index){
    console.log(`o dia ${dia} tem a posição ${index}`);
}); */
// let pos = 0;
/* while(pos < dias.length){
    console.log(dias[pos]);
    pos++;
} */

/* const qntdVoltas = 5;
let voltaAtual = 6;

do {
    console.log(voltaAtual);
    voltaAtual++;
} while (voltaAtual <= qntdVoltas); */


/* let data = new Date();

let valor = document.querySelector("#valor");
valor.addEventListener('click', function(){
    console.log(this.getInnerHTML());
}) */
/* 
let dia ='';
for (let index = 0; index < dias.length; index++) {
    if(index === 3){
        break;
    }
    dia += dias[index]+'\n';
}
console.log(dia); */

/* 
nome :
    return 1+1; */
/* 
function miliseconds(x){
    if(isNaN(x)){
        return 'Não eh um numero'
    }
    return x * 1000;
}

console.log(miliseconds('1000')); */
/* 
let meuArray = [
    "valor 1",
    "valor 2",
    "valor 3"
]
let meuObj = [
    {
        nome : "valor 1"
    },
    {
        nome : "valor 2"
    },
    {
        nome : "valor 3"
    }
]

console.log(meuObj[2].nome);
 */

console.log(eval("2 + 2")); //calcula com strings

let carro = new Object();

carro.modelo = "Fiesta";
carro.ano = 2010;
carro.cor = "Verde";

console.log(Object.values(carro));

