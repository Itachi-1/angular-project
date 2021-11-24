import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './layouts/header/header.component';
import { BreadcrumbModule } from './share/components/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BreadcrumbModule
  ],
  exports: [
    HeaderComponent,
    BreadcrumbModule
  ]
})
export class CoreModule { 
  constructor(@SkipSelf() @Optional() parentModule:CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule只能被AppModule引入');
    }
  }
 }
