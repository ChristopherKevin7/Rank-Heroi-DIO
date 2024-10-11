# Desafio de Lógica de Programação - Calculadora de Partidas Rankeadas

Este projeto faz parte do desafio **GFT Start #6 - Lógica de Programação** na plataforma da [DIO](https://www.dio.me/). O objetivo é implementar uma calculadora de partidas rankeadas que determina o saldo e o nível de um herói com base em suas vitórias e derrotas.

## Descrição

A aplicação simula o sistema de ranqueamento de um jogador, aplicando uma lógica de programação que define seu nível em função de seu saldo de vitórias. Cada herói na lista possui um número de vitórias e derrotas que impactam no seu saldo e, consequentemente, no nível atingido.

### Lógica do Nível

O nível do jogador é determinado pelo saldo de vitórias, calculado como a diferença entre vitórias e derrotas:

- **Ferro**: Saldo < 10
- **Bronze**: Saldo entre 11 e 20
- **Prata**: Saldo entre 21 e 50
- **Ouro**: Saldo entre 51 e 80
- **Diamante**: Saldo entre 81 e 90
- **Lendário**: Saldo entre 91 e 100
- **Imortal**: Saldo ≥ 101

### Tecnologias e Conceitos Utilizados

- **Variáveis**
- **Operadores aritméticos**
- **Estruturas de decisão** (`if`, `else if`, `else`)
- **Laço de repetição** (`for`)
- **Funções**

## Como Executar o Projeto

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
2. Clone o repositório para o seu ambiente local:
   ```bash
   git clone https://github.com/ChristopherKevin7/Rank-Heroi-DIO.git
3. Navegue até o diretório do projeto:
   ```bash
    cd Rank-Heroi-DIO
4. Execute o script com o comando:
    ```bash
    node main.js

## Tecnologias Utilizadas
- JavaScript
- Node.js (para execução do código)
