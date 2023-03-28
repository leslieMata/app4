import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
    public heroes : string [] = [ 'Arrow', 'Killer Frost', 'Super Girl', 'Aquaman', 'Wonder Woman' ];
    public usuarios:any =[
        {id:1, nombre:"Leslie Ithadui"}, {id:2, nombre:"Luisa Fernanda"}, {id:3, nombre:"Roldan"}
    ];
    public frutas :any =[{id:1, tipo:"Durazno"}, {id:2, tipo:"Uva"}, {id:3, tipo:"Cereza"}]
    public mayorEdad (edad:number) : boolean{
        if(edad>= 18){
          return true;
        }else{
          return false;
        }
    }
}
