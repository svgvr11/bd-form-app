import { Component, OnInit } from '@angular/core';
import { AddCompService } from '../../../services/add-comp.service';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent implements OnInit {

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
  typeSelected: string = '';

  constructor(
    public addCompService: AddCompService
  ) { }

  ngOnInit(): void {
  }

  captureCompType(variable: any) {
    // console.log(variable.target.value);
    this.typeSelected = variable.target.value;
}

  addComponent(newCompTitle: HTMLInputElement, newCompProdName: HTMLInputElement, newCompProdCode: HTMLInputElement, 
               newCompPower: HTMLInputElement, newCompBrand: HTMLInputElement, newCompImgUrl: HTMLInputElement) {

    // console.log('anadiendo componentes: ', newCompTitle.value, ', ', newCompProdName.value, ', ', newCompProdCode.value, ', ', this.typeSelected, ', ', newCompPower.value, ', ',
    // newCompBrand.value, ', ', newCompImgUrl.value );

    this.addCompService.addComponent({
      title: newCompTitle.value,
      nameProduct: newCompProdName.value,
      code: newCompProdCode.value,
      type: this.typeSelected,
      power: Number(newCompPower.value),
      brand: newCompBrand.value,
      urlImage: newCompImgUrl.value
    });

    newCompTitle.value = '';
    newCompProdName.value = '';
    newCompProdCode.value = '';
    this.typeSelected = '';
    newCompPower.value = '';
    newCompBrand.value = '';
    newCompImgUrl.value = '';

    newCompTitle.focus();
    return false;
  }

  cleanFields(newCompTitle: HTMLInputElement, newCompProdName: HTMLInputElement, newCompProdCode: HTMLInputElement, 
    newCompPower: HTMLInputElement, newCompBrand: HTMLInputElement, newCompImgUrl: HTMLInputElement) {
    newCompTitle.value = '';
    newCompProdName.value = '';
    newCompProdCode.value = '';
    newCompPower.value = '';
    newCompBrand.value = '';
    newCompImgUrl.value = '';
  }



}
