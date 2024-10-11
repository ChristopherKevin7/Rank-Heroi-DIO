// Função para calcular o saldo e o nível do jogador
function calcularRank(vitorias, derrotas, nome) {
    // Cálculo do saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Definir o nível com base na quantidade de vitórias
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else if (saldoVitorias >= 101) {
        nivel = "Imortal";
    } else {
        nivel = "Nível inválido";
    }

    // Exibir a mensagem final
    console.log(`O Herói ${nome} tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

// Lista de heróis
let herois = [
    { "nome": "Kevin", "vitorias": 35, "derrotas": 10 },
    { "nome": "Lara", "vitorias": 75, "derrotas": 20 },
    { "nome": "Arthur", "vitorias": 25, "derrotas": 5 },
    { "nome": "Sophia", "vitorias": 55, "derrotas": 15 },
    { "nome": "Enzo", "vitorias": 95, "derrotas": 5 }
];

// Processar cada herói na lista
for(let i = 0; i < herois.length; i++){
    vitorias = herois[i].vitorias
    derrotas = herois[i].derrotas
    nome = herois[i].nome
    calcularRank(vitorias, derrotas, nome)
}