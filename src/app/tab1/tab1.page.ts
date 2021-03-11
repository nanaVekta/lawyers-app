import { ModalPage } from './../modal/modal.page';
import { Component } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  lawyers = [

    {
      name: "Ama Ampofo Esq",
      picture: "assets/lawyer2.jpg",
      type: "Criminal",
      cases: "300+",
      rating: "4.7",
      firm: "Barnes and Associates",
      experience: "4",
      endorseement: "200+",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex et."
    },
    {
      name: "Kobinah Appau Esq",
      picture: "assets/lawyer1.jpg",
      type: "Intellectual",
      cases: "700+",
      rating: "4.0",
      firm: "Appau Law",
      experience: "7",
      endorseement: "130+",
      about: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      name: "Micheal Nii Alottey Esq",
      picture: "assets/lawyer3.jpg",
      type: "Divorce",
      cases: "1000+",
      rating: "4.8",
      firm: "Allotey Firm",
      experience: "5",
      endorseement: "500+",
      about: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ]
  constructor(public modalCtrl: ModalController, private routerOutlet: IonRouterOutlet) {}

  async presentModal(data){
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      animated: true,
      componentProps: data
    });

    return await modal.present();
  }

}
