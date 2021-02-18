import { Autenticacao } from './../../autenticacao.service';
import { Usuario } from './../usuario.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(public autenticacao:Autenticacao) { }

  @Output() public exibirLogin:EventEmitter<string> = new EventEmitter()

  public formulario:FormGroup = new FormGroup(
    {
      'email':new FormControl(null),
      'nome_completo':new FormControl(null),
      'nome_usuario': new FormControl(null),
      'senha': new FormControl(null)
    }
  )
  ngOnInit(): void {
  }

  public EfetuarLogin():void {
    
    this.exibirLogin.emit('login')
  }

  public cadastrarUsuario():void {

    let usuario:Usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha
    )
    this.autenticacao.cadastrarUsuario(usuario)
    .then(() => this.EfetuarLogin())
  }
}
