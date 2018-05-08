import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  @Input()tareas:any
  constructor() {
   }

  ngOnInit() {
    
  }

}
