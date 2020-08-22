import { Component, OnInit, TemplateRef } from '@angular/core';
import { Aluno } from '../models/aluno';
import { AlunoService } from '../services/aluno.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-Alunos',
  templateUrl: './Alunos.component.html',
  styleUrls: ['./Alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public modalRef: BsModalRef;
  public alunoForm: FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno;
  public textoSimples: string;
  public modo = 'post';

  public alunos: Aluno[];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder,
              private modalService: BsModalService,
              private alunoService: AlunoService) {
    this.criarForm();
   }

  ngOnInit() {
    this.carregarAlunos();
  }

  carregarAlunos() {
    this.alunoService.getAll().subscribe(
      (alunos: Aluno[]) => {
        this.alunos = alunos;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }

  criarForm() {
    this.alunoForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  salvarAluno(aluno: Aluno) {
    if (aluno.id === 0) {
      this.modo = 'post';
    }
    else {
      this.modo = 'put';
    }

    this.alunoService[this.modo](aluno).subscribe(
      (a: Aluno) => {
        console.log(a);
        this.carregarAlunos();
        this.voltar();
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  alunoSubmit() {
    this.salvarAluno(this.alunoForm.value);
    //console.log(this.alunoForm.value);
  }

  selecionaAluno(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  alunoNovo() {
    this.alunoSelecionado = new Aluno();
    this.alunoForm.patchValue(this.alunoSelecionado);
  }

  voltar() {
    this.alunoSelecionado = null;
  }

  excluirAluno(id: number) {
    this.alunoService.delete(id).subscribe(
      (model: any) => {
        console.log(model);
        this.carregarAlunos();
        if (id === this.alunoSelecionado.id) {
          this.voltar();
        }
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }

}
