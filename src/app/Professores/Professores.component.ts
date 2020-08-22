import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/professor';
import { ProfessorService } from '../services/professor.service';
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
  public modo = 'post';

  public professores: Professor[];

  constructor(private fb: FormBuilder,
              private modalService: BsModalService,
              private professorService: ProfessorService) {
    this.criarForm();
   }

  ngOnInit() {
    this.carregarProfessores();
  }

  carregarProfessores() {
    this.professorService.getAll().subscribe(
      (professores: Professor[]) => {
        this.professores = professores;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  criarForm() {
    this.professorForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required]
    });
  }

  salvarProfessor(professor: Professor) {
    if (professor.id === 0) {
      this.modo = 'post';
    }
    else {
      this.modo = 'put';
    }

    this.professorService[this.modo](professor).subscribe(
      (p: Professor) => {
        console.log(p);
        this.carregarProfessores();
        this.voltar();
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  professorSubmit() {
    //console.log(this.professorForm.value);
    this.salvarProfessor(this.professorForm.value);
  }

  selecionaProfessor(professor: Professor) {
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  voltar() {
    this.professorSelecionado = null;
  }

  professorNovo() {
    this.professorSelecionado = new Professor();
    this.professorForm.patchValue(this.professorSelecionado);
  }

}
