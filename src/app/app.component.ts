import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  arrayTareas:Array<object>
  constructor(){
    this.arrayTareas = []
  }

  handleOnSend($event){
    this.arrayTareas.push($event)
    console.log(this.arrayTareas); 
  }
}
