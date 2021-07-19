import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-reset-bykom-systems',
  templateUrl: './reset-bykom-systems.component.html',
  styleUrls: ['./reset-bykom-systems.component.scss'],
  animations : [
    trigger('myAnimation',[
      state('on', style({
        color: '#3f51b5'
      })),
      state('off', style({
        color: 'black'
      })),
      transition('on <=> off', [
        animate('0.5s')
      ])
    ])
  ]
})
export class ResetBykomSystemsComponent implements OnInit {

  trafficLightState:boolean=true;
  processorState:boolean=true;
  bykomState:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  changeSystemState(system:string){
    switch (system) {
      case 'trafficLight':
        this.trafficLightState =!this.trafficLightState;
        break;

      case 'processor':
        this.processorState =!this.processorState;
        break;

        case 'bykom':
          this.bykomState =!this.bykomState;
        break;

      default:
        break;
    }
  }

}
