## [Link do Projeto Aqui](https://andreailton.github.io/To-do-List/)  
[Clique Aqui](https://andreailton.github.io/To-do-List/)

# Lista de Tarefas

Este é um projeto de uma Lista de Tarefas desenvolvido com HTML, CSS e JavaScript. A aplicação permite criar, concluir e remover tarefas, além de armazenar os dados no navegador usando **localStorage**, para que as tarefas persistam mesmo ao recarregar a página.

## Visão Geral

A Lista de Tarefas é uma aplicação simples onde o usuário pode adicionar novas tarefas, marcar como concluídas, removê-las e visualizar as tarefas armazenadas. O layout é moderno, com uma interface intuitiva, utilizando um gradiente suave de fundo e animações visuais nos elementos de interação.

## Funcionalidades

- **Adicionar Tarefas**: O usuário pode digitar uma tarefa no campo de entrada e clicar no botão "Adicionar" para inseri-la na lista.
- **Concluir Tarefa**: O usuário pode clicar no ícone de "Check" ao lado de uma tarefa para marcá-la como concluída. A tarefa será destacada em uma cor diferente e riscada.
- **Remover Tarefa**: O usuário pode clicar no ícone de "Lixeira" para remover uma tarefa da lista.
- **Persistência com localStorage**: As tarefas são salvas automaticamente no localStorage, permitindo que a lista seja carregada mesmo após a página ser recarregada.
  
## Estrutura do Projeto

- **HTML**: Estrutura da página com um campo de entrada, botão de adicionar e uma lista de tarefas.
- **CSS**: Estilização responsiva, com gradiente de fundo, animações e transições suaves nos botões e na lista de tarefas.
- **JavaScript**: Manipulação dinâmica do DOM para adicionar, concluir e remover tarefas, além de armazenar e recuperar as tarefas do localStorage.

## Como Usar

1. Escreva a tarefa no campo de texto.
2. Clique no botão "Adicionar" para incluí-la na lista.
3. Clique no ícone de "Check" para marcar a tarefa como concluída.
4. Clique no ícone de "Lixeira" para remover a tarefa.
5. As tarefas são salvas automaticamente no localStorage do navegador.

## Tecnologias Utilizadas

- **HTML5**: Estrutura básica do projeto.
- **CSS3**: Estilização da página, incluindo gradiente de fundo e responsividade.
- **JavaScript**: Lógica para adicionar, remover e concluir tarefas, além da interação com o localStorage.
  
## Conceitos Aplicados

1. **Manipulação do DOM**: Usando métodos como `document.querySelector()` e `innerHTML` para manipular os elementos da página dinamicamente.
2. **Eventos do DOM**: Eventos de clique (`addEventListener`) para detectar as interações do usuário.
3. **LocalStorage**: Armazenamento das tarefas no navegador para que elas persistam após o recarregamento da página.
4. **Funções de Callback**: Utilização de funções como `concluiritem()` e `removeitem()` para interações específicas com cada tarefa.
5. **Array para Gerenciar Dados**: As tarefas são armazenadas em um array de objetos, facilitando a manipulação de dados.
