import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItalicDirective } from './italic.directive';
import { DashPipe } from './dash.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItalicDirective,
    DashPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
