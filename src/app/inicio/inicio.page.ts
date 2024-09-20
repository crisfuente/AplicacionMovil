import { Component } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  constructor(
    private navCtrl: NavController,
    private menuCtrl: MenuController 
  ) {}

  // Navegar a la página de asignaturas
  goToAsignaturas() {
    this.navCtrl.navigateForward('/asignaturas');
  }

  // Navegar a la página de asistencias
  goToAsistencia() {
    this.navCtrl.navigateForward('/asistencias');
  }

  // Navegar a la página de datos de usuario
  goToDatos() {
    this.navCtrl.navigateForward('/datos');
  }

  // retorno al login y cerrar sesión
  goToLogin() {
    this.navCtrl.navigateRoot('/login'); // Limpia el historial 
  }

  // Abrir el menú lateral
  openMenu() {
    this.menuCtrl.open(); 
  }
}
