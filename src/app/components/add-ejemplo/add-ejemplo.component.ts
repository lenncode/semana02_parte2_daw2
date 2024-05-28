import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { AppMaterialModule } from '../../app.material.module';
import { Ejemplo } from '../../models/ejemplo.model';
import { Pais } from '../../models/pais.model';
import { EjemploService } from '../../services/ejemplo.service';
import { UtilService } from '../../services/util.service';
@Component({
  selector: 'app-add-ejemplo',
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule],
  templateUrl: './add-ejemplo.component.html',
  styleUrl: './add-ejemplo.component.css'
})
export class AddEjemploComponent {
  listPais: Pais[] = []
  objEjemplo: Ejemplo = {
    razonSocial: '',
    direccion: '',
    ruc: '',
    gerente: '',
    pais: {
      idPais: -1,
    }
  }

  constructor(private utilService: UtilService, private ejemploService: EjemploService) {

  }
  ngOnInit(): void {
    this.utilService.listaPais().subscribe(data => {
      this.listPais = data;
    });
  }
  registraEjemplo() {
    this.ejemploService.registraEjemplo(this.objEjemplo).subscribe(data => {
      console.log(data);
      Swal.fire({
        title: "Resultado",
        text: data.mensaje,
        icon: "info"
      });

    });
  }

}
