import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Professores',
  templateUrl: './Professores.component.html',
  styleUrls: ['./Professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';

  public professores = [
    { nome: 'Barbara'},
    { nome: 'Ana'},
    { nome: 'Lucas'},
    { nome: 'Alan'},
    { nome: 'Well'},
    { nome: 'Natália'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
