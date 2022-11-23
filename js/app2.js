/*
let v1 = 16;
let v2 = 15;


if(v1 == v2){
    console.log("True");

}else if(v1 > v2){
    console.log(`${v1} e maior que ${v2}`);
}else{
    console.log("False");
}
*/

//****************************************************************************************************************** */



let data = new Date();
let dia = data.getDay();

//console.log(`${data} dia ${dia}`)

if(dia == 0){
    console.log("Hoje eh domingo");
}else if(dia == 1){
    console.log("Hoje eh segunda!");

}else if(dia == 2){
    console.log("Hoje eh terça!");

}else if(dia == 3){
    console.log("Hoje eh quarta!");

}else if(dia == 4){
    console.log("Hoje eh quinta!");

}else if(dia == 5){
    console.log("Hoje eh sexta!");

}else{
    console.log("Hoje eh sabado!")
}


let aluno = prompt("Informe o nome do aluno! ");
let nota1 = parseFloat(prompt("Informe a primeira nota do aluno"));
let nota2 = parseFloat(prompt("Informe a segunda nota do aluno"));
let nota3 = parseFloat(prompt("Informe a terceira nota do aluno"));

let media = (nota1 + nota2 + nota3) / 3;


if(media >= 7){
    console.log(`Parabéns ${aluno} voce foi aprovado! Sua media é ${media}`);
}else if(media >= 6){
    console.log(`Caraca ${aluno} voce ficou de recuperação Sua media é ${media}`);
}else{
    console.log(`Baah ${aluno} voce esta reprovado! Sua media é ${media}`);
}