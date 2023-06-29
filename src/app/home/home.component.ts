import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  static arrCiudades: any;
  static ciudadesForm(arg0: {}): FormGroup<any> {
    throw new Error('Method not implemented.');
  }

  
  ciudadesForm: FormGroup

  isError = false

  arrCiudades: any[] = []
  

  constructor(private fb: FormBuilder) {
    this.ciudadesForm = this.fb.group({
      'ciudad': ['', Validators.required],
      'pais': ['', Validators.required],
      'mes': ['', Validators.required]
  })
}

  sendData() {
    
    let ciudadName = this.ciudadesForm.value.ciudad
    let paisName = this.ciudadesForm.value.pais
    let mes = this.ciudadesForm.value.mes
  
    if (ciudadName.length == 0 || paisName.length == 0|| mes.length == 0) {
      this.isError = true
      return
    }else {
      this.isError = false
    }

    this.arrCiudades.push({ id: this.arrCiudades.length, ciudad: ciudadName, pais: paisName, mes: mes })

    this.ciudadesForm.patchValue({ ciudad: "", pais: "", mes: "" })
  }

  deleteCiudad(id: number) {
    this.arrCiudades = this.arrCiudades.filter(g => g.id != id)
  }

}


