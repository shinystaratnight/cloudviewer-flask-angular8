import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-delay-tooltip',
  templateUrl: './delay-tooltip.component.html',
  styleUrls: ['./delay-tooltip.component.scss']
})
export class DelayTooltipComponent implements OnInit {

  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);
  
  constructor() { }

  ngOnInit() {
  }

}
