import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.services';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) {
    this.appareilName = '';
    this.appareilStatus = '';
    this.indexOfAppareil = 0;
    this.id = 0;
  }

  ngOnInit() {
  }

  getStatus()
  {
    return this.appareilStatus;
  }

  getColor(){
    if (this.appareilStatus === 'allume') {
      return 'green';
    } else if (this.appareilStatus === 'eteint') {
      return 'red';
    }
    return this.appareilStatus;
  }

  onSwitchOn() {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  onSwitchOff() {
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}
