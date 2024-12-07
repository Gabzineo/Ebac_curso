
function Pessoa(nome, sobrenome, datadenacimento) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.datadenacimento = datadenacimento;

}

function Lapide(nome, sobrenome, datadenacimento, datadefalcimento, causadamorte) {
    Pessoa.call(this, nome, sobrenome, datadenacimento);
    this.datadefalcimento = datadefalcimento;
    this.causadamorte = causadamorte;  

}


const JoãoLapide = new Lapide('João', 'Pedro', '18/01/2006', '13/04/2024', "Ataque Cardiaco");
const MariaLapide = new Lapide('Maria', 'Souza', '21/07/1988', '13/04/2003', "Atropelamento");
const GabrielLapide = new Lapide('Gabriel', 'Oliveira', '18/01/1990', '13/04/2014', "Hipotermia");

// Exibindo os resultados

console.log(JoãoLapide)
console.log(MariaLapide)
console.log(GabrielLapide)
