import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/professor';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-Professores',
  templateUrl: './Professores.component.html',
  styleUrls: ['./Professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public modalRef: BsModalRef;
  public titulo = 'Professores';
  public professorSelecionado: Professor;
  public professorForm: FormGroup;

  public professores = [
    { id: 1, nome: 'Barbara', disciplina: 'Eng Software'},
    { id: 2, nome: 'Ana', disciplina: 'Compiladores'},
    { id: 3, nome: 'Lucas', disciplina: 'Lógica'},
    { id: 4, nome: 'Alan', disciplina: 'Cálculo 1'},
    { id: 5, nome: 'Well', disciplina: 'IA'},
    { id: 6, nome: 'Natália', disciplina: 'Algebra Linear'}
  ];

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.criarForm();
   }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  criarForm() {
    this.professorForm = this.fb.group({
      nome: ['', Validators.required],
      disciplina: ['', Validators.required]
    });
  }

  professorSubmit() {
    console.log(this.professorForm.value);
  }
  selecionaProfessor(professor: Professor) {
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  voltar() {
    this.professorSelecionado = null;
  }


}
