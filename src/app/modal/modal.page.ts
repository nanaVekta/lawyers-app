import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() name: string;
  @Input() picture: string;
  @Input() type: string;
  @Input() cases: string;
  @Input() rating: string;
  @Input() firm: string;
  @Input() experience: string;
  @Input() endorseement: string;
  @Input() about: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {

    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
