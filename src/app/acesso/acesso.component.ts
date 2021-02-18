import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-baner', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
       style({opacity: 0, transform: 'translate(-160px,0)'}),
       animate('500ms 0s ease-in-out') 
      ])
    ]),
    trigger('animacao-login',[
      state('criado',style({
        opacity:1
      })),
      transition('void => criado', [
        style({opacity:0, transform: 'translate(160px,0)'}),
        animate('1500ms 0s ease-in-out', 
          keyframes([
            style({offset:0.15, opacity: 1, transform: 'translateX(0)'}),
            style({offset:0.86, opacity: 1, transform: 'translateX(0)'}),
            style({offset:0.88, opacity: 1, transform: 'translateY(-10px)'}),
            style({offset:0.90, opacity: 1, transform: 'translateY(10px)'}),
            style({offset:0.92, opacity: 1, transform: 'translateY(-10px)'}),
            style({offset:0.94, opacity: 1, transform: 'translateY(10px)'}),
            style({offset:0.96, opacity: 1, transform: 'translateY(-10px)'}),
            style({offset:0.98, opacity: 1, transform: 'translateY(10px)'}),
            style({offset:1, opacity: 1, transform: 'translateY(0)'})
          ])) 
      ])
    ])
  ]
})
export class AcessoComponent implements OnInit {

  constructor() { }

   public estadoBanner:string ='criado'
   public estadoLogin:string ='criado'

  public bolCadastro:boolean = false
  ngOnInit(): void {
  }

  public exibirPainel(event:string):void {
  

    if (event === 'cadastro')
    {
     this.bolCadastro = true;
    }
    else
    {
      this.bolCadastro = false;
    }
  }

  public inicioAnimacao():void {
    console.log('inicio')
  }

  public fimAnimacao():void {
    console.log('fim')
  }

}
