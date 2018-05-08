import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  titulo: string
  descripcion: string
  tarea: object
  hora: any

  @Output()onSend:EventEmitter<any>

  constructor() {
    this.hora = "11:30"
    this.tarea = {}
    this.onSend = new EventEmitter()
  }

  ngOnInit() {
  }
  handleClick() {
    this.tarea = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      hora: this.hora
    }
    console.log(this.tarea);
    this.onSend.emit(this.tarea)
  }
}
