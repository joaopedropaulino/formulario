/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Usuario } from '../models/Usuario';
import { StorageService } from '../services/storage.service';
import { FormBuilder , FormGroup, Validators} from'@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  formCadastro: FormGroup;
  usuario: Usuario = new Usuario();

  constructor(private formBuilder: FormBuilder, private storageService: StorageService, private route: Router) {
    this.formCadastro =  this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required,Validators.minLength(3)])],
      cpf:['', Validators.compose([Validators.required])],
      email:['', Validators.compose([Validators.required, Validators.email])],
      senha:['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])],
      confirmaSenha:['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])],
    });
  }

  ngOnInit(){
  }

  async salvarCadastro(){
    if(this.formCadastro.valid){
      this.usuario.nome = this.formCadastro.value.nome;
      this.usuario.cpf = this.formCadastro.value.cpf;
      this.usuario.email = this.formCadastro.value.email;
      this.usuario.senha = this.formCadastro.value.senha;
      this.storageService.set(this.usuario.email, this.usuario);
      this.route.navigateByUrl('/login');
    }else{
      alert('Formulário inválido! ');
    }
  }
}
