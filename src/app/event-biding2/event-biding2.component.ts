import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-biding2',
  templateUrl: './event-biding2.component.html',
  styleUrls: ['./event-biding2.component.css']
})
export class EventBiding2Component implements OnInit {

  name:  string = 'Tyler McCollin'
  name2: string = 'Tyler McCollin'
  name3: string = 'Kirk McCollin'
  name4: string = 'Luke McCollin'
  name5: string = 'Marvel McCollin'
  name6: string = 'Brian McCollin'
  like:  string = ''
  conteudoAtual : string = '';
  conteudoSalvo : string = '';
  conteudoAtual8 : string = '';
  conteudoSalvo8: string = '';

  contagem = 0
  contagem2 = 0

  isMouseOver = false;

  // ----------------- Exemplo 1
  clickSave(): void{
    alert('Hello!');
  }

  // ----------------- Exemplo 2
  clickSave2(): void{
    this.name2 = "Tyler updated"
    setTimeout ( () => {
      this.name2 = 'Tyler McCollin'

    } , 3000);
  }

  // ----------------- Exemplo 3
  clickSave3(): void{
    alert('Kirk Franklin Clicked');
  }

  over(): void{
    this.name3 = 'Kirk Franklin Over';
  }

  // ----------------- Exemplo 4
  txtChange(): void{
    this.name4 = 'Original name has been changed.';
  }
  clickSave4(): void{
    alert('A new name has been saved.');
  }

  save() {
    console.log("Click");
  }

  // método:
  inc() {
    this.contagem++;
    this.name5 = "It was clicked " + this.contagem + " times";
  }

  inc2() {
    this.contagem2++;
    this.like = + this.contagem2 + " likes up to now";
  }

  onClick(){
    alert ('Botão clicado!');
  }

  onKeyup(event:KeyboardEvent){
    console.log(event);
    this.conteudoAtual = (<HTMLInputElement>event.target).value;
  }

  onSave(valor :string){
    this.conteudoSalvo = valor;
  }

  // ----------------- Exemplo 8
  onSave8(valor :string){
    this.conteudoSalvo8 = valor;
  }
  onKeyup8(event:KeyboardEvent){
    console.log(event);
    this.conteudoAtual8 = (<HTMLInputElement>event.target).value;
  }

  txtChange8(): void{
    this.name6 = this.conteudoAtual8;
  }

  clickSave8(): void{
    alert('A new name has been saved.');
  }

  // ----------------- Exemplo 9
  onMouseOver(){
    this.isMouseOver = !this.isMouseOver
  }

  constructor() { }

  ngOnInit(): void {
  }


}
