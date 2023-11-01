# Gerenciador de Tarefas

Este é um simples aplicativo construído para gerenciar tarefas, exibindo uma lista de tarefas concluídas e não concluídas. O aplicativo foi desenvolvido usando Angular e incorpora as seguintes funcionalidades:

## Estrutura da Tarefa

Cada "Tarefa" no aplicativo possui as seguintes propriedades:

- **Descrição**: Uma descrição da tarefa (tipo: string).
- **Concluída**: Um indicador booleano que representa se a tarefa foi concluída ou não.

## Componente da Lista de Tarefas

O componente que exibe a lista de tarefas utiliza um array denominado "tarefas". Este array contém no mínimo 5 tarefas, algumas concluídas e outras não concluídas. A lista é renderizada no HTML usando a diretiva *ngFor para iterar sobre o array "tarefas" e exibir cada tarefa em um elemento HTML `<li>` dentro de uma lista não ordenada.

### Estilo de Texto Tachado

A diretiva [ngStyle] é utilizada para aplicar um estilo de texto tachado (riscado) nas tarefas concluídas na lista. Isso é alcançado por meio de uma expressão que retorna um objeto com a propriedade "text-decoration" definida como "line-through" se a tarefa estiver concluída.

### Botão "Concluir"

Para cada tarefa na lista, há um botão "Concluir". Este botão alterna o valor da propriedade "concluida" da tarefa entre verdadeiro e falso quando clicado, proporcionando uma maneira fácil de marcar ou desmarcar a conclusão da tarefa.

## Como Executar o Aplicativo

Para executar o aplicativo, siga os seguintes passos:

1. Certifique-se de ter o Angular CLI instalado em seu ambiente.
2. Clone este repositório.
3. Navegue até o diretório do projeto.
4. Execute `ng serve` no terminal.
5. Abra seu navegador e acesse `http://localhost:4200/`.

# Autor
<p> JOÃO VICTOR 👋 <a href="https://www.linkedin.com/in/ojoaovictor/"> Entre em Contato!</a> </p>
