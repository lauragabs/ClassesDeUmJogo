class AventuraHeroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

    }

    atacar( ataque){
        this.ataque = ataque;
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let tipo = "mago";
let  aventureiro = new AventuraHeroi("Luis", 25, "mago");

if (tipo === "mago") {
    aventureiro.atacar("magia");
} else if (tipo === "guerreiro") {
    aventureiro.atacar("espada");
} else if (tipo === "monge") {
    aventureiro.atacar("artes marciais");
} else if (tipo === "ninja") {
    aventureiro.atacar("shuriken");
} else {
    console.log("tipo inválido");
}



