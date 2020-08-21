import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/aluno';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-Alunos',
  templateUrl: './Alunos.component.html',
  styleUrls: ['./Alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public alunoForm: FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno;
  public textoSimples: string;

  public alunos = [
    { id: 1, nome: 'Thiago', sobrenome: 'Romero', telefone: 32547894},
    { id: 2, nome: 'Joana', sobrenome: 'Maria', telefone: 78547894},
    { id: 3, nome: 'Maria', sobrenome: 'Antonia', telefone: 32997894},
    { id: 4, nome: 'Gabriel', sobrenome: 'Jose', telefone: 32546894},
    { id: 5, nome: 'Kelly', sobrenome: 'Priscila', telefone: 32666894},
    { id: 6, nome: 'Mari', sobrenome: 'Lo', telefone: 32547884},
    { id: 7, nome: 'Amanda', sobrenome: 'Joquina', telefone: 31147894}
  ];
  
  constructor(private fb: FormBuilder) {
    this.criarForm();
   }

  ngOnInit() {

  }

  criarForm() {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  alunoSubmit() {
    console.log(this.alunoForm.value);
  }

  selecionaAluno(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar() {
    this.alunoSelecionado = null;
  }


}
