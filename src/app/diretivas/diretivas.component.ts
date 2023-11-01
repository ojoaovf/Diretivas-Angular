// diretivas.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent {
  tarefas: { descricao: string; concluida: boolean }[] = [
    { descricao: 'Pagar mensalidade da faculdade', concluida: true },
    { descricao: 'Pagar mensalidade da academia', concluida: true },
    { descricao: 'Beber 3 litros de água', concluida: true },
    { descricao: 'Passear com o cachorro', concluida: true },    
    { descricao: 'Dormir 6 horas por dia', concluida: false }, 
    { descricao: 'Comprar um suporte de monitor bi articulado', concluida: false },       
    { descricao: 'Ler "O Poder do Hábito"', concluida: false },    
    { descricao: 'Fazer atividade da faculdade', concluida: false },
    { descricao: 'Subir para pleno', concluida: false },
    { descricao: 'Volar com a minha ex', concluida: false }
  ];

  toggleConcluida(tarefa: { descricao: string; concluida: boolean }): void {
    tarefa.concluida = !tarefa.concluida;
  }
}
