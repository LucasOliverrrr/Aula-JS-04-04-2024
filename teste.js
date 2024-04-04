const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]
console.log(nomes);

const apenasComA = nomes.filter((n) => n.startsWith("A"))
console.log(apenasComA)

const res = nomes.map((nome) => nome.charAt(0))
console.log(res);