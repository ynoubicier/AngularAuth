import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.services';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;

  lastUpdate = new Date();

  /*lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  )*/

  appareils: any[] | undefined;

  constructor(private appareilService: AppareilService)
  {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }
  onAllumer() {
    this.appareilService.switchOnAll();
  }
  onEteindre() {
    this.appareilService.switchOffAll();
  }
}
