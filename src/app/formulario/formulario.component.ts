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
  estado: boolean


  @Output()onSend:EventEmitter<any>

  constructor() {
    this.hora = new Date()
    this.tarea = {}
    this.estado = false
    this.onSend = new EventEmitter()
  }

  ngOnInit() {
  }
  handleClick() {
    this.tarea = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      hora: this.hora,
      estado: this.estado
    }
    console.log(this.tarea);
    this.onSend.emit(this.tarea)
    console.log(this.tarea);
    
  }
}
