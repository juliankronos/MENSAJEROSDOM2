import { AsignacionService } from './asignacion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignacion',
  templateUrl: './asignacion.component.html',
  styleUrls: ['./asignacion.component.scss']
})
export class ASIGNACIONComponent implements OnInit {
  UserList: any = [];
  constructor(private asignacionservice: AsignacionService){
    console.log('El componente se ha creado');
  }

  ngOnInit(): void {
    console.log('El componente se ha inicializado');
    this.asignacionservice.getAsignacion().subscribe((Response: any) => this.UserList = Response );
  }


}
