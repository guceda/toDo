import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TareaComponent } from './tarea/tarea.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TareaComponent,
    ListaTareasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
