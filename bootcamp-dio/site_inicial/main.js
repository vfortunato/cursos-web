/*
var name = "Fulano";
var idade = 25;
var idade2 = 10;
//o js entende o tipo de variável, não é necessário indicar a variável

alert("Meu primeiro js"); //alert mostra um popup com a mensagem.

alert (name + " tem " + idade + " anos."); //para concatenar variável nome e idade com os textos entre parênteses "".

alert (idade + idade2) //como o js entende o type das variáveis, ao invés de concatenar, ele soma neste caso.

console.log(name);
console.log(idade);
console.log(name.replace("Fulano", "Ciclano"))
alert(name.replace("Fulano", "Ciclano").toUpperCase())*/

/*
>>> Array <<<

var lista = ["maçã", "pêra", "laranja"];
console.log(lista[1]);
lista.pop();
lista.push("uva");
console.log(lista)
console.log(lista.toString());

console.log(lista[0]);
console.log(lista.toString()[0]);

console.log(lista.join(" - "));*/

/*
>>> Dicionário <<<

var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);

>>> Lista de dicionários <<<

var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxo"}]
console.log(frutas[1].nome);
console.log(frutas);*/

/*
>>> Condicional

var idade = prompt('Informe a sua idade: ') //prompt solicita ao usuário os dados da variável.
if(idade >= 18){
    alert('Maior de idade');
}else{
    alert('Menor de idade');
}*/

/*
>>> Enquanto

var count = 0;
while (count <= 5){
    console.log(count);
    count ++; //mesmo que count += 1
}*/

/*
>>> For

var count;
for(count = 0; count <= 3; count ++){
    alert(count);
}*/

/*
>>> Data e Horas

var d = new Date ()
alert(d.getDay()); //retornando 0*
alert(d.getMonth()+1); //getMonth começa a contar do 0, por isso é necessário adicionar 1.
alert(d.getHours());*/

/* >>> Funções

function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5, 10)); */

function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML="<strong>Obrigado por clicar</strong>";
}

function redirecionar() {
    window.open("https://github.com/vfortunato/") //abre o link em outra aba
    //window.location.href = "https://github.com/vfortunato/"; //abre o link na mesma aba
}
/* OPÇÃO 1:
function trocar(){
    //alert("Obrigado!")
    document.getElementById("hover").innerHTML = "Obrigado por passar o mouse.";
}

function voltar(){
    document.getElementById("hover").innerHTML = "Passe o mouse aqui!";
}

OPÇÃO 2:*/
function trocar(element) {
    element.innerHTML = "Obrigado por passar o mouse.";
}

function voltar(element) {
    element.innerHTML = "Passe o mouse aqui!";
}

function function_change(element) {
    console.log(element.value)
}

