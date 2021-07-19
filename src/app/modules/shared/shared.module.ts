import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TitlePagesComponent } from './title-pages/title-pages.component';


@NgModule({
  declarations: [
    TitlePagesComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    TitlePagesComponent
  ]
})
export class SharedModule { }
