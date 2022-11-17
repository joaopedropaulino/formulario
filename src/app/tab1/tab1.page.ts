import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Por favor coloque o email de recuperaçao',
      buttons: ['OK'],
      inputs: [
        {
          type:'email',
          placeholder: 'Email',
          attributes: {
            maxlength: 30,
          },
        },
      ],
    });

    await alert.present();
  }
}
