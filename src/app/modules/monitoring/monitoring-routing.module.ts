import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayToDayComponent } from './components/day-to-day/day-to-day.component';
import { IssuesCentralComponent } from './components/issues-central/issues-central.component';
import { LoyaltyPanicsComponent } from './components/loyalty-panics/loyalty-panics.component';
import { MonitoringMembersComponent } from './components/monitoring-members/monitoring-members.component';
import { ResetBykomSystemsComponent } from './components/reset-bykom-systems/reset-bykom-systems.component';
import { SnrComponent } from './components/snr/snr.component';

const routes: Routes = [
  {
    path: "snr", component: SnrComponent
  },
  {
    path: "loyalty-panics", component: LoyaltyPanicsComponent
  },
  {
    path: "day-to-day", component: DayToDayComponent
  },
  {
    path: "issues-central", component: IssuesCentralComponent
  },
  {
    path: "bykom-systems", component: ResetBykomSystemsComponent
  },
  {
    path: "monitoring-members", component: MonitoringMembersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitoringRoutingModule { }
