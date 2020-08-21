import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Professores',
  templateUrl: './Professores.component.html',
  styleUrls: ['./Professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';

  public professores = [
    { id: 1, nome: 'Barbara', disciplina: 'Eng Software'},
    { id: 2, nome: 'Ana', disciplina: 'Compiladores'},
    { id: 3, nome: 'Lucas', disciplina: 'Lógica'},
    { id: 4, nome: 'Alan', disciplina: 'Cálculo 1'},
    { id: 5, nome: 'Well', disciplina: 'IA'},
    { id: 6, nome: 'Natália', disciplina: 'Algebra Linear'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
