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
  // 外部需要使用的组件或模块需要导出
  exports: [
    HeaderComponent,
    BreadcrumbModule
  ]
})
export class CoreModule { 
  // 两个方法暂时不知道具体作用，跳过自己
  constructor(@SkipSelf() @Optional() parentModule:CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule只能被AppModule引入');
    }
  }
 }
