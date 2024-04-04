const nomes = ["Ana Maria", "Antonio", "ARodrigo", "Alex", "ACristina"]
console.log(nomes);

const apenasComA = nomes.filter((n) => n.startsWith("A"))
console.log(apenasComA)

const res = nomes.map((nome) => nome.charAt(0)) //0 é o posicionamento da letra
console.log(res);

const todosComecamComA = nomes.every((n) => n.startsWith("A"));
console.log(todosComecamComA);