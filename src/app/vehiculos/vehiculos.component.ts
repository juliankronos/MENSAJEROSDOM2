import { Component, OnInit } from '@angular/core';
import { VehiculosService } from './vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VEHICULOSComponent implements OnInit {
 VehList: any = [];
 constructor(private vehiculosservice: VehiculosService){
  console.log('El componente se ha creado');
 }

 ngOnInit(): void {
  console.log('El componente se ha inicializado');
  this.vehiculosservice.getAsignacion().subscribe((Response: any) => this.VehList = Response );
}


}
