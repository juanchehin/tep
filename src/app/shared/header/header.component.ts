import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
// var $ = require( "jquery" );
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  public usuario: any;
  banderaOcultarSidebar = false;

  titulo = 'TEP';
  bandera_bazar = false;

  constructor( private authService: AuthService,
              public alertService: AlertService,
               private router: Router ) {
  }

  ngOnInit() {
  };

  logout() {
    this.authService.logout();
  }

  buscar( termino: string ) {

    if ( termino.length === 0  ) {
      return;
    }

    this.router.navigateByUrl(`/dashboard/buscar/${ termino }`);
  }


  habilitar_sidebar(  ) {

    this.alertService.bandera_sidebar = !this.alertService.bandera_sidebar;

  }
}
