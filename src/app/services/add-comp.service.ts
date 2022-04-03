import { ThisReceiver } from '@angular/compiler';
import { Injectable, LOCALE_ID } from '@angular/core';

import { Components } from '../models/Components'

@Injectable({
  providedIn: 'root'
})
export class AddCompService {

  componentList: Components[];

  constructor() { 
    this.componentList = [
    //   { title: 'Monitor Asus', nameProduct: 'VP228HE', code: '90LM01K0-B04110',  type: 'Computación', power: 13, brand: 'Asus', urlImage: 'https://i.postimg.cc/dQ68Jgr3/VP228HE.jpg'},
    //   { title: 'Tefal Avanté Deluxe 2 Slice Toaster', nameProduct: 'Avanté Deluxe 2 Slice Toaster', code: 'TT7061002',  type: 'Electrodomésticos hogar', power: 1200, brand: 'Tefal', urlImage: 'https://i.postimg.cc/HxGW3gTG/Avant-Deluxe-2-Slice-Toaster.jpg'}
    ];
  }

  getComponents() {
    if (localStorage.getItem('listaComponentes') === null) {
      return this.componentList;
    } else {
      this.componentList = JSON.parse(localStorage.getItem('listaComponentes') || '{}');
      return this.componentList;
    }
    
  }

  addComponent(component: Components) {
    // this.componentList.push(component);
    let comps: Components[] = [];

    if (localStorage.getItem('listaComponentes') === null) {
      comps.push(component);
      localStorage.setItem('listaComponentes', JSON.stringify(comps));
    } else {
      comps = JSON.parse(localStorage.getItem('listaComponentes') || '{}');
      comps.push(component);
      localStorage.setItem('listaComponentes', JSON.stringify(comps));
    }
  }

  deleteComponent(component: Components) {
    for (let i = 0; i < this.componentList.length; i++) {
      if (component == this.componentList[i]) {
        this.componentList.splice(i, 1);
        localStorage.setItem('listaComponentes', JSON.stringify(this.componentList));
      }
    }
  }

}
