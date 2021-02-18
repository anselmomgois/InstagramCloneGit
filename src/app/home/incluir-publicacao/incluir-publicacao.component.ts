import { state } from '@angular/animations';
import { Progresso } from './../../progresso.service';
import { Bd } from './../../bd.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as firebase from 'firebase';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {
  
  public formulario:FormGroup = new FormGroup(
    {
      'titulo':new FormControl(null)
    }
    )
    
    public email:string
    private imagem:any
    
    public progressoPublicacao:string = 'pendente'
    public porcentagemUpload:number
    @Output() public atualizarTimeLine:EventEmitter<any> = new EventEmitter<any>()

    constructor(private bd:Bd, private progresso:Progresso) { }
    
    ngOnInit(): void {
      firebase.auth().onAuthStateChanged((user) => {
        this.email = user.email
      })
    }
    
    public publicar():void {
      
      this.bd.publicar({
        email: this.email,
        titulo: this.formulario.value.titulo,
        imagem:this.imagem[0]
      })
      
      let acompanhamentoUpload = interval(1500)
      let continua = new Subject()
      
      continua.next(true)
      
      acompanhamentoUpload
      .pipe(takeUntil(continua))
      .subscribe(() => {
        console.log(this.progresso.estado)
        console.log(this.progresso.status)
        this.progressoPublicacao = this.progresso.status
        this.porcentagemUpload = Math.round((this.progresso.estado.bytesTransferred/this.progresso.estado.totalBytes) * 100)

        if(this.progresso.status === 'concluido')
        {
          this.atualizarTimeLine.emit()
          continua.next(false)
        }
      }
      )
      
      
      
    }
    
    
    public preparaImagemUpload(event:Event):void {
      this.imagem = (<HTMLInputElement>event.target).files
    }
  }
  