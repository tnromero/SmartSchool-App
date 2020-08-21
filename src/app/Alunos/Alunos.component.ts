import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Alunos',
  templateUrl: './Alunos.component.html',
  styleUrls: ['./Alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = 'Alunos';

  public alunos = [
    { nome: 'Thiago'},
    { nome: 'Joana'},
    { nome: 'Maria'},
    { nome: 'Gabriel'},
    { nome: 'Kelly'},
    { nome: 'Mari'},
    { nome: 'Amanda'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
