import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor( 
    private sidebarService: SidebarService,
    public alertService: AlertService

     ) { }

  expandir_pagina: boolean | undefined = false;

  ngOnInit(): void {
    // customInitFunctions();
    // this.sidebarService.cargarMenu();
  }

}
