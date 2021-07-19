import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateMainComponent } from './templates/template-main/template-main.component';

const routes: Routes = [
  {
    path: '', component: TemplateMainComponent
  },
  {
    path: 'monitoring', component: TemplateMainComponent , loadChildren: () => import('./modules/monitoring/monitoring.module').then(mo => mo.MonitoringModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
