import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteServicio } from '../../servicios/cliente.service';
import { Cliente } from 'src/app/modelo/cliente.model';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  
  isLoggedIn: boolean;
  loggedInUser: string;
  clientes: Cliente[];
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    consulta: '',
    email: '',
    telefono: 0
  }

  @ViewChild("clienteForm") clienteForm: NgForm;

  constructor(
    private clientesServicio: ClienteServicio,
    private flashMessages: FlashMessagesService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.clientesServicio.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    );

    this.loginService.getAuth().subscribe( auth => {
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      }
      else{
        this.isLoggedIn = false;
      }
    });
  }

  agregar({value, valid}: {value: Cliente, valid: boolean}){
    if(!valid){
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger', timeout: 4000
      });
    }
    else{
      //Agregar el nuevo cliente
      this.clientesServicio.agregarCliente(value);
      this.clienteForm.resetForm();

    }
    return false;
  } 
}
