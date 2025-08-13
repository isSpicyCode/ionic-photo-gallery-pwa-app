import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonGrid, IonImg, IonCol, IonRow } from '@ionic/angular/standalone';
import { Photos } from '../services/photo';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonGrid, IonImg, IonCol, IonRow]
})

export class Tab2Page {

  constructor(public photo: Photos) {addIcons({ ...allIcons });}

  addPhotoToGallery() {
    this.photo.addNewToGallery();
  }

  async ngOnInit() {
    await this.photo.loadSaved();
  }

}
