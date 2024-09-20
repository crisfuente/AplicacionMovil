import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isModalOpen = false;
  isRecoveryModalOpen = false; 
  usuario: string = '';
  clave: string = '';
  errorMessage: string = ''; 

  // Recuperación de contraseña
  usuarioRecuperacion: string = '';
  nuevaClave: string = '';
  recoveryErrorMessage: string = ''; // Error para el modal de recuperación

  constructor() { }

  ngOnInit() {}

  // modal de login
  openLoginModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.errorMessage = ''; 
  }

  clearForm() {
    this.usuario = '';
    this.clave = '';
  }

  login() {
    // Validar que los campos no estén vacíos
    if (!this.usuario || !this.clave) {
      this.errorMessage = 'Por favor, complete todos los campos.';
      return;
    }

    // Validar credenciales
    if (this.usuario === 'Usuario1' && this.clave === 'MiClav3') {
      console.log('Inicio de sesión exitoso');
      this.closeModal();
    } else {
      this.errorMessage = 'Credenciales incorrectas.';
    }
  }

  // Métodos para la recuperación
  openRecoveryModal() {
    this.isRecoveryModalOpen = true;
  }

  closeRecoveryModal() {
    this.isRecoveryModalOpen = false;
    this.recoveryErrorMessage = ''; 
  }

  resetPassword() {
    // Validar que los campos no estén vacíos
    if (!this.usuarioRecuperacion || !this.nuevaClave) {
      this.recoveryErrorMessage = 'Por favor, complete todos los campos.';
      return;
    }

    console.log(`Usuario: ${this.usuarioRecuperacion}, Nueva clave: ${this.nuevaClave}`);
    this.closeRecoveryModal();
  }
}
