import { NgModule } from '@angular/core';
import { CoreModule } from './core.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  // 模块化开发，其他的模块统一引入到这里来
  imports: [
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
