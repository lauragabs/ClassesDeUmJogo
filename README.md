
# 🛡️ Classes de um Jogo

O projeto consiste em criar uma classe genérica que represente um herói de uma aventura, com algumas propriedades e um método para realizar um ataque. O projeto visa reforçar os conhecimentos adquiridos, incluindo a implementação de classes e métodos.

## Especificação da Classe Heroi

A classe `AventuraHeroi` contém as seguintes propriedades:
- **nome**: O nome do herói.
- **idade**: A idade do herói.
- **tipo**: Define o tipo de herói (ex: guerreiro, mago, monge, ninja).

### Método Atacar

O método `atacar` exibe uma mensagem personalizada de ataque baseada no tipo de herói:
- **mago**: "usou magia"
- **guerreiro**: "usou espada"
- **monge**: "usou artes marciais"
- **ninja**: "usou shuriken"

## Funcionalidade

Ao criar uma instância de um herói com o nome, idade e tipo, o método `atacar` será chamado para exibir a seguinte mensagem:
```
O {tipo} atacou usando {ataque}
```

### Exemplo de Saída:
```bash
O mago atacou usando magia
O guerreiro atacou usando espada
O monge atacou usando artes marciais
O ninja atacou usando shuriken
```

##  Tecnologias Utilizadas
- **JavaScript**: Linguagem principal usada para implementar as classes e métodos.
- **Node.js**: Utilizado para rodar o projeto localmente e testar o código.

##  Conceitos Aplicados

- Variáveis
- Operadores
- Estruturas de controle (if/else)
- Funções
- Classes e Objetos