import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

 listaUsuarios: Usuario[] = [];

  constructor(private srorageService: StorageService) { }

  async buscarUsuarios() {
    this.listaUsuarios = await this.srorageService.getAll();
  }

  ngOnInit() {
  }

}
