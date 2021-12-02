import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './layouts/header/header.component';
import { BreadcrumbModule } from './share/components/breadcrumb/breadcrumb.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    BreadcrumbModule
  ],
  // 外部需要使用的组件或模块需要导出
  exports: [
    HeaderComponent,
    BreadcrumbModule,
    BrowserModule
  ]
})
export class CoreModule {
  // 跳过自己，可选依赖
  constructor(@SkipSelf() @Optional() parentModule:CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule只能被AppModule引入');
    }
  }
 }
