import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent implements OnInit {

  optionSelected: any = '';
  optionPicked: string = '';

  exampleCompTitle: string = 'Ej: Monitor Asus VP228HE 21.5" negro';
  exampleCompProdName: string = 'Ej: VP228HE';
  exampleCompCod: string = 'Ej: 90LM01K0-B04110';
  exampleBrand: string = 'Ej: Asus';
  examplePower: string = 'Ej: 13';
  exampleUrl: string = 'Ej: https://postimg.cc/MXccDPsJ';
  examplesCompTypes: any = [
    { prod: 'Aire acondicionado' },
    { prod: 'Computación' },
    { prod: 'Electrodomésticos hogar' },
    { prod: 'Electro movilidad' },
    { prod: 'Iluminación' },
    { prod: 'TV' },
    { prod: 'Videojuegos' },
    { prod: 'Otro' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.optionPicked = this.optionSelected;
    console.log(this.optionPicked);
}

  addComponent(newCompTitle: HTMLInputElement, newCompProdName: HTMLInputElement, newCompProdCode: HTMLInputElement, 
               newCompType: HTMLSelectElement, newCompPower: HTMLInputElement, newCompBrand: HTMLInputElement, newCompImgUrl: HTMLInputElement) {

    console.log('anadiendo componentes: ', newCompTitle.value, ', ', newCompProdName.value, ', ', newCompProdCode.value, ', ', newCompType.value, ', ', newCompPower.value, ', ',
    newCompBrand.value, ', ', newCompImgUrl.value );

    return false;
  }

}
