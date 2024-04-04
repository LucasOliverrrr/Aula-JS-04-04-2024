/*
const nomes = ["Ana Maria", "Antonio", "ARodrigo", "Alex", "ACristina"]
console.log(nomes);

const apenasComA = nomes.filter((n) => n.startsWith("A"))
console.log(apenasComA)

const res = nomes.map((nome) => nome.charAt(0)) //0 é o posicionamento da letra
console.log(res);

const todosComecamComA = nomes.every((n) => n.startsWith("A"));
console.log(todosComecamComA);

const valores = [1,2,3,4];
const soma = valores.reduce((ac, v) => ac + v) //v = cada elemento de valor, ac = ta guardando 1,2,3,4
console.log(soma);
*/

let umaFuncao = function(){
    console.log("Fui armazenada em uma variável");
}

umaFuncao()

function f(funcao){
    funcao()
}

f(function(){console.log("Estou sendo passada para F")})

function g(){
    function outraFuncao(){
        console.log("Fui criada por g")
    }
    return outraFuncao
}
