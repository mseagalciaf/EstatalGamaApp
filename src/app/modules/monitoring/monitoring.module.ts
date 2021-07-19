import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitoringRoutingModule } from './monitoring-routing.module';
import { MonitoringMembersComponent } from './components/monitoring-members/monitoring-members.component';
import { SnrComponent } from './components/snr/snr.component';
import { IssuesCentralComponent } from './components/issues-central/issues-central.component';
import { DayToDayComponent } from './components/day-to-day/day-to-day.component';
import { ResetBykomSystemsComponent } from './components/reset-bykom-systems/reset-bykom-systems.component';
import { LoyaltyPanicsComponent } from './components/loyalty-panics/loyalty-panics.component';
import { MaterialModule } from 'src/app/Design-Modules/material/material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MonitoringMembersComponent,
    SnrComponent,
    IssuesCentralComponent,
    DayToDayComponent,
    ResetBykomSystemsComponent,
    LoyaltyPanicsComponent
  ],
  imports: [
    CommonModule,
    MonitoringRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class MonitoringModule { }
