import { Component, OnInit } from '@angular/core';
import { Professor } from "../models/professor";

@Component({
  selector: 'app-Professores',
  templateUrl: './Professores.component.html',
  styleUrls: ['./Professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';
  public professorSelecionado: Professor;

  public professores = [
    { id: 1, nome: 'Barbara', disciplina: 'Eng Software'},
    { id: 2, nome: 'Ana', disciplina: 'Compiladores'},
    { id: 3, nome: 'Lucas', disciplina: 'Lógica'},
    { id: 4, nome: 'Alan', disciplina: 'Cálculo 1'},
    { id: 5, nome: 'Well', disciplina: 'IA'},
    { id: 6, nome: 'Natália', disciplina: 'Algebra Linear'}
  ];

  selecionaProfessor(professor: Professor) {
    this.professorSelecionado = professor;
  }

  voltar() {
    this.professorSelecionado = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
