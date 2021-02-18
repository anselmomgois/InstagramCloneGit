import { Autenticacao } from './../../autenticacao.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)
  })

  constructor(private autenticacao:Autenticacao) { }

  @Output() public exibirPainel:EventEmitter<string> = new EventEmitter()

  ngOnInit(): void {
  }

  public EfetuarCadastro():void {
    this.exibirPainel.emit('cadastro')
  }

  public autenticar():void {
    this.autenticacao.autenticar(
      this.formulario.value.email,
      this.formulario.value.senha
    )
  }
}
