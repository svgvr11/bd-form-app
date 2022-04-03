import { Component, OnInit } from '@angular/core';

import { AddCompService } from '../../../services/add-comp.service';
import { Components } from '../../../models/Components';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {

  componentList: Components[] = [];


  constructor(
    public addCompService: AddCompService
  ) { }

  ngOnInit(): void {
    this.componentList = this.addCompService.getComponents();
  }

  deleteComponent(component: Components) {
    const message: string = 'Seguro que quieres eliminar ' + component.title + '?';
    if (confirm(message)) {
      this.addCompService.deleteComponent(component);
    }
  }

}
